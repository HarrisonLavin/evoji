$(function(){
  var quality = 0;
  var be_emoji_clicked = false;
  var si_emoji_clicked = false;

  $('.arrow#up').on('click', function(event){
    event.preventDefault();
    quality = 1;
  })
   $('.arrow#down').on('click', function(event){
    event.preventDefault();
    quality = -1;
  })

   $('.arrow').on('click', function(event){
    event.preventDefault
    if(quality=== 1){
      $('.arrow#up').css("color", "blue");
      $('.arrow#down').css("color", "black")
    } else if(quality=== -1) {
      $('.arrow#up').css("color", "black");
      $('.arrow#down').css("color", "blue")
    }
   })
  $('#be').on('click', function(event){
    event.preventDefault();
    be_emoji_clicked ? be_emoji_clicked = false : be_emoji_clicked = true;
    be_emoji_clicked ? $('#be').css("color", "blue") : $('#be').css("color", "black")
  })

  $('#si').on('click', function(event){
    event.preventDefault();
    si_emoji_clicked ? si_emoji_clicked= false : si_emoji_clicked= true;
    si_emoji_clicked ? $('#si').css("color", "blue") : $('#si').css("color", "black")
  })

  $('button#rate').on('click', function(event){
    event.preventDefault();
    $.ajax({
      url: "/entry",
      method:"POST",
      data: { quality: quality, binged: be_emoji_clicked, suicidal: si_emoji_clicked },
      success: function(result){
        $('table').append('')
      }
    })
  })

  $('table button').on('click', function(event){
    event.preventDefault();
    var entryID = this.parentElement.id;
    $.ajax({
      url: '/entry/' + entryID,
      method: "DELETE"
    })
  })

  $(document).ajaxSuccess(function(event, request, settings, data){
  })

})
