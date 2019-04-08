var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: 'localhost',

    PORT: 3306,

    user: 'root',

    password: '',
    database: 'bamazon'
});

connection.connect(function(err){
    if (err) throw err;
});


function validateInput(value) {
    var integer = Number.isInteger(parseFloat(value));
    var sign = Math.sign(value);

    if (integer && (sign === 1)) {
        return true;
    } else {
        return 'Please enter a whole non-zero number.';
    };
};



function bamazonStock() {
    var query = 'SELECT * FROM products';
    connection.query(query, function(err, res) {

        console.log("Current Inventory:" + '\n');
        for(var i = 0; i < res.length; i++){
            console.log(`Item ID: ${res[i].item_id}` + '\n' + `Product Name: ${res[i].product_name}` + '\n' + `Department: ${res[i].department_name}` + '\n' + `Price: $${res[i].price}` + '\n');
        };
        bamazonPurchase();
});
};


function bamazonPurchase(){
    inquirer
        .prompt([
        {
            name: 'item_id',
            type: 'input',
            message: 'Please enter the Item ID of the product you would like to purchase.',
            validate: validateInput,
			filter: Number

        },
        {
            name: 'quantity',
            type: 'input',
            message: 'How many would you like to purchase?',
            validate: validateInput,
			filter: Number
        }
    ]).then(function(input){

        var item = input.item_id;
		var quantity = input.quantity;

        var query = 'Select * FROM products WHERE?';


        connection.query(query, {item_id: item}, function(err, res){
            if (err) throw err;

            if (res.length === 0){
                console.log('ERROR: Invalid Item ID. Please select a valid item.');
                bamazonStock();

            }else{

                var productData = res[0];
                
                if(quantity <= productData.stock_quantity){
                    console.log('Your items are in stock. Placing order...')


                    var queryStockUpdate = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;

                    connection.query(queryStockUpdate, function (err, res){
                        if(err) throw err;

                        console.log(`Your order has been placed. Your total is: $${productData.price * quantity}. Thank you for shopping with us!`);

                        connection.end();
                    });

                } else {
                    console.log('There are not enough of the product to cover your order. Please modify your order.');
                };

                bamazonStock();
            };
        });
    });
};

function runBamazon(){
    bamazonStock();
};

runBamazon();
