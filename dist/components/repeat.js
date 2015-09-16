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
    var Repeat = (function (_super) {
        __extends(Repeat, _super);
        function Repeat() {
            _super.apply(this, arguments);
        }
        Repeat = __decorate([
            horcrux_core_1.Component({
                namespace: "ho",
                template: false
            })
        ], Repeat);
        return Repeat;
    })(horcrux_core_1.CustomElement);
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmVwZWF0LnRzIl0sIm5hbWVzIjpbIlJlcGVhdCIsIlJlcGVhdC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFFQTtRQUlxQkEsMEJBQWFBO1FBSmxDQTtZQUlxQkMsOEJBQWFBO1FBaUNsQ0EsQ0FBQ0E7UUFyQ0REO1lBQUNBLHdCQUFTQSxDQUFDQTtnQkFDVkEsU0FBU0EsRUFBRUEsSUFBSUE7Z0JBQ2ZBLFFBQVFBLEVBQUVBLEtBQUtBO2FBQ2ZBLENBQUNBO21CQWtDREE7UUFBREEsYUFBQ0E7SUFBREEsQ0FyQ0EsQUFxQ0NBLEVBakNvQiw0QkFBYSxFQWlDakMiLCJmaWxlIjoiY29tcG9uZW50cy9yZXBlYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgYmluZERvbSwgQ3VzdG9tRWxlbWVudH0gZnJvbSBcImhvcmNydXgtY29yZVwiXHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRuYW1lc3BhY2U6IFwiaG9cIixcclxuXHR0ZW1wbGF0ZTogZmFsc2VcclxufSlcclxuY2xhc3MgUmVwZWF0IGV4dGVuZHMgQ3VzdG9tRWxlbWVudCB7XHJcblx0LypcclxuXHRkb250VmlzaXQgPSB0cnVlO1xyXG5cdFxyXG5cdGF0dGFjaGVkQ2FsbGJhY2soKSB7XHJcblx0XHRsZXQgcGF0aCA9IHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YVwiKS5yZXBsYWNlKC9cXHsvZ20sIFwiXCIpLnJlcGxhY2UoL1xcfS9nbSwgXCJcIik7XHJcblx0XHRsZXQgaG9zdCA9IHRoaXMuZ2V0SG9zdCgpO1xyXG5cdFx0bGV0IGRhdGE6YW55W10gPSBob3N0W3BhdGhdO1xyXG5cdFx0XHJcblx0XHRsZXQgY29udGVudHMgPSB0aGlzLmNoaWxkTm9kZXM7XHJcblx0XHRsZXQgc2hhZG93ID0gdGhpcy5jcmVhdGVTaGFkb3dSb290KCk7XHJcblx0XHRcclxuXHRcdGRhdGEuZm9yRWFjaChyb3cgPT4ge1xyXG5cdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGNvbnRlbnRzLCAobm9kZTpOb2RlKSA9PiB7XHJcblx0XHRcdFx0bGV0IG1vZGVsID0ge1xyXG5cdFx0XHRcdFx0aXRlbTogcm93XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCBjbG9uZWQgPSBub2RlLmNsb25lTm9kZSh0cnVlKTtcclxuXHRcdFx0XHR2aXNpdChjbG9uZWQsIG5vZGUgPT4ge2JpbmROb2RlKG5vZGUsIG1vZGVsKTt9KTtcclxuXHRcdFx0XHRzaGFkb3cuYXBwZW5kQ2hpbGQoY2xvbmVkKVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pXHJcblx0XHRcclxuXHR9XHJcblx0XHJcblx0cHJvdGVjdGVkIGdldEhvc3QoKTogTm9kZSB7XHJcblx0XHRsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xyXG5cdFx0d2hpbGUoISg8YW55PnBhcmVudCkuaG9zdClcclxuXHRcdFx0cGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XHJcblx0XHRyZXR1cm4gKDxhbnk+cGFyZW50KS5ob3N0O1xyXG5cdH1cclxuXHQqL1xyXG5cdFxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9