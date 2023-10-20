import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const UpdateProduct = () => {
  const products = useLoaderData();
  console.log(products);

  const { _id, image, name, brandName, type, price, rating, description } =
    products;

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brandName.value;
    const brandName = brand.toLowerCase();
    const type = form.type.value;
    const price = form.price.value;
    const image = form.image.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const updatedProduct = {
      name,
      brandName,
      type,
      price,
      image,
      rating,
      description,
    };

    //   data send to server for update database

    fetch(
      `https://brand-shop-server-d3hs6p0hk-younus-alis-projects.vercel.app/products/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          swal({
            title: "Good job!",
            text: "You Updated the Product successfully!",
            icon: "success",
            button: "Close!",
          });
        }
      });
  };
  return (
    <div>
      <div className="w-10/12 mx-auto bg-gray-100 p-8 mt-12 mb-12 rounded">
        <h2 className="text-4xl font-semibold text-center mb-4">
          Add a New Product
        </h2>
        <form onSubmit={handleUpdateProduct} className="space-y-2">
          {/* row name & brand Name */}
          <div className="flex gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <label className="">
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Product Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <label className="">
                <input
                  type="text"
                  name="brandName"
                  defaultValue={brandName}
                  placeholder="Brand Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* row name & brand Name */}
          <div className="flex gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <label className="">
                <input
                  type="text"
                  name="type"
                  defaultValue={type}
                  placeholder="ex:phone,headphone"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="">
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  placeholder="$Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* row name & brand Name */}
          <div className="flex gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Product Image</span>
              </label>
              <label className="">
                <input
                  type="text"
                  name="image"
                  defaultValue={image}
                  placeholder="Image url"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="">
                <input
                  type="text"
                  name="rating"
                  defaultValue={rating}
                  placeholder="Rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* row sort description */}
          <div className="flex gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Sort Description</span>
              </label>
              <label className="">
                <textarea
                  name="description"
                  defaultValue={description}
                  placeholder="sort description"
                  rows="6"
                  cols="50"
                  className="w-full p-4 border rounded"
                />
              </label>
            </div>
          </div>
          <div className="pt-6">
            <input
              type="submit"
              className="btn py-3 w-full bg-pink-500 text-white  hover:text-pink-500"
              value="Add new product"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
