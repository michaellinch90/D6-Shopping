require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function(){

    await Category.deleteMany({});
    const categories = await Category.create([
        {name: 'Produce', priceRange:'$1-$3', sortOrder: 10},
        {name: 'Meat', priceRange:'$4-$7', sortOrder: 20},
        {name: 'Frozen', priceRange:'$2-$7', sortOrder: 30},
        {name: 'Grocery', priceRange:'$1-$5', sortOrder: 40},
        {name: 'Bakery', priceRange: '$1-$5', sortOrder:50},
        {name: 'Dairy', priceRange:'$2-$5', sortOrder: 60},
        {name: 'Essentials', priceRange:'$2-$5', sortOrder: 70},
    ]);

    await Item.deleteMany({});
    const items = await Item.create ([
        // categories[0] = Produce
        {name: 'Carrots', picture: '🥕', category: categories[0], price: 1.00},
        {name: 'Lettuce', picture: '', category: categories[0], price: 1.50},
        {name: 'Tomatoes', picture: '', category: categories[0], price: 2.50},
        {name: 'Onion', picture: '', category: categories[0], price: 1.00},
        {name: 'Grapes', picture: '', category: categories[0], price: 3.00},
        {name: 'Lime', picture: '', category: categories[0], price: 1.00},
        {name: 'Cucumbers', picture: '', category: categories[0], price: 1.00},
        {name: 'Cilantro', picture: '', category: categories[0], price: 1.00},
        {name: 'Bell Pepper', picture: '', category: categories[0], price: 2.50},
        {name: 'Strawberries', picture: '', category: categories[0], price: 3.00},
        // categories[1] = Meat
        {name: 'Bacon', picture: '', category: categories[1], price: 6.50},
        {name: 'Chicken', picture: '', category: categories[1], price: 6.00},
        {name: 'Ground Meat', picture: '', category: categories[1], price: 5.00},
        {name: 'Sausage', picture: '', category: categories[1], price: 5.00},
        {name: 'Pepperoni', picture: '', category: categories[1], price: 2.50},
        {name: 'Lunch Meat', picture: '', category: categories[1], price: 7.00},
        //categories[2] = Frozen
        {name: 'Chicken Tenders', picture: '', category: categories[2], price: 6.50},
        {name: 'French Fries/Tots', picture: '', category: categories[2], price: 4.00},
        {name: 'Veggies', picture: '', category: categories[2], price: 2.00},
        {name: 'Juice', picture: '', category: categories[2], price: 2.00},
        //categories[3] = Grocery
        {name: 'Drink Mix', picture: '', category: categories[3], price: 2.00},
        {name: 'Pasta', picture: '', category: categories[3], price: 3.00},
        {name: 'Rice', picture: '', category: categories[3], price: 2.50},
        {name: 'Spaghetti Sauce', picture: '', category: categories[3], price: 3.00},
        {name: 'Beans', picture: '', category: categories[3], price: 2.50},
        {name: 'Chips', picture: '', category: categories[3], price: 3.00},
        {name: 'Tortillas', picture: '', category: categories[3], price: 2.00},
        //categories[4] = Bakery
        {name: 'Sliced Bread', picture: '', category: categories[4], price: 2.00},
        {name: 'Garlic Bread', picture: '', category: categories[4], price: 3.00},
        {name: 'Buns', picture: '', category: categories[4], price: 1.00},
        {name: 'Cookies', picture: '', category: categories[4], price: 3.00},
        {name: 'Brownies', picture: '', category: categories[4], price: 4.00},
        //categories[5] = Dairy
        {name: 'Butter', picture: '', category: categories[5], price: 5.00},
        {name: 'Shredded Cheese', picture: '', category: categories[5], price: 4.00},
        {name: 'Sliced Cheese', picture: '', category: categories[5], price: 3.00},
        {name: 'Eggs', picture: '', category: categories[5], price: 4.00},
        {name: 'Milk', picture: '', category: categories[5], price: 4.00},
        {name: 'Sour Cream', picture: '', category: categories[5], price: 2.00},
        //categories[6] = Essentials
        {name: 'Dish Soap', picture: '', category: categories[6], price: 5.00},
        {name: 'Sponges', picture: '', category: categories[6], price: 3.00},
        {name: 'Paper Plates', picture: '', category: categories[6], price: 4.00},
        {name: 'Plastic Utensils', picture: '', category: categories[6], price: 3.00},
        {name: 'Napkins', picture: '', category: categories[6], price: 1.00},
        {name: 'Tissues', picture: '', category: categories[6], price: 4.00},
    ]);

    console.log(items)

    process.exit
})();