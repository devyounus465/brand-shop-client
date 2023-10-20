import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CategoryProductsCard from "../../components/CategoryProductsCard/CategoryProductsCard";
import CategoryBanner from "../../components/CategoryBanner/CategoryBanner";

const CategoryDetails = () => {
  const { brandName } = useParams();

  const loadedproducts = useLoaderData();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const filterProducts = loadedproducts.filter(
      (products) => products.brandName === brandName
    );

    setProducts(filterProducts);
  }, [brandName, loadedproducts]);

  return (
    <div>
      {/* products area */}

      <div className="w-12/12 p-6 mx-auto mt-8 mb-8 flex gap-6 justify-between ">
        <div className="">
          <h3 className="text-3xl font-medium mb-6">
            Welcome to {brandName} products category
          </h3>
          <hr className="mb-8" />
          {/* product card */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {products.length == 0 ? (
              <h2 className="text-3xl font-semibold text-pink-500">
                You have No products
              </h2>
            ) : (
              products.map((product) => (
                <CategoryProductsCard
                  key={product.id}
                  product={product}
                ></CategoryProductsCard>
              ))
            )}
          </div>
        </div>
        {/* right banner */}
        <div>
          <CategoryBanner></CategoryBanner>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
