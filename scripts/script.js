

$(document).ready( function() {
    $("#verticalNav").hide(); //hide your div initially
    var topOfOthDiv = $("#tableContent").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
            $("#verticalNav").show(); //reached the desired point -- show div            
        }
        if($(window).scrollTop() < topOfOthDiv) { //scrolled past the other div?
            $("#verticalNav").fadeOut(); //reached the desired point -- show div            
        }
    });
});


/*
var p = $( "#navAppear" );
var offset = p.offset();
offset = offset.top;

$(window).scroll(function () {  
    if ($(window).scrollTop()   >  offset ) {
 $("#verticalNav").fadeIn();
    }
  else { $("#verticalNav").fadeOut(); }
});
*/



// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


$(document).on('click', 'a[href^="#"]', function(event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});


jQuery(document).ready(function($){
	var contentSections = $('.cd-section'),
		navigationItems = $('#cd-vertical-nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});


  $('.openLightBoxLink').on('click', function(event){
    event.preventDefault();
    $('#fade').hide();
    $('.lightbox').fadeIn(); 
  });

  $('.closeLightBoxLink').on('click', function(event){
    event.preventDefault();
    $('.lightbox').hide();
    $('#fade').fadeIn();
  });

  $('#cd-vertical-nav a').on('click', function(event){ 
    console.log(event.target);
    $('#cd-vertical-nav a').each(function(i){ 
      this.removeClass('is_selected'); 
    }); 
    event.target.addClass('is_selected');
  })

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function(){
    	$('.touch #cd-vertical-nav').toggleClass('open');
  
    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #cd-vertical-nav a').on('click', function(){
    	$('.touch #cd-vertical-nav').removeClass('open');
    });


	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	600
        );
	}
});