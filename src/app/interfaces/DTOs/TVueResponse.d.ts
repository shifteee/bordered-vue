export declare type TVueResponse<T = unknown> = {
    data?: T
    error: boolean,
    reason?: {
        level: number,
        message: string,
        debug: string,
    }
}
