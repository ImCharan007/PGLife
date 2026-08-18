function SearchBanner() {
  return (
    <div className="banner-container">
      <h2 className="white pb-3">
        Happiness per Square Foot
      </h2>

      <form id="search-form">
        <div className="input-group city-search">

          <input
            type="text"
            className="form-control input-city"
            id="city"
            name="city"
            placeholder="Enter your city to search for PGs"
          />

          <div className="input-group-append">
            <button type="submit" className="btn btn-secondary">
              <i className="fa fa-search"></i>
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default SearchBanner;