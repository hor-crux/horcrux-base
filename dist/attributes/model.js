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
            this.pending = false;
        }
        InputModel.prototype.init = function (node, binding) {
            var _this = this;
            node.onkeyup = function (event) {
                _this.pending = true;
                binding.setNewValue(node.value);
            };
            binding.onNewValue(function (value) {
                if (!!_this.pending)
                    _this.pending = false;
                else
                    node.value = value;
            }, false);
        };
        return InputModel;
    })();
    Model.register("INPUT", InputModel);
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZXMvbW9kZWwudHMiXSwibmFtZXMiOlsiTW9kZWwiLCJNb2RlbC5jb25zdHJ1Y3RvciIsIk1vZGVsLmluaXQiLCJNb2RlbC5yZWdpc3RlciIsIklucHV0TW9kZWwiLCJJbnB1dE1vZGVsLmNvbnN0cnVjdG9yIiwiSW5wdXRNb2RlbC5pbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUlBO1FBQ29CQSx5QkFBZUE7UUFEbkNBO1lBQ29CQyw4QkFBZUE7UUFXbkNBLENBQUNBO1FBUlVELG9CQUFJQSxHQUFkQTtZQUNDRSxJQUFJQSxLQUFLQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtRQUN4RkEsQ0FBQ0E7UUFHTUYsY0FBUUEsR0FBZkEsVUFBZ0JBLElBQVdBLEVBQUVBLEtBQXlCQTtZQUNyREcsS0FBS0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0EsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDOUNBLENBQUNBO1FBVE1ILGdCQUFVQSxHQUF3Q0EsRUFBRUEsQ0FBQ0E7UUFGN0RBO1lBQUNBLHdCQUFTQTtrQkFZVEE7UUFBREEsWUFBQ0E7SUFBREEsQ0FaQSxBQVlDQSxFQVhtQiw4QkFBZSxFQVdsQztJQXdCTyxhQUFLLFNBeEJaO0lBR0Q7UUFBQUk7WUFFU0MsWUFBT0EsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFlekJBLENBQUNBO1FBYkFELHlCQUFJQSxHQUFKQSxVQUFLQSxJQUFxQkEsRUFBRUEsT0FBZUE7WUFBM0NFLGlCQVlDQTtZQVhBQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxVQUFBQSxLQUFLQTtnQkFDbkJBLEtBQUlBLENBQUNBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBO2dCQUNwQkEsT0FBT0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7WUFDakNBLENBQUNBLENBQUFBO1lBRURBLE9BQU9BLENBQUNBLFVBQVVBLENBQUNBLFVBQUFBLEtBQUtBO2dCQUN2QkEsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsS0FBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7b0JBQ2pCQSxLQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxLQUFLQSxDQUFDQTtnQkFDdEJBLElBQUlBO29CQUNIQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQTtZQUNyQkEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQUE7UUFDVkEsQ0FBQ0E7UUFDRkYsaUJBQUNBO0lBQURBLENBakJBLEFBaUJDQSxJQUFBO0lBRUQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFFdEIiLCJmaWxlIjoiYXR0cmlidXRlcy9tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXR0cmlidXRlLCBDdXN0b21BdHRyaWJ1dGUsIE1vZGVsIGFzIERhdGFNb2RlbCwgQmluZGluZ30gZnJvbSBcImhvcmNydXgtY29yZVwiO1xyXG5pbXBvcnQge01vZGVsU3RyYXRlZ3ksIE1vZGVsU3RyYXRlZ3lTdGF0aWN9IGZyb20gXCIuL21vZGVsaW50ZXJmYWNlXCI7XHJcblxyXG5cclxuQEF0dHJpYnV0ZVxyXG5jbGFzcyBNb2RlbCBleHRlbmRzIEN1c3RvbUF0dHJpYnV0ZSB7XHJcblx0c3RhdGljIHN0cmF0ZWdpZXM6IHtbdHlwZTpzdHJpbmddOk1vZGVsU3RyYXRlZ3lTdGF0aWN9ID0ge307XHJcblx0XHJcblx0cHJvdGVjdGVkIGluaXQoKSB7XHJcblx0XHRuZXcgTW9kZWwuc3RyYXRlZ2llc1t0aGlzLm5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0oKS5pbml0KHRoaXMubm9kZSwgdGhpcy5iaW5kaW5nKTtcclxuXHR9XHJcblx0XHJcblx0XHJcblx0c3RhdGljIHJlZ2lzdGVyKHR5cGU6c3RyaW5nLCBtb2RlbDpNb2RlbFN0cmF0ZWd5U3RhdGljKTp2b2lkIHtcclxuXHRcdE1vZGVsLnN0cmF0ZWdpZXNbdHlwZS50b0xvd2VyQ2FzZSgpXSA9IG1vZGVsO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbmNsYXNzIElucHV0TW9kZWwgaW1wbGVtZW50cyBNb2RlbFN0cmF0ZWd5IHtcclxuXHRcclxuXHRwcml2YXRlIHBlbmRpbmcgPSBmYWxzZTtcclxuXHRcclxuXHRpbml0KG5vZGU6SFRNTElucHV0RWxlbWVudCwgYmluZGluZzpCaW5kaW5nKTogdm9pZCB7XHJcblx0XHRub2RlLm9ua2V5dXAgPSBldmVudCA9PiB7XHJcblx0XHRcdHRoaXMucGVuZGluZyA9IHRydWU7XHJcblx0XHRcdGJpbmRpbmcuc2V0TmV3VmFsdWUobm9kZS52YWx1ZSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGJpbmRpbmcub25OZXdWYWx1ZSh2YWx1ZSA9PiB7XHJcblx0XHRcdGlmKCEhdGhpcy5wZW5kaW5nKVxyXG5cdFx0XHRcdHRoaXMucGVuZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0bm9kZS52YWx1ZSA9IHZhbHVlO1xyXG5cdFx0fSwgZmFsc2UpXHJcblx0fVxyXG59XHJcblxyXG5Nb2RlbC5yZWdpc3RlcihcIklOUFVUXCIsIElucHV0TW9kZWwpO1xyXG5cclxuZXhwb3J0IHtNb2RlbH0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=