define(["app/math/vec2", "app/math/mat3"], function (Vec2, Mat3) {
    function Camera(options) {
        options = options || {};
        this.position = options.position || new Vec2();
        this.angle = options.angle || 0;
        this.canvas = options.canvas;

        this.canonicalMat3 = Mat3.translate(this.canvas.getCenter()).multiply(Mat3.flipVert());
    };

    Camera.prototype.toMat3 = function () {
        return this.canonicalMat3.multiply(Mat3.translate(this.position).multiply(Mat3.rotate(this.angle)));
    };

    Camera.prototype.rotate = function (theta) {
        this.angle += theta;
    };

    Camera.prototype.translate = function (vec) {
        this.position = this.position.add(vec);
    };

    return Camera;
});