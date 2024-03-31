Creating a complete e-commerce website involves a significant amount of HTML, CSS, and often JavaScript for interactivity. Given the complexity of such a project, here's a simplified example of a basic e-commerce website layout:

html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Simple E-commerce Website</title>
<style>
  /* Reset CSS */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Basic Styles */
  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    padding: 20px;
  }

  header {
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    text-align: center;
  }

  nav {
    background-color: #666;
    padding: 10px 20px;
    text-align: center;
  }

  nav a {
    color: #fff;
    text-decoration: none;
    margin: 0 10px;
  }

  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .product {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    margin: 10px;
    width: 300px;
  }

  .product img {
    width: 100%;
    border-radius: 5px;
  }

  .product h2 {
    margin-top: 10px;
    font-size: 18px;
  }

  .product p {
    margin-top: 5px;
    font-size: 14px;
  }

  footer {
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
</style>
</head>
<body>

<header>
  <h1>Simple E-commerce Website</h1>
</header>

<nav>
  <a href="#">Home</a>
  <a href="#">Products</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>

<section>
  <div class="product">
    <img src="product1.jpg" alt="Product 1">
    <h2>Product 1</h2>
    <p>$19.99</p>
    <button>Add to Cart</button>
  </div>

  <div class="product">
    <img src="product2.jpg" alt="Product 2">
    <h2>Product 2</h2>
    <p>$29.99</p>
    <button>Add to Cart</button>
  </div>

  <!-- Add more products here -->
</section>

<footer>
  <p>&copy; 2024 Simple E-commerce. All rights reserved.</p>
</footer>

</body>
</html>


This example includes a header with the website name, a navigation bar, a section for products displayed in a grid, and a footer with copyright information. You can expand on this template by adding more products, refining the styling, and incorporating functionality like a shopping cart and checkout process using JavaScript and server-side technologies. Additionally, you'll need actual product images ("product1.jpg", "product2.jpg", etc.) to display in the product cards.
