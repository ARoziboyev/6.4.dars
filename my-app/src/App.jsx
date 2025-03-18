import { useState, useEffect } from "react";
import "./App.css";

const API_URL = "https://dummyjson.com/products";

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="container">
      <h1>🛒 Mahsulotlar</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="card"
            onClick={() => setSelectedProduct(product)}
          >
            <img src={product.thumbnail} alt={product.title} />
            <h2>{product.title}</h2>
            <p>💲 Narxi: ${product.price}</p>
            <button className="btn">Sotib olish</button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="modal">
          <div className="modal-content">
            <span className="close"   onClick={() => setSelectedProduct(null)}>
              &times;
            </span>
            <h2>{selectedProduct.title}</h2>
            <img src={selectedProduct.thumbnail} alt={selectedProduct.title} />
            <button className="btn">Sotib olish</button>
            <p>{selectedProduct.description}</p>
            <p>💰 Narx: ${selectedProduct.price}</p>
            <p>⭐ Reyting: {selectedProduct.rating}</p>
            <p>🏭 Brend: {selectedProduct.brand}</p>
            
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
