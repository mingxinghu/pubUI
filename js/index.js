"use strict";
$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', '3rdPage'],
		//sectionsColor: ['#C63D0F', '#FFFFFF', '#7E8F7C'],
		navigation: true,
		scrollOverflow: true,
		navigationPosition: 'right',
		navigationTooltips: ['第一页', '第二页', '第三页']
	});
	$('#dg-container').gallery();
});
/*
$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});
});*/
