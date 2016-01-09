"use strict"

class GoogleMapAPI {
  constructor(dom, options) {
    google.maps.event.addDomListener(window, "load", this.initialize);
    this.initialize(dom, options);
    this.addButtons(this.map);
    this.drawMarkers(this.map);
    this.drawPolyline(this.map);
    this.drawEditablePolygon(this.map);
    this.drawCircle(this.map);
    this.drawDraggableRectangle(this.map);
    this.addGroundOverlay(this.map);
  }

  initialize(dom, options){
    this.map = new google.maps.Map(dom, options);
  }

  addButtons(map){
    document.getElementById('btnTerrain').addEventListener('click', function(){
      map.setMapTypeId(google.maps.MapTypeId.TERRAIN);
    });
  }

  drawMarkers(map){
    let image = "http://www.thyroid.org.nz/wp-content/themes/miinus/library/images/map-marker.png";

    let centerMarker = new google.maps.Marker({
      icon: image,
      position: new google.maps.LatLng(-37.7751, 175.19),
      map: map,
      title: "There is where I am living!"
    })
  }

  drawPolyline(map){
    let pathCoordinates = [
      new google.maps.LatLng(-37.7751, 175.19),
      new google.maps.LatLng(-37.7851, 175.18),
      new google.maps.LatLng(-37.7951, 175.17),
      new google.maps.LatLng(-37.8051, 175.16)
    ]

    let pathToCenter = new google.maps.Polyline({
      path: pathCoordinates,
      geodesic: false,
      strokeColor: '#0000ff',
      strokeOpacity: 1.0,
      strokeWeight:2
    });

    pathToCenter.setMap(map);
  }

  drawEditablePolygon(map){
    let natureCoords = [
      new google.maps.LatLng(-37.1751, 175.11),
      new google.maps.LatLng(-37.9051, 175.59),
      new google.maps.LatLng(-37.6251, 175.95)
    ]

    let natureArea = new google.maps.Polygon({
      path: natureCoords,
      strokeColor: '#fffff',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#00ff00',
      fillOpacity: 0.6,
      editable: true
    });
    natureArea.setMap(map);
  }

  drawCircle(map){
    let circle = new google.maps.Circle({
      map: map,
      center: new google.maps.LatLng(-37.7751, 175.19),
      fillColor:'#ff33ff',
      fillOpacity: 0.6,
      strokeColor: '#ff0000',
      strokeOpacity: 0.8,
      strokeWeight: 2
    });
    circle.setRadius(8405);
  }

  drawDraggableRectangle(map){
    let bounds = {
      north: -37.7751,
      south: -37.7051,
      east: 175.11,
      west: 175.19
    }

    let rectangle = new google.maps.Rectangle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      bounds: bounds
    })
  }

  addGroundOverlay(map){
    // south-west and north-west corners
    let imageBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(-37.7251, 175.19),
      new google.maps.LatLng(-37.7751, 175.99)
    )

    let historicalOverlay = new google.maps.GroundOverlay(
      'http://www.jarrelook.co.uk/Urbex/Denbigh%20Asylum/Denbigh%20_aerial.jpg'
    , imageBounds);

    historicalOverlay.setMap(map);
  }

  static main() {

    let GoogleMap = new GoogleMapAPI(document.getElementById('app'), {
      center: new google.maps.LatLng(-37.7751, 175.19),
      zoom: 8
    });
  }
}

GoogleMapAPI.main();
