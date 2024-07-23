export class GNC {
    /**
	 * @template {GeneratorFunction} T
	 * @param {T} fn
	 * @returns { (...args: Parameters<T>) => Promise<ReturnType<T>> }
	 */
    of<T extends GeneratorFunction>(fn: T): (...args: Parameters<T>) => Promise<ReturnType<T>>;
    is: Is;
}
export let gnc: GNC;
export function setGNC(instance?: InstanceType<typeof GNC>): void;
import { GeneratorFunction } from "../util/index.js";
import { Is } from "./is.js";
