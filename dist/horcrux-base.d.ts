declare module "horcrux-base" {
export {	Model,	Repeat,	HcImport,	If}
import {Binding, CustomAttribute, CustomElement} from "horcrux-core"
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
    static precedence: number;
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
 class If extends CustomAttribute {
    protected commentNode: Comment;
    protected shown: boolean;
    protected negate: boolean;
    protected createBinding(): void;
    protected init(): void;
    protected onNewValue(value: any): void;
}
 class HcImport extends CustomElement {
    static pending: {};
    static import(element: HcImport, src: string): Promise<any>;
    created(): void;
}
}