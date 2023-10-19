import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CategoryProductsCard from "../../components/CategoryProductsCard/CategoryProductsCard";

const CategoryDetails = () => {
  const { brandName } = useParams();

  const loadedproducts = useLoaderData();
  console.log(loadedproducts);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const filterProducts = loadedproducts.filter(
      (products) => products.brandName === brandName
    );
    setProducts(filterProducts);
  }, [brandName, loadedproducts]);

  console.log(products);

  return (
    <div className="w-10/12 mx-auto mt-8 mb-8">
      <h3 className="text-3xl font-medium mb-6">
        Welcome to {brandName} products category
      </h3>

      {/* product card */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {products.map((product) => (
          <CategoryProductsCard
            key={product.id}
            product={product}
          ></CategoryProductsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetails;
