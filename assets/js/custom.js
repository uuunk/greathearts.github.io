$(document).ready(function() {
  var request = $.ajax({
    url: 'https://great-hearts-test.herokuapp.com/api/v1/organizations',
    method: 'get',
    crossDomain: true
  });

  request.done(function(orgsJson){
    $('.orgs-squares').children().remove();
    $.each(orgsJson, function(index,value){

      $(".orgs-squares").append("<li><figure class='org-square '>" +
          "<div class='org-square-logo'></div><img class='org-square-logo-img' src=" + value.logo_link + " alt=" + value.name + ">" +
          "<div class='img-hover'>" +
          "<a href=" + value.link + " target='_blank'><h4>" + value.name + "</h4>" +
          "</a></div></figure></li>")


    });
  });

  $('#navbar-search').on('change', 'input', function(e) {
  	e.preventDefault();
    var query = $('input').val();
    var searchLink = 'https://great-hearts-test.herokuapp.com/search_results?utf8=✓&query=' + query.split(' ').join('+');
    $("#search-link").attr('href', searchLink);  
  });
  $('#navbar-search').on('keypress', 'input', function(e) {
    var query = $('input').val();
    var searchLink = 'https://great-hearts-test.herokuapp.com/search_results?utf8=✓&query=' + query.split(' ').join('+');
    if ( e.which === 13 ) {
      e.preventDefault();
      window.location.href = searchLink;        
    }
  });
});

var signUpLock = new Auth0Lock('7ZieFXA9AjtVTMF2kbDTC8395loOUZJK', 'greathearts.auth0.com', {
  allowedConnections: ['Username-Password-Authentication','facebook','google-oauth2'],
  auth: {
      redirectUrl: 'https://great-hearts-test.herokuapp.com/auth/auth0/callback',
      responseType: 'code',
      params: {
          scope: 'openid email', // Learn about scopes: https://auth0.com/docs/scopes
      }
  },
  theme: {
      logo: "assets/img/GHILogo2.png",
      primaryColor: '#72C02C'
  },
  rememberLastLogin: false,
  initialScreen: 'login',
});
