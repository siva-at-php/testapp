+function() {
  'use strict';
  
  window.moduleLoader.setModule('three', new Three()); 

  function Three() {
    self = this;
    self.innit = init;

    function init(modules) {      
      this.live = true;
    }
  }
}();
