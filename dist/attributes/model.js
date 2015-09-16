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
            this.model.set(val);
        };
        return InputModel;
    })(horcrux_core_1.CustomAttribute);
    Model.register("INPUT", InputModel);
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZXMvbW9kZWwudHMiXSwibmFtZXMiOlsiTW9kZWwiLCJNb2RlbC5jb25zdHJ1Y3RvciIsIk1vZGVsLm5ld0pTVmFsdWUiLCJNb2RlbC5uZXdEb21WYWx1ZSIsIk1vZGVsLnJlZ2lzdGVyIiwiSW5wdXRNb2RlbCIsIklucHV0TW9kZWwuY29uc3RydWN0b3IiLCJJbnB1dE1vZGVsLm5ld0pTVmFsdWUiLCJJbnB1dE1vZGVsLm5ld0RPTVZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUVBO1FBQ21DQSx5QkFBZUE7UUFLakRBLGVBQVlBLElBQVNBLEVBQUVBLElBQVFBLEVBQUVBLEtBQWVBLEVBQUVBLElBQVdBO1lBQzVEQyxrQkFBTUEsSUFBSUEsRUFBRUEsSUFBSUEsRUFBRUEsS0FBS0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQUE7WUFDOUJBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLEtBQUtBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLEVBQUVBLElBQUlBLEVBQUVBLEtBQUtBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1FBQzVGQSxDQUFDQTtRQUVERCwwQkFBVUEsR0FBVkEsVUFBV0EsR0FBT0E7WUFDakJFLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLFVBQVVBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQy9CQSxDQUFDQTtRQUVERiwyQkFBV0EsR0FBWEEsVUFBWUEsR0FBT0E7WUFDbEJHLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLFdBQVdBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQ2hDQSxDQUFDQTtRQUVNSCxjQUFRQSxHQUFmQSxVQUFnQkEsSUFBV0EsRUFBRUEsS0FBNEJBO1lBQ3hESSxLQUFLQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQSxHQUFHQSxLQUFLQSxDQUFDQTtRQUM5Q0EsQ0FBQ0E7UUFuQk1KLGdCQUFVQSxHQUEyQ0EsRUFBRUEsQ0FBQ0E7UUFGaEVBO1lBQUNBLHdCQUFTQTtrQkFzQlRBO1FBQURBLFlBQUNBO0lBQURBLENBdEJBLEFBc0JDQSxFQXJCa0MsOEJBQWUsRUFxQmpEO0lBdEJEOzJCQXNCQyxDQUFBO0lBRUQ7UUFBeUJLLDhCQUFlQTtRQUl2Q0Esb0JBQVlBLElBQXFCQSxFQUFFQSxJQUFRQSxFQUFFQSxLQUFlQSxFQUFFQSxJQUFXQTtZQUoxRUMsaUJBdUJDQTtZQWxCQ0Esa0JBQU1BLElBQUlBLEVBQUVBLElBQUlBLEVBQUVBLEtBQUtBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1lBSHhCQSxZQUFPQSxHQUFHQSxLQUFLQSxDQUFDQTtZQUt2QkEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsVUFBQUEsS0FBS0E7Z0JBQ25CQSxLQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUM5QkEsQ0FBQ0EsQ0FBQUE7UUFDRkEsQ0FBQ0E7UUFFREQsK0JBQVVBLEdBQVZBLFVBQVdBLEdBQU9BO1lBQ2pCRSxFQUFFQSxDQUFBQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQTtnQkFDZkEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsS0FBS0EsQ0FBQ0E7WUFDdEJBLElBQUlBO2dCQUNnQkEsSUFBSUEsQ0FBQ0EsSUFBS0EsQ0FBQ0EsS0FBS0EsR0FBR0EsR0FBR0EsQ0FBQ0E7UUFDNUNBLENBQUNBO1FBRURGLGdDQUFXQSxHQUFYQSxVQUFZQSxHQUFPQTtZQUNsQkcsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0E7WUFDcEJBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQ3JCQSxDQUFDQTtRQUNGSCxpQkFBQ0E7SUFBREEsQ0F2QkEsQUF1QkNBLEVBdkJ3Qiw4QkFBZSxFQXVCdkM7SUFFRCxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQyIsImZpbGUiOiJhdHRyaWJ1dGVzL21vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdHRyaWJ1dGUsIEN1c3RvbUF0dHJpYnV0ZSwgTW9kZWwgYXMgRGF0YU1vZGVsfSBmcm9tIFwiaG9yY3J1eC1jb3JlXCI7XHJcblxyXG5AQXR0cmlidXRlXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGVsIGV4dGVuZHMgQ3VzdG9tQXR0cmlidXRlIHtcclxuXHRzdGF0aWMgc3RyYXRlZ2llczoge1t0eXBlOnN0cmluZ106dHlwZW9mIEN1c3RvbUF0dHJpYnV0ZX0gPSB7fTtcclxuXHRcclxuXHRwcml2YXRlIHN0cmF0ZWd5OkN1c3RvbUF0dHJpYnV0ZTtcclxuXHRcclxuXHRjb25zdHJ1Y3Rvcihub2RlOk5vZGUsIGF0dHI6YW55LCBtb2RlbDpEYXRhTW9kZWwsIHBhdGg6c3RyaW5nKSB7XHJcblx0XHRzdXBlcihub2RlLCBhdHRyLCBtb2RlbCwgcGF0aClcclxuXHRcdHRoaXMuc3RyYXRlZ3kgPSBuZXcgTW9kZWwuc3RyYXRlZ2llc1tub2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldKG5vZGUsIGF0dHIsIG1vZGVsLCBwYXRoKTtcclxuXHR9XHJcblx0XHJcblx0bmV3SlNWYWx1ZSh2YWw6YW55KTp2b2lkIHtcclxuXHRcdHRoaXMuc3RyYXRlZ3kubmV3SlNWYWx1ZSh2YWwpO1xyXG5cdH1cclxuXHRcclxuXHRuZXdEb21WYWx1ZSh2YWw6YW55KTp2b2lkIHtcclxuXHRcdHRoaXMuc3RyYXRlZ3kubmV3RE9NVmFsdWUodmFsKTtcclxuXHR9XHJcblx0XHJcblx0c3RhdGljIHJlZ2lzdGVyKHR5cGU6c3RyaW5nLCBtb2RlbDp0eXBlb2YgQ3VzdG9tQXR0cmlidXRlKTp2b2lkIHtcclxuXHRcdE1vZGVsLnN0cmF0ZWdpZXNbdHlwZS50b0xvd2VyQ2FzZSgpXSA9IG1vZGVsO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgSW5wdXRNb2RlbCBleHRlbmRzIEN1c3RvbUF0dHJpYnV0ZSB7XHJcblx0XHJcblx0cHJpdmF0ZSBwZW5kaW5nID0gZmFsc2U7XHJcblx0XHJcblx0Y29uc3RydWN0b3Iobm9kZTpIVE1MSW5wdXRFbGVtZW50LCBhdHRyOmFueSwgbW9kZWw6RGF0YU1vZGVsLCBwYXRoOnN0cmluZykge1xyXG5cdFx0c3VwZXIobm9kZSwgYXR0ciwgbW9kZWwsIHBhdGgpO1xyXG5cdFx0XHJcblx0XHRub2RlLm9ua2V5dXAgPSBldmVudCA9PiB7XHJcblx0XHRcdHRoaXMubmV3RE9NVmFsdWUobm9kZS52YWx1ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdG5ld0pTVmFsdWUodmFsOmFueSk6dm9pZCB7XHJcblx0XHRpZih0aGlzLnBlbmRpbmcpXHJcblx0XHRcdHRoaXMucGVuZGluZyA9IGZhbHNlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHQoPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5ub2RlKS52YWx1ZSA9IHZhbDtcclxuXHR9XHJcblx0XHJcblx0bmV3RE9NVmFsdWUodmFsOmFueSk6dm9pZCB7XHJcblx0XHR0aGlzLnBlbmRpbmcgPSB0cnVlO1xyXG5cdFx0dGhpcy5tb2RlbC5zZXQodmFsKTtcclxuXHR9XHJcbn1cclxuXHJcbk1vZGVsLnJlZ2lzdGVyKFwiSU5QVVRcIiwgSW5wdXRNb2RlbCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9