import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import BrandCard from "../../components/Brand/BrandCard";

const Home = () => {
  const brands = useLoaderData();
  console.log(brands);
  return (
    <div>
      <Banner></Banner>
      <div className=" w-10/12 mx-auto mt-12 mb-16">
        <h2 className="text-4xl font-bold mb-6">All Products Brand</h2>
        <div className="grid  grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {brands.map((brand) => (
            <BrandCard key={brand.id} brand={brand}></BrandCard>
          ))}
        </div>
        {/* extra section */}
        <div>
          {/* left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="relative">
              <img
                className=""
                src="https://i.ibb.co/VS6Zb9b/home-2-banner-1.jpg"
                alt=""
              />
              <div className="absolute items-center top-0 left-0 w-[100%] p-2 md:p-6 md:mt-8 ">
                <div>
                  <h2 className="text-2xl font-semibold">E-77 Console</h2>
                  <h3 className="text-sm font-normal uppercase">mfkch34</h3>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">20% Discount</h3>
                  <h4 className="text-sm uppercase font-normal">
                    {" "}
                    Weeked Discount
                  </h4>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                className=""
                src="https://i.ibb.co/L6tFckw/home-4-banner-2.jpg"
                alt=""
              />
              <div className="absolute  text-white items-center top-0 left-0 w-[100%] p-2 md:p-6 md:mt-8 ">
                <div>
                  <h2 className="text-2xl font-semibold">E-77 Console</h2>
                  <h3 className="text-sm font-normal uppercase">mfkch34</h3>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">20% Discount</h3>
                  <h4 className="text-sm uppercase font-normal">
                    {" "}
                    Weeked Discount
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
