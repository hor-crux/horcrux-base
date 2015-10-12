import {Attribute, CustomAttribute, Model as DataModel, Binding} from "horcrux-core";
import {ModelStrategy, ModelStrategyStatic} from "./modelinterface";


@Attribute
class Model extends CustomAttribute {
	static strategies: {[type:string]:ModelStrategyStatic} = {};
	
	protected init() {
		new Model.strategies[this.node.nodeName.toLowerCase()]().init(this.node, this.binding);
	}
	
	
	static register(type:string, model:ModelStrategyStatic):void {
		Model.strategies[type.toLowerCase()] = model;
	}
}


class InputModel implements ModelStrategy {
	
	init(node:HTMLInputElement, binding:Binding): void {
		node.onkeyup = event => {
			binding.setNewValue(node.value);
		}
		
		binding.onNewValue(value => {
			node.value = value;
		})
	}
}

Model.register("INPUT", InputModel);

export {Model}