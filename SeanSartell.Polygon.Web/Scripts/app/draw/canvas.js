define(["app/math/vec2", "app/math/mat3"], function (Vec2, Mat3) {
    function Canvas(options) {
        this.element = options.element;
        this.context = this.element.getContext("2d");
    };

    Canvas.prototype.clear = function () {
        this.context.save();

        this.context.setTransform(1, 0, 0, 1, 0, 0);
        this.context.clearRect(0, 0, canvas.width, canvas.height);

        this.context.restore();
    };

    Canvas.prototype.getCenter = function() {
        return new Vec2(this.element.width / 2, this.element.height / 2);
    }

    return Canvas;
});