define(["app/math/vec2"], function (Vec2) {
    function Mat3(array) {
        if (arguments[0] instanceof Array) {
            this[0] = array[0] || [0, 0, 0];
            this[1] = array[1] || [0, 0, 0];
            this[2] = array[2] || [0, 0, 0];
        } else {
            this[0] = [0, 0, 0];
            this[1] = [0, 0, 0];
            this[2] = [0, 0, 0];
        }
    }

    Mat3.prototype.multiply = function () {
        var result;
        var i, j, k;

        if (arguments[0] instanceof Mat3) {
            var mat = arguments[0];
            result = new Mat3();

            for (i = 0; i < 3; i++) {
                for (j = 0; j < 3; j++) {
                    for (k = 0; k < 3; k++) {
                        result[i][j] += this[i][k] * mat[k][j];
                    }
                }
            }

        } else if (arguments[0] instanceof Vec2) {
            var vec = arguments[0];
            result = new Vec2();

            for (i = 0; i < 3; i++) {
                result[i] = 0;
                for (j = 0; j < 3; j++) {
                    result[i] += this[i][j] * vec[j];
                }
            }
        }

        return result;
    };

    Mat3.prototype.toArray = function () {
        return [this[0], this[1], this[2]];
    };

    Mat3.rotate = function (theta) {
        var cos = Math.cos(theta);
        var sin = Math.sin(theta);
        return new Mat3([[cos, -sin, 0], [sin, cos, 0], [0, 0, 1]]);
    }

    Mat3.scale = function(scalar) {
        return new Mat3([[scalar, 0, 0], [0, scalar, 0], [0, 0, 1]]);
    };

    Mat3.translate = function (vec) {
        return new Mat3([[1, 0, vec[0]], [0, 1, vec[1]], [0, 0, 1]]);
    };

    Mat3.flipVert = function() {
        return new Mat3([[1, 0, 0], [0, -1, 0], [0, 0, 1]]);
    };

    return Mat3;
});