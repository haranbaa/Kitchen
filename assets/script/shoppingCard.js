document.addEventListener('DOMContentLoaded', () => {
    let basked = JSON.parse(localStorage.getItem('basked'));
    const showTv = document.querySelector('.main_wrapper');
    const showPage = document.querySelector('.checkout-container');

    function checkCart() {
        if (!basked || basked.length === 0) {
            showTv.style.display = 'flex';
            showPage.style.display = 'none';
            setTimeout(function() {
                alert('Ur cart is empty. First add items to your cart.');
                window.location.href = 'market.html';
            }, 2000); 
        } else {
            showTv.style.display = 'none';
            showPage.style.display = 'flex';
        }
    }

    checkCart();

    const orderSummary = document.getElementById('order-summary');
    const purchaseBtn = document.getElementById('purchase-button');
    const clearCard = document.getElementById('clear-card');

    function shippingDetails() {
        const userName = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const region = document.getElementById('region').value;
        const city = document.getElementById('city').value;
        const zip = document.getElementById('zip').value;
        const street = document.getElementById('street').value;
        const streetNumber = document.getElementById('street-number').value;

        const shippingInfo = {
            userName,
            email,
            region,
            city,
            zip,
            street,
            streetNumber
        };
        localStorage.setItem('shippingInfo', JSON.stringify(shippingInfo));

        return shippingInfo;
    }

    function loadShippingDetails() {
        const userData = JSON.parse(localStorage.getItem('shippingInfo'));
        if (userData) {
            document.getElementById('name').value = userData.userName;
            document.getElementById('email').value = userData.email;
            document.getElementById('region').value = userData.region;
            document.getElementById('city').value = userData.city;
            document.getElementById('zip').value = userData.zip;
            document.getElementById('street').value = userData.street;
            document.getElementById('street-number').value = userData.streetNumber;
        } else {
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('region').value = '';
            document.getElementById('city').value = '';
            document.getElementById('zip').value = '';
            document.getElementById('street').value = '';
            document.getElementById('street-number').value = '';
        }
    }

    loadShippingDetails();

    let subtotal = 0;

    function orderSummaryFnc() {
        orderSummary.innerHTML = '';

        if (basked) {
            for (let i = 0; i < basked.length; i++) {
                let objectName = basked[i].name;
                let objectPrice = basked[i].price;
                let objectQuantity = basked[i].quantity;

                const newDiv = document.createElement('div');
                const pEl = document.createElement('p');
                const input = document.createElement('input');
                const removeBtn = document.createElement('button');

                newDiv.className = 'order-item';
                pEl.className = 'order-price';
                removeBtn.className = 'removeButton'
                removeBtn.innerHTML = 'x'
                removeBtn.setAttribute('data-index', i);

                orderSummary.append(newDiv);
                pEl.append(removeBtn)
                newDiv.append(pEl)
                newDiv.appendChild(input);
                pEl.append(objectName)
                pEl.append(' - ')
                pEl.append(objectPrice)
                pEl.append('€')

                newDiv.append(input)
                input.type = 'number';
                input.id = 'quantity-' + i;
                input.setAttribute('data-index', i);
                input.className = 'quantityNr'
                input.value = objectQuantity;
                input.min = 1;

                const itemTotal = basked[i].quantity * parseFloat(basked[i].price);
                subtotal += itemTotal;

                removeBtn.addEventListener('click', (event) => {
                    const index = parseInt(event.target.getAttribute('data-index'));
                    console.log(index);
                    removeLine(index, newDiv);
                });
            }
        }
    }

    function removeLine(index, element) {
        if (index > -1) {
            const alertConfirm = window.confirm("Are You sure u want to remove");
            if (alertConfirm) {
                basked.splice(index, 1);
                localStorage.setItem('basked', JSON.stringify(basked));
                element.remove();
                subtotal = 0;
                orderSummaryFnc();
                totalPrice();
            } else {
                return;
            }
        }
    }

    orderSummaryFnc();

    function totalPrice() {
        let vat = subtotal * 0.21;
        let total = subtotal + vat;

        const totalDiv = document.createElement('div');
        totalDiv.className = 'order-total';

        totalDiv.innerHTML = `
            <p>Subtotal: <span>${subtotal.toFixed(2)} €</span></p>
            <p>VAT (21%): <span>${vat.toFixed(2)} €</span></p>
            <p>Total: <span>${total.toFixed(2)} €</span></p>
         `;

        orderSummary.appendChild(totalDiv);
        checkCart();
    }

    totalPrice();

    function updateQuantity() {
        const newQuantityNr = parseFloat(event.target.value);
        const quantityIndex = parseInt(event.target.getAttribute('data-index'));

        if (quantityIndex < basked.length) {
            basked[quantityIndex].quantity = newQuantityNr;
            localStorage.setItem('basked', JSON.stringify(basked));
            subtotal = 0;
            orderSummaryFnc();
            totalPrice();
        }
    }

    orderSummary.addEventListener('change', (event) => {
        if (event.target.classList.contains('quantityNr')) {
            const newQuantityNr = parseFloat(event.target.value);
            const quantityIndex = parseInt(event.target.getAttribute('data-index'));

            if (quantityIndex < basked.length) {
                basked[quantityIndex].quantity = newQuantityNr;
                localStorage.setItem('basked', JSON.stringify(basked));
                updateQuantity();
            }
        }
        inputData();
    });

    const input = document.getElementById('shipping-form');
    let isRegister = true;

    const inputData = (e) => {
        const userDataCheck = ['name', 'email', 'region', 'city', 'zip', 'street', 'street-number'];

        isRegister = true;

        userDataCheck.forEach(element => {
            const usersData = document.getElementById(element);
            if (!usersData.value.trim()) {
                usersData.style.borderColor = 'red';
                isRegister = false;
            } else {
                usersData.style.borderColor = '';
            }
        });
    };

    for (let i of input) {
        i.addEventListener('keyup', inputData)
    }

    inputData();

    purchaseBtn.addEventListener('click', (e) => {
        inputData();
        if (isRegister) {
            shippingDetails();
            checkCart();
            window.alert('We will send u tracking number to Email address. Thank you for order');
            localStorage.removeItem('basked');
            window.location.href = 'market.html';
        } else { 
            window.alert('Shipping Details is require');
        }
    });

    clearCard.addEventListener('click', (e) => {
        const alertConfirm = window.confirm("Are u sure u want to clear card");
        if (alertConfirm) {
            localStorage.removeItem('basked');
            showTv.style.display = 'flex';
            showPage.style.display = 'none';
            setTimeout(function() {
                alert('Ur cart is empty. First add items to your cart.');
                window.location.href = 'market.html';
            }, 2000); 
        } else {
            return;
        }
    })
});