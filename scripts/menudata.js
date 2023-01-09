// Define an array of people.

let menuData = {
    appetizer: [
        {
            name: "Crab Rangoon",
            price: "9.99"
        },
        {
            name: "Chicken Fingers",
            price: "12.99"
        },
        {
            name: "Boneless Spare Ribs",
            price: "9.99"
        },
        {
            name: "Chicken Wings (4)",
            price: "7.99"
        },
        {
            name: "Chicken Teriyaki",
            price: "10.99"
        },
        {
            name: "Mystery Item",
            price: "13.99"
        }
    ],

    soups: [
        {
            name: "Egg Drop Soup",
            price: "2.95"
        },
        {
            name: "Wonton Soup",
            price: "3.25"
        },
        {
            name: "Chicken Noodle or Rice Soup",
            price: "3.25"
        },
        {
            name: "Hot and Sour Soup",
            price: "3.50"
        },
        {
            name: "House Special Soup",
            price: "6.25"
        },
        {
            name: "Vegetable Soup",
            price: "3.25"
        }
    ],

    rice: [
        {
            name: "Roast Pork or Chicken Fried Rice",
            price: "4.95"
        },
        {
            name: "Beef Fried Rice",
            price: "5.50"
        },
        {
            name: "Shrimp Fried Rice",
            price: "5.50"
        },
        {
            name: "House Special Fried Rice",
            price: "5.95"
        },
        {
            name: "Vegetable Fried Rice",
            price: "4.50"
        },
    ],

    lomein: [
        {
            name: "Vegetable Lo Mein",
            price: "5.25"
        },
        {
            name: "Roast Pork Lo Mein",
            price: "5.50"
        },
        {
            name: "Chicken Lo Mein",
            price: "5.50"
        },
        {
            name: "Shrimp Lo Mein",
            price: "5.75"
        },
        {
            name: "Beef Lo Mein",
            price: "5.75"
        },
        {
            name: "House Special Lo Mein",
            price: "5.95"
        },
    ],
};

document.addEventListener("DOMContentLoaded", function() {
    let myTemplateResults = "";
    let myTemplate = document.getElementById('menu-template').innerHTML;
    // console.log(myTemplate);
  
    let myCompiledTemplate = Handlebars.compile(myTemplate);
    // console.log(myCompiledTemplate);
  
    myTemplateResults = myCompiledTemplate(menuData);
    // console.log(myTemplateResults);
  
    let container = document.getElementById('menucontainer');
    container.innerHTML = myTemplateResults;
  
  });