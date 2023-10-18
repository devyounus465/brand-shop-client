import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/Authprovider";

import swal from "sweetalert";

const Login = () => {
  const { loggedUser } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    //   user login

    loggedUser(email, password)
      .then((Result) => console.log(Result.user))
      .catch((error) => {
        const errorMessage = error.message;
        swal({
          title: "OOPS",
          text: errorMessage,
          icon: "error",
          buttons: "close",
        });
      });
  };

  return (
    <div>
      <div className="w-12/12 lg:w-6/12 mx-auto mt-12 mb-8 ">
        <h2 className="text-4xl font-bold text-center mb-4">Login Form</h2>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <p>
              Already have an accout?{" "}
              <Link className="text-pink-500" to={"/register"}>
                Register
              </Link>
            </p>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
