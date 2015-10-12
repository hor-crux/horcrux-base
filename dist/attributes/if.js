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
            var _this = this;
            this.commentNode = document.createComment('');
            this.node.parentNode.insertBefore(this.commentNode, this.node);
            this.node.parentNode.removeChild(this.node);
            this.binding.onNewValue(function (value) {
                if (_this.shown && !value) {
                    _this.node.parentNode.removeChild(_this.node);
                    _this.shown = false;
                }
                else if (!_this.shown && !!value) {
                    _this.commentNode.insertBefore(_this.node, _this.commentNode.nextSibling);
                    _this.shown = true;
                }
            }, false);
        };
        If = __decorate([
            horcrux_core_1.Attribute
        ], If);
        return If;
    })(horcrux_core_1.CustomAttribute);
    exports.If = If;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZXMvaWYudHMiXSwibmFtZXMiOlsiSWYiLCJJZi5jb25zdHJ1Y3RvciIsIklmLmluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBSUE7UUFDaUJBLHNCQUFlQTtRQURoQ0E7WUFDaUJDLDhCQUFlQTtZQUdyQkEsVUFBS0EsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFzQnpCQSxDQUFDQTtRQXBCVUQsaUJBQUlBLEdBQWRBO1lBQUFFLGlCQWlCQ0E7WUFmQUEsSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsUUFBUUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7WUFDOUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQy9EQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUU1Q0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsVUFBQUEsS0FBS0E7Z0JBQzVCQSxFQUFFQSxDQUFBQSxDQUFDQSxLQUFJQSxDQUFDQSxLQUFLQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDekJBLEtBQUlBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLFdBQVdBLENBQUNBLEtBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO29CQUM1Q0EsS0FBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0E7Z0JBQ3BCQSxDQUFDQTtnQkFDREEsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsS0FBSUEsQ0FBQ0EsS0FBS0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ2hDQSxLQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxZQUFZQSxDQUFDQSxLQUFJQSxDQUFDQSxJQUFJQSxFQUFFQSxLQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQTtvQkFDdkVBLEtBQUlBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBO2dCQUVuQkEsQ0FBQ0E7WUFDRkEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDWEEsQ0FBQ0E7UUF2QkZGO1lBQUNBLHdCQUFTQTtlQTBCVEE7UUFBREEsU0FBQ0E7SUFBREEsQ0ExQkEsQUEwQkNBLEVBekJnQiw4QkFBZSxFQXlCL0I7SUFFTyxVQUFFLE1BRlQ7SUFFVyIsImZpbGUiOiJhdHRyaWJ1dGVzL2lmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdHRyaWJ1dGUsIEN1c3RvbUF0dHJpYnV0ZSwgTW9kZWwgYXMgRGF0YU1vZGVsLCBCaW5kaW5nfSBmcm9tIFwiaG9yY3J1eC1jb3JlXCI7XHJcbmltcG9ydCB7TW9kZWxTdHJhdGVneSwgTW9kZWxTdHJhdGVneVN0YXRpY30gZnJvbSBcIi4vbW9kZWxpbnRlcmZhY2VcIjtcclxuXHJcblxyXG5AQXR0cmlidXRlXHJcbmNsYXNzIElmIGV4dGVuZHMgQ3VzdG9tQXR0cmlidXRlIHtcclxuXHRcclxuXHRwcm90ZWN0ZWQgY29tbWVudE5vZGU6IENvbW1lbnQ7XHJcblx0cHJvdGVjdGVkIHNob3duID0gZmFsc2U7XHJcblx0XHJcblx0cHJvdGVjdGVkIGluaXQoKSB7XHJcblx0XHRcclxuXHRcdHRoaXMuY29tbWVudE5vZGUgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKTtcclxuXHRcdHRoaXMubm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLmNvbW1lbnROb2RlLCB0aGlzLm5vZGUpO1xyXG5cdFx0dGhpcy5ub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcclxuXHRcdFxyXG5cdFx0dGhpcy5iaW5kaW5nLm9uTmV3VmFsdWUodmFsdWUgPT4ge1xyXG5cdFx0XHRpZih0aGlzLnNob3duICYmICF2YWx1ZSkge1xyXG5cdFx0XHRcdHRoaXMubm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMubm9kZSk7XHJcblx0XHRcdFx0dGhpcy5zaG93biA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYoIXRoaXMuc2hvd24gJiYgISF2YWx1ZSkge1xyXG5cdFx0XHRcdHRoaXMuY29tbWVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMubm9kZSwgdGhpcy5jb21tZW50Tm9kZS5uZXh0U2libGluZyk7XHJcblx0XHRcdFx0dGhpcy5zaG93biA9IHRydWU7XHJcblx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdH0sIGZhbHNlKTtcclxuXHR9XHJcblx0XHJcblx0XHJcbn1cclxuXHJcbmV4cG9ydCB7SWZ9OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==