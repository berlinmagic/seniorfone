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
      $("#call_contact .call_content").attr("class", "call_content anja").attr("data-contact", "anja").find(".callee").html("Anja Alt");
      // $("#call_contact .call_content .callee").html("Anja Alt");
    }
    if ( $(this).hasClass('paul') ) {
      $("#call_contact .call_content").attr("class", "call_content paul").attr("data-contact", "paul");
      $("#call_contact .call_content .callee").html("Paul Panter");
    }
    if ( $(this).hasClass('jim') ) {
      $("#call_contact .call_content").attr("class", "call_content jim").attr("data-contact", "jim");
      $("#call_contact .call_content .callee").html("Jim Beam");
    }
    if ( $(this).hasClass('frieda') ) {
      $("#call_contact .call_content").attr("class", "call_content frieda").attr("data-contact", "frieda");
      $("#call_contact .call_content .callee").html("Frieda Foster");
    }
    if ( $(this).hasClass('susanne') ) {
      $("#call_contact .call_content").attr("class", "call_content susanne").attr("data-contact", "susanne");
      $("#call_contact .call_content .callee").html("Susanne Schmidt");
    }
    if ( $(this).hasClass('sonja') ) {
      $("#call_contact .call_content").attr("class", "call_content sonja").attr("data-contact", "sonja");
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
  
  
  $(document).on("click", "a.call_emergency", function(event){
    event.preventDefault();
    $("#call_contact .call_content").attr("class", "call_content emergency").find(".callee").html("Notruf 112");
    $("#call_contact .call_content .call_key a").addClass('active');
    $.mobile.changePage( "#call_contact", { transition: "turn"} );
  });
  
  $(document).on("click", "a.call_doctor", function(event){
    event.preventDefault();
    $("#call_contact .call_content").attr("class", "call_content doc").find(".callee").html("Doktor Frank");
    $("#call_contact .call_content .call_key a").addClass('active');
    $.mobile.changePage( "#call_contact", { transition: "turn"} );
  });



  window.setInterval(setCurrentTime(), 1000);
  
  
  // Swipe-Effekt:

  // Swipe right to left
  $('#home').live("swipeleft", function(){
    $.mobile.changePage( "#dial", { transition: "turn"} );
  });
  $('#dial').live("swipeleft", function(){
    $.mobile.changePage( "#contacts", { transition: "turn"} );
  });
  $('#contacts').live("swipeleft", function(){
    $.mobile.changePage( "#messages", { transition: "turn"} );
  });
  $('#messages').live("swipeleft", function(){
    $.mobile.changePage( "#events", { transition: "turn"} );
  });
  $('#events').live("swipeleft", function(){
    $.mobile.changePage( "#emergency", { transition: "turn"} );
  });
  $('#emergency').live("swipeleft", function(){
    $.mobile.changePage( "#weather", { transition: "turn"} );
  });
  $('#weather').live("swipeleft", function(){
    // $.mobile.changePage( "#home", { transition: "turn", reverse: true} );
  });

  // Swipe left to right
  $('#home').live("swiperight", function(){
    // $.mobile.changePage( "#weather", { transition: "turn", reverse: true} );
  });
  $('#dial').live("swiperight", function(){
    $.mobile.changePage( "#home", { transition: "turn", reverse: true} );
  });
  $('#contacts').live("swiperight", function(){
    $.mobile.changePage( "#dial", { transition: "turn", reverse: true} );
  });
  $('#messages').live("swiperight", function(){
    $.mobile.changePage( "#contacts", { transition: "turn", reverse: true} );
  });
  $('#events').live("swiperight", function(){
    $.mobile.changePage( "#messages", { transition: "turn", reverse: true} );
  });
  $('#emergency').live("swiperight", function(){
    $.mobile.changePage( "#events", { transition: "turn", reverse: true} );
  });
  $('#weather').live("swiperight", function(){
    $.mobile.changePage( "#emergency", { transition: "turn", reverse: true} );
  });


  // Swipe in Call-Screen 
  var that_contacts = [ "anja", "jim", "paul", "susanne", "sonja", "frieda", "doc", "emergency" ]
  var that_name = [ "Anja Alt", "Jim Beam", "Paul Panter", "Susanne Schmidt", "Sonja Rosenbaum", "Frieda Foster", "Doktor Frank", "Notruf 112" ]
  
  
  $('#call_contact').live("swipeleft", function(){
    var that = $('#call_contact .call_content').attr("data-contact");
    var that_cnt = that_contacts.indexOf(that);
    var next_person = false;
    if ( that_cnt != -1 ) {
      if ( that_cnt == (that_contacts.length - 1) ) {
        next_person = 0 ;
      } else {
        next_person = that_cnt + 1;
      }
      $("#call_contact .call_content")
        .attr("class", "call_content " + that_contacts[next_person])
        .attr("data-contact", that_contacts[next_person])
        .find(".callee").html(that_name[next_person]);
      $.mobile.changePage( "#call_contact", { transition: "swipe", reverse: true} );
    }
  });
  
  $('#call_contact').live("swiperight", function(){
    var that = $('#call_contact .call_content').attr("data-contact");
    var that_cnt = that_contacts.indexOf(that);
    var next_person = false;
    if ( that_cnt != -1 ) {
      if ( that_cnt == 0 ) {
        next_person = that_contacts.length - 1 ;
      } else {
        next_person = that_cnt - 1;
      }
      $("#call_contact .call_content")
        .attr("class", "call_content " + that_contacts[next_person])
        .attr("data-contact", that_contacts[next_person])
        .find(".callee").html(that_name[next_person]);
      $.mobile.changePage( "#call_contact", { transition: "swipe", reverse: true} );
    }
  });




});