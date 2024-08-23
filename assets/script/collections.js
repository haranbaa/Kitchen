const collections = [
	{
		name: "Margherita Pizza",
		price: 10,
		img: "assets/food_img/Margherita Pizza.png",

		ingredients: "Tomato, mozzarella, basil, olive oil",

		category: ["vegetarian", "comfort food"],
	},
	{
		name: "Grilled Chicken Salad",
		price: 15,
		img: "assets/food_img/Grilled Chicken Salad.png",

		ingredients: "Grilled chicken, mixed greens, cherry tomatoes, cucumber, balsamic vinaigrette",

		category: ["healthy", "gluten-free"],
	},
	{
		name: "Vegan Salad Bowl",
		price: 13,
		img: "assets/food_img/Vegan Salad Bowl.png",

		ingredients: "Quinoa, roasted vegetables, avocado, chickpeas, tahini sauce",

		category: ["vegan", "vegetarian", "healthy"],
	},
	{
		name: "Spaghetti Carbonara",
		price: 14,
		img: "assets/food_img/Spaghetti Carbonara.png",

		ingredients: "Spaghetti, eggs, parmesan cheese, black pepper, pancetta",

		category: ["comfort food", "Italian"],
	},
	{
		name: "Caprese Salad",
		price: 9,
		img: "assets/food_img/Caprese Salad.png",

		ingredients: "Tomato, mozzarella, basil, olive oil, balsamic vinegar",

		category: ["vegetarian", "appetizer"],
	},
	{
		name: "Chicken Tikka Masala",
		price: 16,
		img: "assets/food_img/Chicken Tikka Masala.png",

		ingredients: "Chicken, tomato sauce, yogurt, spices, rice",

		category: ["comfort food", "gluten-free"],
	},
	{
		name: "Vegan Quinoa Salad",
		price: 12,
		img: "assets/food_img/Vegan Quinoa Salad.png",

		ingredients: "Quinoa, cucumber, cherry tomatoes, avocado, lemon dressing",

		category: ["vegan", "vegetarian", "healthy"],
	},
	{
		name: "Mushroom Risotto",
		price: 14,
		img: "assets/food_img/Mushroom Risotto.png",

		ingredients: "Arborio rice, mushrooms, parmesan cheese, white wine, garlic",

		category: ["vegetarian", "Italian"],
	},
	{
		name: "Grilled Salmon",
		price: 18,
		img: "assets/food_img/Grilled Salmon.png",

		ingredients: "Salmon fillet, lemon, dill, olive oil, asparagus",

		category: ["healthy", "gluten-free"],
	},
	{
		name: "Eggplant Parmesan",
		price: 14,
		img: "assets/food_img/Eggplant Parmesan.png",

		ingredients: "Eggplant, tomato sauce, mozzarella, parmesan, basil",

		category: ["vegetarian", "comfort food"],
	},
	{
		name: "Falafel Wrap",
		price: 11,
		img: "assets/food_img/Falafel Wrap.png",

		ingredients: "Falafel, hummus, lettuce, tomatoes, pita bread",

		category: ["vegan", "vegetarian", "Mediterranean"],
	},
	{
		name: "Shrimp Pad Thai",
		price: 15,
		img: "assets/food_img/Shrimp Pad Thai.png",

		ingredients: "Shrimp, rice noodles, peanuts, eggs, tamarind sauce",

		category: ["Asian", "gluten-free"],
	},
	{
		name: "Vegetable Stir Fry",
		price: 12,
		img: "assets/food_img/Vegetable Stir Fry.png",

		ingredients: "Broccoli, bell peppers, snap peas, soy sauce, rice",

		category: ["vegetarian", "Asian"],
	},
	{
		name: "BBQ Chicken Wings",
		price: 14,
		img: "assets/food_img/BBQ Chicken Wings.png",

		ingredients: "Chicken wings, BBQ sauce, celery sticks, ranch dressing",

		category: ["comfort food", "American"],
	},
	{
		name: "Caesar Salad",
		price: 10,
		img: "assets/food_img/Caesar Salad.png",

		ingredients: "Romaine lettuce, croutons, parmesan, Caesar dressing",

		category: ["appetizer", "healthy"],
	},
	{
		name: "Beef Burrito",
		price: 12,
		img: "assets/food_img/Beef Burrito.png",

		ingredients: "Beef, rice, beans, cheese, tortilla, salsa",

		category: ["Mexican", "comfort food"],
	},
	{
		name: "Vegan Lentil Soup",
		price: 8,
		img: "assets/food_img/Vegan Lentil Soup.png",

		ingredients: "Lentils, carrots, celery, onions, vegetable broth",

		category: ["vegan", "vegetarian", "healthy"],
	},
	{
		name: "Chicken Pasta",
		price: 15,
		img: "assets/food_img/Chicken Pasta.png",

		ingredients: "Chicken, fettuccine, Alfredo sauce, parmesan, parsley",

		category: ["comfort food", "Italian"],
	},
	{
		name: "Greek Salad",
		price: 10,
		img: "assets/food_img/Greek Salad.png",

		ingredients: "Cucumber, tomato, feta cheese, olives, olive oil",

		category: ["vegetarian", "Mediterranean"],
	},
	{
		name: "Teriyaki Salmon",
		price: 18,
		img: "assets/food_img/Teriyaki Salmon.png",

		ingredients: "Salmon, teriyaki sauce, sesame seeds, steamed rice",

		category: ["Asian", "healthy"],
	},
	{
		name: "Vegan Tofu Stir Fry",
		price: 13,
		img: "assets/food_img/Vegan Tofu Stir Fry.png",

		ingredients: "Tofu, broccoli, carrots, soy sauce, rice",

		category: ["vegan", "vegetarian", "Asian"],
	},
	{
		name: "Beef Tacos",
		price: 12,
		img: "assets/food_img/Beef Tacos.png",

		ingredients: "Beef, taco shells, lettuce, cheese, salsa",

		category: ["Mexican", "comfort food"],
	},
	{
		name: "Vegetable Spring Rolls",
		price: 7,
		img: "assets/food_img/Vegetable Spring Rolls.png",

		ingredients: "Cabbage, carrots, mushrooms, soy sauce, wrappers",

		category: ["appetizer", "Asian"],
	},
	{
		name: "Vegan Chocolate Cake",
		price: 6,
		img: "assets/food_img/Vegan Chocolate Cake.png",

		ingredients: "Cocoa, almond flour, coconut oil, maple syrup",

		category: ["dessert", "vegan", "vegetarian"],
	},
	{
		name: "Cheeseburger",
		price: 12,
		img: "assets/food_img/Cheeseburger.png",

		ingredients: "Beef patty, cheddar cheese, lettuce, tomato, bun",

		category: ["comfort food", "American"],
	},
	{
		name: "Tom Yum Soup",
		price: 9,
		img: "assets/food_img/Tom Yum Soup.png",

		ingredients: "Shrimp, mushrooms, lemongrass, lime juice, chili",

		category: ["Asian", "gluten-free"],
	},
	{
		name: "Chicken Caesar Wrap",
		price: 11,
		img: "assets/food_img/Chicken Caesar Wrap.png",

		ingredients: "Chicken, romaine lettuce, Caesar dressing, tortilla",

		category: ["comfort food", "healthy"],
	},
	{
		name: "Veggie Burger",
		price: 11,
		img: "assets/food_img/Veggie Burger.png",

		ingredients: "Vegetable patty, lettuce, tomato, avocado, bun",

		category: ["vegan", "vegetarian", "American"],
	},
	{
		name: "Shrimp Scampi",
		price: 17,
		img: "assets/food_img/Shrimp Scampi.png",

		ingredients: "Shrimp, garlic, butter, lemon, spaghetti",

		category: ["Italian", "seafood"],
	},
	{
		name: "Gazpacho",
		price: 8,
		img: "assets/food_img/Gazpacho.png",

		ingredients: "Tomatoes, cucumber, bell pepper, garlic, olive oil",

		category: ["vegetarian", "appetizer"],
	},
	{
		name: "Fish and Chips",
		price: 14,
		img: "assets/food_img/Fish and Chips.png",

		ingredients: "White fish, batter, fries, tartar sauce, lemon",

		category: ["comfort food", "seafood"],
	},
	{
		name: "Roasted Vegetable Pizza",
		price: 13,
		img: "assets/food_img/Roasted Vegetable Pizza.png",

		ingredients: "Tomato, mozzarella, zucchini, bell peppers, basil",

		category: ["vegetarian", "Italian"],
	},
	{
		name: "Mango Smoothie",
		price: 7,
		img: "assets/food_img/Mango Smoothie.png",

		ingredients: "Mango, banana, yogurt, honey, ice",

		category: ["drinks", "healthy"],
	},
	{
		name: "Pasta Primavera",
		price: 13,
		img: "assets/food_img/Pasta Primavera.png",

		ingredients: "Pasta, zucchini, bell peppers, cherry tomatoes, garlic",

		category: ["vegetarian", "Italian"],
	},
	{
		name: "Steak Frites",
		price: 20,
		img: "assets/food_img/Steak Frites.png",

		ingredients: "Steak, fries, garlic butter, parsley",

		category: ["comfort food", "French"],
	},
	{
		name: "Greek Yogurt with Honey",
		price: 6,
		img: "assets/food_img/Greek Yogurt with Honey.png",

		ingredients: "Greek yogurt, honey, walnuts, berries",

		category: ["dessert", "healthy"],
	},
	{
		name: "Buffalo Chicken Pizza",
		price: 15,
		img: "assets/food_img/Buffalo Chicken Pizza.png",

		ingredients: "Chicken, mozzarella, buffalo sauce, ranch dressing, scallions",

		category: ["comfort food", "American"],
	},
	{
		name: "Miso Soup",
		price: 6,
		img: "assets/food_img/Miso Soup.png",

		ingredients: "Miso paste, tofu, seaweed, green onions, dashi",

		category: ["appetizer", "Asian"],
	},
	{
		name: "Veggie Quesadilla",
		price: 10,
		img: "assets/food_img/Veggie Quesadilla.png",

		ingredients: "Tortilla, cheese, bell peppers, onions, sour cream",

		category: ["Mexican", "vegetarian"],
	},
	{
		name: "Chocolate Mousse",
		price: 7,
		img: "assets/food_img/Chocolate Mousse.png",

		ingredients: "Chocolate, eggs, sugar, cream",

		category: ["dessert", "French"],
	},
];

export default collections;
