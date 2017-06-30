export { HelloWorld } from './hello-world';
import { PLATFORM } from 'aurelia-framework';
export function configure(config) {
    config.globalResources([
        PLATFORM.moduleName('./hello-world')
    ]);
}
