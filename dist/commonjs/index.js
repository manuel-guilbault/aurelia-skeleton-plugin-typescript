"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hello_world_1 = require("./hello-world");
exports.HelloWorld = hello_world_1.HelloWorld;
var aurelia_framework_1 = require("aurelia-framework");
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./hello-world')
    ]);
}
exports.configure = configure;
