function Menu() {
  return (
    <>
      <div className="menu-container">
        <a href="/"> <div className="logo">PAYLESS</div></a>
        <ul className="menu">
          <li className="header-text">Home</li>
          <li className="header-text">About</li>
          <a href="/category"><li className="header-text">Category</li></a>
          <li className="header-text">Contact Us</li>
        </ul>
        {/* <div>
            <button className="btn btn-success">Compare</button>
        </div> */}
      </div>
    </>
  );
}
export default Menu;
