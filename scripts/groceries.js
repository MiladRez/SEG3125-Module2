
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
    {
        name: "brocoli",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 1.99
    },
    {
        name: "bread",
        vegetarian: true,
        glutenFree: false,
        organic: false,
        price: 2.35
    },
    {
        name: "salmon",
        vegetarian: false,
        glutenFree: true,
        organic: true,
        price: 10.00
    },
    {
        name: "rice",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        price: 5.99
    },
    {
        name: "chicken broth",
        vegetarian: false,
        glutenFree: false,
        organic: false,
        price: 3.99
    },
    {
        name: "banana",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 1.99
    },
    {
        name: "chicken thigh",
        vegetarian: false,
        glutenFree: true,
        organic: false,
        price: 11.99
    },
    {
        name: "cereal",
        vegetarian: true,
        glutenFree: false,
        organic: false,
        price: 5.99
    },
    {
        name: "eggs",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        price: 3.99
    },
    {
        name: "ketchup",
        vegetarian: true,
        glutenFree: false,
        organic: false,
        price: 2.99
    }
];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
    let product_names = [];

    // This sort function was inspired from https://stackoverflow.com/questions/2466356/sorting-objects-by-property-values 
    prods.sort(function(a, b) {
        return a.price - b.price;
    });

    for (let i = 0; i < prods.length; i += 1) {
        var prod_name_price = prods[i].name + ": $" + prods[i].price; 

        if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)) {
            product_names.push(prod_name_price);
        }
        else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)) {
            product_names.push(prod_name_price);
        }
        else if ((restriction == "Organic") && (prods[i].organic == true)) {
            product_names.push(prod_name_price);
        }
        else if ((restriction == "VegAndOrg") && ((prods[i].vegetarian == true) && (prods[i].organic == true))) {
            product_names.push(prod_name_price);
        }
        else if ((restriction == "GlutenFreeAndOrg") && ((prods[i].glutenFree == true) && (prods[i].organic == true))) {
            product_names.push(prod_name_price);
        }
        else if ((restriction == "VegAndGlutenFree") && ((prods[i].glutenFree == true) && (prods[i].vegetarian == true))) {
            product_names.push(prod_name_price);
        }
        else if ((restriction == "VegGlutenFreeOrg") && ((prods[i].vegetarian == true) && (prods[i].glutenFree == true) && (prods[i].organic == true))) {
            product_names.push(prod_name_price);
        }
        else if (restriction == "None") {
            product_names.push(prod_name_price);
        }
    }
    return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
    totalPrice = 0;
    for (let i = 0; i < products.length; i += 1) {
        var prod_name_price = products[i].name + ": $" + products[i].price;
        if (chosenProducts.indexOf(prod_name_price) > -1) {
            totalPrice += products[i].price;
        }
    }
    return totalPrice;
}