import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-8xl font-semibold">
        <li>
          <NavLink to={"/"} className="text-black hover: text-grey-700">
            FoodRecipe
          </NavLink>
        </li>
      </h2>
      <form>
        <input
          type="text"
          name="search"
          placeholder="Enter Items..."
          className="bg-black/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink to={"/"} className="text-black hover: text-grey-700">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className="text-black hover: text-grey-700"
          >
            Favorites
          </NavLink>
        </li>
        <li>
          <NavLink to={"/details"} className="text-black hover: text-grey-700">
            Details
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
