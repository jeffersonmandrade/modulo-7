// eslint-disable-next-line react/prop-types
function Header({ imageSrc, title }) {
  return (
    <div className="header-container">
      <img
        src={imageSrc}
        alt="Header Logo"
        className="header-logo"
      />
      <h1 className="header-title">{title}</h1>
    </div>
  );
}

export default Header;
