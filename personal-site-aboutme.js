

$(document).ready(function () {

	$('#name-wrapper').fadeIn(2000);
	
	$('#main-1-center-container').fadeIn(3000);



	//TIMER START
	var dispTimeInt = setInterval(function () {dispTime()}, 1000);
	function dispTime () {
		var lastAccessTime = new Date();
		var lastAccessDateString = lastAccessTime.toDateString();
		var lastAccessHour = lastAccessTime.getHours();
		var lastAccessMinute = lastAccessTime.getMinutes();
		var lastAccessSecond = lastAccessTime.getSeconds();

		if(lastAccessHour > 12){
			lastAccessHour =  lastAccessHour - 12;
		};

		var myElement = document.getElementById('last-access-date');
		myElement.textContent = lastAccessHour + ':' + lastAccessMinute + ':' + lastAccessSecond + ' ' + lastAccessDateString;
	};
	// TIMER END

	
	

	

	


	

	var myVar=setInterval(function () {scrollPos()}, 100);
	
	function scrollPos() {
		realTimeYScroll = $(document).scrollTop();
		$('#y-scroll-pos').text(realTimeYScroll);

	}


	$('#new-article').click(function () {
		$('#article-container').append("<div class='article'></div>");
		
	})

	$('.collapse-expand').click(function () {
		$(this).parent().children('.article-body').toggle();
		$(this).children().toggleClass('expand-option');
		$(this).children().toggleClass('collapse-option');
	});

	$('.topic').click(function () {
		$(this).children('.topic-details-container').slideToggle('swing');
	});

	$('.topic').css( 'cursor', 'pointer' );
	
	$(".topic h2").hover(function() {
  		$(this).css('margin-left', 20);
	}, function() {
  		$(this).css('margin', 0);
	});

	$('body').find('*').css('border', '1px solid black');
	
	

	


});