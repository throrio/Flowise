declare module 'express-rate-limit' {
    import { RequestHandler } from 'express';
    
    export interface Options {
        windowMs?: number;
        max?: number;
        message?: string | object;
        statusCode?: number;
        headers?: boolean;
        skipFailedRequests?: boolean;
        skipSuccessfulRequests?: boolean;
        keyGenerator?: (req: any) => string;
        handler?: (req: any, res: any, next: any) => void;
        onLimitReached?: (req: any, res: any, options: Options) => void;
        skip?: (req: any, res: any) => boolean;
        requestWasSuccessful?: (req: any, res: any) => boolean;
        store?: any;
    }
    
    export default function rateLimit(options?: Options): RequestHandler;
    
    export type RateLimitRequestHandler = RequestHandler;
} 