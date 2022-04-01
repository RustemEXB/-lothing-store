
$('.product__images-link').click(function(e) {
	e.preventDefault()
	let src = $(this).attr('href')
	$('.product__images-main').attr('src', src)
	$('.product__image-link').removeClass('_active')
	$(this).addClass('_active')
 })


// $('.product__image-slide').click(function(e) {
//	e.preventDefault()
//	let src = $(this).attr('href')
//	$('.product__image-img').attr('src', src)
//	$('.product__image-slide').removeClass('_active')
//	$(this).addClass('_active')
// })