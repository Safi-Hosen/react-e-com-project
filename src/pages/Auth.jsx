import { useContext, useState } from "react";
import { useForm } from "React-hook-form";
import { AuthContext } from "../auth-context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [mode, setmode] = useState("signup");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { signUp, user, logout, login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    setError(null);
    let result;
    if (mode === "signup") {
      result = signUp(data.email, data.password);
    } else {
      result = login(data.email, data.password);
      // navigate("/");
    }

    if (result.success) {
      navigate("/");
    } else {
      setError(result.error);
      console.log(result.error);
    }
    console.log(result);
  }

  return (
    <>
      <div className="page">
        <div className="container">
          <div className="auth-container">
            {user && <p>User logged in:{user.email}</p>}
            <button onClick={() => logout()}>Logout</button>
            <h1 className="page-title font-semibold">
              {mode === "signup" ? "Sign Up" : "Login"}
            </h1>
            <form
              action=""
              className="auth-form"
              onSubmit={handleSubmit(onSubmit)}
            >
              {error && <div className="error-message">{error}</div>}
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-input"
                  type="email"
                  id="email"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <span className="form-error">{errors.email.message}</span>
                )}
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    maxLength: {
                      value: 12,
                      message: "Password must be less than 12",
                    },
                  })}
                  className="form-input"
                  type="password"
                  id="password"
                />
                {errors.password && (
                  <span className="form-error">{errors.password.message}</span>
                )}
              </div>

              <button className="btn btn-primary btn-large" type="submit">
                {mode === "signup" ? "Sign Up" : "Login"}
              </button>
            </form>

            <div className="auth-switch">
              {mode === "signup" ? (
                <p>
                  Already have an account?{" "}
                  <span
                    className="auth-link cursor-pointer"
                    onClick={() => setmode("login")}
                  >
                    Login
                  </span>
                </p>
              ) : (
                <p>
                  Don't have an account?{" "}
                  <span
                    className="auth-link cursor-pointer"
                    onClick={() => setmode("signup")}
                  >
                    Sign Up
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
