import { Link } from "react-router-dom";
// import { useContext } from "react";
import { useAuth } from "./auth-context/AuthContext";

function Header() {
  const { user, logout } = useAuth();
  return (
    <>
      <header className="bg-gray-400 ">
        <nav className="flex justify-around p-2">
          <div className="text-xl text-violet-500 font-bold cursor-pointer border-2 border-violet-500 px-2 py-2">
            <Link to="/">ShopHub</Link>
          </div>
          <ul className="flex text-black gap-5 font-medium justify-center items-center">
            <Link to="/">Home</Link>
            <Link to="/checkout">Cart</Link>
            {/* <Link to="/auth">Auth</Link> */}
          </ul>

          <div className="navbar-auth">
            {!user ? (
              <div className="navbar-auth-links">
                <Link to="/auth" className="btn btn-secondary">
                  Login
                </Link>
                <Link to="/auth" className="btn btn-primary">
                  Signup
                </Link>
              </div>
            ) : (
              <div className="navbar-user">
                <span className="navbar-gretting">Hello, {user.email}</span>
                <button className="btn btn-secondary" onClick={logout}>
                  Log Out
                </button>
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
