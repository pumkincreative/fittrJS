(function( $ ) {
  $.fn.fittr = function(options) {
  
  	//call debug function below
	debug(this);
	
  
	  //Default options
	  var defaults = {
		
		//Choose the container
		container: 'div',
		
		//manually define image dimensions
		imgWidth: 0,
		imgHeight: 0,
		
		
		//manually define container dimensions
		containerWidth: 0,
		containerHeight: 0,
		
		//Add a gap between the container and the image
		gap: {
			vertical: 0,
			horizontal: 0
		},
		
		//How to align' image
		align: {
			vertical: 'top',
			horizontal:'left'
		},
		
		//Fill or Fit
		resizeType: 'fit',
		
		//Resizes image if container resizes
		autoResize: true,
		
		//force smart resize
		forceDebounce: false,
		
	  };
	  
	  // Extend our default options with those provided.
	  var opts = $.extend(defaults, options);
	  
	  //fill in missing options
	  if (!opts.gap.vertical)
	  	opts.gap.vertical = 0;
	  if (!opts.gap.horizontal)
	  	opts.gap.horizontal = 0;
	  if (!opts.align.vertical)
	  	opts.align.vertical = 'top';
	  if (!opts.align.horizontal)
	  	opts.align.horizontal = 'left';
	  
	  // The plugin implementation code goes here.
	  ////////////////////////////////////////////
	return this.each(function() {

		var $this = $(this);
		var $container = $this.parents(opts.container).first();
		var counter = 1;
		
		function resizeImage () {
			
			var naturalWidth = parseInt ($this.attr('width'));
			var naturalHeight = parseInt ($this.attr('height'));
			
			//Get image dimensions
			var imgWidth = opts.imgWidth > 0 ? opts.imgWidth : naturalWidth;
			var imgHeight = opts.imgHeight > 0 ? opts.imgHeight : naturalHeight;
			
			//Get container dimensions
			var wid = opts.containerWidth > 0 ? opts.containerWidth : $container.width();
			var hei = opts.containerHeight > 0 ? opts.containerHeight : $container.height();
			
			//Set image offset dependent on gap options
			var xOffset = opts.gap.horizontal;
			var yOffset = opts.gap.vertical;
			wid -= xOffset;
			hei -= yOffset;
			
			//Change image dimensions
			var newWidth = wid;
			$this.width(newWidth);
			
			var scaleRatio = newWidth/imgWidth;
			
			var newHeight = Math.round(imgHeight*scaleRatio)
			$this.height(newHeight);
			
			//If resize type is "FIT"
			if (opts.resizeType == 'fit') {
			  if (newHeight > hei) {
					newHeight  = hei;
					scaleRatio = newHeight/imgHeight;
					
					newWidth = Math.round(imgWidth*scaleRatio);
					
					$this.height(newHeight);
					$this.width(newWidth);
			  }
			} 
			
			//If resize type is "FILL"
			else {
				$container.css('overflow','hidden');
				if (naturalHeight < hei) {
				scaleRatio = hei/imgHeight;
				$this.height(hei);
				$this.width(Math.round(imgWidth*scaleRatio));
			  }
			}
			
			//Alignment options
			if (opts.align.horizontal == 'right')
				$this.css('margin-left',wid - newWidth);
			else if (opts.align.horizontal == 'center')
				$this.css('margin-left',(wid - newWidth)/2);
			else
				$this.css('margin-left',opts.align.horizontal);
				
			if (opts.align.vertical == 'bottom')
				$this.css('margin-top',hei - newHeight);
			else if (opts.align.vertical == 'middle')
				$this.css('margin-top',(hei - newHeight)/2);
			else
				$this.css('margin-top',opts.align.vertical);
			
			counter++
			
		}//End of resize function
		resizeImage ();
		
		if (opts.autoResize == true) {
			if (counter > 10 || opts.forceDebounce == true)
				$(window).smartresize(resizeImage)
			else
				$(window).resize(resizeImage)
		}
	});
	  
  };
	    
	  //Debug function
	  function debug($obj) {
		if (window.console && window.console.log) {
		  //console.log( stuff )
		  //console.log(width)
		}
	  };
  
})( jQuery );

// debouncing function from John Hann
// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
(function($,sr){

  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');