var SignupForm = function () {

    return {
        
        //Comment Form
        initSignupForm: function () {
    	    // Validation
	        $("#signup").validate({
	            // Rules for form validation
	            rules:
	            {
	                name:
	                {
	                    required: false
	                },
	                email:
	                {
	                    required: true,
	                    email: true
	                },
	                favoriteOrgs:
	                {
	                    required: false
	                }
	            },
	                                
	            // Messages for form validation
	            messages:
	            {
	                email:
	                {
	                    required: 'Enter your email address',
	                    email: 'Enter a VALID email'
	                }
	            },

	            // Ajax form submition
	            submitHandler: function(form)
	            {
					Stamplay.init("greathearts");

					var data =
					{
						"email": $(form).find("#email").val(),
						"firstName": $(form).find("#name").val(),
						"favoriteOrgs": $(form).find("#favoriteOrgs").val()
					};

					// With Promise
					Stamplay.Object("signups")
						.save(data)
						.then(function(res) {
							$(form).addClass('submited');
							$(form).find('#signupButtons').hide();
						}, function(err) {
							console.log(err);
						});

					return false;//prevent default submit behavior

	                //$(form).ajaxSubmit(
	                //{
	                //    beforeSend: function()
	                //    {
	                //        $('#sky-form4 button[type="submit"]').attr('disabled', true);
	                //    },
	                //    success: function()
	                //    {
	                //        $("#sky-form4").addClass('submited');
	                //    }
	                //});
	            },
	            
	            // Do not change code below
	            errorPlacement: function(error, element)
	            {
	                error.insertAfter(element.parent());
	            }
	        });


        }

    };
    
}();