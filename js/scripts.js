
$('.fluid').fittr();

$('.gappy').fittr({
	gap: {
		vertical:20,
		horizontal:20
	},
	align: {
		vertical:'middle',
		horizontal:'center'
	},
	container: 'article'
});

$('.filler').fittr({
	resizeType: 'fill',
	align: {
		vertical:'bottom',
		horizontal:'left'
	}
	// imgWidth: 820,
 //    imgHeight: 615
});

$('#top').click(function () {
	$('body,html').animate({scrollTop: 0}, 800);
});