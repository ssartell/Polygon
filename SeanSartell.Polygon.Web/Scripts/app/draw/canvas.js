define(["app/math/vec2", "app/math/mat3"], function (Vec2, Mat3) {
    function Canvas(options) {
        this.element = options.element;
        this.position = options.position || new Vec2();
        this.angle = options.angle || 0;
        this.context = this.element.getContext("2d");

        this.context.translate(this.element.width / 2 + this.position[0], this.element.height / 2 + this.position[1]);
        this.context.scale(1, -1);
    };

    Canvas.prototype.toMat3 = function () {
        return Mat3.translate(this.position).multiply(Mat3.rotate(this.angle));
    };

    Canvas.prototype.rotate = function (theta) {
        this.angle += theta;
        this.context.rotate(theta);
    };

    Canvas.prototype.translate = function (vec) {
        this.position = this.position.add(vec);

        this.context.translate(vec[0], vec[1]);
    };

    Canvas.prototype.clear = function () {
        this.context.save();

        this.context.setTransform(1, 0, 0, 1, 0, 0);
        this.context.clearRect(0, 0, canvas.width, canvas.height);

        this.context.restore();
    };

    return Canvas;
});