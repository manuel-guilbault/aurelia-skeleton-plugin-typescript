define(["require", "exports", "./hello-world", "aurelia-framework"], function (require, exports, hello_world_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HelloWorld = hello_world_1.HelloWorld;
    function configure(config) {
        config.globalResources([
            aurelia_framework_1.PLATFORM.moduleName('./hello-world')
        ]);
    }
    exports.configure = configure;
});
