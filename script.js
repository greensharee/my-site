const products = [
    { id: 1, name: "Smartphone", price: "৳১৫,০০০" },
    { id: 2, name: "Headphone", price: "৳১,২০০" },
    { id: 3, name: "Watch", price: "৳২,৫০০" }
];

const productContainer = document.getElementById('product-list');

products.forEach(product => {
    productContainer.innerHTML += `
        <div class="product-card">
            <h3>${product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onclick="alert('Added to cart!')">Add to Cart</button>
        </div>
    `;
});
