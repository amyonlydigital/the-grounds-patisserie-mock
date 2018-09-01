
// expanding search field - search code pen by alex oliver


// ............................................SHOP DROP DOWN

$('.box').slideUp();

$('#shop-dropdown-header').click(function(){
  $('.fa-chevron-circle-down').toggleClass('turn-down');
});

// ............................................LOCATIONS DROP DOWN 

//(not working properly with image gallery inserted below)

$('.location-box, .mapouter').slideUp();

$('#locations-dropdown-header').click(function(){
	$('.location-box, .mapouter').slideToggle();
	$('.fa-chevron-circle-down').css('transform', 'rotate(180deg').css('transition', 'transform 0.5s');

});

// ............................................SLICK SLIDER

$('.carousel').slick({
	dots:true,
	slidesToShow: 6,
	slidesToScroll: 1
 });

$('.slick-next, .slick-prev').hide();

// ............................................SHOP HOVER TO CHANGE IMAGES 



$('.shop-images').hover(function(){

	$(this).attr('src', $(this).attr('data-img-1'));
}, function(){
	$(this).attr('src', $(this).attr('data-img-2'));

});

// ............................................HAMBURGER ROTATE ICON + OPEN

$ ('#hamburger').click(function(){
    // console.log('running')
    $('header nav, #hamburger').toggleClass('open');
    $('#ham-menu').toggleClass('toggle-display')
});

// ............................................CAKES CATEGORY SCROLL DOWN

$("#shop-cakes").click(function(){

  $('html, body').animate({
    scrollTop: $('#cakes-products').offset().top - 60
  }, 1500);

});

// ............................................TARTS CATEGORY SCROLL DOWN

$("#shop-tarts").click(function(){

  $('html, body').animate({
    scrollTop: $('#tarts-products').offset().top - 60
  }, 1500);

});

// ............................................KIDS CATEGORY SCROLL DOWN

$("#shop-kids").click(function(){

  $('html, body').animate({
    scrollTop: $('#kids-products').offset().top - 60
  }, 1500);

});

$('.product-modal').click(function(){

	$('.modal-title').html( $(this).attr('data-name') );
	$('#modal-img').attr('src', $(this).find('.shop-images').attr('data-img-1') );
	console.log( $(this).find('.shop-images').attr('data-img-1') );

});
