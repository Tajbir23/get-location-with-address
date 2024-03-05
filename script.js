const lat = document.getElementById("lat");
const long = document.getElementById("long");

navigator.geolocation.watchPosition((position) => {
  console.log(position.coords.latitude);
  lat.innerText = position.coords.latitude;
  long.innerText = position.coords.longitude;
  address(position.coords.latitude, position.coords.longitude);
});

function address(lat, long) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${long}`;
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
     console.log(data);
     const address = data.display_name;
     document.getElementById("address").innerText = address;
   });
}