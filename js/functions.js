
$( document ).ready(function() {
// PRELOADER	
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 3000);
	
// SCROLL REVEAL
	window.sr = new scrollReveal();


// PARALLAX IMAGES 
	$('#subscribe').parallax("50%", 0.0);
	
// SMOOTH SCROLL
	smoothScroll.init({
		speed: 900, // Integer. How fast to complete the scroll in milliseconds
		easing: 'easeInOutCubic', // Easing pattern to use
		updateURL: true, // Boolean. Whether or not to update the URL with the anchor hash on scroll
		offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
		callbackBefore: function ( toggle, anchor ) {}, // Function to run before scrolling
		callbackAfter: function ( toggle, anchor ) {} // Function to run after scrolling
	});
	

	
// CONTACT FORM
$(document).ready(function() {
    $("input, textarea").focus(function() {
        $(this).prev("label").hide();
        $(this).prev().prev("label").hide();	 		 	
    });

    $("#contact_form").submit(function(event) {
        event.preventDefault(); 

        var name = $("#name").val();
        var phone = $("#phone").val();
        var email = $("#email").val();
        var comment = $("#comment").val();

        $('#contact_form').animate({ opacity: '0.3' }, 500);

        var dataString = 'name=' + encodeURIComponent(name) + '&email=' + encodeURIComponent(email) + '&phone=' + encodeURIComponent(phone) + '&comment=' + encodeURIComponent(comment);

        $.ajax({
            type: "POST",
			url: "sendmail.php", 
            data: dataString,
            success: function(response) {
                $("#contact_form").animate({ opacity: '1' }, 500);
                $('#contact_form').slideUp(300);
                $('#success').delay(200).fadeIn(300); 
            },
            error: function() {
                alert("Erro ao enviar a mensagem. Tente novamente mais tarde.");
                $("#contact_form").animate({ opacity: '1' }, 500);
            }
        });

        return false; 
    });
});

	  
});