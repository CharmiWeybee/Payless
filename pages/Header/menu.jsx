function Menu() {
  return (
    <>
      <div className="menu-container">
        <a href="/"> <div className="logo">PAYLESS</div></a>
        <ul className="menu">
        <a href="/"><li className="header-text">Home</li></a>
        <a href="/about-us"><li className="header-text">About</li></a>
        <a href="/category"><li className="header-text">Category</li></a>
        <a href="/contact-us"> <li className="header-text">Contact Us</li></a>
        </ul>
        {/* <div>
            <button className="btn btn-success">Compare</button>
        </div> */}
      </div>
    </>
  );
}
export default Menu;
