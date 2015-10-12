import {Binding} from "horcrux-core";

interface ModelStrategy {
	init(node:Node, binding: Binding): any;
}

interface ModelStrategyStatic {
	new(): ModelStrategy;
}

export {ModelStrategy, ModelStrategyStatic}