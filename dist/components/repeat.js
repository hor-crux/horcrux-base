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
            this.dontVisit = true;
        }
        Repeat.prototype.attachedCallback = function () {
            var path = this.getAttribute("data").replace(/\{/gm, "").replace(/\}/gm, "");
            var host = this.getHost();
            var data = host[path];
            var contents = this.childNodes;
            var shadow = this.createShadowRoot();
            data.forEach(function (row) {
                Array.prototype.forEach.call(contents, function (node) {
                    var model = {
                        item: row
                    };
                    var cloned = node.cloneNode(true);
                    visit(cloned, function (node) { bindNode(node, model); });
                    shadow.appendChild(cloned);
                });
            });
        };
        Repeat.prototype.getHost = function () {
            var parent = this.parentNode;
            while (!parent.host)
                parent = parent.parentNode;
            return parent.host;
        };
        Repeat = __decorate([
            horcrux_core_1.Component({
                namespace: "ho",
                template: false
            })
        ], Repeat);
        return Repeat;
    })(CustomElement);
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmVwZWF0LnRzIl0sIm5hbWVzIjpbIlJlcGVhdCIsIlJlcGVhdC5jb25zdHJ1Y3RvciIsIlJlcGVhdC5hdHRhY2hlZENhbGxiYWNrIiwiUmVwZWF0LmdldEhvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBRUE7UUFJcUJBLDBCQUFhQTtRQUpsQ0E7WUFJcUJDLDhCQUFhQTtZQUVqQ0EsY0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0E7UUE4QmxCQSxDQUFDQTtRQTVCQUQsaUNBQWdCQSxHQUFoQkE7WUFDQ0UsSUFBSUEsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7WUFDN0VBLElBQUlBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBO1lBQzFCQSxJQUFJQSxJQUFJQSxHQUFTQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUU1QkEsSUFBSUEsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7WUFDL0JBLElBQUlBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLGdCQUFnQkEsRUFBRUEsQ0FBQ0E7WUFFckNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLFVBQUFBLEdBQUdBO2dCQUNmQSxLQUFLQSxDQUFDQSxTQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxFQUFFQSxVQUFDQSxJQUFTQTtvQkFDaERBLElBQUlBLEtBQUtBLEdBQUdBO3dCQUNYQSxJQUFJQSxFQUFFQSxHQUFHQTtxQkFDVEEsQ0FBQUE7b0JBQ0RBLElBQUlBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO29CQUNsQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsRUFBRUEsVUFBQUEsSUFBSUEsSUFBS0EsUUFBUUEsQ0FBQ0EsSUFBSUEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ2hEQSxNQUFNQSxDQUFDQSxXQUFXQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFBQTtnQkFDM0JBLENBQUNBLENBQUNBLENBQUNBO1lBQ0pBLENBQUNBLENBQUNBLENBQUFBO1FBRUhBLENBQUNBO1FBRVNGLHdCQUFPQSxHQUFqQkE7WUFDQ0csSUFBSUEsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7WUFDN0JBLE9BQU1BLENBQU9BLE1BQU9BLENBQUNBLElBQUlBO2dCQUN4QkEsTUFBTUEsR0FBR0EsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7WUFDNUJBLE1BQU1BLENBQU9BLE1BQU9BLENBQUNBLElBQUlBLENBQUNBO1FBQzNCQSxDQUFDQTtRQWxDRkg7WUFBQ0Esd0JBQVNBLENBQUNBO2dCQUNWQSxTQUFTQSxFQUFFQSxJQUFJQTtnQkFDZkEsUUFBUUEsRUFBRUEsS0FBS0E7YUFDZkEsQ0FBQ0E7bUJBaUNEQTtRQUFEQSxhQUFDQTtJQUFEQSxDQXBDQSxBQW9DQ0EsRUFoQ29CLGFBQWEsRUFnQ2pDIiwiZmlsZSI6ImNvbXBvbmVudHMvcmVwZWF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIGJpbmR9IGZyb20gXCJob3JjcnV4LWNvcmVcIlxyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bmFtZXNwYWNlOiBcImhvXCIsXHJcblx0dGVtcGxhdGU6IGZhbHNlXHJcbn0pXHJcbmNsYXNzIFJlcGVhdCBleHRlbmRzIEN1c3RvbUVsZW1lbnQge1xyXG5cdFxyXG5cdGRvbnRWaXNpdCA9IHRydWU7XHJcblx0XHJcblx0YXR0YWNoZWRDYWxsYmFjaygpIHtcclxuXHRcdGxldCBwYXRoID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhXCIpLnJlcGxhY2UoL1xcey9nbSwgXCJcIikucmVwbGFjZSgvXFx9L2dtLCBcIlwiKTtcclxuXHRcdGxldCBob3N0ID0gdGhpcy5nZXRIb3N0KCk7XHJcblx0XHRsZXQgZGF0YTphbnlbXSA9IGhvc3RbcGF0aF07XHJcblx0XHRcclxuXHRcdGxldCBjb250ZW50cyA9IHRoaXMuY2hpbGROb2RlcztcclxuXHRcdGxldCBzaGFkb3cgPSB0aGlzLmNyZWF0ZVNoYWRvd1Jvb3QoKTtcclxuXHRcdFxyXG5cdFx0ZGF0YS5mb3JFYWNoKHJvdyA9PiB7XHJcblx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoY29udGVudHMsIChub2RlOk5vZGUpID0+IHtcclxuXHRcdFx0XHRsZXQgbW9kZWwgPSB7XHJcblx0XHRcdFx0XHRpdGVtOiByb3dcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGV0IGNsb25lZCA9IG5vZGUuY2xvbmVOb2RlKHRydWUpO1xyXG5cdFx0XHRcdHZpc2l0KGNsb25lZCwgbm9kZSA9PiB7YmluZE5vZGUobm9kZSwgbW9kZWwpO30pO1xyXG5cdFx0XHRcdHNoYWRvdy5hcHBlbmRDaGlsZChjbG9uZWQpXHJcblx0XHRcdH0pO1xyXG5cdFx0fSlcclxuXHRcdFxyXG5cdH1cclxuXHRcclxuXHRwcm90ZWN0ZWQgZ2V0SG9zdCgpOiBOb2RlIHtcclxuXHRcdGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XHJcblx0XHR3aGlsZSghKDxhbnk+cGFyZW50KS5ob3N0KVxyXG5cdFx0XHRwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcclxuXHRcdHJldHVybiAoPGFueT5wYXJlbnQpLmhvc3Q7XHJcblx0fVxyXG5cdFxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9