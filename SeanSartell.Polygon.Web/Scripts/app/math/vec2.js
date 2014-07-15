define(function () {
    function Vec2() {
        if (arguments[0] instanceof Array) {
            this[0] = arguments[0][0] || 0;
            this[1] = arguments[0][1] || 0;
            this[2] = 1;
        } else {
            this[0] = arguments[0] || 0;
            this[1] = arguments[1] || 0;
            this[2] = 1;
        }
    };

    Vec2.prototype.add = function (vec) {
        return new Vec2(
            this[0] + vec[0],
            this[1] + vec[1]
        );
    };

    Vec2.prototype.subtract = function (vec) {
        return new Vec2(
            this[0] - vec[0],
            this[1] - vec[1]
        );
    };

    Vec2.prototype.scale = function (scalar) {
        return new Vec2(
            this[0] * scalar,
            this[1] * scalar
        );
    };

    Vec2.prototype.length = function () {
        return Math.sqrt(this.dot(this));
    };

    Vec2.prototype.normalize = function () {
        var length = this.length();

        return new Vec2(
            this[0] / length,
            this[1] / length
        );
    };

    Vec2.prototype.dot = function (vec) {
        return this[0] * vec[0] + this[1] * vec[1];
    };

    Vec2.prototype.angle = function (vec) {
        return Math.acos(this.normalize().dot(vec.normalize()));
    };

    Vec2.prototype.rotate = function (theta) {
        var cos = Math.cos(theta);
        var sin = Math.sin(theta);

        return new Vec2(this[0] * cos - this[1] * sin, this[0] * sin + this[1] * cos);
    };

    Vec2.prototype.toArray = function () {
        return [this[0], this[1]];
    };

    return Vec2;
});