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
        If.prototype.createBinding = function () {
            var negation = !!this.attr.value.match(/\s*\{\{\s*!/);
            if (negation) {
                this.negate = true;
                this.attr.value = this.attr.value.replace(/\s*\{\{\s*!/, "{{");
            }
            else {
                this.negate = false;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZXMvaWYudHMiXSwibmFtZXMiOlsiSWYiLCJJZi5jb25zdHJ1Y3RvciIsIklmLmNyZWF0ZUJpbmRpbmciLCJJZi5pbml0IiwiSWYub25OZXdWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFJQTtRQUNpQkEsc0JBQWVBO1FBRGhDQTtZQUNpQkMsOEJBQWVBO1lBR3JCQSxVQUFLQSxHQUFHQSxLQUFLQSxDQUFDQTtRQXdDekJBLENBQUNBO1FBckNVRCwwQkFBYUEsR0FBdkJBO1lBQ0NFLElBQUlBLFFBQVFBLEdBQUdBLENBQUNBLENBQUVBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEtBQUtBLENBQUNBLGFBQWFBLENBQUNBLENBQUNBO1lBQ3ZEQSxFQUFFQSxDQUFBQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDYkEsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0E7Z0JBQ25CQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxPQUFPQSxDQUFDQSxhQUFhQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNoRUEsQ0FBQ0E7WUFDREEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ0xBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLEtBQUtBLENBQUNBO1lBQ3JCQSxDQUFDQTtZQUNEQSxnQkFBS0EsQ0FBQ0EsYUFBYUEsV0FBRUEsQ0FBQ0E7UUFDdkJBLENBQUNBO1FBRVNGLGlCQUFJQSxHQUFkQTtZQUVDRyxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxRQUFRQSxDQUFDQSxhQUFhQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtZQUM5Q0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDL0RBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBRTVDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUM1REEsQ0FBQ0E7UUFFU0gsdUJBQVVBLEdBQXBCQSxVQUFxQkEsS0FBU0E7WUFDN0JJLEVBQUVBLENBQUFBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBO2dCQUNkQSxLQUFLQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQTtZQUVoQkEsRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3pCQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDNUNBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEtBQUtBLENBQUNBO1lBQ3BCQSxDQUFDQTtZQUNEQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxJQUFJQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDaENBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLFVBQVVBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLEVBQUVBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBO2dCQUNsRkEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0E7WUFFbkJBLENBQUNBO1FBQ0ZBLENBQUNBO1FBekNGSjtZQUFDQSx3QkFBU0E7ZUE0Q1RBO1FBQURBLFNBQUNBO0lBQURBLENBNUNBLEFBNENDQSxFQTNDZ0IsOEJBQWUsRUEyQy9CO0lBRU8sVUFBRSxNQUZUO0lBRVciLCJmaWxlIjoiYXR0cmlidXRlcy9pZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXR0cmlidXRlLCBDdXN0b21BdHRyaWJ1dGUsIE1vZGVsIGFzIERhdGFNb2RlbCwgQmluZGluZ30gZnJvbSBcImhvcmNydXgtY29yZVwiO1xyXG5pbXBvcnQge01vZGVsU3RyYXRlZ3ksIE1vZGVsU3RyYXRlZ3lTdGF0aWN9IGZyb20gXCIuL21vZGVsaW50ZXJmYWNlXCI7XHJcblxyXG5cclxuQEF0dHJpYnV0ZVxyXG5jbGFzcyBJZiBleHRlbmRzIEN1c3RvbUF0dHJpYnV0ZSB7XHJcblx0XHJcblx0cHJvdGVjdGVkIGNvbW1lbnROb2RlOiBDb21tZW50O1xyXG5cdHByb3RlY3RlZCBzaG93biA9IGZhbHNlO1xyXG5cdHByb3RlY3RlZCBuZWdhdGU6IGJvb2xlYW47XHJcblx0XHJcblx0cHJvdGVjdGVkIGNyZWF0ZUJpbmRpbmcoKTogdm9pZCB7XHJcblx0XHRsZXQgbmVnYXRpb24gPSAhISB0aGlzLmF0dHIudmFsdWUubWF0Y2goL1xccypcXHtcXHtcXHMqIS8pO1xyXG5cdFx0aWYobmVnYXRpb24pIHtcclxuXHRcdFx0dGhpcy5uZWdhdGUgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLmF0dHIudmFsdWUgPSB0aGlzLmF0dHIudmFsdWUucmVwbGFjZSgvXFxzKlxce1xce1xccyohLywgXCJ7e1wiKTsgXHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0dGhpcy5uZWdhdGUgPSBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHN1cGVyLmNyZWF0ZUJpbmRpbmcoKTtcclxuXHR9XHJcblx0XHJcblx0cHJvdGVjdGVkIGluaXQoKSB7XHJcblx0XHRcclxuXHRcdHRoaXMuY29tbWVudE5vZGUgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKTtcclxuXHRcdHRoaXMubm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLmNvbW1lbnROb2RlLCB0aGlzLm5vZGUpO1xyXG5cdFx0dGhpcy5ub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcclxuXHRcdFxyXG5cdFx0dGhpcy5iaW5kaW5nLm9uTmV3VmFsdWUodGhpcy5vbk5ld1ZhbHVlLmJpbmQodGhpcyksIGZhbHNlKTtcclxuXHR9XHJcblx0XHJcblx0cHJvdGVjdGVkIG9uTmV3VmFsdWUodmFsdWU6YW55KTogdm9pZCB7XHJcblx0XHRpZih0aGlzLm5lZ2F0ZSlcclxuXHRcdFx0dmFsdWUgPSAhdmFsdWU7XHJcblx0XHRcdFxyXG5cdFx0aWYodGhpcy5zaG93biAmJiAhdmFsdWUpIHtcclxuXHRcdFx0dGhpcy5ub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcclxuXHRcdFx0dGhpcy5zaG93biA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZighdGhpcy5zaG93biAmJiAhIXZhbHVlKSB7XHJcblx0XHRcdHRoaXMuY29tbWVudE5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5ub2RlLCB0aGlzLmNvbW1lbnROb2RlLm5leHRTaWJsaW5nKTtcclxuXHRcdFx0dGhpcy5zaG93biA9IHRydWU7XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRcclxufVxyXG5cclxuZXhwb3J0IHtJZn07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9