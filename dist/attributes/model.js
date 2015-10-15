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
                else {
                    value =
                        value === undefined ? '' :
                            value === null ? '' :
                                value;
                    node.value = value;
                }
            });
        };
        return InputModel;
    })();
    Model.register("INPUT", InputModel);
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZXMvbW9kZWwudHMiXSwibmFtZXMiOlsiTW9kZWwiLCJNb2RlbC5jb25zdHJ1Y3RvciIsIk1vZGVsLmluaXQiLCJNb2RlbC5yZWdpc3RlciIsIklucHV0TW9kZWwiLCJJbnB1dE1vZGVsLmNvbnN0cnVjdG9yIiwiSW5wdXRNb2RlbC5pbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUlBO1FBQ29CQSx5QkFBZUE7UUFEbkNBO1lBQ29CQyw4QkFBZUE7UUFXbkNBLENBQUNBO1FBUlVELG9CQUFJQSxHQUFkQTtZQUNDRSxJQUFJQSxLQUFLQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtRQUN4RkEsQ0FBQ0E7UUFHTUYsY0FBUUEsR0FBZkEsVUFBZ0JBLElBQVdBLEVBQUVBLEtBQXlCQTtZQUNyREcsS0FBS0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0EsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDOUNBLENBQUNBO1FBVE1ILGdCQUFVQSxHQUF3Q0EsRUFBRUEsQ0FBQ0E7UUFGN0RBO1lBQUNBLHdCQUFTQTtrQkFZVEE7UUFBREEsWUFBQ0E7SUFBREEsQ0FaQSxBQVlDQSxFQVhtQiw4QkFBZSxFQVdsQztJQTZCTyxhQUFLLFNBN0JaO0lBR0Q7UUFBQUk7WUFFU0MsWUFBT0EsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFvQnpCQSxDQUFDQTtRQWxCQUQseUJBQUlBLEdBQUpBLFVBQUtBLElBQXFCQSxFQUFFQSxPQUFlQTtZQUEzQ0UsaUJBaUJDQTtZQWhCQUEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsVUFBQUEsS0FBS0E7Z0JBQ25CQSxLQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQTtnQkFDcEJBLE9BQU9BLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1lBQ2pDQSxDQUFDQSxDQUFBQTtZQUVEQSxPQUFPQSxDQUFDQSxVQUFVQSxDQUFDQSxVQUFBQSxLQUFLQTtnQkFDdkJBLEVBQUVBLENBQUFBLENBQUNBLENBQUNBLENBQUNBLEtBQUlBLENBQUNBLE9BQU9BLENBQUNBO29CQUNqQkEsS0FBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsS0FBS0EsQ0FBQ0E7Z0JBQ3RCQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFDTEEsS0FBS0E7d0JBQ0pBLEtBQUtBLEtBQUtBLFNBQVNBLEdBQUdBLEVBQUVBOzRCQUN4QkEsS0FBS0EsS0FBS0EsSUFBSUEsR0FBR0EsRUFBRUE7Z0NBQ25CQSxLQUFLQSxDQUFBQTtvQkFDTkEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0E7Z0JBQ3BCQSxDQUFDQTtZQUNGQSxDQUFDQSxDQUFDQSxDQUFBQTtRQUNIQSxDQUFDQTtRQUNGRixpQkFBQ0E7SUFBREEsQ0F0QkEsQUFzQkNBLElBQUE7SUFFRCxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztJQUV0QiIsImZpbGUiOiJhdHRyaWJ1dGVzL21vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdHRyaWJ1dGUsIEN1c3RvbUF0dHJpYnV0ZSwgTW9kZWwgYXMgRGF0YU1vZGVsLCBCaW5kaW5nfSBmcm9tIFwiaG9yY3J1eC1jb3JlXCI7XHJcbmltcG9ydCB7TW9kZWxTdHJhdGVneSwgTW9kZWxTdHJhdGVneVN0YXRpY30gZnJvbSBcIi4vbW9kZWxpbnRlcmZhY2VcIjtcclxuXHJcblxyXG5AQXR0cmlidXRlXHJcbmNsYXNzIE1vZGVsIGV4dGVuZHMgQ3VzdG9tQXR0cmlidXRlIHtcclxuXHRzdGF0aWMgc3RyYXRlZ2llczoge1t0eXBlOnN0cmluZ106TW9kZWxTdHJhdGVneVN0YXRpY30gPSB7fTtcclxuXHRcclxuXHRwcm90ZWN0ZWQgaW5pdCgpIHtcclxuXHRcdG5ldyBNb2RlbC5zdHJhdGVnaWVzW3RoaXMubm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSgpLmluaXQodGhpcy5ub2RlLCB0aGlzLmJpbmRpbmcpO1xyXG5cdH1cclxuXHRcclxuXHRcclxuXHRzdGF0aWMgcmVnaXN0ZXIodHlwZTpzdHJpbmcsIG1vZGVsOk1vZGVsU3RyYXRlZ3lTdGF0aWMpOnZvaWQge1xyXG5cdFx0TW9kZWwuc3RyYXRlZ2llc1t0eXBlLnRvTG93ZXJDYXNlKCldID0gbW9kZWw7XHJcblx0fVxyXG59XHJcblxyXG5cclxuY2xhc3MgSW5wdXRNb2RlbCBpbXBsZW1lbnRzIE1vZGVsU3RyYXRlZ3kge1xyXG5cdFxyXG5cdHByaXZhdGUgcGVuZGluZyA9IGZhbHNlO1xyXG5cdFxyXG5cdGluaXQobm9kZTpIVE1MSW5wdXRFbGVtZW50LCBiaW5kaW5nOkJpbmRpbmcpOiB2b2lkIHtcclxuXHRcdG5vZGUub25rZXl1cCA9IGV2ZW50ID0+IHtcclxuXHRcdFx0dGhpcy5wZW5kaW5nID0gdHJ1ZTtcclxuXHRcdFx0YmluZGluZy5zZXROZXdWYWx1ZShub2RlLnZhbHVlKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0YmluZGluZy5vbk5ld1ZhbHVlKHZhbHVlID0+IHtcclxuXHRcdFx0aWYoISF0aGlzLnBlbmRpbmcpXHJcblx0XHRcdFx0dGhpcy5wZW5kaW5nID0gZmFsc2U7XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHZhbHVlID1cclxuXHRcdFx0XHRcdHZhbHVlID09PSB1bmRlZmluZWQgPyAnJyA6XHJcblx0XHRcdFx0XHR2YWx1ZSA9PT0gbnVsbCA/ICcnIDpcclxuXHRcdFx0XHRcdHZhbHVlIFxyXG5cdFx0XHRcdG5vZGUudmFsdWUgPSB2YWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbk1vZGVsLnJlZ2lzdGVyKFwiSU5QVVRcIiwgSW5wdXRNb2RlbCk7XHJcblxyXG5leHBvcnQge01vZGVsfSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==