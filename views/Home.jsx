const React = require("react");
const Layout = require("./Layout");

function Home(props) {
  return (
    <Layout title="Home Page">
      <h1>List of restaurants</h1>
      <ul>
          { props.restaurants.map( (restaurant)=> {
            return(
              <li>
                <article>
                  <h2>Name: {restaurant.name}</h2>
                  <p>Description: {restaurant.description}</p>
                  <p>Lat: {restaurant.location.coordinates[0]}</p>
                  <p>Lat: {restaurant.location.coordinates[1]}</p>
                </article>
              </li>

            )
          })}
      </ul>


      <div id='map' style='width: 800px; height: 600px;'></div>


      <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css' rel='stylesheet' />
      <script async defer src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.js'></script>
      <script async defer src="https://unpkg.com/axios/dist/axios.min.js"></script>
      <script src="/javascripts/mapbox.js"></script>
    </Layout>
  );
}

module.exports = Home;