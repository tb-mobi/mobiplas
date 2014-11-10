$(document).ready(function(){

	
	$('[name="sr_email"]').keypress(function(e) {
	    
	    $('[name="sr_email"]').removeClass('target');
	    $(this).addClass('target');
	    
	});

	$('[name="sr_name"]').keypress(function(e) {
	    
	    $('[name="sr_name"]').removeClass('target');
	    $(this).addClass('target');
	    
	});
	
	$('[name="sr_email"], [name="sr_name"]').keypress(function(e) {
	    
	    if(e.which == 13) {
	        submit();
	    }
	    
	});
	
	$('.sr_form').submit(function(e){
		 e.preventDefault();
		 return false;
	});

});

function submit() {

    api = $('input[api]').attr('api');
    list = $('input[list]').attr('list'); 
    email = $('[name="sr_email"].target').val();
    name = $('[name="sr_name"].target').val();
    opt = $('input[opt]').attr('opt');
    
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: 'http://www.stampready.net/api.php',
        data: {
            api: api,
            list: list,
            email: email,
            name: name,
            opt: opt
        },
        success: function (e) {
            if (e == '1') {
                exists();
            }
            if (e == '2') {
                success();
            }
            if (e == '3') {
                error();
            }
            
        }
    })
    
}