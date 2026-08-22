function Footer() {
  const cities = [
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Hyderabad",
  ];

  return (
    <footer className="footer">
      <div className="page-container footer-container">

        <div className="footer-cities">
          {cities.map((city) => (
            <div className="footer-city" key={city}>
              <a href="/property_list.html">
                PG in {city}
              </a>
            </div>
          ))}
        </div>

        <div className="footer-copyright">
          © 2020 Copyright PG Life
        </div>

      </div>
    </footer>
  );
}

export default Footer;