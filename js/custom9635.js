$(document).ready(function() {

	var clickHandler = ('ontouchstart' in document.documentElement ? "touchstart" : "click");

	var sxsw = { full_bleed:function(e,t,n,r){var i=n;var s=r;var o=s/i;n=e;r=e*o;if(r<t){r=t;n=r/o}return{width:n,height:r}}};jQuery(document).ready(function(e){function t(){var t=Math.round(e(window).height());var n=Math.round(e(window).width());var r=e(".fill");r.each(function(){var r=e(this).height();var i=e(this).width();var s=sxsw.full_bleed(n,t,i,r);e(this).width(s.width).height(s.height).css("margin-left",(n-s.width)/2).css("margin-top",(t-s.height)/2)})}t();e(window).resize(function(){t()})})

	if($(window).width() < 768 ) {

				$('video').attr('src','video/video.mp4');
				$('video').attr('poster','img/poster_movie3.jpg');

	} else {


	}

	// if($(window).width() < 768 && $(window).width() > 479) {

	// 			$('video').attr('src','video/video.mp4');
	// 			$('video').attr('poster','img/poster_movie-landscape.jpg');

	// } else if($(window).width() < 480) {

	// 			$('video').attr('src','video/video.mp4');
	// 			$('video').attr('poster','img/poster_movie-portrait.jpg');

	// } else {


	// }



	$('#movie video, .layer').fadeIn();

	$('input[type="text"], input[type="password"]').each(function() {
		var val = $(this).attr('value');
		if(val != '')
		{

			$(this).focus(function() {
			    var newVal = $(this).val();
			    if(newVal == val) $(this).val('');
			    });

			$(this).blur(function() {
		       var newVal = $(this).val();
		       if(newVal == '')
		       {
		       $(this).val(val);
		       }
		    });

		}
	})

	$(document).on('click', '#login_btn, #back_btn', function(){

		scrollTop();
		openPopup();

	})

	$(document).on('click', '.open_register', function(){

		scrollTop();
		openPopupRegister();

	})

	$(document).on('touchstart click', '#loginWrapper, .movie_popupWrapper', function(){

		cancelPopup();

	})

	$(document).on('touchstart click', '#register, #login, #forgot_password, #reset_password, .movie_popup', function(e){

		e.stopPropagation();
		
	});
	
	

	$(document).keyup(function(e) {

		if(e.keyCode == 27) {

			cancelPopup();

		}

	})

	$(document).on('click', '#forgot_btn', function(){

		$('#login').hide();
		$('#forgot_password').show();

		if($('input[type="text"]').is(':visible')) {

		$('input[type="text"]:visible').focus();

		} else {

			$('input[type="password"]:first-child').focus();

		}

	})

	// $(document).on('click', '#register_btn', function(){

	// 	$('#login').hide();
	// 	$('#register').show();

	// 	if($('.login_popup .input[type="text"]').is(':visible')) {

	// 	$('.login_popup input[type="text"]:visible').focus();

	// 	} else {

	// 		$('.login_popup input[type="password"]:first-child').focus();

	// 	}

	// })
	
	$('.get_notified').click(function(){
		
		if($(this).hasClass('active')){
		
			$('.get_notified').removeClass('active').text('Get notified');
			$('#register').hide();
			
			$('video').css({
				top: 0
			});
			
			$('#logo, #navigation').css({
				top: 40
			});
			
			$('#headline, #play').css({
				top: 0
			});

			
		}
		
		else {
		
			$('.get_notified').addClass('active');
			$('#navigation .get_notified').text('X');
			
			$('#register').show();	
		
			$('video').css({
				top: 100
			});
			
			$('#logo, #navigation').css({
				top: 140
			});
			
			$('#headline, #play').css({
				top: 230
			});
			
			setTimeout(function(){
			
				$('#sr_email').focus();	
				
			}, 50);
			
		}
		
	})

	$('#play').click(function(){

		$('body').prepend('<div class="movie_popupWrapper"><div class="movie_popup"><iframe src="//player.vimeo.com/video/98447749?title=0&amp;byline=0&amp;portrait=0&amp;color=69c0af&amp;autoplay=1" width="854" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div></div>');
		$('.movie_popupWrapper').fadeIn();

		$('video')[0].pause();
		
		// screen_w = $(document).width();
		// screen_h = $(window).height();
		
		// $('body').animate({
		// 	paddingTop: screen_h
		// }, 500);
		
		// $('body, html').animate({ scrollTop: 0 }, 500);
		// $('body').css('overflow','hidden');
		
		// $('#navigation, #headline, #play, #logo, .layer').fadeOut();
		
		// setTimeout(function(){
			
		// 	if($('video').hasClass('played')){
				
		// 		$('video').removeProp('muted').removeProp('loop');
		// 		$('video')[0].play();
				
		// 	}
			
		// 	else {
				
		// 		$('video').attr('src','video/video.mp4').removeProp('muted').removeProp('loop')
				
		// 	}
			
		// 	$('video').attr('controls', 'true').css('z-index','999');
			
		// 	$('body').prepend('<div class="close"></div>');
		// 	$('.close').fadeIn();
			
		// 	$('video').addClass('played');
			
		// }, 500);
		
		
	});

	$(document).on('click', '.movie_popupWrapper', function(){

		cancelPopup();

	})
	
	$(document).on('click', '.close', function(){
		
		$('body').animate({
			paddingTop: 600
		}, 500);
		
		$('body').css('overflow','');
		
		$('#navigation, #headline, #play, #logo, .layer').fadeIn();
		
		setTimeout(function(){
			$('video').attr('controls', 'false').prop('muted', true).css('z-index','');
			
			$('.close').remove();
			
		}, 500);
		
		$('video')[0].pause();
		
	})
	
	var video = document.getElementsByTagName('video')[0];

	video.onended = function(e) {
	  $('.close').trigger('click');
	}

	d = new Date();
	
	month = d.getMonth()+1;
	day = d.getDate();
	
	output = d.getFullYear() + '/' +
	    ((''+month).length<2 ? '0' : '') + month + '/' +
	    ((''+day).length<2 ? '0' : '') + day;

	count = 1;

	//CREDITS FUNCTIONS 
	
	//Enter amount of credits
	$('#define_amount').keyup(function(){
		
		//vars
		val = $(this).val();
		val = val.toString().replace(/\./g, '');
		original = val * 0.02;
		
		//If under 5000
		if(val < 5000){
			
			price = (val * 0.02).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
			bare = val * 0.02;
			
		}
		
		//Else above 4999 and below 49999
		else if(val > 4999 && val <50000){
			
			price = (val * 0.015).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
			bare = val * 0.015;
			
		}
		
		//Else above 49999 and below 199999
		else if(val > 49999 && val <200000){
			
			price = (val * 0.01).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
			bare = val * 0.01;
			
		}
		
		//Else above 199999 and below 1999999
		else if(val > 199999 && val <2000000){
			
			price = (val * 0.005).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
			bare = val * 0.005;
			
		}
		
		//Else
		else {
			
			//vars
			price = (val * 0.002).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
			bare = val * 0.002;
			
		}
		
		$('#define_amount_price').text('$'+price);
		
	});


	//PLAN FUNCTIONS 

	$(document).ready(function() {
	
	// $('#define_amount').focus();

		
		//Enter amount of credits
	$('#define_amount_plan').keyup(function(){
		
		calcPrices();
		
	});
	
	
});

flag = 0;

function calcPrices(){
	
		//vars
		if(flag == 0){
			
			val = $('#list_name_bar h2 span b').text();
			val = val.toString().replace(/\./g, '').replace(/\,/g, '');

		}
		
		else {
			
			val = $('#define_amount_plan').val();
			val = val.toString().replace(/\./g, '').replace(/\,/g, '');
			$('.hide_it').show();
			$('.result2 .contact_us').hide();

			
		}
		
		original = val * 0.02;
		
		//subscribers
		if(val == 0){ val = 0; savings = 2500; }
		else if(val > 0 && val <501){ val = 500; savings = 2500; }
		else if(val > 500 && val <1001){ val = 1000; savings = 2500; }
		else if(val > 1000 && val <2501){ val = 2500; savings = 10000; }
		else if(val > 2500 && val <3001){ val = 3000; savings = 10000; }
		else if(val > 3000 && val <3501){ val = 3500; savings = 10000; }
		else if(val > 3500 && val <4001){ val = 4000; savings = 10000; }
		else if(val > 4000 && val <4501){ val = 4500; savings = 10000; }
		else if(val > 4500 && val <5001){ val = 5000; savings = 10000; }
		else if(val > 5000 && val <6001){ val = 6000; savings = 10000; }
		else if(val > 6000 && val <7001){ val = 7000; savings = 10000; }
		else if(val > 7000 && val <10001){ val = 10000; savings = 25000; }
		else if(val > 10000 && val <11001){ val = 11000; savings = 25000; }
		else if(val > 11000 && val <12001){ val = 12000; savings = 25000; }
		else if(val > 12000 && val <13001){ val = 13000; savings = 25000; }
		else if(val > 13000 && val <14001){ val = 14000; savings = 25000; }
		else if(val > 14000 && val <15001){ val = 15000; savings = 25000; }
		else if(val > 15000 && val <16001){ val = 16000; savings = 25000; }
		else if(val > 16000 && val <17001){ val = 17000; savings = 25000; }
		else if(val > 17000 && val <25001){ val = 25000; savings = 50000; }
		else if(val > 25000 && val <26001){ val = 26000; savings = 50000; }
		else if(val > 26000 && val <27001){ val = 27000; savings = 50000; }
		else if(val > 27000 && val <28001){ val = 28000; savings = 50000; }
		else if(val > 28000 && val <29001){ val = 29000; savings = 50000; }
		else if(val > 29000 && val <30001){ val = 30000; savings = 50000; }
		else if(val > 30000 && val <31001){ val = 31000; savings = 50000; }
		else if(val > 31000 && val <32001){ val = 32000; savings = 50000; }
		else if(val > 32000 && val <33001){ val = 33000; savings = 50000; }
		else if(val > 33000 && val <34001){ val = 34000; savings = 50000; }
		else if(val > 34000 && val <35001){ val = 35000; savings = 50000; }
		else if(val > 35000 && val <36001){ val = 36000; savings = 50000; }
		else if(val > 36000 && val <37001){ val = 37000; savings = 50000; }
		else if(val > 37000 && val <38001){ val = 38000; savings = 50000; }
		else if(val > 38000 && val <39001){ val = 39000; savings = 50000; }
		else if(val > 39000 && val <40001){ val = 40000; savings = 50000; }
		else if(val > 40000 && val <41001){ val = 41000; savings = 50000; }
		else if(val > 41000 && val <50001){ val = 50000; savings = 75000; }
		else if(val > 50000 && val <52001){ val = 52000; savings = 75000; }
		else if(val > 52000 && val <54001){ val = 54000; savings = 75000; }
		else if(val > 54000 && val <56001){ val = 56000; savings = 75000; }
		else if(val > 56000 && val <58001){ val = 58000; savings = 75000; }
		else if(val > 58000 && val <60001){ val = 60000; savings = 75000; }
		else if(val > 60000 && val <62001){ val = 62000; savings = 75000; }
		else if(val > 62000 && val <64001){ val = 64000; savings = 75000; }
		else if(val > 64000 && val <66001){ val = 66000; savings = 75000; }
		else if(val > 66000 && val <68001){ val = 68000; savings = 75000; }
		else if(val > 68000 && val <70001){ val = 70000; savings = 75000; }
		else if(val > 70000 && val <75001){ val = 75000; savings = 200000; }
		else if(val > 75000 && val <80001){ val = 80000; savings = 200000; }
		else if(val > 80000 && val <85001){ val = 85000; savings = 200000; }
		else if(val > 85000 && val <90001){ val = 90000; savings = 200000; }
		else if(val > 90000 && val <95001){ val = 95000; savings = 200000; }
		else if(val > 95000 && val <100001){ val = 100000; savings = 200000; }
		else if(val > 100000 && val <105001){ val = 105000; savings = 200000; }
		else if(val > 105000 && val <110001){ val = 110000; savings = 200000; }
		else if(val > 110000 && val <115001){ val = 115000; savings = 200000; }
		else if(val > 115000 && val <120001){ val = 120000; savings = 200000; }
		else if(val > 120000 && val <125001){ val = 125000; savings = 200000; }
		else if(val > 125000 && val <130001){ val = 130000; savings = 200000; }
		else if(val > 130000 && val <135001){ val = 135000; savings = 200000; }
		else if(val > 135000 && val <140001){ val = 140000; savings = 200000; }
		else if(val > 140000 && val <145001){ val = 145000; savings = 200000; }
		else if(val > 145000 && val <150001){ val = 150000; savings = 200000; }
		else if(val > 150000 && val <155001){ val = 155000; savings = 200000; }
		else if(val > 155000 && val <160001){ val = 160000; savings = 200000; }
		else if(val > 160000 && val <165001){ val = 165000; savings = 200000; }
		else if(val > 165000 && val <170001){ val = 170000; savings = 200000; }
		else if(val > 170000 && val <175001){ val = 175000; savings = 200000; }
		else if(val > 175000 && val <180001){ val = 180000; savings = 200000; }
		else if(val > 180000 && val <185001){ val = 185000; savings = 200000; }
		else if(val > 185000 && val <190001){ val = 190000; savings = 200000; }
		else if(val > 190000 && val <200001){ val = 200000; }
		else if(val > 200000 ){ /*  val = 4500; */ }				

		mails = (val * 10).toFixed(2);
		mails_t = mails.replace('.00','');

		mails_savings = (savings * 10).toFixed(2);
		mails_savings_t = mails_savings.replace('.00','');
			
		
		if(val < 1){

			val = 500;
			save = 0;
			price_savings_one = 24;
			save_savings = 25;

			mails = (val * 10).toFixed(2);
			mails_t = mails.replace('.00','');

			mails_savings = (savings * 10).toFixed(2);
			mails_savings_t = mails_savings.replace('.00','');
	
			price = (val * 0.02).toFixed(2);
			price_one = price - 1;
		
		}
		
		//If under 5000
		else if(val > 1 && val < 2500){
			
			price = (val * 0.02).toFixed(2);
			price_one = price - 1;
			
			price_original = (val * 0.02).toFixed(2);
			price_original_one = price_original - 1;

			price_savings = (savings * 0.01).toFixed(2);
			price_savings_one = price_savings - 1;

			price_savings_original = (savings * 0.02).toFixed(2);
			price_savings_original_one = price_savings_original - 1;
			price_savings_original_one = Math.ceil(price_savings_original_one); 

			save = (price_original_one - price_one).toFixed(2);
			save = Math.ceil(save);

			save_savings = (price_savings_original_one - price_savings_one).toFixed(2);
			save_savings = Math.ceil(save_savings);
			
		}
		
		//Else above 4999 and below 49999
		else if(val > 2499 && val <10000){

			price = (val * 0.010).toFixed(2);
			price_one = price - 1;

			price_original = (val * 0.02).toFixed(2);
			price_original_one = price_original - 1;

			price_savings = (savings * 0.0075).toFixed(2);
			price_savings_one = price_savings - 1;

			price_savings_original = (savings * 0.02).toFixed(2);
			price_savings_original_one = price_savings_original - 1;
			price_savings_original_one = Math.ceil(price_savings_original_one);

			save = (price_original_one - price_one).toFixed(2);
			save = Math.ceil(save); 

			save_savings = (price_savings_original_one - price_savings_one).toFixed(2);
			save_savings = Math.ceil(save_savings);
			
		}
		
		//Else above 49999 and below 199999
		else if(val > 9999 && val <25000){
			
			price = (val * 0.0075).toFixed(2);
			price_one = price - 1;
			price_one = Math.ceil(price_one);

			price_original = (val * 0.02).toFixed(2);
			price_original_one = price_original - 1;

			price_savings = (savings * 0.0054).toFixed(2);
			price_savings_one = price_savings - 1;
			price_savings_one = Math.ceil(price_savings_one);

			price_savings_original = (savings * 0.02).toFixed(2);
			price_savings_original_one = price_savings_original - 1;
			price_savings_original_one = Math.ceil(price_savings_original_one); 

			save = (price_original_one - price_one).toFixed(2);
			save = Math.ceil(save);

			save_savings = (price_savings_original_one - price_savings_one).toFixed(2);
			save_savings = Math.ceil(save_savings);
			
		}

		//Else above 49999 and below 199999
		else if(val > 24999 && val <50000){
			
			price = (val * 0.0054).toFixed(2);
			price_one = price - 1;
			price_one = Math.ceil(price_one);

			price_original = (val * 0.02).toFixed(2);
			price_original_one = price_original - 1;

			price_savings = (savings * 0.0045).toFixed(2);
			price_savings_one = price_savings - 1;
			price_savings_one = Math.ceil(price_savings_one);

			price_savings_original = (savings * 0.02).toFixed(2);
			price_savings_original_one = price_savings_original - 1;
			price_savings_original_one = Math.ceil(price_savings_original_one);

			save = (price_original_one - price_one).toFixed(2);
			save = Math.ceil(save); 

			save_savings = (price_savings_original_one - price_savings_one).toFixed(2);
			save_savings = Math.ceil(save_savings);
			
		}

		//Else above 49999 and below 199999
		else if(val > 49999 && val <75000){
			
			price = (val * 0.0045).toFixed(2);
			price_one = price - 1;
			price_one = Math.ceil(price_one);

			price_original = (val * 0.02).toFixed(2);
			price_original_one = price_original - 1;

			price_savings = (savings * 0.00427).toFixed(2);
			price_savings_one = price_savings - 1;
			price_savings_one = Math.ceil(price_savings_one);

			price_savings_original = (savings * 0.02).toFixed(2);
			price_savings_original_one = price_savings_original - 1;
			price_savings_original_one = Math.ceil(price_savings_original_one);

			save = (price_original_one - price_one).toFixed(2);
			save = Math.ceil(save); 

			save_savings = (price_savings_original_one - price_savings_one).toFixed(2);
			save_savings = Math.ceil(save_savings);


			
		}

		//Else above 49999 and below 199999
		else if(val > 74999 && val <190001){
			
			price = (val * 0.00427).toFixed(2);
			price_one = price - 1;
			price_one = Math.ceil(price_one);

			price_original = (val * 0.02).toFixed(2);
			price_original_one = price_original - 1;

			price_savings = (savings * 0.00413).toFixed(2);
			price_savings_one = price_savings - 1;
			price_savings_one = Math.ceil(price_savings_one);

			price_savings_original = (savings * 0.02).toFixed(2);
			price_savings_original_one = price_savings_original - 1;
			price_savings_original_one = Math.ceil(price_savings_original_one);

			save = (price_original_one - price_one).toFixed(2);
			save = Math.ceil(save); 

			save_savings = (price_savings_original_one - price_savings_one).toFixed(2);
			save_savings = Math.ceil(save_savings);

			// $('.orangeColor .plan_price_amount').closest('.table_footer').prepend('<div class="contact_us semi_bold"><a style="color: #ea6b3e;" href="mailto:info@stampready.net?subject=Custom plan">CONTACT US</a></div>');
			
		}
		
		//Else above 199999 and below 1999999
		else {
			
			$('.hide_it').hide();
			$('.define_amount_result').text('Custom plan');
			$('.result2 .contact_us').show();
			
			return false;

			
		}


		$('.plan_price_amount').text('$'+price_one);
		$('.define_amount_result').text(val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
	
		flag = 1;
	
};


	$(document).on('keypress', '#define_amount', function(){

		$('.result').slideDown();

	});

	$(document).on('keypress', '#define_amount_plan', function(){

		$('.result2').slideDown();

	});

	$(window).scroll(function() {

		if($(window).scrollTop() + $(window).height() < $(document).height() - 60) {

			$('.slogan').show();
			$('#register-logo').hide();

		} else {

			$('.slogan').hide();
			$('#register-logo').show();  		

		}

	});

	//Allow only numbers
    $(".numericOnly").keypress(function (event) {


        if (String.fromCharCode(event.keyCode).match(/[^,.0-9]/g)) 
            return false;

    });


});

function addAvatar(){

	if(count == 1){ sub_email = 'vinnie@chase.com'; sub_name = 'Vincent Chase'; }
	if(count == 2){ sub_email = 'ari@gold.com'; sub_name = 'Ari Gold'; }
	if(count == 3){ sub_email = 'e@suit.com'; sub_name = 'Eric Murphy'; }
	if(count == 4){ sub_email = 'turtle@avion.com'; sub_name = 'Turtle'; }
	if(count == 5){ sub_email = 'drama@victory.com'; sub_name = 'Johnny Chase'; }
	if(count == 6){ sub_email = 'mrsari@flay.com'; sub_name = 'Mrs Ari'; }
	if(count == 7){ sub_email = 'sloan@mcquewick.com'; sub_name = 'Sloan McQuewick'; }
	if(count == 8){ sub_email = 'lloyd@millergold.com'; sub_name = 'Lloyd Lee'; }
	if(count == 9){ sub_email = 'billy@walsh.com'; sub_name = 'Billy Walsh'; }
	if(count == 10){ sub_email = 'dom@shrek.com'; sub_name = 'Dom'; }

	$('#subscribers').append('<li class="hidden"><div class="subs_avatar"><img src="img/'+count+'.jpg"></div><div class="subs_email">'+sub_email+'</div><div class="subs_name">'+sub_name+'</div><div class="subs_date">'+output+'</div></li>');
	$('#subscribers li').slideDown();

	count++;

}


function cancelPopup(){

	$('#play').fadeIn();
	$('#loginWrapper, .movie_popupWrapper').fadeOut();
	$('body').css('overflow','');

	setTimeout(function(){

		$('.movie_popupWrapper').remove();

	}, 500);

}

function openPopup(){

	$('#forgot_password, #reset_password, #success_reset, #password_sent, #error_login, #register').hide();
	$('#login').show();
	$('#play').fadeOut();
	$('#loginWrapper').fadeIn();
	$('body').css('overflow','hidden');

	setTimeout(function(){

		if($('.login_popup input[type="text"]').is(':visible')) {

		$('.login_popup input[type="text"]:visible').focus();

		} else {

			$('.login_popup input[type="password"]:first-child').focus();

		}

	}, 100)

}

function openPopupRegister(){

	$('#forgot_password, #reset_password, #success_reset, #password_sent, #error_login, #login').hide();
	$('#register').show();
	$('#play').fadeOut();
	$('#loginWrapper').fadeIn();
	$('body').css('overflow','hidden');

	setTimeout(function(){

		if($('.login_popup input[type="text"]').is(':visible')) {

		$('.login_popup input[type="text"]:first-child:visible').focus();

		} else {

			$('.login_popup input[type="password"]:first-child').focus();

		}

	}, 100)

}

function scrollTop(){

	$(window).scrollTop(0);
	$('body').scrollTop(0);

}

function isEmail(emailV){
    if(emailV != null && emailV != undefined){
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(emailV);    
    }
    else{
        return false;
    }

}

function startAnimateList(){

	a_flag = 1;
	
	setInterval(function(){

		if(count > 10) {

			$('#subscribers li').slideUp();

			setTimeout(function(){

				$('#subscribers li').remove();
				count = 1;

			},1000);

		} 

		else {

			addAvatar();

		}

	}, 2000);
	
}

// END DOCUMENT