function Product(props) {
  return (
    <div className="product">
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
      <p>{props.price}$</p>
    </div>
  );
}
export default Product;
