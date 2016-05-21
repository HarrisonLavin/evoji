$(function(){
  var quality = 0;
  var be_emoji_clicked = false;
  var si_emoji_clicked = false;
  var ds_emoji_clicked = false;
  var rg_emoji_clicked = false;
  var entryID;

  $('.arrow#up').hover(
    function(){
      $('#upArrow').addClass( "glow");
    },
    function(){
      $("#upArrow").removeClass("glow");
    }
)

  $('.arrow#up').on('click', function(event){
    console.log("Up Arrow Clicked")
    $("#downArrow").removeClass("glow");
    $('#upArrow').addClass( "glow");
    quality = 1;
  })

  $('.arrow#down').hover(
    function(){
      $('#downArrow').addClass( "glow");
    },
    function(){
      $("#downArrow").removeClass("glow");
      $("#upArrow").removeClass("glow");
    }
)
   $('.arrow#down').on('click', function(event){
    console.log("Down Arrow Clicked")
    $('#downArrow').addClass( "glow");
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
    console.log("Binge Eating Clicked")
    be_emoji_clicked ? be_emoji_clicked = false : be_emoji_clicked = true;
    be_emoji_clicked ? $('#be').css("color", "blue") : $('#be').css("color", "black")
  })

  $('#si').on('click', function(event){
    event.preventDefault();
    console.log("suicidal Ideation Clicked")
    si_emoji_clicked ? si_emoji_clicked= false : si_emoji_clicked= true;
    si_emoji_clicked ? $('#si').css("color", "blue") : $('#si').css("color", "black")
  })

  $('#ds').on('click', function(event){
    event.preventDefault();
    console.log("Despair Clicked")
    ds_emoji_clicked ? ds_emoji_clicked = false : ds_emoji_clicked = true;
    ds_emoji_clicked ? $('#ds').css("color", "blue") : $('#ds').css("color", "black")
  })

  $('#rg').on('click', function(event){
    event.preventDefault();
    console.log("Rage Clicked")
    rg_emoji_clicked ? rg_emoji_clicked= false : rg_emoji_clicked= true;
    rg_emoji_clicked ? $('#rg').css("color", "blue") : $('#rg').css("color", "black")
  })

  $('button#rate').on('click', function(event){
    event.preventDefault();
    $.ajax({
      url: "/entry",
      method:"POST",
      data: { quality: quality, binged: be_emoji_clicked, suicidal: si_emoji_clicked, rage: rg_emoji_clicked, despair: ds_emoji_clicked },
      success: function(result){
        debugger;
        $('table').append('')
      }
    })
  })

  $('table button').on('click', function(event){
    event.preventDefault();
    entryID = this.parentElement.parentElement.id;
    $.ajax({
      url: '/entry/' + entryID,
      method: "DELETE",
      success: function(result){
        $('#'+result.id).remove()
      }
    })
  })

  $(document).ajaxSuccess(function(event, request, settings, data){
  })

})
