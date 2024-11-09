/* eslint-disable react/prop-types */
import Header from "./header";
import logo from "../assets/ferrari.svg";

function Layout({ children }) {
  return (
    <>
      <div className="container">
        <Header imageSrc={logo} title="Welcome to Our Website - Tropical Cars" />

        <nav>
          <a href="#">Home</a>
          <a href="#">Cars</a>
          <a href="#">Finance</a>
          <a href="#">Contact</a>
          <a href="#">Logout</a>
        </nav>

        <main>{children}</main>
        <footer>&copy; 2024 Car Registry. All rights reserved.</footer>
      </div>
    </>
  );
}

export default Layout;
