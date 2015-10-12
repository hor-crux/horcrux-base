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
    var If = (function (_super) {
        __extends(If, _super);
        function If() {
            _super.apply(this, arguments);
            this.shown = false;
        }
        If.prototype.init = function () {
            this.commentNode = document.createComment('');
            this.node.parentNode.insertBefore(this.commentNode, this.node);
            this.node.parentNode.removeChild(this.node);
            this.binding.onNewValue(this.onNewValue.bind(this), false);
        };
        If.prototype.onNewValue = function (value) {
            if (this.shown && !value) {
                this.node.parentNode.removeChild(this.node);
                this.shown = false;
            }
            else if (!this.shown && !!value) {
                this.commentNode.insertBefore(this.node, this.commentNode.nextSibling);
                this.shown = true;
            }
        };
        If = __decorate([
            horcrux_core_1.Attribute
        ], If);
        return If;
    })(horcrux_core_1.CustomAttribute);
    exports.If = If;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZXMvaWYudHMiXSwibmFtZXMiOlsiSWYiLCJJZi5jb25zdHJ1Y3RvciIsIklmLmluaXQiLCJJZi5vbk5ld1ZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUlBO1FBQ2lCQSxzQkFBZUE7UUFEaENBO1lBQ2lCQyw4QkFBZUE7WUFHckJBLFVBQUtBLEdBQUdBLEtBQUtBLENBQUNBO1FBd0J6QkEsQ0FBQ0E7UUF0QlVELGlCQUFJQSxHQUFkQTtZQUVDRSxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxRQUFRQSxDQUFDQSxhQUFhQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtZQUM5Q0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDL0RBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBRTVDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUM1REEsQ0FBQ0E7UUFFU0YsdUJBQVVBLEdBQXBCQSxVQUFxQkEsS0FBU0E7WUFDN0JHLEVBQUVBLENBQUFBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO2dCQUN6QkEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzVDQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQTtZQUNwQkEsQ0FBQ0E7WUFDREEsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2hDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQTtnQkFDdkVBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBO1lBRW5CQSxDQUFDQTtRQUNGQSxDQUFDQTtRQXpCRkg7WUFBQ0Esd0JBQVNBO2VBNEJUQTtRQUFEQSxTQUFDQTtJQUFEQSxDQTVCQSxBQTRCQ0EsRUEzQmdCLDhCQUFlLEVBMkIvQjtJQUVPLFVBQUUsTUFGVDtJQUVXIiwiZmlsZSI6ImF0dHJpYnV0ZXMvaWYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F0dHJpYnV0ZSwgQ3VzdG9tQXR0cmlidXRlLCBNb2RlbCBhcyBEYXRhTW9kZWwsIEJpbmRpbmd9IGZyb20gXCJob3JjcnV4LWNvcmVcIjtcclxuaW1wb3J0IHtNb2RlbFN0cmF0ZWd5LCBNb2RlbFN0cmF0ZWd5U3RhdGljfSBmcm9tIFwiLi9tb2RlbGludGVyZmFjZVwiO1xyXG5cclxuXHJcbkBBdHRyaWJ1dGVcclxuY2xhc3MgSWYgZXh0ZW5kcyBDdXN0b21BdHRyaWJ1dGUge1xyXG5cdFxyXG5cdHByb3RlY3RlZCBjb21tZW50Tm9kZTogQ29tbWVudDtcclxuXHRwcm90ZWN0ZWQgc2hvd24gPSBmYWxzZTtcclxuXHRcclxuXHRwcm90ZWN0ZWQgaW5pdCgpIHtcclxuXHRcdFxyXG5cdFx0dGhpcy5jb21tZW50Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpO1xyXG5cdFx0dGhpcy5ub2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuY29tbWVudE5vZGUsIHRoaXMubm9kZSk7XHJcblx0XHR0aGlzLm5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLm5vZGUpO1xyXG5cdFx0XHJcblx0XHR0aGlzLmJpbmRpbmcub25OZXdWYWx1ZSh0aGlzLm9uTmV3VmFsdWUuYmluZCh0aGlzKSwgZmFsc2UpO1xyXG5cdH1cclxuXHRcclxuXHRwcm90ZWN0ZWQgb25OZXdWYWx1ZSh2YWx1ZTphbnkpOiB2b2lkIHtcclxuXHRcdGlmKHRoaXMuc2hvd24gJiYgIXZhbHVlKSB7XHJcblx0XHRcdHRoaXMubm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMubm9kZSk7XHJcblx0XHRcdHRoaXMuc2hvd24gPSBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYoIXRoaXMuc2hvd24gJiYgISF2YWx1ZSkge1xyXG5cdFx0XHR0aGlzLmNvbW1lbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLm5vZGUsIHRoaXMuY29tbWVudE5vZGUubmV4dFNpYmxpbmcpO1xyXG5cdFx0XHR0aGlzLnNob3duID0gdHJ1ZTtcclxuXHRcdFx0XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdFxyXG59XHJcblxyXG5leHBvcnQge0lmfTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=