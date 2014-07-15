define(["app/math/vec2", "app/math/mat3"], function (Vec2, Mat3) {
    function Drawable(options) {
        options = options || {};
        this.position = options.position || new Vec2();
        this.angle = options.angle || 0;
    }

    Drawable.prototype.rotate = function (theta) {
        this.angle += theta;
    };

    Drawable.prototype.translate = function (vec) {
        this.position = this.position.add(vec);
    };

    return Drawable;
});