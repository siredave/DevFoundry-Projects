import { Product, ProductService } from "./product.js";
const productService = new ProductService();

// Fetch the product ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

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

// Reference to the product details container
const productDetailContainer = document.getElementById("product-detail");

// Function to display the product details on the page

function displayProductDetails(product) {
  productDetailContainer.innerHTML = `
     <div class="pb-2 font-gilroyRegular">          
          <img src=${product.image} alt=${product.title} class="w-full h-96 object-contain shadow-lg rounded-[10px]"/>
          
            <div class="flex flex-col md:flex-row md:justify-between gap-[20px] py-8">
              <div class="p-[20px] w-full md:w-[60%] lg:w-[70%]">
                <p class="font-[Gilroy-Bold] text-[24px] leading-[28.13px] py-2">${product.title}</p>
                <div class="text-base flex flex-col gap-3 pt-2">
                  <div class="flex flex-col items-start justify-center gap-2 w-[681px] h-[88px] ">
                    <div class="flex gap-[14px] w-[309px] h-[24px]">
                    <i class="bi bi-calendar text-secondary"></i> 
                    <p class="font-[Gilroy-Regular] text-[16px] leading-[18.75px]">Sunday, October 3rd, 2023</p>
                    <p class="font-[Gilroy-Regular]"><i class="bi bi-clock text-secondary"></i> <span> 6PM</span></p>
                    </div>
                  </div>
                  <div class="flex gap-2 w-[681px] h-[24px] ">
                    <i class="bi bi-geo-alt text-secondary"></i> <p class="w-[651px] h-[19px] font-[Gilroy-Regular] text-[16px] leading-[18.75px]">Race Course, 8/9 Marina, Onikan, Lagos Lagos, 4aa Force Rd, Lagos Island 102273, Lagos</p>
                  </div>
                  <div class="flex gap-2 w-[58px] h-[19px]">
                    <i class="bi bi-person text-secondary"></i><p class="font-[Gilroy-Regular] text-[16px] leading-[18.75px] flex ">FK, Jollz</p>
                  </div>
                </div>
                <div class="pt-3 w-[875px] h-[247px]">                
                  <h2 class="font-[Gilroy-Bold] text-[16px] leading-[18.75px] py-6">Event description</h2>
                  <p class="font-[Gilroy-Bold] text-[16px] leading-[18.75px]"> ${product.description}</p>
                </div>
                <div class="pt-6">
                <p class="font-[Gilroy-Bold] text-[16px] leading-[18.75px]">Product Pricing</p>
                <div class="font-[Gilroy-Bold] text-[16px] leading-[18.75px] pt-2">
                  $${product.price}
                </div>
                <button class="bg-secondary text-base px-6 py-3 rounded-[10px] text-white font-gilroySemiBold hover:bg-primary transition-all mt-8">Buy Now</button>
                </div>
              </div>
              <div class="w-full md:w-[40%] lg:w-[30%] md:pt-14 md:px-0 px-4">
                <div class="flex flex-col">
                  <p class="w-[146px] h-[20px] font-[Gilroy-Bold] text-[16px] leading-[18.75px] py-3">Contact Organizers</p>
                 <div class="flex gap-6">
                        <div class="bg-secondary p-1 rounded-2xl text-white">
                          <i class="bi bi-envelope-fill"></i>
                        </div>
                        <div class="bg-secondary p-1 rounded-lg text-white">
                          <i class="bi bi-twitter"></i>
                        </div>
                        <div class="bg-secondary p-1 rounded-lg text-white">
                          <i class="bi bi-instagram"></i>
                        </div>
                      </div>
                </div>
                <div class="pt-6 w-[400px] h-[492px] max-h-[500px] text-left sm:min-h-[400px] md:min-h-[350px]">
                  <p class="w-[75px] h-[20px] font-[Gilroy-Bold] text-[16px] leading-[18.75px] py-6">Directions</p>
                  <div class="relative w-[400px] h-[452px] mt-2 md:px-0 px-4">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.615574213267!2d3.3988596743937305!3d6.443381993547897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8bd384cdf87b%3A0xc83383bffdab3596!2sMuson%20Centre!5e0!3m2!1sen!2sng!4v1733253941423!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="absolute top-0 left-0 w-full h-[100%]"></iframe>
                  </div>
                </div>
              </div>
            </div>            
        </div>
        `;
}

// Fetch the product and display its details
async function init() {
  const product = await fetchProductDetails(productId);
  displayProductDetails(product);
}

init();
