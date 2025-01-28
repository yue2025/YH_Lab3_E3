// The value for 'accessToken' begins with 'pk...'
mapboxgl.accessToken =
  "pk.eyJ1IjoiaGUyMDI1IiwiYSI6ImNtNXdpY3M0ZTBjM2kyanM5YzhrNnVhOWMifQ.duF8NKn1fZadEX59dF4OYw";

//Before map
const beforeMap = new mapboxgl.Map({
  container: "before",
  style: "mapbox://styles/he2025/cm6gimd4m000u01sdbyzhconh",
  center: [-0.089932, 51.514441],
  zoom: 14
});
//After map
const afterMap = new mapboxgl.Map({
  container: "after",
  style: "mapbox://styles/he2025/cm6giz4me004101s3augmapa6",
  center: [-0.089932, 51.514441],
  zoom: 14
});

const container = "#comparison-container";
const map = new mapboxgl.Compare(beforeMap, afterMap, container, {});