$(document).ready(function() {
   $('#message2').hide();
   $('#poem').hide();
   var valentine;
   var valentine2;
   var clickCount = 0;

   $('#yes').click(function() {
      $('#message').text('<3 YAY!!! <3');
      $('#poem').show();

      if (valentine) {
         $('#answers').hide();
         $('#message2').show();
         valentine2 = true;
      }
      valentine = true;
   });

   $('#no').click(function() {
      $('body').empty();
      $('body').html('<div class="fine">Fine...</div>');
   });

$('#jon').click(function() { 
   console.log(valentine);

   if (valentine2) {
      console.log(clickCount);
      clickCount++;
      if (clickCount === 7) {
         // $('#message2').empty();
         $('#itinerary').append('<span id="clear"><ol>Cook dinner together</ol><ol>Steak - Main course</ol><ol>Rice - Side dish</ol><ol>Salad - Salad</ol><ol>Chocolate covered strawberries, apples, bananas</ol><ol>Drive Downtown to show off girlfriend</ol><ol>Drive to Lookout mountain</ol><ol>Come home and watch a movie</ol></span>'
         );
      } else $('#clear').empty()
   }
});

});
/* Cook dinner together
    Steak - Main course
    Rice - Side dish
    Salad - Salad
    Chocolate covered strawberries, apples, bananas
Drive Downtown to show off girlfriend
Drive to Lookout mountain
Come home and watch a movie*/


