// The value for 'accessToken' begins with 'pk...'
mapboxgl.accessToken =
  "pk.eyJ1IjoiaGUyMDI1IiwiYSI6ImNtNXdpY3M0ZTBjM2kyanM5YzhrNnVhOWMifQ.duF8NKn1fZadEX59dF4OYw";

const style_2022 = "mapbox://styles/he2025/cm6gimd4m000u01sdbyzhconh";
const style_2024 = "mapbox://styles/he2025/cm6giz4me004101s3augmapa6";

const map = new mapboxgl.Map({
  container: "map", // container ID
  style: style_2022,
  center: [-0.089932, 51.514441],
  zoom: 14
});

const layerList = document.getElementById("menu");
const inputs = layerList.getElementsByTagName("input");
//On click the radio button, toggle the style of the map.
for (const input of inputs) {
  input.onclick = (layer) => {
    if (layer.target.id == "style_2022") {
      map.setStyle(style_2022);
    }
    if (layer.target.id == "style_2024") {
      map.setStyle(style_2024);
    }
  };
}