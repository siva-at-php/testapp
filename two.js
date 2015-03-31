+function() {
  'use strict';
  
  window.moduleLoader.setModule('two', new Two()); 

  function Two() {
    var self = null;

    self = this;
    self.init = init;

    function init(modules) {
      (!modules.three.live) ? modules.three.innit(modules) : null;
      for (var i = 100; i > 0; i--) {
        var counter = i;
      }
      console.log('counter finished:', counter);
      demo(modules);

      self.live = true;
    };

    function demo(modules) {
      console.log('Module Two requires Three: ', modules.three);
    }
  }
}();
