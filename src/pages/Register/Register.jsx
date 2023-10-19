import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Register = () => {
  const { createUser, googleSignUp } = useContext(AuthContext);

  // register error show

  const [signUpError, setSignUpError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    // reset error
    setSignUpError("");

    if (password.length < 6) {
      setSignUpError("password should be at least 6 char");
      return;
    } else if (!/[A-Z][!@#$%^&*]/.test(password)) {
      setSignUpError(
        "password must be contain capital letter and speical Char"
      );
      return;
    }
    //   create user firebase

    createUser(email, password)
      .then((result) => {
        const success = result.user;
        console.log(success);

        swal({
          title: "Good Job",
          text: "Signup Successfull",
          icon: "success",
          buttons: "close",
        });
      })
      .catch((error) => console.error(error));
  };

  {
    signUpError &&
      swal({
        title: "OOPS",
        text: signUpError,
        icon: "error",
        button: "Close",
      });
  }

  // handle google signUp

  const handleGoogleSignUp = () => {
    googleSignUp()
      .then((result) => console.log(result.user))
      .catch((error) => console.error(error.message));
  };

  return (
    <div>
      <div className="w-12/12 lg:w-6/12 mx-auto mt-12 mb-8 ">
        <h2 className="text-4xl font-bold text-center mb-4">Regidter Form</h2>
        <form onSubmit={handleSignUp} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="input input-bordered"
              required
            />
          </div>
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
              <Link className="text-pink-500" to={"/login"}>
                Login
              </Link>
            </p>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">SignUp</button>
          </div>
        </form>
        <div className=" text-right">
          <a
            onClick={handleGoogleSignUp}
            className=" p-3 rounded bg-pink-500 text-white cursor-pointer"
          >
            Google Signup
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
