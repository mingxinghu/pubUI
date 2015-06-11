"use strict";

var Index = {};
Index.isShow = false;
Index.isExcuting = false;
Index.HidePopoverForDelay = function(){
	Index.isExcuting = true;
	setTimeout(function () {
		if(!Index.isShow){
			$("#qr_button").popover('hide');
		}
		Index.isExcuting = false;
	}, 500);
};
Index.registerPopover = function(){
	var qrButton = $("#qr_button");
	qrButton.bind({
		mouseover:function(){
			qrButton.popover('show');
			Index.isShow = true;
			var popoverDiv = $("div[class='popover fade left in']");
			popoverDiv.bind({
				mouseover:function(){
					Index.isShow = true;
				},
				mouseout:function(){
					Index.isShow = false;
					if(!Index.isExcuting) Index.HidePopoverForDelay();
				}
			});
		},
		mouseout:function(){
			Index.isShow = false;
			if(!Index.isExcuting) Index.HidePopoverForDelay();
		}
	});
};
Index.registerDownload = function(){
	var downloadBtn = $("#download_button");
	downloadBtn.click(function(){
		/*var offset = downloadBtn.offset();
		util.log.print(util.log.level.INFO, "x:"+offset.top + "-y:" + offset.left);
		 var downloadDiv = $("#download_div");
		 downloadDiv.css({
		 position: "absolute",
		 top: offset.top,
		 left: offset.left
		 });
		*/
		var downloadParentDiv = $("#download_parent_div");
		var html = "<div id=\"download_div\" tabindex=\"55\" class=\"col-md-6 col-md-offset-3\">" +
			"    <div class=\"col-md-6\">" +
			"        <a href=\"\"><i class=\"app-qr\"></i></a>" +
			"    </div>" +
			"    <div class=\"col-md-3\">" +
			"        <a href=\"\"><i class=\"app-ios\"></i></a>" +
			"    </div>" +
			"    <div class=\"col-md-3\">" +
			"        <a href=\"\"><i class=\"app-android\"></i></a>" +
			"    </div>" +
			"</div>";
		downloadParentDiv.html(html);
		var downloadDiv = $("#download_div");
		downloadDiv.blur(function(){
			downloadParentDiv.html("<a id=\"download_button\" href=\"javascript:void(0)\" class=\"btn btn-default index-button-download\">点击下载</a>");
			Index.registerDownload();
		});
		downloadDiv.show(400);
		downloadDiv.focus();

	});
};

$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', '3rdPage'],
		//sectionsColor: ['#C63D0F', '#FFFFFF', '#7E8F7C'],
		navigation: true,
		scrollOverflow: true,
		navigationColor: "#FF6628",
		navigationPosition: 'right',
		navigationTooltips: ['第一页', '第二页', '第三页'],
		afterLoad: function(anchorLink, index){
			console.log(index);
			if(index == 1){
				var currentSection = $('#section0');
				currentSection.find('img').delay(100).animate({
					left: '0%'
				}, 1500, 'easeOutExpo');
				currentSection.find('p').first().fadeIn(1800, function(){
					$('#section0').find('p').last().fadeIn(1800);
				});
			}else if(index == 2){
				var currentSection = $("#section1");
				currentSection.find('img').delay(100).animate({
					right: '0%'
				}, 1500, 'easeOutExpo');
				currentSection.find('p').first().delay(100).animate({
					left: '0%'
				}, 1500, 'easeOutExpo');
				currentSection.find('p').last().delay(300).animate({
					left: '0%'
				}, 1500, 'easeOutExpo');
			}
		}
	});
	$('#dg-container').gallery();
	$("#qr_button").popover({
		content: "<div class='row'><div class='col-md-4'><a href=''><i class='app-ios'></i></a></div><div class='col-md-4 col-md-offset-2'><a href=''><i class='app-android'></i></a></div></div>"
	});
	util.log.print(util.log.level.INFO, "register event!");
	Index.registerPopover();
	Index.registerDownload();

});
