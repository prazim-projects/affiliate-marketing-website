document.addEventListener('DOMContentLoaded', () => {
  const productsContainer = document.getElementById('productsContainer');
  const registerForm = document.getElementById('registerForm');
  const loginForm = document.getElementById('loginForm');

  // Validate inputs for null or empty values
  function validateInputs(username, password) {
    if (!username || username.trim() === '') {
      alert('Username cannot be empty.');
      return false;
    }
    if (!password || password.trim() === '') {
      alert('Password cannot be empty.');
      return false;
    }
    return true;
  }

  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // Validate inputs
      if (!validateInputs(username, password)) {
        return;
      }

      try {
        const response = await fetch('/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        });

        const result = await response.json();
        alert(result.message);
        if (response.ok) window.location.href = 'login.html';
      } catch (err) {
        console.error('Error during registration:', err);
        alert('An error occurred. Please try again.');
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // Validate inputs
      if (!validateInputs(username, password)) {
        return;
      }

      try {
        const response = await fetch('/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        });

        const result = await response.json();
        alert(result.message);
        if (response.ok) window.location.href = 'products.html';
      } catch (err) {
        console.error('Error during login:', err);
        alert('An error occurred. Please try again.');
      }
    });
  }

  // Fetch and display products (unchanged)
  async function loadProducts() {
    try {
      const response = await fetch('/products');
      const products = await response.json();

      productsContainer.innerHTML = '';

      products.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <a href="${product.link}" class="buy-button">Buy Now</a>
        `;

        productsContainer.appendChild(productCard);
      });
    } catch (err) {
      console.error('Error fetching products:', err);
      productsContainer.innerHTML = '<p>Failed to load products. Please try again later.</p>';
    }
  }

  if (productsContainer) {
    loadProducts();
  }
});
