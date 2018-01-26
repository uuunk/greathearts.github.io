var OrgForm = function () {

    return {

        //Comment Form
        initOrgForm: function () {
            // Validation
            $("#orgForm").validate({
                // Rules for form validation
                rules:
                {
                    firstName:
                    {
                        required: true
                    },
                    lastName:
                    {
                        required: true
                    },
                    orgName:
                    {
                        required: true
                    },
                    title:
                    {
                        required: true
                    },
                    ein:
                    {
                        required: true
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
                        required: 'Please enter your first name'
                    },
                    lastName:
                    {
                        required: 'Please enter your last name'
                    },
                    orgName:
                    {
                        required: 'Please enter your organization name'
                    },
                    title:
                    {
                        required: 'Please enter your title or role'
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
                        "orgName": $(form).find("#orgName").val(),
                        "title": $(form).find("#title").val(),
                    };

                    // With Promise
                    Stamplay.Object("orgs")
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