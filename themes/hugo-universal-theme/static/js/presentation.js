jQuery(document).ready(function(){

  // Set focus on the item-id textbox
  $('#presentation-search-input').focus();

  $('#presentation-search-input').on('keypress', function (e) {
    $('#presentation-search-input').removeAttr('style');

    // Check if enter key is pressed
    if(e.which === 13){

      // Hide the welcome message
     $('#presentation-welcome').hide();

     // Load the json catalogue
     $.getJSON("/auction/presentation/index.json", function(data) {

       // Search for the catalogue item
       var item = data.items.find(item => item.id === $('#presentation-search-input').val());

       // Check if an item matching the was found
       if(typeof item !== 'undefined') {
         // Update the item information
         $('#presentation-item-title').text(item.title);
         $('#presentation-item-description').text(item.description);
         $('#presentation-item-img').attr("src",item.image);
         $('#presentation-item-status').text(item.status);
         $('#presentation-item').show();
       }

       // Clear the item-id input from any text
       $('#presentation-search-input').val("");

     });
    }
  });
});
