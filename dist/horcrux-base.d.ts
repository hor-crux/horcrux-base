declare module "horcrux-base" {
export {	Model,	Repeat,	Import}
class Model extends CustomAttribute {
    static strategies: {
        [type: string]: typeof CustomAttribute;
    };
    private strategy;
    constructor(node: Node, attr: any, model: any, path: string);
    newJSValue(val: any): void;
    newDomValue(val: any): void;
    static register(type: string, model: typeof CustomAttribute): void;
}
class Repeat extends CustomAttribute {
    static ID: number;
    private ID;
    private commentNode;
    constructor(node: Node, attr: Attr, model: Model, path: string);
    protected createComment(): void;
    protected removeOriginalNode(): void;
    protected removeOldNodes(): void;
    protected insertNode(node: Node): void;
    newJSValue(value: any): void;
}
}