function CityCard({ city, image }) {
  return (
    <div className="city-card-container col-md">
      <a href="/property_list.html">
        <div className="city-card rounded-circle">
          <img
            src={`/images/${image}`}
            className="city-img"
            alt={city}
          />
        </div>
      </a>
    </div>
  );
}

export default CityCard;