/**
 * @file
 * Javascript for camping theme.
 */

(function ($) {

Drupal.behaviors.camping = {
  attach: function (context) {
    $('.carousel').carousel();
    // Removing the pagination item-list class for twitter bootstrap.
    $('.pagination > div').removeClass('item-list');

    // Making the content div 100% for no-sidebars pages.
    if($('body').hasClass('no-sidebars')) {
      $('#main-wrapper #content').removeClass('span8');
      $('#main-wrapper #content').addClass('span12');
    }
    else{
      $('#main-wrapper #content').removeClass('span12');
      $('#main-wrapper #content').addClass('span8');
    }
    $('a.hytter').parents("li").css("background","url('/sites/all/themes/Camping/images/house.png') 0 center no-repeat #9F2A68");
    $('a.autocamper').parents("li").css("background","url('/sites/all/themes/Camping/images/autocamp.png') 0 center no-repeat #9DB330");

    $('.booking-result').click(function(e){
      $(this).css({'display':'block','background-color': 'red','width':'10px','height': "10px",});
      $(this).find(".result-div").hide();
      //$(this).find('.entity-rooms-unit').hide();
      var style_1 = $(this).find('.result-div').css('display');
      var style_2 = $(this).css('background-color');
      if (style_1 == 'none' && style_2 != 'red'){
        $(this).find('.result-div').css({
          'width':'350px',
          'height': 'auto',
          'background-color': '#fff',
          'display': 'block',
          'z-index': "800",
        });

      }

    // $(this).find('form').append("<div class= 'close-room-result'>Annullér</div>");

    });

    $('.booking-result div.result-div').click(function(e){

      $(this).hide(600);

   });


  // End of attach
  }


// end of drupal.behaviors
}
})(jQuery);
