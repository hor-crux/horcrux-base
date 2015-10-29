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
            this.negate = false;
        }
        If.prototype.createBinding = function () {
            var negation = !!this.attr.value.match(/\s*\{\{\s*!/);
            if (negation) {
                this.negate = true;
                this.attr.value = this.attr.value.replace(/\s*\{\{\s*!/, "{{");
            }
            _super.prototype.createBinding.call(this);
        };
        If.prototype.init = function () {
            this.commentNode = document.createComment('');
            this.node.parentNode.insertBefore(this.commentNode, this.node);
            this.node.parentNode.removeChild(this.node);
            this.binding.onNewValue(this.onNewValue.bind(this), false);
        };
        If.prototype.onNewValue = function (value) {
            if (this.negate)
                value = !value;
            if (this.shown && !value) {
                this.node.parentNode.removeChild(this.node);
                this.shown = false;
            }
            else if (!this.shown && !!value) {
                this.commentNode.parentNode.insertBefore(this.node, this.commentNode.nextSibling);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZXMvaWYudHMiXSwibmFtZXMiOlsiSWYiLCJJZi5jb25zdHJ1Y3RvciIsIklmLmNyZWF0ZUJpbmRpbmciLCJJZi5pbml0IiwiSWYub25OZXdWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFJQTtRQUNpQkEsc0JBQWVBO1FBRGhDQTtZQUNpQkMsOEJBQWVBO1lBR3JCQSxVQUFLQSxHQUFHQSxLQUFLQSxDQUFDQTtZQUNkQSxXQUFNQSxHQUFHQSxLQUFLQSxDQUFDQTtRQW9DMUJBLENBQUNBO1FBbENVRCwwQkFBYUEsR0FBdkJBO1lBQ0NFLElBQUlBLFFBQVFBLEdBQUdBLENBQUNBLENBQUVBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEtBQUtBLENBQUNBLGFBQWFBLENBQUNBLENBQUNBO1lBQ3ZEQSxFQUFFQSxDQUFBQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDYkEsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0E7Z0JBQ25CQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxPQUFPQSxDQUFDQSxhQUFhQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNoRUEsQ0FBQ0E7WUFDREEsZ0JBQUtBLENBQUNBLGFBQWFBLFdBQUVBLENBQUNBO1FBQ3ZCQSxDQUFDQTtRQUVTRixpQkFBSUEsR0FBZEE7WUFFQ0csSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsUUFBUUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7WUFDOUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQy9EQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUU1Q0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDNURBLENBQUNBO1FBRVNILHVCQUFVQSxHQUFwQkEsVUFBcUJBLEtBQVNBO1lBQzdCSSxFQUFFQSxDQUFBQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQTtnQkFDZEEsS0FBS0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0E7WUFFaEJBLEVBQUVBLENBQUFBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO2dCQUN6QkEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzVDQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQTtZQUNwQkEsQ0FBQ0E7WUFDREEsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2hDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxVQUFVQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQTtnQkFDbEZBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBO1lBRW5CQSxDQUFDQTtRQUNGQSxDQUFDQTtRQXRDRko7WUFBQ0Esd0JBQVNBO2VBeUNUQTtRQUFEQSxTQUFDQTtJQUFEQSxDQXpDQSxBQXlDQ0EsRUF4Q2dCLDhCQUFlLEVBd0MvQjtJQUVPLFVBQUUsTUFGVDtJQUVXIiwiZmlsZSI6ImF0dHJpYnV0ZXMvaWYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F0dHJpYnV0ZSwgQ3VzdG9tQXR0cmlidXRlLCBNb2RlbCBhcyBEYXRhTW9kZWwsIEJpbmRpbmd9IGZyb20gXCJob3JjcnV4LWNvcmVcIjtcclxuaW1wb3J0IHtNb2RlbFN0cmF0ZWd5LCBNb2RlbFN0cmF0ZWd5U3RhdGljfSBmcm9tIFwiLi9tb2RlbGludGVyZmFjZVwiO1xyXG5cclxuXHJcbkBBdHRyaWJ1dGVcclxuY2xhc3MgSWYgZXh0ZW5kcyBDdXN0b21BdHRyaWJ1dGUge1xyXG5cdFxyXG5cdHByb3RlY3RlZCBjb21tZW50Tm9kZTogQ29tbWVudDtcclxuXHRwcm90ZWN0ZWQgc2hvd24gPSBmYWxzZTtcclxuXHRwcm90ZWN0ZWQgbmVnYXRlID0gZmFsc2U7XHJcblx0XHJcblx0cHJvdGVjdGVkIGNyZWF0ZUJpbmRpbmcoKTogdm9pZCB7XHJcblx0XHRsZXQgbmVnYXRpb24gPSAhISB0aGlzLmF0dHIudmFsdWUubWF0Y2goL1xccypcXHtcXHtcXHMqIS8pO1xyXG5cdFx0aWYobmVnYXRpb24pIHtcclxuXHRcdFx0dGhpcy5uZWdhdGUgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLmF0dHIudmFsdWUgPSB0aGlzLmF0dHIudmFsdWUucmVwbGFjZSgvXFxzKlxce1xce1xccyohLywgXCJ7e1wiKTsgXHJcblx0XHR9XHJcblx0XHRzdXBlci5jcmVhdGVCaW5kaW5nKCk7XHJcblx0fVxyXG5cdFxyXG5cdHByb3RlY3RlZCBpbml0KCkge1xyXG5cdFx0XHJcblx0XHR0aGlzLmNvbW1lbnROb2RlID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJyk7XHJcblx0XHR0aGlzLm5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5jb21tZW50Tm9kZSwgdGhpcy5ub2RlKTtcclxuXHRcdHRoaXMubm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMubm9kZSk7XHJcblx0XHRcclxuXHRcdHRoaXMuYmluZGluZy5vbk5ld1ZhbHVlKHRoaXMub25OZXdWYWx1ZS5iaW5kKHRoaXMpLCBmYWxzZSk7XHJcblx0fVxyXG5cdFxyXG5cdHByb3RlY3RlZCBvbk5ld1ZhbHVlKHZhbHVlOmFueSk6IHZvaWQge1xyXG5cdFx0aWYodGhpcy5uZWdhdGUpXHJcblx0XHRcdHZhbHVlID0gIXZhbHVlO1xyXG5cdFx0XHRcclxuXHRcdGlmKHRoaXMuc2hvd24gJiYgIXZhbHVlKSB7XHJcblx0XHRcdHRoaXMubm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMubm9kZSk7XHJcblx0XHRcdHRoaXMuc2hvd24gPSBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYoIXRoaXMuc2hvd24gJiYgISF2YWx1ZSkge1xyXG5cdFx0XHR0aGlzLmNvbW1lbnROb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMubm9kZSwgdGhpcy5jb21tZW50Tm9kZS5uZXh0U2libGluZyk7XHJcblx0XHRcdHRoaXMuc2hvd24gPSB0cnVlO1xyXG5cdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0XHJcbn1cclxuXHJcbmV4cG9ydCB7SWZ9OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==