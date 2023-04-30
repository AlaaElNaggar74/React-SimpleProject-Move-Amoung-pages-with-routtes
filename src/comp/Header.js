import "./Header.css";

const Header = () => {
  return (
    <div className="myHead">
      <header className="hide-when-mobile">
        <h1>AlaaElNaggar </h1>
        <ul className="flex">
          <li className="main-list">
            <a className="main-link" href="/Html">
              HTML
            </a>
            <ul className="sub-ul">
              <li>
                <a href="#eee">Full Course</a>
              </li>
              <li>
                <a href="#wew">Crash Course</a>
              </li>
              <li>
                <a href="3RRRR">learn in 1h</a>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <a className="main-link" href="/Css">
              CSS
            </a>
            <ul className="sub-ul">
              <li>
                <a href="#ER">Full Course</a>
              </li>
              <li>
                <a href="#ER">CSS Examples</a>
              </li>
              <li className="mini-projects">
                <a href="#E">mini projects&nbsp; + </a>
                <ul className="sub-sub-ul">
                  <li>
                    <a href="#RR">project 1</a>
                  </li>
                  <li>
                    <a href="#DFD">project 2</a>
                  </li>
                  <li>
                    <a href="#DF">project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <a className="main-link" href="/Javascripte">
              JavaScript
            </a>
            <ul className="sub-ul sub-of-js">
              <li>
                <a href="#DDF">coming soon🔥</a>
              </li>
            </ul>
          </li>
        </ul>
      </header>

      <header style={{ backgroundColor: "red" }} className="show-when-mobile">
        <h1>Css </h1>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              HTML <i className="fas fa-plus" />
            </label>
            <input id="html" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="#DS">Full Course</a>
              </li>
              <li>
                <a href="#SDSD">Crash Course</a>
              </li>
              <li>
                <a href="#SD">learn in 1h</a>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="css">
              CSS <i className="fas fa-plus" />
            </label>
            <input id="css" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="ew">Full Course</a>
              </li>
              <li>
                <a href="ws">CSS Examples</a>
              </li>
              <li>
                <label className="mini-projects" htmlFor="mini">
                  mini projects <i className="fas fa-plus" />
                </label>
                <input id="mini" type="checkbox" />
                <ul className="sub-sub-div">
                  <li>
                    <a href="ssS">project 1</a>
                  </li>
                  <li>
                    <a href="SS">project 2</a>
                  </li>
                  <li>
                    <a href="SSSS">project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="js">
              JavaScript <i className="fas fa-plus" />
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="SSS">coming soon🔥</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
