declare module "horcrux-base" {
export {	Model,	Repeat,	HcImport}
interface ModelStrategy {
    init(node: Node, binding: Binding): any;
}
interface ModelStrategyStatic {
    new (): ModelStrategy;
}
 class Model extends CustomAttribute {
    static strategies: {
        [type: string]: ModelStrategyStatic;
    };
    protected init(): void;
    static register(type: string, model: ModelStrategyStatic): void;
}
 class Repeat extends CustomAttribute {
    static ID: number;
    private ID;
    private commentNode;
    private observer;
    protected init(): void;
    protected createComment(): void;
    protected removeOriginalNode(): void;
    protected removeOldNodes(): void;
    protected insertNode(node: Node): void;
    protected clearObserver(): void;
    protected onNewValue(value: any): void;
    protected renderList(value: any): void;
}
 class HcImport extends CustomElement {
    created(): void;
    attached(): void;
}
}