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
                    
                    $(document).on('submit','#orgForm', function(e){
                        e.preventDefault();
                        var data = $(this).serializeArray();
                        var request = $.ajax({
                            url: 'https://great-hearts-test.herokuapp.com/api/v1/organizations/org_recommendation',
                            method: 'post',
                            data: data,
                            crossDomain: true
                        });

                        request.done(function(response){
                            $('#orgForm').remove();
                            $('.success-msg').addClass('flex-center-content').show();
                        });
                    });
                    Stamplay.init("greathearts");

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