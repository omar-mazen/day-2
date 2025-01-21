const NavBar = function () {
  return (
    <nav className="container">
      <img src="./logo.png" alt="logo" />
      <ul>
        <li>Home</li>
        <li>Movie List</li>
      </ul>
      <input type="text" placeholder="Search..." />
    </nav>
  );
};
export default NavBar;
