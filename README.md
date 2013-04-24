fittrJS
=======

A jQuery plugin for the clever fitting of images within containers

<h2>Basic usage</h2>

	<pre class="prettyprint">$('.fittr').fittr();</pre>

<p>Resizes the target element(s) to fit the surrounding container.</p>

<p>The only CSS requirement is that the container has a defined height and width, either fixed or fluid.</p>

<h2>Parameters</h2>

<p>There are various parameters to choose from when firing the fittr function.</p>

<pre class="prettyprint">container:</pre>

	<p><span class="option">Options: </span>Any jQuery selector.<br>
	<span class="option">Default: </span><span class="optionValue">'div'</span></p>

<p>Choose the selector for the container you want the image to resize to. This has been added for cases where the image is wrapped in an inline-tag (e.g., "a"</pre>) before being wrapped in the tag you want the image to resize to.</p>


<pre class="prettyprint">imgWidth:</pre><span class="andGap"> & </span><pre class="prettyprint">imgHeight:</pre>

	<p><span class="option">Options: </span>Any number value</br>
	<span class="option">Default: </span>unspecified</p>

<p>Use this parameter if you want to manually specify the original dimensions of the image you want to resize. The plugin will normally get these values from the attributes within the img tag, from the CSS, or from the image itself after it has loaded. But if these are missing you would do best to specify them here.</p>


<pre class="prettyprint">containerWidth:</pre><span class="andGap"> & </span><pre class="prettyprint">containerHeight:</pre>

	<p><span class="option">Options: </span> Any number value<br>
	<span class="option">Default: </span>unspecified</p>

<p>Use this parameter if you want to manually specify the dimensions of the container. The plugin will normally get these values from the CSS but if these value are missing you would do best to specify them here.</p>


<pre class="prettyprint">gap : {
	vertical: //value
	horizontal: //value
}</pre>

	<p><span class="option">Options: </span> Any number value<br>
	<span class="option">Default: </span><span class="optionValue">0</span></p>
<p>Defines a gap in pixels between the image and the container.</p>



<pre class="prettyprint">align : {
	vertical: //value
	horizontal: //value
}</pre>

	<p><span class="option">Options</span></p>

		<p><span class="option">vertical: </span>
			<span class="optionValue">'top'</span> (default), <span class="optionValue">'bottom'</span>, <span class="optionValue">'middle'</span> or any number value <br>
		<span class="option">horizontal: </span>
			<span class="optionValue">'left'</span> (default), <span class="optionValue">'right'</span>, <span class="optionValue">'center'</span> or any number value</p>

<p>Defines a gap in pixels between the image and the container.</p>


<pre class="prettyprint">resizeType:</pre>

	<p><span class="option">Options: </span>'fit' (default), 'fill'</p>

<p>Chooses whether the image will be resized to fit within the container or fill it completely. If fill is chosen, the aspect ratio will be maintained but there will be some cropping at the bottom.</p>



<pre class="prettyprint">autoResize:</pre>

Options: boolean<br>
Default: true

<p>Chooses whether the image will resize to fit the container if the container size changes. This is useful if using fluid sizing on the container.</p>

<p>To ensure reliable resizing when targeting several images, the <a href="http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods" target="_blank">SmartResize plugin</a> written by John Hann has been included and is invoked when the number of images exceeds 10.</p>

<pre class="prettyprint">forceDebounce:</pre>

Options: boolean<br>
Default: false

<p>The option to force the use of SmartResize (see above).</p>
