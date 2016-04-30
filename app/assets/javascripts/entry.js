$(function(){
  var quality = 0;
  var be_emoji_clicked = false;
  var si_emoji_clicked = false;

  $('.arrow#up').on('click', function(event){
    event.preventDefault();
    quality = 1;
    alert(quality)
  })
   $('.arrow#down').on('click', function(event){
    event.preventDefault();
    quality = -1;
    alert(quality)
  })
  $('#be').on('click', function(event){
    event.preventDefault();
    be_emoji_clicked ? be_emoji_clicked = false : be_emoji_clicked = true
    alert(be_emoji_clicked)
  })

  $('#si').on('click', function(event){
    event.preventDefault();
    si_emoji_clicked ? si_emoji_clicked= false : si_emoji_clicked= true
    alert(si_emoji_clicked)
  })

  $('button#rate').on('click', function(event){
    event.preventDefault();
    $.ajax({
      url: "/entry",
      method:"POST",
      data: { quality: quality, binged: be_emoji_clicked, suicidal: si_emoji_clicked }
    })
    alert("rated!")
  })

  $(document).ajaxSuccess(function(event, request, settings, data){
    $()
  })

})
