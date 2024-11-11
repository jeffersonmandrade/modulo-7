import { NavLink } from "react-router-dom";


function Menu() {
const routes = [
  {name:"Home", route:""},
  {name:"Register", route:"/register"}
]

  return (
    <nav>
   {routes.map((item, i) => (
        <NavLink
          key={i}
          to={item.route}
        >
          {item.name}
        </NavLink>
   ))}
  </nav>
  );
}

export default Menu;