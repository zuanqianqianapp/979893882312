$(".js-mb-nav").click(function () {
	if (!$(this).hasClass("active")) {
		$(this).addClass("active");
		$(".js-mb-menu").animate({ "left": "30%" }, 200);
		$(".page-wrap").animate({ "right": "70%" }, 200);
		$(".mb-header").animate({ "right": "70%" }, 200);
		$(".mb-footer").animate({ "right": "70%" }, 200);
		$(".shade").show();
	} else {
		$(this).removeClass("active");
		$(".js-mb-menu").animate({ "left": "100%" }, 200);
		$(".page-wrap").animate({ "right": "0" }, 200);
		$(".mb-header").animate({ "right": "0" }, 200);
		$(".mb-footer").animate({ "right": "0" }, 200);
		$(".shade").hide();
	}
});

$(".shade").click(function () {
	$(this).hide();
	$(".js-mb-nav").removeClass("active");
	$(".js-mb-menu").animate({ "left": "100%" }, 200);
	$(".page-wrap").animate({ "right": "0" }, 200);
	$(".mb-header").animate({ "right": "0" }, 200);
	$(".mb-footer").animate({ "right": "0" }, 200);
});

$(".js-mb-menu li").each(function () {
	var menuSlide = $(this).children(".menu-slide");

	if (menuSlide.length) {
		menuSlide.prev().addClass("js-slide-bar haschild default");
	};
});

$(".js-slide-bar").click(function () {

	if ($(this).next(".menu-slide").css("display") == "none") {
		$(this).siblings(".menu-slide").addClass('active')
		$(this).next(".menu-slide").slideDown(200).parent().siblings().find(".menu-slide").slideUp(200);;
		$(this).removeClass("default").addClass("active").parent().siblings().children(".haschild").removeClass("active").addClass("default");
	} else {
		$(this).next(".menu-slide").slideUp(200);
		$(this).siblings(".menu-slide").removeClass('active')
		$(this).removeClass("active").addClass("default");
	}
});