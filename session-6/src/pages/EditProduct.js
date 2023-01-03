import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
  const [product, setProduct] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:5000/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const clearValue = (e) => {
    setProduct({
      title: e.target.value,
      price: e.target.value,
      description: e.target.value,
      image: e.target.value,
      category: e.target.value,
    });
  };
  const sendData = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    fetch(`http://localhost:5000/products/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => navigate("/products"));
  };
  return (
    <div className="edit-product">
      <h1>Edit Product {params.id}</h1>
      <form onSubmit={sendData}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={product && product.description}
        />
        <input type="text" name="price" value={product && product.price} />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={product && product.description}
        />
        <input
          type="text"
          placeholder="Image URL"
          name="image"
          value={product && product.image}
        />
        <input
          type="text"
          placeholder="Category"
          name="category"
          value={product && product.category}
        />
        <input type="submit" value="Send Data" />
      </form>
    </div>
  );
}
export default EditProduct;
