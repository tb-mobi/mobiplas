	$(document).ready(function(){
			$(document).on('change', '[type="checkbox"]', function(){
				if ($(this).is(':checked')) {
					$(this).next('a').addClass('checked');
				}
				else {
					$(this).next('a').removeClass('checked');
				}
			});	
			$(document).on('click', '#submit_terms', function(){
				validateRegister();
			});
			$('#register').on('keyup', 'input[type="text"], input[type="password"]', function(){
				validateRegister();
			});

	  	// h = $(document).height()
	  	// w = $(document).width();

	  	// alert(w+' '+h);


	  	action = '';

	  	if(action == 'login'){

	  		openPopup();

	  	} else if (action == 'register') {

	  		openPopupRegister();
	  		$('#login').hide();
			$('#register').show();

	  	} else if (action == 'duplicate') {

	  		openPopupRegister();
	  		$('#login').hide();
			$('#register').show();
			$('#register #email').focus();
			$('#register #email').addClass('error_email');
			
			setTimeout(function(){

				$('#register #username').val('');
				$('#register #password').val('');

				username = '';

				$('#register #username').val(username);
				
			}, 500);

	  	} else if (action == 'forgot_password') {

	  		openPopup();
	  		$('#login').hide();
			$('#forgot_password').show();

	  	} else if (action == 'reset_password') {

	  		openPopup();
	  		$('#login').hide();
			$('#reset_password').show();

	  	} else if (action == 'success_reset') {

	  		openPopup();
	  		$('#login').hide();
			$('#success_reset').show();

			setTimeout(function(){

				openPopup();

			}, 2000)

	  	} else if (action == 'error_login') {

	  		openPopup();
			$('#login .login_content').prepend('<p class="error_login">Your email or password is incorrect.</p>');
			$('#login .login_content').removeClass('login_content').addClass('login_content_text');

	  	} else if (action == 'error_reset') {

	  		openPopup();
	  		$('#login, #forgot_password h1:first-child').hide();
			$('#forgot_password, .error_reset').show();
			$('#forgot_password p').html('Are you sure you have registered with that email address?')

	  	} else if (action == 'password_sent') {

	  		openPopup();
	  		$('#login').hide();
			$('#password_sent').show();

	  	} else {

	  	}
	  	
	  	$('#introduction').waypoint(function(direction) {
			$('video')[0].pause();
		});
		
		w_flag = 0;
		
		$('.start_donut').waypoint(function(direction) {
		
		if (w_flag == 1){
			
		}
		
		else {
		
			$('#analytics .hidden').fadeIn(1000);
			
			var doughnutData = [
				{
					value: 300,
					color:"#69c0af",
					highlight: "#5ca999",
					label: "Delivered"
				},
				{
					value: 100,
					color: "#cd6d67",
					highlight: "#b65a54",
					label: "Hard Bounces"
				},
				{
					value: 50,
					color: "#847f9f",
					highlight: "#767192",
					label: "Soft Bounces"
				},
				{
					value: 10,
					color: "#57a2d6",
					highlight: "#468ec1",
					label: "Rejects"
				}

			];

			var doughnutData2 = [
				{
					value: 50,
					color:"#5ecce5",
					highlight: "#4fbcd5",
					label: "Opens"
				},
				{
					value: 200,
					color: "#50617d",
					highlight: "#394964",
					label: "Clicks"
				}
			];

			var ctx = document.getElementById("chart-area").getContext("2d"); 
			var ctx2 = document.getElementById("chart-area2").getContext("2d");
			window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : false}); 
			window.myDoughnut = new Chart(ctx2).Doughnut(doughnutData2, {responsive : false}); 
			
			w_flag = 1;
			
		}
		
		});
		
		a_flag = 0;
		
		$('#developers_right').waypoint(function(direction) {
		
			if(a_flag == 1){
				
				
			}
			
			else {
				
				startAnimateList();
				
			}
		
		});

	  });
	  
	  function validateRegister(){
		  
		  pass = $('#register #password');
			username = $('#register #username');
			email = $('#register #email');
			
			username_val = $(username).val().length;
			email_val = $(email).val();
			pass_val = $(pass).val().length;
			
			if(username_val < 2){
				
				//disable
				$('#register').find('input[type="submit"]').addClass('de');
				$('#register').find('input[type="submit"]').attr('disabled','false');
				
				return false;
				
			}
			
			else if(pass_val < 6){
				
				//disable
				$('#register').find('input[type="submit"]').addClass('de');
				$('#register').find('input[type="submit"]').attr('disabled','false');
				
				return false;
				
			}
		
		
			if($('#submit_terms').is(':checked')){
			
				if(isEmail($('#register #email').val())){
				
					//enable
					$('#register').find('input[type="submit"]').removeClass('de');
					$('#register').find('input[type="submit"]').removeAttr('disabled');
					
					return false;
				
				}
				
				else {
					
					//disable
					$('#register').find('input[type="submit"]').addClass('de');
					$('#register').find('input[type="submit"]').attr('disabled','false');
					
					return false;
					
				}
			
			}
			
			else {
			
				//disable
				$('#register').find('input[type="submit"]').addClass('de');
				$('#register').find('input[type="submit"]').attr('disabled','false');
			
				return false;
				
			}
		  
	  }
	  
	  $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});
	