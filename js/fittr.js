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
			
			// var naturalWidth = parseInt ($this.attr('width'));
			// var naturalHeight = parseInt ($this.attr('height'));
			var naturalDim = {
				width: parseInt($this.attr('width')),
				height: parseInt($this.attr('height'))
			};
			
			//Get image dimensions
			// var imgWidth = opts.imgWidth > 0 ? opts.imgWidth : naturalWidth;
			// var imgHeight = opts.imgHeight > 0 ? opts.imgHeight : naturalHeight;
			var imageDim = {
				width: opts.imgWidth > 0 ? opts.imgWidth : naturalDim.width,
				height: opts.imgHeight > 0 ? opts.imgHeight : naturalDim.height
			};
			
			//Get container dimensions
			// var container = opts.containerWidth > 0 ? opts.containerWidth : $container.width();
			// var hei = opts.containerHeight > 0 ? opts.containerHeight : $container.height();
			
			var containerDim = {
				width: opts.containerWidth > 0 ? opts.containerWidth : $container.width(),
				height: opts.containerHeight > 0 ? opts.containerHeight : $container.height()
			}


			//Set image offset dependent on gap options
			var offset = {
				x: opts.gap.horizontal,
				y: opts.gap.vertical
			}
			
			if (offset.x > 0)
				containerDim.width -= offset.x;
			if (offset.y > 0)
				containerDim.height -= offset.y;
			
			var originalContainerDim = {
				width: opts.containerWidth > 0 ? opts.containerWidth : $container.width(),
				height: opts.containerHeight > 0 ? opts.containerHeight : $container.height()
			}

			
			

			// Get ratio of image and container
			var imageRatio = imageDim.width / imageDim.height;
			var containerRatio = containerDim.width / containerDim.height;
			

			
			//If resize type is "FIT"
			if (opts.resizeType == 'fit') {
				var imageCSS = {
					width: containerDim.height * imageRatio >= containerDim.width ? containerDim.width : (containerDim.height * imageRatio),
					height: containerDim.height * imageRatio >= containerDim.width ? containerDim.width / imageRatio : containerDim.height,
					marginLeft:0,
					marginTop: 0
				};
			} 
			
			//If resize type is "FILL"
			else {
				$container.css('overflow','hidden');
				
				var imageCSS = {
					width: containerRatio <= imageRatio ? containerDim.height * imageRatio : containerDim.width,
					height: containerRatio <= imageRatio ? containerDim.height : containerDim.width / imageRatio,
					marginLeft: 0,
					marginTop: 0
				};	
			}
			
			// Alignment options
			if (opts.align.horizontal == 'right')
				imageCSS.marginLeft = originalContainerDim.width - imageCSS.width;
			else if (opts.align.horizontal == 'center')
				imageCSS.marginLeft = (originalContainerDim.width - imageCSS.width) / 2;
				
			if (opts.align.vertical == 'bottom')
				imageCSS.marginTop = originalContainerDim.height - imageCSS.height;
			else if (opts.align.vertical == 'middle')
				imageCSS.marginTop = (originalContainerDim.height - imageCSS.height) / 2;


			console.log(originalContainerDim.width);
			console.log(containerDim.width);
			

			$this.css(imageCSS);
			
			counter++;
			
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