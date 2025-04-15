    document.getElementById("book-form").addEventListener("submit", function(event) {
        event.preventDefault();
    
        const name = document.getElementById("book-name").value;
        const category = document.getElementById("category").value;
        const author = document.getElementById("author").value;
        const imageFile = document.getElementById("book-image").files[0];
    
        if (!imageFile) {
        alert("Please upload a book cover image.");
        return;
        }
    
        const reader = new FileReader();
        reader.onload = function (e) {
        const imageURL = e.target.result;
    
        // You can push this into localStorage or your cart array
        const book = {
            title: name,
            category: category,
            author: author,
            image: imageURL
        };
    
        // Display preview
        const previewDiv = document.getElementById("book-preview");
        previewDiv.innerHTML = `
            <h3>Book Added:</h3>
            <img src="${book.image}" alt="Book Image" width="100"><br>
            <strong>Title:</strong> ${book.title}<br>
            <strong>Author:</strong> ${book.author}<br>
            <strong>Category:</strong> ${book.category}
        `;
    
        // OPTIONAL: Store in cart/localStorage
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(book);
        localStorage.setItem("cart", JSON.stringify(cart));
    
        // Clear the form
        document.getElementById("book-form").reset();
        };
    
        reader.readAsDataURL(imageFile);
    });
    