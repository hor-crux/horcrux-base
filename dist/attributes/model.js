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
        function Model(node, attr, model, path) {
            _super.call(this, node, attr, model, path);
            this.strategy = new Model.strategies[node.nodeName.toLowerCase()](node, attr, model, path);
        }
        Model.prototype.newJSValue = function (val) {
            this.strategy.newJSValue(val);
        };
        Model.prototype.newDomValue = function (val) {
            this.strategy.newDOMValue(val);
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Model;
    var InputModel = (function (_super) {
        __extends(InputModel, _super);
        function InputModel(node, attr, model, path) {
            var _this = this;
            _super.call(this, node, attr, model, path);
            this.pending = false;
            node.onkeyup = function (event) {
                _this.newDOMValue(node.value);
            };
        }
        InputModel.prototype.newJSValue = function (val) {
            if (this.pending)
                this.pending = false;
            else
                this.node.value = val;
        };
        InputModel.prototype.newDOMValue = function (val) {
            this.pending = true;
            this.model[this.path] = val;
        };
        return InputModel;
    })(horcrux_core_1.CustomAttribute);
    Model.register("INPUT", InputModel);
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZXMvbW9kZWwudHMiXSwibmFtZXMiOlsiTW9kZWwiLCJNb2RlbC5jb25zdHJ1Y3RvciIsIk1vZGVsLm5ld0pTVmFsdWUiLCJNb2RlbC5uZXdEb21WYWx1ZSIsIk1vZGVsLnJlZ2lzdGVyIiwiSW5wdXRNb2RlbCIsIklucHV0TW9kZWwuY29uc3RydWN0b3IiLCJJbnB1dE1vZGVsLm5ld0pTVmFsdWUiLCJJbnB1dE1vZGVsLm5ld0RPTVZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUVBO1FBQ21DQSx5QkFBZUE7UUFLakRBLGVBQVlBLElBQVNBLEVBQUVBLElBQVFBLEVBQUVBLEtBQVNBLEVBQUVBLElBQVdBO1lBQ3REQyxrQkFBTUEsSUFBSUEsRUFBRUEsSUFBSUEsRUFBRUEsS0FBS0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQUE7WUFDOUJBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLEtBQUtBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLEVBQUVBLElBQUlBLEVBQUVBLEtBQUtBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1FBQzVGQSxDQUFDQTtRQUVERCwwQkFBVUEsR0FBVkEsVUFBV0EsR0FBT0E7WUFDakJFLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLFVBQVVBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQy9CQSxDQUFDQTtRQUVERiwyQkFBV0EsR0FBWEEsVUFBWUEsR0FBT0E7WUFDbEJHLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLFdBQVdBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQ2hDQSxDQUFDQTtRQUVNSCxjQUFRQSxHQUFmQSxVQUFnQkEsSUFBV0EsRUFBRUEsS0FBNEJBO1lBQ3hESSxLQUFLQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQSxHQUFHQSxLQUFLQSxDQUFDQTtRQUM5Q0EsQ0FBQ0E7UUFuQk1KLGdCQUFVQSxHQUEyQ0EsRUFBRUEsQ0FBQ0E7UUFGaEVBO1lBQUNBLHdCQUFTQTtrQkFzQlRBO1FBQURBLFlBQUNBO0lBQURBLENBdEJBLEFBc0JDQSxFQXJCa0MsOEJBQWUsRUFxQmpEO0lBdEJEOzJCQXNCQyxDQUFBO0lBRUQ7UUFBeUJLLDhCQUFlQTtRQUl2Q0Esb0JBQVlBLElBQXFCQSxFQUFFQSxJQUFRQSxFQUFFQSxLQUFTQSxFQUFFQSxJQUFXQTtZQUpwRUMsaUJBdUJDQTtZQWxCQ0Esa0JBQU1BLElBQUlBLEVBQUVBLElBQUlBLEVBQUVBLEtBQUtBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1lBSHhCQSxZQUFPQSxHQUFHQSxLQUFLQSxDQUFDQTtZQUt2QkEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsVUFBQUEsS0FBS0E7Z0JBQ25CQSxLQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUM5QkEsQ0FBQ0EsQ0FBQUE7UUFDRkEsQ0FBQ0E7UUFFREQsK0JBQVVBLEdBQVZBLFVBQVdBLEdBQU9BO1lBQ2pCRSxFQUFFQSxDQUFBQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQTtnQkFDZkEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsS0FBS0EsQ0FBQ0E7WUFDdEJBLElBQUlBO2dCQUNnQkEsSUFBSUEsQ0FBQ0EsSUFBS0EsQ0FBQ0EsS0FBS0EsR0FBR0EsR0FBR0EsQ0FBQ0E7UUFDNUNBLENBQUNBO1FBRURGLGdDQUFXQSxHQUFYQSxVQUFZQSxHQUFPQTtZQUNsQkcsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0E7WUFDcEJBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLEdBQUdBLENBQUNBO1FBQzdCQSxDQUFDQTtRQUNGSCxpQkFBQ0E7SUFBREEsQ0F2QkEsQUF1QkNBLEVBdkJ3Qiw4QkFBZSxFQXVCdkM7SUFFRCxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQyIsImZpbGUiOiJhdHRyaWJ1dGVzL21vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdHRyaWJ1dGUsIEN1c3RvbUF0dHJpYnV0ZX0gZnJvbSBcImhvcmNydXgtY29yZVwiO1xyXG5cclxuQEF0dHJpYnV0ZVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RlbCBleHRlbmRzIEN1c3RvbUF0dHJpYnV0ZSB7XHJcblx0c3RhdGljIHN0cmF0ZWdpZXM6IHtbdHlwZTpzdHJpbmddOnR5cGVvZiBDdXN0b21BdHRyaWJ1dGV9ID0ge307XHJcblx0XHJcblx0cHJpdmF0ZSBzdHJhdGVneTpDdXN0b21BdHRyaWJ1dGU7XHJcblx0XHJcblx0Y29uc3RydWN0b3Iobm9kZTpOb2RlLCBhdHRyOmFueSwgbW9kZWw6YW55LCBwYXRoOnN0cmluZykge1xyXG5cdFx0c3VwZXIobm9kZSwgYXR0ciwgbW9kZWwsIHBhdGgpXHJcblx0XHR0aGlzLnN0cmF0ZWd5ID0gbmV3IE1vZGVsLnN0cmF0ZWdpZXNbbm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXShub2RlLCBhdHRyLCBtb2RlbCwgcGF0aCk7XHJcblx0fVxyXG5cdFxyXG5cdG5ld0pTVmFsdWUodmFsOmFueSk6dm9pZCB7XHJcblx0XHR0aGlzLnN0cmF0ZWd5Lm5ld0pTVmFsdWUodmFsKTtcclxuXHR9XHJcblx0XHJcblx0bmV3RG9tVmFsdWUodmFsOmFueSk6dm9pZCB7XHJcblx0XHR0aGlzLnN0cmF0ZWd5Lm5ld0RPTVZhbHVlKHZhbCk7XHJcblx0fVxyXG5cdFxyXG5cdHN0YXRpYyByZWdpc3Rlcih0eXBlOnN0cmluZywgbW9kZWw6dHlwZW9mIEN1c3RvbUF0dHJpYnV0ZSk6dm9pZCB7XHJcblx0XHRNb2RlbC5zdHJhdGVnaWVzW3R5cGUudG9Mb3dlckNhc2UoKV0gPSBtb2RlbDtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIElucHV0TW9kZWwgZXh0ZW5kcyBDdXN0b21BdHRyaWJ1dGUge1xyXG5cdFxyXG5cdHByaXZhdGUgcGVuZGluZyA9IGZhbHNlO1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKG5vZGU6SFRNTElucHV0RWxlbWVudCwgYXR0cjphbnksIG1vZGVsOmFueSwgcGF0aDpzdHJpbmcpIHtcclxuXHRcdHN1cGVyKG5vZGUsIGF0dHIsIG1vZGVsLCBwYXRoKTtcclxuXHRcdFxyXG5cdFx0bm9kZS5vbmtleXVwID0gZXZlbnQgPT4ge1xyXG5cdFx0XHR0aGlzLm5ld0RPTVZhbHVlKG5vZGUudmFsdWUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRuZXdKU1ZhbHVlKHZhbDphbnkpOnZvaWQge1xyXG5cdFx0aWYodGhpcy5wZW5kaW5nKVxyXG5cdFx0XHR0aGlzLnBlbmRpbmcgPSBmYWxzZTtcclxuXHRcdGVsc2VcclxuXHRcdFx0KDxIVE1MSW5wdXRFbGVtZW50PnRoaXMubm9kZSkudmFsdWUgPSB2YWw7XHJcblx0fVxyXG5cdFxyXG5cdG5ld0RPTVZhbHVlKHZhbDphbnkpOnZvaWQge1xyXG5cdFx0dGhpcy5wZW5kaW5nID0gdHJ1ZTtcclxuXHRcdHRoaXMubW9kZWxbdGhpcy5wYXRoXSA9IHZhbDtcclxuXHR9XHJcbn1cclxuXHJcbk1vZGVsLnJlZ2lzdGVyKFwiSU5QVVRcIiwgSW5wdXRNb2RlbCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9