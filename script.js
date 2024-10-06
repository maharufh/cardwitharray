// Array of product objects
const products = [
    {
      image: 'images/c1.jpg',
      description: 'This is a great product 1.',
      price: '€50.00',
    },
    {
      image: 'images/c2.png',
      description: 'This is a great product 2.',
      price: '€70.00',
    },
    {
      image: 'images/c3.jpg',
      description: 'This is a great product 3.',
      price: '€90.00',
    },
    {
      image: 'images/c4.jpeg',
      description: 'This is a great product 4.',
      price: '€120.00',
    },
    {
      image: 'images/c5.jpeg',
      description: 'This is a great product 5.',
      price: '€150.00',
    }
  ];
  
  // Function to render product cards
  function renderProductCards() {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';
  
    products.forEach((product, index) => {
      const card = document.createElement('div');
      card.classList.add('product-card');
  
      card.innerHTML = `
        <img class="product-image" src="${product.image}" alt="Product Image">
        <p class="product-description">${product.description}</p>
        <p class="product-price">${product.price}</p>
        <div class="card-buttons">
          <button onclick="addToCart(${index})">Add to Cart</button>
          <button class="view-btn" onclick="viewProduct(${index})">View</button>
        </div>
      `;
  
      productContainer.appendChild(card);
    });
  }
  
  // Function to handle adding product to cart
  function addToCart(index) {
    alert(`Added ${products[index].description} to cart!`);
  }
  
  // Function to view product details
  function viewProduct(index) {
    alert(`Viewing ${products[index].description}.`);
  }
  
  // Initial call to render the product cards
  renderProductCards();
  