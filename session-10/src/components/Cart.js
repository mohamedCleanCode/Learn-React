import { Button, Container, Image } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../rtk/slices/cart-slice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="cart">
      <Container>
        <h1>Welcome To Cart</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Img</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>
                    <Image
                      src={product.image}
                      style={{ width: "100px", height: "100px" }}
                    ></Image>
                  </td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => dispatch(deleteFromCart(product))}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
export default Cart;
