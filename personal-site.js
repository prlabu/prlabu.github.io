

$(document).ready(function () {

	$('#name-wrapper').fadeIn(2000, 
		function(){
			$('#last-name').animate({'margin-left':'40px'},500, 
				function(){
					$('#last-name').animate({'margin-left':'2px'},100);
				}
			);
		}
	);
	
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

	var main1TopPos	= $('#main-1').position().top;
	var main2TopPos	= $('#main-2').position().top - 250;
	var main3TopPos	= $('#main-3').position().top - 250;
	

	

	var yScroll;

	var selectorIndInterval = setInterval(function () {selectorIndicators()}, 100);
	function selectorIndicators(){
		yScroll = $(document).scrollTop();

		if (yScroll >= main1TopPos && yScroll < main2TopPos) {
			$('#main-1-select-indicator').css('background-color','white');
			$('#main-1-select-text').css('color','white');
			$('#main-2-select-indicator').css('background-color','#222940');
			$('#main-2-select-text').css('color','#222940');
			$('#main-3-select-indicator').css('background-color','#222940');
			$('#main-3-select-text').css('color','#222940');
		}
		if ( yScroll >= main2TopPos && yScroll < main3TopPos) {
			$('#main-1-select-indicator').css('background-color','#222940');
			$('#main-1-select-text').css('color','#222940');
			$('#main-2-select-indicator').css('background-color','white');
			$('#main-2-select-text').css('color','white');
			$('#main-3-select-indicator').css('background-color','#222940');
			$('#main-3-select-text').css('color','#222940');
		}
		
		if ( yScroll >= main3TopPos && yScroll < 10000) {
			$('#main-1-select-indicator').css('background-color','#222940');
			$('#main-1-select-text').css('color','#222940');
			$('#main-2-select-indicator').css('background-color','#222940');
			$('#main-2-select-text').css('color','#222940');
			$('#main-3-select-indicator').css('background-color','white');
			$('#main-3-select-text').css('color','white');
		}





	}

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
	

	


});