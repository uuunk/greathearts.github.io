$(".testing").ready(function() {
  var request = $.ajax({
    url: 'http://localhost:3000/orgs_list',
    method: 'get',
    crossDomain: true
  });

  request.done(function(orgsJson){
  	var that = this
    var names = $.each(orgsJson, function( index, value){
      $(".testing).children().replaceWith("<li><figure><a href=" + value.link + "><img src="+ value.logo_link + " alt=>" + value.name + "<div class='img-hover'> <a href=" + value.link + "</div></a></figure></li>")
    });
    var childs =  $("#effect-2").children();
  });
})  
