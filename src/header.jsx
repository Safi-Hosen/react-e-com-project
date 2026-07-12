import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="bg-gray-400 ">
        <nav className="flex justify-around p-2">
          <div className="text-xl text-violet-500 font-bold cursor-pointer border-2 border-violet-500 px-2 py-2">
            <Link to="/">ShopHub</Link>
          </div>
          <ul className="flex text-black gap-5 font-medium justify-center items-center">
            <Link to="/">Home</Link>
            <Link to="/auth">Auth</Link>
            <Link to="/checkout">Checkout</Link>
          </ul>

          <div className="navbar-auth">
            <Link to="/auth" className="btn btn-secondary">
              Login
            </Link>
            <Link to="/auth" className="btn btn-primary">
              Signup
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
