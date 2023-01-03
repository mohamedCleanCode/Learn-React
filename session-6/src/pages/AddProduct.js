import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();
  const sendData = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/products");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="add-product">
      <h1>Add Product</h1>
      <form onSubmit={sendData}>
        <input type="text" placeholder="Title" name="title" required />
        <input type="text" placeholder="Price" name="price" />
        <input type="text" placeholder="Description" name="description" />
        <input type="text" placeholder="Image URL" name="image" />
        <input type="text" placeholder="Category" name="category" />
        <input type="submit" value="Send Data" />
      </form>
    </div>
  );
}
export default AddProduct;
