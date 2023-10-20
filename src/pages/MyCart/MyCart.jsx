import { useLoaderData } from "react-router-dom";

const MyCart = () => {
  const cartProduct = useLoaderData();
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
