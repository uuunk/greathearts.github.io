$(".testing").ready(function() {
  var request = $.ajax({
    url: 'http://localhost:3000/orgs_list',
    method: 'get',
    crossDomain: true
  });

  request.done(function(orgsJson){
    $('.testing).children().remove();
    $.each(orgsJson, function(index,value){

      $(".testing").append("<li><figure class='org-square flex-vertically-center-content'><img src=" + value.logo_link + " alt="+ value.name + "><div class='img-hover'><a href=" + value.link + " target='_blank'><h4>" + value.name + "</h4></a></div></figure></li>")


    });
  });
})  
