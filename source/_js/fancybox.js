(function($) {
  'use strict';
  
  // Run fancybox feature

  $(document).ready(function() {
    /**
     * Configure and run Fancybox plugin
     * @returns {void}
     */
    function fancyFox() {
      $('.fancybox').fancybox({
          thumbs : {
            autoStart : true
          },
          buttons : [
            'slideShow',
            'fullScreen',
            'thumbs',
            'close'
          ]
      });
    }

    fancyFox();
    
    $(window).smartresize(function() {
      fancyFox();
    });
  });
})(jQuery);
