var Tile = function () {

    return {

        //Comment Form
        initTileForm: function () {
            // Validation
            $("#tileForm").validate({
                // Rules for form validation
                rules: {
                    name: {
                        required: false
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: false
                    }
                },

                // Messages for form validation
                messages: {
                    email: {
                        required: 'Enter your email address',
                        email: 'Enter a VALID email'
                    }
                },

                // Ajax form submition
                submitHandler: function (form) {
                    Stamplay.init("greathearts");

                    var formData =
                    {
                        "recipient": $(form).find("#recipient").val(),
                        "email": $(form).find("#email").val(),
                        "name": $(form).find("#name").val(),
                        "message": $(form).find("#message").val(),
                        "tileType": $(form).find("#tileType").val()
                    };

                    $('#submitButton i').addClass('fa fa-spinner fa-spin');

                    Stamplay.User.get({email: formData.email})
                        .then(function (res) {
                                if (res.data.length === 0) {//new user
                                    Stamplay.Object("signups")
                                        .save({"email": formData.email, "firstName": formData.name})
                                        .then(function (res) {
                                            setTimeout(getUserId(), 1000);
                                        }, function (err) {
                                            console.log(err);
                                        });
                                }
                                else {//user exists
                                    sendTile(res.data[0].id);
                                }
                            },
                            function (err) {
                                console.log(err);
                            });

                    var getUserId = function () {
                        Stamplay.User.get({email: formData.email})
                            .then(function (res) {
                                if (res.data.length > 0 && res.data[0].id) {
                                    sendTile(res.data[0].id);
                                } else {
                                    setTimeout(getUserId(), 1000);
                                }
                            }, function (err) {
                                console.log(err);
                            });
                    };

                    var sendTile = function (userId) {
                        var data =
                        {
                            "content": {"message": formData.message},
                            "giver_id": userId,
                            "recipient_id": formData.recipient,
                            "type": formData.tileType,
                        };

                        Stamplay.Object("tiles")
                            .save(data)
                            .then(function (res) {
                                $(form).addClass('submited');
                                $(form).find('#submitButton').hide();
                            }, function (err) {
                                console.log(err);
                            });
                    };

                    return false;//prevent default submit behavior

                },

                // Do not change code below
                errorPlacement: function (error, element) {
                    error.insertAfter(element.parent());
                }
            });


        }

    };

}();