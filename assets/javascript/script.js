$(document).ready(function() {
   $('#message2').hide();
   $('#poem').hide();
   var valentine;

   $('#yes').click(function() {
      $('#message').text('<3 YAY!!! <3');
      $('#poem').show();

      if (valentine) {
         $('#answers').hide();
         $('#message2').show();
      }
      valentine = true;
   });

   $('#no').click(function() {
      $('body').empty();
      $('body').html('<div class="fine">Fine...</div>');
   });
});