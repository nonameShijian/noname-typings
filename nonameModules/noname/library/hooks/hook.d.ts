/**
 * @template {import("./interface.js").NonameHookType} HookType
 * @template {keyof HookType} Name
 * @extends {Array<HookType[Name]>}
 */
export class NonameHook<HookType extends import("./interface.js").NonameHookType, Name extends keyof HookType> extends Array<HookType[Name]> {
    /**
     *
     * @param {Name} name
     */
    constructor(name: Name);
    get name(): Name;
    #private;
}
