import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      auth?: any;
      client?: any;
    }
  }
}

export {}; 