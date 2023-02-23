import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="">
          <h1>Travel</h1>
          <p> Choose your Favour Destination</p>
        </div>
        <div className="">
          <a href="/">
            <i className="fa-brands fa-twitter" />
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram" />
          </a>
          <a href="/">
            <i className="fa-brands fa-youtube" />
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Change Log</a>
          <a href="/">Status</a>
          <a href="/">Licence</a>
          <a href="/">Github</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">Support</a>
          <a href="/">Status</a>
          <a href="/">Suscipit</a>
          <a href="/">Ultrices</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Git Hub</a>
          <a href="/">Status</a>
          <a href="/">Vestibulum</a>
          <a href="/">Adipiscing</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Lorem</a>
          <a href="/">Lobortis</a>
          <a href="/">Consectetur</a>
          <a href="/">Curabitur</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
