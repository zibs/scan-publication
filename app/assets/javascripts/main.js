$(document).ready(function() {
$(".issue-btn").click(function() {
	// SET LINK
	var link = $(this).children()[0];
	// GET VARIABLES
	var caret       = $(link)[0].nextElementSibling;
	var offsetCaret = $(caret).offset().left;
	var h 			= Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	var w           = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);	
	var realWidth   = 6 + (offsetCaret - (w * 0.08333333333));
	// SET CANVAS
	var canvas      = document.getElementById("canvas-" + $(link).attr('id'));
				// CANVAS IS ACTIVE, SO FADE IT OUT (this means it is a reclick)
		if ( $(canvas).hasClass("active-canvas") ){
				$(canvas).fadeOut(1).removeClass("active-canvas");
			}
				// CANVAS IS NOT ACTIVE, FADE OUT OTHER CANVI, SWITCH OTHER CARET, FADE IN THIS CANVAS
		else 	{
			 	$(".active-canvas").fadeOut(1).removeClass("active-canvas");
			 	$(".fa-caret-down").addClass("fa-caret-right")
				$(canvas).fadeIn(500).addClass("active-canvas");
			}
	// SET CANVAS W+H
	canvas.width    = w;
	canvas.height   = 200;
	// CENTEROFISSUEINFO
	var issueInfo   = document.getElementById($(link).attr('id') + "-info");
			// INFO IS ACTIVE, SO FADE IT OUT (this is a reclick)
		if ( $(issueInfo).hasClass("active-info") ) {
				$(issueInfo).fadeOut(500).removeClass("active-info");
		} 
			// INFO IS NOT ACTIVE, FADE OUT OTHER INFOS, FADE IN THIS INFO
		else {
				$(".active-info").fadeOut(500).removeClass("active-info");
				$(issueInfo).fadeIn(500).addClass("active-info");	
		}
	// SET CENTER of INFO div
	var centerInfo  = (   ( $(issueInfo).width() / 2 )   )
	// RANDOMSIZELINES
	var horizo = ( realWidth + (Math.floor(Math.random() * 1000) / 2));
	// DRAW!
	var ctx = canvas.getContext("2d");
	ctx.setLineDash([5, 15]);
	ctx.beginPath();
	ctx.moveTo(realWidth, 0);
	ctx.lineTo(realWidth, 40);
	ctx.lineTo(horizo, 40)
	ctx.lineTo(horizo, 80)
	ctx.lineTo(centerInfo, 80)
	ctx.lineTo(centerInfo, 160)
	ctx.stroke();
	// FADE
	// $(issueInfo).fadeToggle(500);
	// $(canvas).fadeIn(1);
// $(".active-canvas").toggleClass("active-canvas");
// $(".active-info").toggleClass("active-info");
// $("canvas.active-canvas").removeClass("active-canvas");
// $("section.active-info").removeClass("active-info");
		})
	})
// TOGGLE CARET
$(document).ready(function() {
	$(".issue-btn").click(function() {
	var elem = $(this).children()[1];
		if ( $(elem).hasClass("fa-caret-right") ) {
				$(elem).removeClass("fa-caret-right").addClass("fa-caret-down");
			}
			else {
				$(elem).removeClass("fa-caret-down").addClass("fa-caret-right");
			}
	});
});
