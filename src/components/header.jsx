// eslint-disable-next-line react/prop-types
function Header({ imageSrc, title }) {
  return (
    <div className="header-container">
      {/* Image */}
      <img
        src={imageSrc}
        alt="Header Logo"
        className="header-logo"
      />
      {/* Title */}
      <h1 className="header-title">{title}</h1>
    </div>
  );
}

export default Header;
