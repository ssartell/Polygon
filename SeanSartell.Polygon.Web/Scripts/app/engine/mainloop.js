define(function () {
    function MainLoop(options) {
        options = options || {};
        var update = options.update || function () { };
        var render = options.render || function () { };

        var stopLoop, tLastFrame;
        var loop = function (tFrame) {
            stopLoop = window.requestAnimationFrame(loop);

            update((tFrame - tLastFrame) / 1000 || 0);
            render();

            tLastFrame = tFrame;
        };

        this.start = function () {
            tLastFrame = window.performance.now();
            loop(tLastFrame);
        };

        this.stop = function () {
            window.cancelAnimationFrame(stopLoop);
        };
    };

    return MainLoop;
});