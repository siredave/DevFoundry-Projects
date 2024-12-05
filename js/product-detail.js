import { Product,ProductService } from "./product.js";
const productService = new ProductService();


// Fetch the product ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");


// Reference to the product details container
const productDetailContainer = document.getElementById("product-detail");

// Function to fetch product details by ID
async function fetchProductDetails(id) {
  try {
    const productData = await productService.getProductById(id);
    return new Product(productData); // Return a Product instance
  } catch (error) {
    console.error("Failed to fetch product details:", error);
    return null;
  }
}


// Function to display the product details on the page

function displayProductDetails(product) {
  // Create elements to display product details
  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.title;
  img.className = "w-full h-96 object-cover rounded-lg mb-8";

  const title = document.createElement("h1");
  title.className = "text-3xl font-semibold text-gray-800 mb-4";
  title.textContent = product.title;

  const price = document.createElement("p");
  price.className = "text-2xl text-green-600 mb-4";
  price.textContent = `$${product.price}`;

  const description = document.createElement("p");
  description.className = "text-lg text-gray-700 mb-4";
  description.textContent = `Description: ${product.description}`;

  const category = document.createElement("p");
  category.className = "text-lg text-gray-700 mb-4";
  category.textContent = `Category: ${product.category}`;

  const rating = document.createElement("p");
  rating.className = "text-lg text-gray-700 mb-4";
  rating.textContent = `Rating: ${product.rating.rate} (${product.rating.count} reviews)`;

  // Append elements to the product detail container
  productDetailContainer.appendChild(img);
  productDetailContainer.appendChild(title);
  productDetailContainer.appendChild(price);
  productDetailContainer.appendChild(description);
  productDetailContainer.appendChild(category);
  productDetailContainer.appendChild(rating);
}

// Fetch the product and display its details
async function init() {
  const product = await fetchProductDetails(productId);
  displayProductDetails(product);
}

init();
