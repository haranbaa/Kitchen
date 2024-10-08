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
    const newDiv = document.createElement("div");
    const button = document.createElement("button");
    button.className = "addItem";
    button.innerHTML = `<span class="button__text">Add</span>
  <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>`;
    newDiv.append(button);

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

    // // Change Style When Hover Over Image
    // img.addEventListener("mouseover", (event) => {
    //   content.style.flexDirection = "row";
    //   content.style.flexWrap = "wrap";
    //   content.style.justifyContent = "center";

    //   button.style.display = "none";
    // });
    // img.addEventListener("mouseout", (event) => {
    //   content.style.display = "flex";
    //   content.style.flexDirection = "column";
    //   content.style.justifyContent = "space-between";

    //   price.style.display = "flex";
    //   price.style.flexdirection = "row";
    //   price.style.justifyContent = "flex-end";

    //   button.style.display = "block";
    // });

    button.addEventListener("click", () => {
      if (!("quantity" in element)) {
        element["quantity"] = 1;
        basked.push(element);
        showEmptyCart();
      } else {
        element["quantity"] += 1;
        showEmptyCart();
      }
      localStorage.setItem("basked", JSON.stringify(basked));
      button.classList.add("added");
      setTimeout(() => button.classList.remove("added"), 500);
      updateCartDisplay(); // Update the cart display
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

const cartQuantity = document.querySelector(".cart-button");
const shoppingCart = document.querySelector(".shopping_cart");

function showEmptyCart() {
  if (basked.length === 0) {
    cartQuantity.style.display = "none";
    shoppingCart.style.marginTop = "-12px";
  } else {
    cartQuantity.style.display = "block";
    shoppingCart.style.marginTop = "30px";
  }
}

showEmptyCart();

function updateCartDisplay() {
  const cartButton = document.querySelector(".cart-button");
  if (cartButton) {
    const cartQuantity = basked.reduce(
      (acc, item) => acc + (item.quantity || 0),
      0
    );
    cartButton.setAttribute("data-quantity", cartQuantity);
  }
}

updateCartDisplay();

const search = document.querySelector(".search");
search.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    filterNameList = search.value;
    filteredNameCards(filterNameList);
  } else if (event.key === "Backspace") {
    filterNameList = "";
    filteredNameCards(filterNameList);
  }
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
  window.location.reload();
});

const addItem = document.querySelectorAll(".addItem");

const addRemoveBtn = (e) => {
  console.log("test");
};

for (let i of addItem) {
  i.addEventListener("click", addRemoveBtn);
}
