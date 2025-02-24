declare module 'eventsource' {
    export class EventSource {
        constructor(url: string, options?: EventSourceInit);
        
        readonly CONNECTING: number;
        readonly OPEN: number;
        readonly CLOSED: number;
        readonly url: string;
        readonly readyState: number;
        readonly withCredentials: boolean;
        
        onopen: (event: Event) => void;
        onmessage: (event: MessageEvent) => void;
        onerror: (event: ErrorEvent) => void;
        
        addEventListener(type: string, listener: (event: Event) => void): void;
        removeEventListener(type: string, listener: (event: Event) => void): void;
        dispatchEvent(event: Event): boolean;
        close(): void;
    }
    
    export interface EventSourceInit {
        withCredentials?: boolean;
        headers?: Record<string, string>;
        fetch?: (url: string | URL, init?: RequestInit) => Promise<Response>;
    }
    
    export interface ErrorEvent extends Event {
        code?: number;
        message?: string;
    }

    // Добавляем тип FetchLike для совместимости с SDK
    export type FetchLike = (url: string | URL, init?: RequestInit) => Promise<Response>;
} 