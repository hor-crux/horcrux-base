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
            if (this.attr.value.trim()[0] == "!") {
                this.negate = true;
                this.attr.value = this.attr.value.trim().substring(1);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZXMvaWYudHMiXSwibmFtZXMiOlsiSWYiLCJJZi5jb25zdHJ1Y3RvciIsIklmLmNyZWF0ZUJpbmRpbmciLCJJZi5pbml0IiwiSWYub25OZXdWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFJQTtRQUNpQkEsc0JBQWVBO1FBRGhDQTtZQUNpQkMsOEJBQWVBO1lBR3JCQSxVQUFLQSxHQUFHQSxLQUFLQSxDQUFDQTtZQUNkQSxXQUFNQSxHQUFHQSxLQUFLQSxDQUFDQTtRQWdDMUJBLENBQUNBO1FBOUJVRCwwQkFBYUEsR0FBdkJBO1lBQ0NFLEVBQUVBLENBQUFBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO2dCQUNyQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0E7Z0JBQ25CQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN2REEsQ0FBQ0E7WUFDREEsZ0JBQUtBLENBQUNBLGFBQWFBLFdBQUVBLENBQUNBO1FBQ3ZCQSxDQUFDQTtRQUVTRixpQkFBSUEsR0FBZEE7WUFFQ0csSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsUUFBUUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7WUFDOUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQy9EQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUU1Q0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDNURBLENBQUNBO1FBRVNILHVCQUFVQSxHQUFwQkEsVUFBcUJBLEtBQVNBO1lBQzdCSSxFQUFFQSxDQUFBQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDekJBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUM1Q0EsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0E7WUFDcEJBLENBQUNBO1lBQ0RBLElBQUlBLENBQUNBLEVBQUVBLENBQUFBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLElBQUlBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO2dCQUNoQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2xGQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQTtZQUVuQkEsQ0FBQ0E7UUFDRkEsQ0FBQ0E7UUFsQ0ZKO1lBQUNBLHdCQUFTQTtlQXFDVEE7UUFBREEsU0FBQ0E7SUFBREEsQ0FyQ0EsQUFxQ0NBLEVBcENnQiw4QkFBZSxFQW9DL0I7SUFFTyxVQUFFLE1BRlQ7SUFFVyIsImZpbGUiOiJhdHRyaWJ1dGVzL2lmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdHRyaWJ1dGUsIEN1c3RvbUF0dHJpYnV0ZSwgTW9kZWwgYXMgRGF0YU1vZGVsLCBCaW5kaW5nfSBmcm9tIFwiaG9yY3J1eC1jb3JlXCI7XHJcbmltcG9ydCB7TW9kZWxTdHJhdGVneSwgTW9kZWxTdHJhdGVneVN0YXRpY30gZnJvbSBcIi4vbW9kZWxpbnRlcmZhY2VcIjtcclxuXHJcblxyXG5AQXR0cmlidXRlXHJcbmNsYXNzIElmIGV4dGVuZHMgQ3VzdG9tQXR0cmlidXRlIHtcclxuXHRcclxuXHRwcm90ZWN0ZWQgY29tbWVudE5vZGU6IENvbW1lbnQ7XHJcblx0cHJvdGVjdGVkIHNob3duID0gZmFsc2U7XHJcblx0cHJvdGVjdGVkIG5lZ2F0ZSA9IGZhbHNlO1xyXG5cdFxyXG5cdHByb3RlY3RlZCBjcmVhdGVCaW5kaW5nKCk6IHZvaWQge1xyXG5cdFx0aWYodGhpcy5hdHRyLnZhbHVlLnRyaW0oKVswXSA9PSBcIiFcIikge1xyXG5cdFx0XHR0aGlzLm5lZ2F0ZSA9IHRydWU7XHJcblx0XHRcdHRoaXMuYXR0ci52YWx1ZSA9IHRoaXMuYXR0ci52YWx1ZS50cmltKCkuc3Vic3RyaW5nKDEpOyBcclxuXHRcdH1cclxuXHRcdHN1cGVyLmNyZWF0ZUJpbmRpbmcoKTtcclxuXHR9XHJcblx0XHJcblx0cHJvdGVjdGVkIGluaXQoKSB7XHJcblx0XHRcclxuXHRcdHRoaXMuY29tbWVudE5vZGUgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKTtcclxuXHRcdHRoaXMubm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLmNvbW1lbnROb2RlLCB0aGlzLm5vZGUpO1xyXG5cdFx0dGhpcy5ub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcclxuXHRcdFxyXG5cdFx0dGhpcy5iaW5kaW5nLm9uTmV3VmFsdWUodGhpcy5vbk5ld1ZhbHVlLmJpbmQodGhpcyksIGZhbHNlKTtcclxuXHR9XHJcblx0XHJcblx0cHJvdGVjdGVkIG9uTmV3VmFsdWUodmFsdWU6YW55KTogdm9pZCB7XHJcblx0XHRpZih0aGlzLnNob3duICYmICF2YWx1ZSkge1xyXG5cdFx0XHR0aGlzLm5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLm5vZGUpO1xyXG5cdFx0XHR0aGlzLnNob3duID0gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKCF0aGlzLnNob3duICYmICEhdmFsdWUpIHtcclxuXHRcdFx0dGhpcy5jb21tZW50Tm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLm5vZGUsIHRoaXMuY29tbWVudE5vZGUubmV4dFNpYmxpbmcpO1xyXG5cdFx0XHR0aGlzLnNob3duID0gdHJ1ZTtcclxuXHRcdFx0XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdFxyXG59XHJcblxyXG5leHBvcnQge0lmfTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=