declare module 'eventsource' {
    interface EventSourceInitDict {
        withCredentials?: boolean;
        headers?: { [key: string]: string };
    }

    class ErrorEvent extends Event {
        error: Error;
        message: string;
    }

    class EventSource {
        constructor(url: string | URL, init?: EventSourceInitDict);
        onopen: (event: Event) => void;
        onmessage: (event: MessageEvent) => void;
        onerror: (event: ErrorEvent) => void;
        close(): void;
        readonly CONNECTING: number;
        readonly OPEN: number;
        readonly CLOSED: number;
        readonly readyState: number;
        readonly url: string;
    }

    export = EventSource;
    export { ErrorEvent, EventSourceInitDict };
} 