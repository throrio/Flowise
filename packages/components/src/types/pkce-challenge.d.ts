declare module 'pkce-challenge' {
    function pkceChallenge(length?: number): {
        code_verifier: string;
        code_challenge: string;
    };
    
    function verifyChallenge(code_verifier: string, code_challenge: string): boolean;
    
    export { pkceChallenge as default, verifyChallenge };
} 