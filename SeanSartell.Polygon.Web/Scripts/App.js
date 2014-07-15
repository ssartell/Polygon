requirejs.config({
    baseUrl: "Scripts/",
    paths: {
        jQuery: "lib/jquery-2.1.1"
    },
    shim: {
        jQuery: { exports: "$" }
    }
});

requirejs(["app/draw/canvas", "app/engine/mainloop", "app/math/vec2", "app/math/mat3", "app/draw/circle"], function (Canvas, MainLoop, Vec2, Mat3, Circle) {
    var canvas = new Canvas({
        element: document.getElementById("canvas"),
    });

    var circle = new Circle({
        position: new Vec2([25, 0]),
        radius: 25,
        style: { fillStyle: "#f00" }
    });

    var loop = new MainLoop({
        update: function (dt) {
            circle.rotate(2 * Math.PI * dt);
            circle.translate(new Vec2(Math.cos(circle.angle), Math.sin(circle.angle)));
        },
        render: function () {
            canvas.clear();
            circle.draw(canvas);
        }
    });

    loop.start();

});