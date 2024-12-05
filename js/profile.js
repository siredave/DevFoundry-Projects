import { Product,ProductService } from "./product.js";

const productService = new ProductService();

// Reference to the container
const productCardsContainer = document.getElementById("product-cards")

// Function to create and append product cards
function displayProducts(products) {
  const productCardsContainer = document.getElementById("product-cards");
  products.forEach((productData) => {
    // Create Product instance
    const product = new Product(productData);

    // Create card container
    const card = document.createElement("div");
    card.className = "p-6 transition-all bg-white rounded-lg shadow-lg hover:scale-105";

    // Add image
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.title;
    img.className = "object-cover w-full h-40 mb-4 rounded-lg";

    // Add title
    const title = document.createElement("h3");
    title.className = "mb-2 text-xl font-semibold text-gray-800 font-[Gilroy-Bold]";
    title.textContent = product.title;

    // Add price
    const price = document.createElement("p");
    price.className = "mb-4 text-lg text-green-600 font-[Gilroy-SemiBold]";
    price.textContent = `$${product.price}`;

      // Add description
      const description = document.createElement("p");
      description.className = "mb-4 text-gray-600 font-[Gilroy-Regular] text-[14px] leading-[16.41px] text-[#432361]";
      description.textContent = product.description || "No description available.";

    // Add button
    const button = document.createElement("button");
    button.className = "flex items-center justify-center px-4 h-auto w-auto min-w-[78px] font-[Gilroy-Semibold] text-[14px] leading-none text-[#432361]";
    button.textContent = "View Details↗";    
    button.addEventListener("click", () => {
      // Redirect to the product detail page with the product ID
      window.location.href = `product-detail.html?id=${product.id}`;
    });

    // Append elements to the card
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(description);
    card.appendChild(button);

    // Append card to the container
    productCardsContainer.appendChild(card);
  });
}


// Fetch and display products
async function init() {
  try {
    const products = await productService.getProducts();
    displayProducts(products);
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
}

init();