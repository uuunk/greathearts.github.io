var SponsorForm = function () {

    return {

        //Comment Form
        initSponsorForm: function () {
            // Validation
            $("#sponsor").validate({
                // Rules for form validation
                rules:
                {
                    firstName:
                    {
                        required: true
                    },
                    lastName:
                    {
                        required: false
                    },
                    email:
                    {
                        required: true,
                        email: true
                    },
                    phone:
                    {
                        required: false
                    },
                    message:
                    {
                        required: false
                    }
                },

                // Messages for form validation
                messages:
                {
                    email:
                    {
                        required: 'Please enter your email address',
                        email: 'Enter a VALID email'
                    },
                    firstName:
                    {
                        required: 'Please enter your name'
                    }
                },

                // Ajax form submition
                submitHandler: function(form)
                {
                    Stamplay.init("greathearts");

                    var data =
                    {
                        "email": $(form).find("#email").val(),
                        "firstName": $(form).find("#firstName").val(),
                        "lastName": $(form).find("#lastName").val(),
                        "phone": $(form).find("#phone").val(),
                        "message": $(form).find("#message").val(),
                    };

                    // With Promise
                    Stamplay.Object("sponsors")
                        .save(data)
                        .then(function(res) {
                            $(form).addClass('submited');
                            $(form).find('#submitButton').hide();
                        }, function(err) {
                            console.log(err);
                        });

                    return false;//prevent default submit behavior
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