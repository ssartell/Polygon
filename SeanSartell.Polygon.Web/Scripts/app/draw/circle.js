define(["jQuery", "app/math/vec2", "app/math/mat3"], function ($, Vec2, Mat3) {
    function Circle(options) {
        this.center = options.center || new Vec2();
        this.radius = options.radius || 1;

        var defaultStyles = { fillStyle: "#fff", strokeStyle: "#000", lineWidth: 1 };
        this.style = $.extend(defaultStyles, options.style);
    };

    Circle.prototype.draw = function (canvas, camera) {
        var dCenter, dRadius;
        var context = canvas.context;
        var transform = camera.toMat3();

        dCenter = transform.multiply(this.center);
        dRadius = transform.multiply(new Vec2(this.radius, 0)).subtract(dCenter).length();
        
        context.beginPath();
        context.arc(dCenter[0], dCenter[1], dRadius, 0, 2 * Math.PI, false);
        context.fillStyle = this.style.fillStyle;
        context.fill();
        context.lineWidth = this.style.lineWidth;
        context.strokeStyle = this.style.strokeStyle;
        context.stroke();
    };

    return Circle;
});