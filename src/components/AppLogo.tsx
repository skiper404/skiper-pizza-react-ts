import { FaPizzaSlice } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AppLogo = () => (
  <div className="flex shrink-0 items-center gap-4">
    <Link to={"/"}>
      <FaPizzaSlice className="size-10 text-orange-400" />
    </Link>
    <div>
      <h1 className="text-2xl font-bold text-gray-800">Skiper Pizza</h1>
      <h2 className="text-gray-400">Пицца на любой вкус</h2>
    </div>
  </div>
);

export default AppLogo;
