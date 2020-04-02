import React,{Component} from 'react'
import {TouchableOpacity,Text,View,StyleSheet} from 'react-native';
import MapView,{Polyline,AnimatedRegion, Animated,Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const LATITUDE= 37.78825;
const LONGITUDE= -122.4324;
const LATITUDE_DELTA= 0.0922;
const LONGITUDE_DELTA= 0.0421;
export default class map extends Component{
    constructor(props) {
        super(props);
        this.state = {
          latitude: LATITUDE,
          longitude: LONGITUDE,
          routeCoordinates: [],
          distanceTravelled: 0,
          prevLatLng: {},
          coordinate: new AnimatedRegion({
           latitude: LATITUDE,
           longitude: LONGITUDE
          })
        };
      }


      componentDidMount() {
        this.watchID = navigator.geolocation.watchPosition(
          position => {
            const { coordinate, routeCoordinates, distanceTravelled } =   this.state;
            const { latitude, longitude } = position.coords;
            
            const newCoordinate = {
              latitude,
              longitude
            };
            if (Platform.OS === "android") {
              if (this.marker) {
                this.marker._component.animateMarkerToCoordinate(
                  newCoordinate,
                  500
                );
               }
             } else {
               coordinate.timing(newCoordinate).start();
             }
             this.setState({
               latitude,
               longitude,
               routeCoordinates: routeCoordinates.concat([newCoordinate]),
               distanceTravelled:
               distanceTravelled + this.calcDistance(newCoordinate),
               prevLatLng: newCoordinate
             });
           },
           error => console.log(error),
           { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
      }

      calcDistance = newLatLng => {
        const { prevLatLng } = this.state;
        return haversine(prevLatLng, newLatLng) || 0;
      };
      getMapRegion = () => ({
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      });

      render(){
          return(
              <View>
<MapView
  style={styles.map}
  showUserLocation
  followUserLocation
  loadingEnabled
  region={this.getMapRegion()}
>
  <Polyline coordinates={this.state.routeCoordinates} strokeWidth={5} />
  <Marker.Animated
    ref={marker => {
      this.marker = marker;
    }}
    coordinate={this.state.coordinate}
  />
</MapView>

<View 
// style={styles.buttonContainer}
>
  <TouchableOpacity 
//   style={[styles.bubble, styles.button]}
  >
    <Text 
    // style={styles.bottomBarContent}
    >
      {parseFloat(this.state.distanceTravelled).toFixed(2)} km
    </Text>
  </TouchableOpacity>
</View>
</View>

          );

      }

      

}

const styles = StyleSheet.create({
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  });