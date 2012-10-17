// Get current Time for Start-Screen
setCurrentTime = function() {
  var now = new Date();
  $('#time_now').html( now.format("H:MM") );
  $('#day_now').html( now.format("dddd") );
};


$(function() {
  $('#phone_dialpad').on("click", ".number_key", function(event){
    event.preventDefault();
    $("#phone_number_display").html( $("#phone_number_display").html() + $(event.target).text() );
  });

  $('#phone_dialpad').on("click", ".delete_key", function(event){
    event.preventDefault();
    var that = $("#phone_number_display").text();
    $("#phone_number_display").html( that.substring(0, that.length - 1) );
  });

  $('#contacts').on("click", ".cnt_btn", function(event){
    event.preventDefault();
    if ( $(this).hasClass('anja') ) {
      $("#call_contact .call_content").attr("class", "call_content anja").find(".callee").html("Anja Alt");
      // $("#call_contact .call_content .callee").html("Anja Alt");
    }
    if ( $(this).hasClass('paul') ) {
      $("#call_contact .call_content").attr("class", "call_content paul");
      $("#call_contact .call_content .callee").html("Paul Panter");
    }
    if ( $(this).hasClass('jim') ) {
      $("#call_contact .call_content").attr("class", "call_content jim");
      $("#call_contact .call_content .callee").html("Jim Beam");
    }
    if ( $(this).hasClass('frieda') ) {
      $("#call_contact .call_content").attr("class", "call_content frieda");
      $("#call_contact .call_content .callee").html("Frieda Foster");
    }
    if ( $(this).hasClass('susanne') ) {
      $("#call_contact .call_content").attr("class", "call_content susanne");
      $("#call_contact .call_content .callee").html("Susanne Schmidt");
    }
    if ( $(this).hasClass('sonja') ) {
      $("#call_contact .call_content").attr("class", "call_content sonja");
      $("#call_contact .call_content .callee").html("Sonja Rosenbaum");
    }
    $.mobile.changePage( "#call_contact", { transition: "turn"} );
  });

  $('#call_contact').on("click", ".call_key a", function(event){
    event.preventDefault();
    if ( $(this).hasClass('active') ) {
      $(this).removeClass('active');
      $(this).html('<i class="icon-phone"></i>');
      window.setTimeout( $.mobile.changePage( "#contacts", { transition: "turn"} ), 300);
    } else {
      $(this).addClass('active');
      $(this).html('<i class="icon-download-alt"></i>');
    }
  });

  $('#call_contact').on("click", ".speaker_key a", function(event){
    event.preventDefault();
    $(this).toggleClass('active');
  });


  window.setInterval(setCurrentTime(), 1000);


});