import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const ProductDetails = () => {
  const product = useLoaderData();
  //   console.log(product);

  // data store client side to server side ===> database

  const handleAddToCart = () => {
    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          swal({
            title: "Good job!",
            text: "product Added to Cart!",
            icon: "success",
            button: "Close",
          });
        }
      });
  };

  return (
    <div className=" w-8/12 mx-auto mt-12 mb-12">
      <div className="relative flex w-full  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <div className="relative mx-4 mt-4 overflow-hidden text-white  rounded-xl  ">
          <img src={product.image} alt="ui/ux review check" />
          <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
              {product.name}
            </h5>
            <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="-mt-0.5 h-5 w-5 text-yellow-700"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                ></path>
              </svg>
              {product.rating}
            </p>
          </div>

          <div className=" gap-3 space-y-3 mt-4 group">
            <h4 className="text-lg font-medium capitalize">
              Brand: {product.brandName}
            </h4>
            <h4 className="text-lg font-medium capitalize">
              Type: {product.type}
            </h4>
            <h4 className="text-2xl font-bold capitalize text-pink-500">
              Price: ${product.price}
            </h4>
          </div>
          <div className="mt-3">
            <p>{product.description}</p>
          </div>
        </div>
        <div className="p-6 pt-3 flex justify-between gap-3">
          <button
            onClick={handleAddToCart}
            className="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
