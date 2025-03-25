function setupMap() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const map = document.getElementById("mapy");
        map.innerHTML =
          '<iframe width="30%" height="50%"  style="pointer-events: none;" overflow: hidden; src="https://maps.google.com/maps?q=' +
          latitude +
          "," +
          longitude +
          '&amp;output=embed"></iframe>';
      },
      (error) => {
        console.error("Geolocation error: " + error.message);
        alert("Geolocation is not available or permission denied.");
      }
    );
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}
setupMap();
