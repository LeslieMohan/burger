// attach our handlers when DOM is fully loaded.
$(function() {
    $(".devourUndevour").on("click", function(event) {
        var clickDevoured = {
          devoured: Math.abs($(this).data("devoured") - 1)
      };
      // Send the PUT request.
      $.ajax(`/api/update-burger/${$(this).data("id")}`, {
        type: "PUT",
        data: clickDevoured
      }).then(
        function() {
          console.log(`changed devoured to ${clickDevoured}`);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".burgerForm").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var burger_name = $("#burger_name").val().trim();
       if (burger_name !== '') {

        // Send the POST request.
      $.ajax("/api/new-burger", {
        type: "POST",
        data: {
          
          burger_name: burger_name,
          devoured: $("[name=devoured]:checked").val().trim()
        }
      }).then(
        function() {
          console.log(`created new burger: ${burger_name}`);
          // Reload the page to get the updated list
          location.reload();
          }
        );
      }
    });
  
    $(".deleteBurger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/delete-burger/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  