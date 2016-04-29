$(function(){
  var quality = 0;
  var be_emoji_clicked? = false;
  var si_emoji_clicked? = false;

  $('.arrow#up').on('click', function(event){
    event.preventDefault();
    quality = 1;
  })
  $('#be').on('click', function(event){
    event.preventDefault();
    be_emoji_clicked ? false : true
  })

  $('#si').on('click', function(event){
    event.preventDefault();
    si_emoji_clicked ? false : true
  })

  $('button#rate').on('click', function(event){
    event.preventDefault();
    $.ajax({
      url: "/entry"
      method: "POST"
      data: { binged?: be_emoji_clicked, suicidal_ideation?: si_emoji_clicked }
    })
  })

  $(document).ajaxSuccess(function(){
    alert("logged!")
  })

})
