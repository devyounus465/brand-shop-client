import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const MyCart = () => {
  const loadedCartProduct = useLoaderData();
  const [cartProduct, setCartproduct] = useState(loadedCartProduct);

  // delete cart

  const handleDelete = (id) => {
    console.log(id);
    fetch(
      `https://brand-shop-server-kykx7dq2b-younus-alis-projects.vercel.app/cart/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          console.log("Cart Product deleted successfully");

          swal({
            title: "Good job!",
            text: "Cart Product deleted successfully!",
            icon: "success",
            button: "Close",
          });

          // remaining user

          const remainingCart = cartProduct.filter((cart) => cart._id !== id);
          console.log(remainingCart);
          setCartproduct(remainingCart);
        }
      });
  };

  // table counter
  let count = 1;

  return (
    <div className="w-8/12 mx-auto mt-12 mb-12">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Product Title</th>
              <th>Brand</th>
              <th>Type</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartProduct.map((cart) => (
              <tr className="" key={cart._id}>
                <th>{count++}</th>
                <td>{cart.name}</td>
                <td>{cart.brandName}</td>
                <td>{cart.type}</td>
                <td>{cart.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(cart._id)}
                    className="btn bg-red-400 text-white"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
