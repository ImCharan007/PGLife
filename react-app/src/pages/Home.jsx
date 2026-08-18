import SearchBanner from "../components/SearchBanner";
import CityCard from "../components/CityCard";

function Home() {
  const cities = [
    {
      name: "Delhi",
      image: "delhi.png",
    },
    {
      name: "Mumbai",
      image: "mumbai.png",
    },
    {
      name: "Bangalore",
      image: "bangalore.png",
    },
    {
      name: "Hyderabad",
      image: "hyderabad.png",
    },
  ];

  return (
    <>
      <SearchBanner />

      <div className="page-container">
        <h1 className="city-heading">
          Major Cities
        </h1>

        <div className="row">
          {cities.map((city) => (
            <CityCard
              key={city.name}
              city={city.name}
              image={city.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;