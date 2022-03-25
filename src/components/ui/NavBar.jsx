import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const NavBar = () => {
  const navigate = useNavigate();

  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({
      type: types.logout,
    });

    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex flex-shrink-0 items-center">
              <div className="flex space-x-4">
                <Link className="text-white font-semibold" to="/">
                  Heroes App
                </Link>
                <NavLink
                  className={({ isActive }) =>
                    "text-white" +
                    (isActive ? " text-blue-100 font-semibold" : "")
                  }
                  to="/marvel"
                >
                  Marvel
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    "text-white" +
                    (isActive ? " text-blue-100 font-semibold" : "")
                  }
                  to="/dc"
                >
                  DC
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    "text-white" +
                    (isActive ? " text-blue-100 font-semibold" : "")
                  }
                  to="/search"
                >
                  Search
                </NavLink>
              </div>
            </div>
            <div className="flex space-x-4">
              <span className="text-sky-400">{user.name}</span>
              <button className="text-white" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
