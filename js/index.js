"use strict";
$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', '3rdPage'],
		//sectionsColor: ['#C63D0F', '#FFFFFF', '#7E8F7C'],
		navigation: true,
		scrollOverflow: true,
		navigationPosition: 'right',
		navigationTooltips: ['第一页', '第二页', '第三页'],
		afterLoad: function(anchorLink, index){
			console.log(index);
			if(index == 1){
				$('#section0').find('img').delay(500).animate({
					left: '0%'
				}, 1500, 'easeOutExpo');
			}
		}
	});
	$('#dg-container').gallery();
	$("#qr_button").popover({
		content: "<div class='row'><div class='col-md-4'><a href=''><i class='app-ios'></i></a></div><div class='col-md-4 col-md-offset-2'><a href=''><i class='app-android'></i></a></div></div>"
	});

});
