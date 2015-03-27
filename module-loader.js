+function() {
  'use strict';

  window.moduleLoader = new function ModuleLoader() {
    var modules = null;

    modules = {};

    this.setModule = setModule;
    this.start = start;

    function setModule(moduleName, module) {
      modules[moduleName] = module;
    }

    function start() {
      var module = null;

      for (module in modules) {
        if (!modules[module].live) {
          modules[module].init(modules);
        }
      }

      demo();
    }

    function demo() {
      document.writeln('<h4>Check console for modules loaded</h4>');
      console.log('Modules loaded when started: ', modules);
    }

  };

}();
