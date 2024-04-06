/**
 * @template T
 */
export class Channel<T> {
    /**
     * @type {"active" | "receiving" | "sending"}
     */
    status: "active" | "receiving" | "sending";
    /**
     * @type {PromiseResolve<T> | [T, PromiseResolve<void>] | null}
     */
    _buffer: ((value?: T | PromiseLike<T>) => void) | [T, (value?: void | PromiseLike<void>) => void];
    /**
     * 向该频道发送消息，在消息未被接受前将等待
     *
     * @param {T} value - 要发送的消息
     * @returns {Promise<void>}
     */
    send(value: T): Promise<void>;
    /**
     * 接收频道所发送的消息，若无消息发送则等待
     *
     * @returns {Promise<T>} 接收到的消息
     */
    receive(): Promise<T>;
}
