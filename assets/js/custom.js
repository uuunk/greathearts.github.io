$(document).ready(function() {
  var request = $.ajax({
    url: 'https://app.greathearts.community/api/v1/organizations',
    method: 'get',
    crossDomain: true
  });

  request.done(function(orgsJson){
    $('.orgs-squares').children().remove();
    $.each(orgsJson, function(index,value){

      $(".orgs-squares").append("<li><figure class='org-square flex-vertically-center-content'><img src=" + value.logo_link + " alt="+ value.name + "><div class='img-hover'><a href=" + value.link + " target='_blank'><h4>" + value.name + "</h4></a></div></figure></li>")


    });
  });

  $('#navbar-search').on('keyup', 'input', function(e) {
  	e.preventDefault();
    var query = this.value;
    $("#search-link").attr('href', 'https://app.greathearts.community/search_results?utf8=✓&query=' + query.split(' ').join('+'));
  });
})  
