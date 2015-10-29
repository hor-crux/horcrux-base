import {Attribute, CustomAttribute, Model as DataModel, Binding} from "horcrux-core";
import {ModelStrategy, ModelStrategyStatic} from "./modelinterface";


@Attribute
class If extends CustomAttribute {
	
	protected commentNode: Comment;
	protected shown = false;
	protected negate = false;
	
	protected createBinding(): void {
		if(this.attr.value.trim()[0] == "!") {
			this.negate = true;
			this.attr.value = this.attr.value.trim().substring(1); 
		}
		super.createBinding();
	}
	
	protected init() {
		
		this.commentNode = document.createComment('');
		this.node.parentNode.insertBefore(this.commentNode, this.node);
		this.node.parentNode.removeChild(this.node);
		
		this.binding.onNewValue(this.onNewValue.bind(this), false);
	}
	
	protected onNewValue(value:any): void {
		if(this.shown && !value) {
			this.node.parentNode.removeChild(this.node);
			this.shown = false;
		}
		else if(!this.shown && !!value) {
			this.commentNode.parentNode.insertBefore(this.node, this.commentNode.nextSibling);
			this.shown = true;
			
		}
	}
	
	
}

export {If};