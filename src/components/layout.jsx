/* eslint-disable react/prop-types */
import Header from "./header";
import logo from "../assets/ferrari.svg";
import Footer from "./footer";
import Menu from "./menu"
function Layout({ children }) {
  return (
    <>
      <div className="container">
        <Header imageSrc={logo} title="Welcome to Our Website - Tropical Cars" />
        <Menu/>
        <main>{children}</main>
        <Footer/>
      </div>
    </>
  );
}

export default Layout;
