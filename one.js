+function() {
  'use strict';

   window.moduleLoader.setModule('one', new One()); 
 
  function One() {
    var self = null;

    self = this;
    self.init = init;

    function init(modules) {      
      (!modules.two.live) ? modules.two.init(modules) : null;
      (!modules.three.live) ? modules.three.init(modules) : null;

      demo(modules);

      self.live = true;
    }

    function demo(modules) {
      console.log('Module One requires Two and Three: ', modules.two, modules.three);
    }
   
  }
}();
