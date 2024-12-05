// Product class
export class Product {
  constructor({ id, title, price, description, category, image, rating }) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category;
    this.image = image;
    this.rating = rating;
  }
}

// ProductService class
export class ProductService {
  constructor() {
    this.baseUrl = "https://fakestoreapi.com";
  }

  async #fetchFromEndpoint(endpoint) {
    const response = await fetch(`${this.baseUrl}/${endpoint}`);
    const data = await response.json();
    return data;
  }

  async getProducts() {
    return await this.#fetchFromEndpoint("products");
  }

  async getProductById(id) {
    return await this.#fetchFromEndpoint(`products/${id}`);
  }

  async addProduct(product) {
    const response = await fetch(`${this.baseUrl}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    return await response.json();
  }

  async deleteProduct(id) {
    const response = await fetch(`${this.baseUrl}/products/${id}`, {
      method: "DELETE",
    });
    return response.ok ? "Successfully deleted" : "Failed to delete";
  }
}


