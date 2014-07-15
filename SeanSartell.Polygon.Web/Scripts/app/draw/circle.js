define(["app/draw/drawable", "app/math/vec2", "jQuery"], function (Drawable, Vec2, $) {
    function Circle(options) {
        this.radius = options.radius || 1;

        var defaultStyles = { fillStyle: "#fff", strokeStyle: "#000", lineWidth: 1 };
        this.style = $.extend(defaultStyles, options.style);

        Drawable.call(this, options);
    };

    Circle.prototype = Object.create(Drawable.prototype);

    Circle.prototype.draw = function (canvas) {
        var context = canvas.context;
        
        context.beginPath();
        context.arc(this.position[0], this.position[1], this.radius, 0, 2 * Math.PI, false);
        context.fillStyle = this.style.fillStyle;
        context.fill();
        context.lineWidth = this.style.lineWidth;
        context.strokeStyle = this.style.strokeStyle;
        context.stroke();
    };

    return Circle;
});