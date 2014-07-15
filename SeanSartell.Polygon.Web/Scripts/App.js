requirejs.config({
    baseUrl: "Scripts/",
    paths: {
        jQuery: "lib/jquery-2.1.1"
    },
    shim: {
        jQuery: { exports: "$" }
    }
});

requirejs(["app/draw/canvas", "app/engine/mainloop", "app/engine/camera", "app/math/vec2", "app/math/mat3", "app/draw/circle"], function (Canvas, MainLoop, Camera, Vec2, Mat3, Circle) {
    var canvas = new Canvas({
        element: document.getElementById("canvas")
    });

    var camera = new Camera({
        canvas: canvas
    });

    var circle = new Circle({
        center: new Vec2([100, 0]),
        radius: 50,
        style: { fillStyle: "#f00" }
    });

    var loop = new MainLoop({
        update: function (time) {
            camera.rotate(2 * Math.PI * time);
        },
        render: function () {
            canvas.clear();
            circle.draw(canvas, camera);
        }
    });

    loop.start();

});