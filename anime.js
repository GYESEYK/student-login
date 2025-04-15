    // Get the cart panel and cart items list
    const cartPanel = document.getElementById("cartPanel");
    const cartItems = document.getElementById("cartItems");

    // Open the cart panel
    function openCart() {
    cartPanel.classList.add("active");
    }

    // Close the cart panel
    function closeCart() {
    cartPanel.classList.remove("active");
    }

    // Add a book to the cart
    function addToCart(title) {
    openCart();

    // Create the list item
    const li = document.createElement("li");
    li.innerHTML = `
        ${title}
        <button class="remove-btn" onclick="removeItem(this)">Remove</button>
    `;

    cartItems.appendChild(li);
    }

    // Remove a specific book
    function removeItem(button) {
    const li = button.parentElement;
    li.remove();
    }

        function openCart() {
            document.getElementById("cartPanel").classList.add("active");
        }
        
        function closeCart() {
            document.getElementById("cartPanel").classList.remove("active");
        }
        
        function addToCart(title) {
            openCart();
            const cartItems = document.getElementById("cartItems");
        
            const li = document.createElement("li");
            li.innerHTML = `
            ${title}
            <button class="remove-btn" onclick="removeItem(this)">Remove</button>
            `;
        
            cartItems.appendChild(li);
        }
        
        function removeItem(button) {
            button.parentElement.remove();
        }
        



            let cartData = [];

    function openCart() {
    document.getElementById("cartPanel").classList.add("active");
    }

    function closeCart() {
    document.getElementById("cartPanel").classList.remove("active");
    }

    function addToCart(title) {
    openCart();

    // Add to cartData
    cartData.push(title);

    // Add to UI
    const cartItems = document.getElementById("cartItems");
    const li = document.createElement("li");
    li.innerHTML = `
        ${title}
        <button class="remove-btn" onclick="removeItem(this, '${title}')">Remove</button>
    `;
    cartItems.appendChild(li);
    }

    function removeItem(button, title) {
    button.parentElement.remove();
    cartData = cartData.filter(item => item !== title);
    }

    function checkout() {
    if (cartData.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    // Save data to localStorage to be accessed by the librarian page
    localStorage.setItem("checkoutList", JSON.stringify(cartData));

    // Clear cart
    document.getElementById("cartItems").innerHTML = "";
    cartData = [];

    // Redirect to the librarian system (replace with actual path)
    }



