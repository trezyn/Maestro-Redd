



        // Get the input element and list of items by their IDs
        const otherCarInput = document.getElementById("othercourse");
        const itemList = document.getElementById("itemList");
        const listItems = itemList.getElementsByTagName("li");

        // Add an event listener to the input field for when it's clicked
        otherCarInput.addEventListener("click", function() {
            itemList.style.display = "block";
        });

        // Add click event listeners to the list items
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].addEventListener("click", function() {
                // Set the value of the input field to the clicked item's text
                otherCarInput.value = listItems[i].textContent;
                itemList.style.display = "none"; // Hide the item list
            });
        }

        // Add a click event listener to the document to hide the item list when clicking outside
        document.addEventListener("click", function(event) {
            if (event.target !== otherCarInput && event.target !== itemList) {
                itemList.style.display = "none";
            }
        });




//Slider
