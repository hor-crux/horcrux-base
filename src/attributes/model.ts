import {Attribute, CustomAttribute, Model as DataModel} from "horcrux-core";

@Attribute
export default class Model extends CustomAttribute {
	static strategies: {[type:string]:typeof CustomAttribute} = {};
	
	private strategy:CustomAttribute;
	
	constructor(node:Node, attr:any, model:DataModel, path:string) {
		super(node, attr, model, path)
		this.strategy = new Model.strategies[node.nodeName.toLowerCase()](node, attr, model, path);
	}
	
	newJSValue(val:any):void {
		this.strategy.newJSValue(val);
	}
	
	newDomValue(val:any):void {
		this.strategy.newDOMValue(val);
	}
	
	static register(type:string, model:typeof CustomAttribute):void {
		Model.strategies[type.toLowerCase()] = model;
	}
}

class InputModel extends CustomAttribute {
	
	private pending = false;
	
	constructor(node:HTMLInputElement, attr:any, model:DataModel, path:string) {
		super(node, attr, model, path);
		
		node.onkeyup = event => {
			this.newDOMValue(node.value);
		}
	}
	
	newJSValue(val:any):void {
		if(this.pending)
			this.pending = false;
		else
			(<HTMLInputElement>this.node).value = val;
	}
	
	newDOMValue(val:any):void {
		this.pending = true;
		this.model.set(val);
	}
}

Model.register("INPUT", InputModel);