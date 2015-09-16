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
        function Repeat(node, attr, model, path) {
            _super.call(this, node, attr, model, path);
            this.ID = Repeat.ID++;
            this.createComment();
            this.removeOriginalNode();
            this.node = this.node.cloneNode(true);
        }
        Repeat.prototype.createComment = function () {
            this.commentNode = document.createComment('ID' + this.ID);
            this.node.parentNode.insertBefore(this.commentNode, this.node);
        };
        Repeat.prototype.removeOriginalNode = function () {
            this.node.parentNode.removeChild(this.node);
        };
        Repeat.prototype.removeOldNodes = function () {
            var selector = '*[data-repeatid="' + this.ID + '"]';
            Array.prototype.forEach.call(document.querySelectorAll(selector), function (node) {
                node.parentNode.removeChild(node);
            });
        };
        Repeat.prototype.insertNode = function (node) {
            this.commentNode.parentNode.insertBefore(node, this.commentNode.nextSibling);
        };
        Repeat.prototype.newJSValue = function (value) {
            var _this = this;
            var nodes = [];
            for (var key in value) {
                var model = { it: value[key] };
                var row = this.node.cloneNode(true);
                delete row['repeat'];
                row.removeAttribute('repeat');
                row.dataset['repeatid'] = this.ID;
                horcrux_core_1.bindDom(row, [model]);
                nodes.push(row);
            }
            this.removeOldNodes();
            nodes.reverse().forEach(function (n) {
                _this.insertNode(n);
            });
        };
        Repeat.ID = 0;
        Repeat = __decorate([
            horcrux_core_1.Attribute
        ], Repeat);
        return Repeat;
    })(horcrux_core_1.CustomAttribute);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Repeat;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZXMvcmVwZWF0LnRzIl0sIm5hbWVzIjpbIlJlcGVhdCIsIlJlcGVhdC5jb25zdHJ1Y3RvciIsIlJlcGVhdC5jcmVhdGVDb21tZW50IiwiUmVwZWF0LnJlbW92ZU9yaWdpbmFsTm9kZSIsIlJlcGVhdC5yZW1vdmVPbGROb2RlcyIsIlJlcGVhdC5pbnNlcnROb2RlIiwiUmVwZWF0Lm5ld0pTVmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBRUE7UUFDb0NBLDBCQUFlQTtRQU9sREEsZ0JBQVlBLElBQVNBLEVBQUVBLElBQVNBLEVBQUVBLEtBQVdBLEVBQUVBLElBQVdBO1lBQ3pEQyxrQkFBTUEsSUFBSUEsRUFBRUEsSUFBSUEsRUFBRUEsS0FBS0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFFL0JBLElBQUlBLENBQUNBLEVBQUVBLEdBQUdBLE1BQU1BLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBO1lBRXRCQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxDQUFBQTtZQUNwQkEsSUFBSUEsQ0FBQ0Esa0JBQWtCQSxFQUFFQSxDQUFDQTtZQUUxQkEsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDdkNBLENBQUNBO1FBRVNELDhCQUFhQSxHQUF2QkE7WUFDQ0UsSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsUUFBUUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsSUFBSUEsR0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7WUFDeERBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQ2hFQSxDQUFDQTtRQUVTRixtQ0FBa0JBLEdBQTVCQTtZQUNDRyxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUM3Q0EsQ0FBQ0E7UUFFU0gsK0JBQWNBLEdBQXhCQTtZQUNDSSxJQUFJQSxRQUFRQSxHQUFHQSxtQkFBbUJBLEdBQUNBLElBQUlBLENBQUNBLEVBQUVBLEdBQUNBLElBQUlBLENBQUNBO1lBQ2hEQSxLQUFLQSxDQUFDQSxTQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxnQkFBZ0JBLENBQUNBLFFBQVFBLENBQUNBLEVBQUVBLFVBQUNBLElBQVNBO2dCQUMzRUEsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDbkNBLENBQUNBLENBQUNBLENBQUNBO1FBQ0pBLENBQUNBO1FBRVNKLDJCQUFVQSxHQUFwQkEsVUFBcUJBLElBQVNBO1lBQzdCSyxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxVQUFVQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQTtRQUM5RUEsQ0FBQ0E7UUFFREwsMkJBQVVBLEdBQVZBLFVBQVdBLEtBQUtBO1lBQWhCTSxpQkFzQkNBO1lBckJBQSxJQUFJQSxLQUFLQSxHQUFlQSxFQUFFQSxDQUFDQTtZQUUzQkEsR0FBR0EsQ0FBQUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsSUFBSUEsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3RCQSxJQUFJQSxLQUFLQSxHQUFHQSxFQUFDQSxFQUFFQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFDQSxDQUFDQTtnQkFFN0JBLElBQUlBLEdBQUdBLEdBQU9BLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLENBQUFBO2dCQUN2Q0EsT0FBT0EsR0FBR0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3JCQSxHQUFHQSxDQUFDQSxlQUFlQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtnQkFDOUJBLEdBQUdBLENBQUNBLE9BQU9BLENBQUNBLFVBQVVBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBO2dCQUVsQ0Esc0JBQU9BLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO2dCQUV0QkEsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDakJBLENBQUNBO1lBRURBLElBQUlBLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBO1lBRXRCQSxLQUFLQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFBQSxDQUFDQTtnQkFDeEJBLEtBQUlBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3BCQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUVKQSxDQUFDQTtRQTFETU4sU0FBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFIZkE7WUFBQ0Esd0JBQVNBO21CQThEVEE7UUFBREEsYUFBQ0E7SUFBREEsQ0E5REEsQUE4RENBLEVBN0RtQyw4QkFBZSxFQTZEbEQ7SUE5REQ7NEJBOERDLENBQUEiLCJmaWxlIjoiYXR0cmlidXRlcy9yZXBlYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F0dHJpYnV0ZSwgQ3VzdG9tQXR0cmlidXRlLCBNb2RlbCwgYmluZERvbX0gZnJvbSBcImhvcmNydXgtY29yZVwiXHJcblxyXG5AQXR0cmlidXRlXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcGVhdCBleHRlbmRzIEN1c3RvbUF0dHJpYnV0ZSB7XHJcblx0XHJcblx0c3RhdGljIElEID0gMDtcclxuXHRcclxuXHRwcml2YXRlIElEOm51bWJlcjtcclxuXHRwcml2YXRlIGNvbW1lbnROb2RlOiBDb21tZW50O1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKG5vZGU6Tm9kZSwgYXR0cjpBdHRyLCBtb2RlbDpNb2RlbCwgcGF0aDpzdHJpbmcpIHtcclxuXHRcdHN1cGVyKG5vZGUsIGF0dHIsIG1vZGVsLCBwYXRoKTtcclxuXHRcdFxyXG5cdFx0dGhpcy5JRCA9IFJlcGVhdC5JRCsrO1xyXG5cdFx0XHJcblx0XHR0aGlzLmNyZWF0ZUNvbW1lbnQoKVxyXG5cdFx0dGhpcy5yZW1vdmVPcmlnaW5hbE5vZGUoKTtcclxuXHRcdFxyXG5cdFx0dGhpcy5ub2RlID0gdGhpcy5ub2RlLmNsb25lTm9kZSh0cnVlKTtcclxuXHR9XHJcblx0XHJcblx0cHJvdGVjdGVkIGNyZWF0ZUNvbW1lbnQoKTogdm9pZCB7XHJcblx0XHR0aGlzLmNvbW1lbnROb2RlID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnSUQnK3RoaXMuSUQpO1xyXG5cdFx0dGhpcy5ub2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuY29tbWVudE5vZGUsIHRoaXMubm9kZSk7XHJcblx0fVxyXG5cdFxyXG5cdHByb3RlY3RlZCByZW1vdmVPcmlnaW5hbE5vZGUoKTogdm9pZCB7XHJcblx0XHR0aGlzLm5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLm5vZGUpO1xyXG5cdH1cclxuXHRcclxuXHRwcm90ZWN0ZWQgcmVtb3ZlT2xkTm9kZXMoKTogdm9pZCB7XHJcblx0XHRsZXQgc2VsZWN0b3IgPSAnKltkYXRhLXJlcGVhdGlkPVwiJyt0aGlzLklEKydcIl0nO1xyXG5cdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSwgKG5vZGU6Tm9kZSkgPT4ge1xyXG5cdFx0XHRub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0XHJcblx0cHJvdGVjdGVkIGluc2VydE5vZGUobm9kZTpOb2RlKTogdm9pZCB7XHJcblx0XHR0aGlzLmNvbW1lbnROb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIHRoaXMuY29tbWVudE5vZGUubmV4dFNpYmxpbmcpO1xyXG5cdH1cclxuXHRcclxuXHRuZXdKU1ZhbHVlKHZhbHVlKTp2b2lkIHtcclxuXHRcdGxldCBub2RlczpBcnJheTxOb2RlPiA9IFtdO1xyXG5cdFx0XHJcblx0XHRmb3IodmFyIGtleSBpbiB2YWx1ZSkge1xyXG5cdFx0XHRsZXQgbW9kZWwgPSB7aXQ6IHZhbHVlW2tleV19O1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IHJvdzphbnkgPSB0aGlzLm5vZGUuY2xvbmVOb2RlKHRydWUpXHRcclxuXHRcdFx0ZGVsZXRlIHJvd1sncmVwZWF0J107XHJcblx0XHRcdHJvdy5yZW1vdmVBdHRyaWJ1dGUoJ3JlcGVhdCcpO1xyXG5cdFx0XHRyb3cuZGF0YXNldFsncmVwZWF0aWQnXSA9IHRoaXMuSUQ7XHJcblx0XHRcdFxyXG5cdFx0XHRiaW5kRG9tKHJvdywgW21vZGVsXSk7XHJcblx0XHRcdFxyXG5cdFx0XHRub2Rlcy5wdXNoKHJvdyk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHRoaXMucmVtb3ZlT2xkTm9kZXMoKTtcclxuXHRcdFxyXG5cdFx0bm9kZXMucmV2ZXJzZSgpLmZvckVhY2gobiA9PiB7XHJcblx0XHRcdHRoaXMuaW5zZXJ0Tm9kZShuKTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0fVxyXG59ICJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==