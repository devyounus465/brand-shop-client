import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
  return (
    <div>
      <Link to={`/category/${brand.brandName}`}>
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white  h-20 md:h-40 rounded-xl bg-clip-border">
            <img
              className="w-60 mx-auto"
              src={brand.image}
              alt="brand-picture"
            />
          </div>
          <div className="p-6 text-center">
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {brand.title}
            </h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BrandCard;
