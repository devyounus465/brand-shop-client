const Banner = () => {
  return (
    <div>
      <div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "linear-gradient(rgb(134 127 127 / 3%), rgb(12 12 12 / 77%)), url(https://i.ibb.co/3W8YsYs/main-home-slider-photo-3.jpg)",
          }}
        >
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-5xl font-bold">
                Smart Phone up <br />
                to -30% Discount
              </h1>
              <p className="mb-5 ">the biggest risk is a missed oppertunity</p>
              <button className="btn bg-pink-500 border border-[#FC5A1B] text-white hover:text-pink-500">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
