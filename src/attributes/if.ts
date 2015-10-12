import {Attribute, CustomAttribute, Model as DataModel, Binding} from "horcrux-core";
import {ModelStrategy, ModelStrategyStatic} from "./modelinterface";


@Attribute
class If extends CustomAttribute {
	
	protected commentNode: Comment;
	protected shown = false;
	
	protected init() {
		
		this.commentNode = document.createComment('');
		this.node.parentNode.insertBefore(this.commentNode, this.node);
		this.node.parentNode.removeChild(this.node);
		
		this.binding.onNewValue(value => {
			if(this.shown && !value) {
				this.node.parentNode.removeChild(this.node);
				this.shown = false;
			}
			else if(!this.shown && !!value) {
				this.commentNode.insertBefore(this.node, this.commentNode.nextSibling);
				this.shown = true;
				
			}
		}, false);
	}
	
	
}

export {If};