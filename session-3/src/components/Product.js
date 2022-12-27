export default function Product(props) {
  return (
    <div className="product">
      <h1> {props.product.title}</h1>
      <img src={props.product.image} alt={props.product.title} />
      <p>{props.product.description}</p>
      <p>Price:{props.product.price}</p>
    </div>
  );
}
