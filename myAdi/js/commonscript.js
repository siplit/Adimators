$(function(){
	$('#slider').rbtSlider({
		height: '100vh', 
		'dots': true,
		'arrows': true,
		'auto': false
	});
});

$(document).ready(function(){
 //  	$('.bxslider').bxSlider({
	// 	auto: true,
	// 	controls: false,
	// 	pause: 3000,
	// 	autoHover: true,
	// 	tickerHover: true,
	// 	autoplay: true,
	// 	//autoControls: false
	// 	//pause: 5000,
	// });
	// short logo slider 
	
});


$(document).ready(function(){
    var highestBox = 0;
        $('.workwithus .column').each(function(){
			if($(this).height() > highestBox){
			highestBox = $(this).height();  
        }
    });
    $('.workwithus .column').height(highestBox);
});


function hideerr(){

  setTimeout(function(){ 
	 $('.catcherror').hide();
   }, 3000);

}


 
  


// name validation number
$('.namefield').keypress(function(e) {
	e = e || window.event;
	var charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
	var charStr = String.fromCharCode(charCode);
	if (/\d/.test(charStr)) {
	return false;
	}
});

// name validation special charactor
$('.namefield').keyup(function() {
	var yourInput = $(this).val();
	re = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
	var isSplChar = re.test(yourInput);
	if(isSplChar)
	{
		var no_spl_char = yourInput.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
		$(this).val(no_spl_char);
	}
});

// onkeyup="numbersonly(event)"
function numbersonly(e){
	e.target.value = e.target.value.replace(/[^\d]/g,'');
	return false;
}

// onkeyup="textOnly(event)"
function textOnly(e){
    e.target.value = e.target.value.replace(/\d/,'');
    return false;
}
  
$(document).ready(function(){
    $(".rclickblock").on("contextmenu",function(e){
        return false;
    });
});
	

	//Client Logo
	
	$(document).on('ready', function() {
	 // brand logo slider 
	  $(".br-slider").slick({
	  	//rows: 3,
		dots: true,
		autoplay: false,
		infinite: false,
		speed: 1000,
		loop: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		lazyLoad: 'ondemand',
		// responsive: [
		// {
		//   breakpoint: 1200,
		//   settings: {
		// 	slidesToShow: 4,
		// 	slidesToScroll: 4,
		// 	infinite: false,
		// 	dots: false
		//   }
		// },
		// {
		//   breakpoint: 1000,
		//   settings: {
		// 	slidesToShow: 4,
		// 	slidesToScroll: 4,
		// 	infinite: false,
		// 	dots: false
		//   }
		// },
		// {
		//   breakpoint: 600,
		//   settings: {
		// 	slidesToShow: 3,
		// 	slidesToScroll: 3
		//   }
		// },
		// {
		//   breakpoint: 480,
		//   settings: {
		// 	slidesToShow: 3,
		// 	slidesToScroll: 3
		//   }
		// }
	 //  ]
  });

	  
  
	});
  
	
  	(function($){
		$(window).load(function(){
			// add active class in header
			$("nav ul li.holink").addClass('active');
		});
		
	})(jQuery);