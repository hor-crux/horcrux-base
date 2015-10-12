var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", "horcrux-core"], function (require, exports, horcrux_core_1) {
    var Model = (function (_super) {
        __extends(Model, _super);
        function Model() {
            _super.apply(this, arguments);
        }
        Model.prototype.init = function () {
            new Model.strategies[this.node.nodeName.toLowerCase()]().init(this.node, this.binding);
        };
        Model.register = function (type, model) {
            Model.strategies[type.toLowerCase()] = model;
        };
        Model.strategies = {};
        Model = __decorate([
            horcrux_core_1.Attribute
        ], Model);
        return Model;
    })(horcrux_core_1.CustomAttribute);
    exports.Model = Model;
    var InputModel = (function () {
        function InputModel() {
        }
        InputModel.prototype.init = function (node, binding) {
            node.onkeyup = function (event) {
                binding.setNewValue(node.value);
            };
            binding.onNewValue(function (value) {
                node.value = value;
            }, false);
        };
        return InputModel;
    })();
    Model.register("INPUT", InputModel);
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZXMvbW9kZWwudHMiXSwibmFtZXMiOlsiTW9kZWwiLCJNb2RlbC5jb25zdHJ1Y3RvciIsIk1vZGVsLmluaXQiLCJNb2RlbC5yZWdpc3RlciIsIklucHV0TW9kZWwiLCJJbnB1dE1vZGVsLmNvbnN0cnVjdG9yIiwiSW5wdXRNb2RlbC5pbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUlBO1FBQ29CQSx5QkFBZUE7UUFEbkNBO1lBQ29CQyw4QkFBZUE7UUFXbkNBLENBQUNBO1FBUlVELG9CQUFJQSxHQUFkQTtZQUNDRSxJQUFJQSxLQUFLQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtRQUN4RkEsQ0FBQ0E7UUFHTUYsY0FBUUEsR0FBZkEsVUFBZ0JBLElBQVdBLEVBQUVBLEtBQXlCQTtZQUNyREcsS0FBS0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0EsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDOUNBLENBQUNBO1FBVE1ILGdCQUFVQSxHQUF3Q0EsRUFBRUEsQ0FBQ0E7UUFGN0RBO1lBQUNBLHdCQUFTQTtrQkFZVEE7UUFBREEsWUFBQ0E7SUFBREEsQ0FaQSxBQVlDQSxFQVhtQiw4QkFBZSxFQVdsQztJQWtCTyxhQUFLLFNBbEJaO0lBR0Q7UUFBQUk7UUFXQUMsQ0FBQ0E7UUFUQUQseUJBQUlBLEdBQUpBLFVBQUtBLElBQXFCQSxFQUFFQSxPQUFlQTtZQUMxQ0UsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsVUFBQUEsS0FBS0E7Z0JBQ25CQSxPQUFPQSxDQUFDQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUNqQ0EsQ0FBQ0EsQ0FBQUE7WUFFREEsT0FBT0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsVUFBQUEsS0FBS0E7Z0JBQ3ZCQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQTtZQUNwQkEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQUE7UUFDVkEsQ0FBQ0E7UUFDRkYsaUJBQUNBO0lBQURBLENBWEEsQUFXQ0EsSUFBQTtJQUVELEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBRXRCIiwiZmlsZSI6ImF0dHJpYnV0ZXMvbW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F0dHJpYnV0ZSwgQ3VzdG9tQXR0cmlidXRlLCBNb2RlbCBhcyBEYXRhTW9kZWwsIEJpbmRpbmd9IGZyb20gXCJob3JjcnV4LWNvcmVcIjtcclxuaW1wb3J0IHtNb2RlbFN0cmF0ZWd5LCBNb2RlbFN0cmF0ZWd5U3RhdGljfSBmcm9tIFwiLi9tb2RlbGludGVyZmFjZVwiO1xyXG5cclxuXHJcbkBBdHRyaWJ1dGVcclxuY2xhc3MgTW9kZWwgZXh0ZW5kcyBDdXN0b21BdHRyaWJ1dGUge1xyXG5cdHN0YXRpYyBzdHJhdGVnaWVzOiB7W3R5cGU6c3RyaW5nXTpNb2RlbFN0cmF0ZWd5U3RhdGljfSA9IHt9O1xyXG5cdFxyXG5cdHByb3RlY3RlZCBpbml0KCkge1xyXG5cdFx0bmV3IE1vZGVsLnN0cmF0ZWdpZXNbdGhpcy5ub2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldKCkuaW5pdCh0aGlzLm5vZGUsIHRoaXMuYmluZGluZyk7XHJcblx0fVxyXG5cdFxyXG5cdFxyXG5cdHN0YXRpYyByZWdpc3Rlcih0eXBlOnN0cmluZywgbW9kZWw6TW9kZWxTdHJhdGVneVN0YXRpYyk6dm9pZCB7XHJcblx0XHRNb2RlbC5zdHJhdGVnaWVzW3R5cGUudG9Mb3dlckNhc2UoKV0gPSBtb2RlbDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBJbnB1dE1vZGVsIGltcGxlbWVudHMgTW9kZWxTdHJhdGVneSB7XHJcblx0XHJcblx0aW5pdChub2RlOkhUTUxJbnB1dEVsZW1lbnQsIGJpbmRpbmc6QmluZGluZyk6IHZvaWQge1xyXG5cdFx0bm9kZS5vbmtleXVwID0gZXZlbnQgPT4ge1xyXG5cdFx0XHRiaW5kaW5nLnNldE5ld1ZhbHVlKG5vZGUudmFsdWUpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRiaW5kaW5nLm9uTmV3VmFsdWUodmFsdWUgPT4ge1xyXG5cdFx0XHRub2RlLnZhbHVlID0gdmFsdWU7XHJcblx0XHR9LCBmYWxzZSlcclxuXHR9XHJcbn1cclxuXHJcbk1vZGVsLnJlZ2lzdGVyKFwiSU5QVVRcIiwgSW5wdXRNb2RlbCk7XHJcblxyXG5leHBvcnQge01vZGVsfSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==