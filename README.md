fittrJS
=======

A jQuery plugin for the clever fitting of images within containers

Basic usage

  $('.fittr').fittr();

Resizes the target element(s) to fit the surrounding container.

The only CSS requirement is that the container has a defined height and width, either fixed or fluid.

Parameters

There are various parameters to choose from when firing the fittr function.

container

	Options: Any jQuery selection.
	Default: 'div'

Choose the selector for the container you want the image to resize to. This has been added for cases where the image is wrapped in an inline-tag (e.g., <a>) before being wrapped in the tag you want the image to resize to.


imgWidth & imgHeight

	Options: Any number value
	Default: unspecified

Use this parameter if you want to manually specify the original dimensions of the image you want to resize. The plugin will normally get these values from the attributes within the img tag, from the CSS, or from the image itself after it has loaded. But if these are missing you would do best to specify them here.


containerWidth & containerHeight

	Options: Any number value
	Default: unspecified

Use this parameter if you want to manually specify the dimensions of the container. The plugin will normally get these values from the CSS but if these value are missing you would do best to specify them here.


gap : {
	vertical
	horizontal
}

	Options: 0  (default), & any number value

Defines a gap in pixels between the image and the container.



align : {
	vertical
	horizontal
}

	Options:

		vertical
			'top' (default), 'bottom', 'middle' & any number value 
		horizontal
			'left' (default), 'right', 'center' & any number value 

Defines a gap in pixels between the image and the container.


resizeType

	Options: 'fit' (default), 'fill'

Chooses whether the image will be resized to fit within the container or fill it completely. If fill is chosen, the aspect ratio will be maintained but there will be some cropping at the bottom.



autoResize

	Options: boolean
	Default: true

Chooses whether the image will resize to fit the container if the container size changes. This is useful if using fluid sizing on the container.

To ensure reliable resizing when targeting several images, the SmartResize plugin written by John Hann (http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/) has been included and is invoked when the number of images exceeds 10.


forceDebounce

	Options: boolean
	Default: false

The option to force the use of SmartResize (see above).


Example implementation


$('.fittr').fittr({
	gap: {
		vertical:20,
		horizontal:20
	},
	align: {
		vertical:'middle',
		horizontal:'center'
	},
	resizeType: 'fit'
});


