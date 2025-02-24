import { ICommonObject, INode, INodeData, INodeParams } from '../../../src/Interface'
import { Client as MCPClient } from '../../../src/sdk/mcp-server-sdk/src/client'
import { SSEClientTransport } from '../../../src/sdk/mcp-server-sdk/src/client/sse'

class MyCustomMCPNode implements INode {
    label: string
    name: string
    type: string
    description: string
    version: number
    icon: string
    category: string
    baseClasses: string[]
    inputs: INodeParams[]

    constructor() {
        this.label = 'My MCP Client'
        this.name = 'myMcpClient'
        this.type = 'MyMCPClient'
        this.icon = 'mcp.svg'
        this.category = 'Tools'
        this.version = 1.0
        this.description = 'Interact with MCP API via TypeScript SDK'
        this.baseClasses = [this.type]
        this.inputs = [
            {
                label: 'MCP Server URL',
                name: 'mcpUrl',
                type: 'string',
                default: 'http://localhost:8000'
            }
        ]
    }

    async init(nodeData: INodeData): Promise<any> {
        const mcpUrl = nodeData.inputs?.mcpUrl as string
        const client = new MCPClient({
            name: "MyMCPClient",
            version: "1.0.0"
        })
        
        const transport = new SSEClientTransport(new URL(mcpUrl))
        await client.connect(transport)

        return {
            async listTools() {
                return await client.listTools()
            }
            // другие методы из SDK
        }
    }
}

export { MyCustomMCPNode as nodeClass }