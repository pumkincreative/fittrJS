fittr.JS
=======

A jQuery plugin for the clever fitting of images within containers

<h2>Basic usage</h2>

<pre class="prettyprint">$('.fittr').fittr();</pre>

<p>Resizes the target element(s) to fit the surrounding container. <a href="http://pumkin.co.uk/plugins/fittr/#demo" target="_blank">See it working here</a>.</p>

<p>The only CSS requirement is that the container has a defined height and width, either fixed or fluid.</p>

<h2>Parameters</h2>

<p>There are various parameters to choose from when firing the fittr function.</p>

<pre class="prettyprint">container:</pre>

<strong>Options:</strong> Any jQuery selector.<br>
<strong>Default:</strong> 'div'

<p>Choose the selector for the container you want the image to resize to. This has been added for cases where the image is wrapped in an inline-tag (e.g., "a"</pre>) before being wrapped in the tag you want the image to resize to.</p>


<pre class="prettyprint">imgWidth:</pre><span class="andGap"> & </span><pre class="prettyprint">imgHeight:</pre>

<strong>Options:</strong> Any number value<br>
<strong>Default: </strong>unspecified

<p>Use this parameter if you want to manually specify the original dimensions of the image you want to resize. The plugin will normally get these values from the attributes within the img tag, from the CSS, or from the image itself after it has loaded. But if these are missing you would do best to specify them here.</p>


<pre class="prettyprint">containerWidth:</pre><span class="andGap"> & </span><pre class="prettyprint">containerHeight:</pre>

<strong>Options: </strong> Any number value<br>
<strong>Default:</strong> unspecified

<p>Use this parameter if you want to manually specify the dimensions of the container. The plugin will normally get these values from the CSS but if these value are missing you would do best to specify them here.</p>


<pre class="prettyprint">gap : {
	vertical: //value
	horizontal: //value
}</pre>

<strong>Options:</strong> Any number value<br>
<strong>Default: </strong>0

<p>Defines a gap in pixels between the image and the container.</p>



<pre class="prettyprint">align : {
	vertical: //value
	horizontal: //value
}</pre>

<strong>Options:</strong><br>
	<strong>vertical:</strong> 'top' (default), 'bottom', 'middle' or any number value <br>
	<strong>horizontal:</strong> 'left' (default), 'right', 'center' or any number value

<p>Defines a gap in pixels between the image and the container.</p>


<pre class="prettyprint">resizeType:</pre>

<strong>Options:</strong> 'fit' (default), 'fill'

<p>Chooses whether the image will be resized to fit within the container or fill it completely. If fill is chosen, the aspect ratio will be maintained but there will be some cropping at the bottom.</p>



<pre class="prettyprint">autoResize:</pre>

<strong>Options:</strong> boolean<br>
<strong>Default:</strong> true

<p>Chooses whether the image will resize to fit the container if the container size changes. This is useful if using fluid sizing on the container.</p>

<p>To ensure reliable resizing when targeting several images, the <a href="http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods" target="_blank">SmartResize plugin</a> written by John Hann has been included and is invoked when the number of images exceeds 10.</p>

<pre class="prettyprint">forceDebounce:</pre>

<strong>Options:</strong> boolean<br>
<strong>Default:</strong> false

<p>The option to force the use of SmartResize (see above).</p>
