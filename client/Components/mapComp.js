import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';

export default class App extends React.Component {
    componentDidMount() {
        console.log(this.props.navigation.state.params);
    }
  
  render() {
    return(
    <View style={styles.container}>
        <MapView style={styles.map}
          initialRegion={{
            latitude: this.props.navigation.state.params.latitude,
            latitudeDelta: 0.006903576446571691,
            longitude: this.props.navigation.state.params.longitude,
            longitudeDelta: 0.004148371517661786,
          }}
          onPress={ this.handleClick }
        >
        <MapView.Marker
            coordinate={{latitude: this.props.navigation.state.params.latitude,
              longitude: this.props.navigation.state.params.longitude}}
            title={"title"}
            description={"description"}
         />
      </MapView>
 </View>
 );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});







