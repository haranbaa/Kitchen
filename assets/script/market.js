import collections from "./collections.js";

let basked = JSON.parse(localStorage.getItem("basked")) || [];

let filterCatagoryList = [];
let filterNameList = "";

function clearDivChilds(div) {
	while (div.firstChild) {
		div.removeChild(div.lastChild);
	}
}

const container = document.querySelector(".container");
function createCards(filter) {
	filter.forEach((element) => {
		//Create Card
		const card = document.createElement("div");
		card.className = "card";
		card.dataset.value = element.category;

		// Create the Main Content Div
		const mainContent = document.createElement("div");
		mainContent.className = "main-content";

		// Create the Image Div
		const img = document.createElement("img");
		img.className = "img";
		img.src = element.img;
		img.alt = "An image that shows " + element.name;

		// Create the Content Div
		const content = document.createElement("div");
		content.className = "content";

		// Create the Button Div
		const button = document.createElement("div");
		button.className = "addItem";
		button.textContent = "Add";

		// Create the Food Name Div
		const name = document.createElement("div");
		const boldName = element.name;
		name.className = "name";
		name.innerHTML = boldName.bold();

		// Create the Food Ingredients Div
		const ingredientsTitle = document.createElement("div");
		const ingredients = document.createElement("div");

		ingredients.className = "ingredientsTitle";
		ingredientsTitle.innerHTML = "<b>Ingredients</b>";
		ingredients.innerHTML = element.ingredients;
		ingredientsTitle.appendChild(ingredients);

		// Create the Food Price Div
		const price = document.createElement("div");
		price.className = "price";
		price.innerHTML = element.price.toString().bold() + " €";

		// Change Style When Hover Over Image
		img.addEventListener("mouseover", (event) => {
			content.style.flexDirection = "row";
			content.style.flexWrap = "wrap";
			content.style.justifyContent = "center";

			button.style.display = "none";
		});
		img.addEventListener("mouseout", (event) => {
			content.style.display = "flex";
			content.style.flexDirection = "column";
			content.style.justifyContent = "space-between";

			price.style.display = "flex";
			price.style.flexdirection = "row";
			price.style.justifyContent = "flex-end";

			button.style.display = "block";
		});

		button.addEventListener("click", (event) => {
			if (!("quantity" in element)) {
				element["quantity"] = 1;
				basked.push(element);
				localStorage.setItem("basked", JSON.stringify(basked));
			} else {
				element["quantity"] += 1;
				localStorage.setItem("basked", JSON.stringify(basked));
			}
		});

		// Append Name, Ingredients & Price to the Content Div
		content.appendChild(name);
		content.appendChild(ingredientsTitle);
		content.appendChild(price);

		// Append Image & Content to the Main Content Div
		mainContent.appendChild(img);
		mainContent.appendChild(content);

		// Append MainContent & Button to Card Div
		card.appendChild(mainContent);
		card.appendChild(button);

		// Append Card to Container Div
		container.append(card);
	});
}
filteredCatagoryCards(filterCatagoryList);

function filteredCatagoryCards(filterList) {
	const filteredArray = collections.filter(function (element) {
		if (filterList.length === 0) {
			return element;
		}
		if (filterList.every((i) => element.category.includes(i))) {
			return element;
		}
	});
	clearDivChilds(container);
	createCards(filteredArray);
}

function filteredNameCards(filterList) {
	const filteredArray = collections.filter(function (element) {
		if (filterList.length === 0) {
			return element;
		}
		if (element.name.includes(filterList)) {
			return element;
		}
	});
	clearDivChilds(container);
	createCards(filteredArray);
}

function filterEventListener(checkbox, filter) {
	checkbox.addEventListener("change", (event) => {
		if (checkbox.checked) {
			filterCatagoryList.push(filter);
		} else {
			const index = filterCatagoryList.indexOf(filter);
			filterCatagoryList.splice(index, 1);
		}
		filteredCatagoryCards(filterCatagoryList);
	});
}

const search = document.querySelector(".search");
search.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		console.log("Enter");
		filterNameList = search.value;
	} else if (event.key === "Backspace") {
		filterNameList = "";
	}
	console.log(filterNameList);
	filteredNameCards(filterNameList);
});

const vegi = document.getElementById("vegi_checkbox");
filterEventListener(vegi, "vegetarian");

const vegan = document.getElementById("vegan_checkbox");
filterEventListener(vegan, "vegan");

const glutenFree = document.getElementById("glutenfree_checkbox");
filterEventListener(glutenFree, "gluten-free");

const healthy = document.getElementById("healthy_checkbox");
filterEventListener(healthy, "healthy");

const seafood = document.getElementById("seafood_checkbox");
filterEventListener(seafood, "seafood");

const comfy = document.getElementById("comfy_checkbox");
filterEventListener(comfy, "comfort food");

const appetizer = document.getElementById("appetizer_checkbox");
filterEventListener(appetizer, "appetizer");

const mediterranean = document.getElementById("mediterranean_checkbox");
filterEventListener(mediterranean, "Mediterranean");

const asian = document.getElementById("asian_checkbox");
filterEventListener(asian, "Asian");

const italian = document.getElementById("italian_checkbox");
filterEventListener(italian, "Italian");

const french = document.getElementById("french_checkbox");
filterEventListener(french, "French");

const mexican = document.getElementById("mexican_checkbox");
filterEventListener(mexican, "Mexican");

const american = document.getElementById("american_checkbox");
filterEventListener(american, "American");

const dessert = document.getElementById("dessert_checkbox");
filterEventListener(dessert, "dessert");

const drinks = document.getElementById("drinks_checkbox");
filterEventListener(drinks, "drinks");

const reloadPage = document.querySelector(".filterClear");
reloadPage.addEventListener("click", (e) => {
	console.log("clicked");
	window.location.reload();
});
