(function(a){
	new WOW().init();
	a("container").imagesLoaded(function(){
		a(".filtering-button").on("click","a",function(){
		var c=a(this).attr("data-filter");
		b.isotope({filter:c})});
		a(".filtering-button").on("click","a",function(){a(".filtering-button a").removeClass("active");
		a(this).addClass("active")});
		var b=a(".grid").isotope({
			itemSelector:".grid-item",percentPosition:true,animationOptions:{duration:500,easing:"zoom-in"},masonry:{columnWidth:".grid-item"},transitionDuration:".9s"})});
		a(".slide-happyclint").owlCarousel({autoPlay:true,slideSpeed:5000,pagination:false,navigation:true,items:1,navigationText:["<i class='flaticon-left-arrow'></i>","<i class='flaticon-right-arrow'></i>"],itemsDesktop:[1199,1],itemsDesktopSmall:[980,1],itemsTablet:[768,1],itemsMobile:[479,1],});
		a(".slide-testimonai.owlCarousel").owlCarousel({autoPlay:false,slideSpeed:5000,pagination:false,navigation:false,items:1,navigationText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],itemsDesktop:[1199,1],itemsDesktopSmall:[980,1],itemsTablet:[768,1],itemsMobile:[479,1],});
		a(".element").typed({strings:["Elizabeth de la Paz","Programmer Engineer","From Cuba"],typeSpeed:10,loop:true,backDelay:2000});
       
	   	// Contact form
	var form = $('#main-contact-form');
	form.submit(function(event){
		event.preventDefault();
		var form_status = $('<div class="form_status"></div>');
		$.ajax({
			url: $(this).attr('action'),

			beforeSend: function(){
				form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
			}
		}).done(function(data){
			form_status.html('<p class="text-success">' + data.message + '</p>').delay(3000).fadeOut();
		});
	});
	
        a("#progress-bar").appear(function(){
	    a("#bar1").barfiller({barColor:"purple",duration:3000});
		a("#bar2").barfiller({barColor:"purple",duration:3000});
		a("#bar3").barfiller({barColor:"purple",duration:2000});
		a("#bar4").barfiller({barColor:"purple",duration:4000});
		a("#bar5").barfiller({barColor:"purple",duration:4000});
		a("#bar6").barfiller({barColor:"purple",duration:3000});
		a("#bar7").barfiller({barColor:"purple",duration:3000});
		a("#bar8").barfiller({barColor:"purple",duration:2000});
		a("#bar9").barfiller({barColor:"purple",duration:4000});
		a("#bar10").barfiller({barColor:"purple",duration:4000})});
	
		
        
	    if(a("#gmap").length>0){
			new GMaps({div:"#gmap",lat:23.7947172,lng:90.39714119999999,scrollwheel:false,styles:[{featureType:"landscape",elementType:"geometry",stylers:[{color:"#dddddd"},{lightness:20}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffffff"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#ffffff"},{lightness:29},{weight:0.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#dddddd"},{lightness:16}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:21}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:21}]},{elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#ffffff"},{lightness:16}]},{elementType:"labels.icon",stylers:[{visibility:"on"}]}]}).addMarker({lat:23.79293,lng:90.403798,infoWindow:{content:"<p> loaction</p>"}})}
			
			})(jQuery);