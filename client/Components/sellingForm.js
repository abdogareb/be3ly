import React, { Component } from "react";
import { StyleSheet,Button, Alert,Dimensions } from "react-native";
import MapView,{ PROVIDER_GOOGLE} from 'react-native-maps';
import axios from "axios";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  View
} from "native-base";

export default class ProposalForm extends Component {
  state = {
    ownerName: null,
    ownerPhoneNumber: null,
    price: null,
    markerLatitude: null,
    markerLongitude: null,
    markerReady: false
  };

  handleClick() {
    if(this.state.ownerName==null){
      Alert.alert("please enter the name");
    }
    else if(this.state.ownerPhoneNumber==null){
      Alert.alert("please enter the phone number");
    }
    else if(this.state.price==null){
      Alert.alert("please enter the price");
    }
    else if(this.state.markerLatitude==null){
      Alert.alert("please enter the location");
    }
    else{
    axios
      .post(`http://192.168.1.8:3000/apartments/`, {
        ownerName: this.state.ownerName,
        ownerPhoneNumber: Number(this.state.ownerPhoneNumber),
        price: Number(this.state.price),
        latitude: this.state.markerLatitude,
        longitude:this.state.markerLongitude
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    Alert.alert("submited");
  }
  }
  handleClick1(event) {
    console.log(event.nativeEvent.coordinate);
    this.setState({ markerLongitude: event.nativeEvent.coordinate.longitude });
    this.setState({ markerLatitude: event.nativeEvent.coordinate.latitude });
    this.setState({ markerReady: true });
  }

  render() {
    if (this.state.markerReady) {
      return (
        <Container>
          <Content>
            <Form>
              <Item floatingLabel>
                <Label>name</Label>
                <Input
                  onChangeText={text => this.setState({ ownerName: text })}
                />
              </Item>
              <Item floatingLabel>
                <Label>phone number</Label>
                <Input
                  keyboardType="numeric"
                  onChangeText={text =>
                    this.setState({ ownerPhoneNumber: text })
                  }
                />
              </Item>
              <Item floatingLabel>
                <Label>price</Label>
                <Input
                  keyboardType="numeric"
                  onChangeText={text => this.setState({ price: text })}
                />
              </Item>
            </Form>
            <View style={styles.container}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: 30.028720288165424,
                latitudeDelta: 0.006903576446571691,
                longitude: 31.439715307205915,
                longitudeDelta: 0.004148371517661786
              }}
              onPress={this.handleClick1.bind(this)}
            >
              <MapView.Marker
                coordinate={{
                  latitude: this.state.markerLatitude,
                  longitude: this.state.markerLongitude
                }}
                title={"title"}
                description={"description"}
              />
            </MapView>
          </View>
            <View
              style={{
                paddingTop: 20,
                justifyContent: "center",
                flexDirection: "row"
              }}
            >
              <Button title="SUBMIT" onPress={this.handleClick.bind(this)} />
            </View>
          </Content>
        </Container>
      );
    } else {
      return(
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Name</Label>
              <Input
                onChangeText={text => this.setState({ ownerName: text })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Phone Number</Label>
              <Input
                keyboardType="numeric"
                onChangeText={text => this.setState({ ownerPhoneNumber: text })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Price</Label>
              <Input
                keyboardType="numeric"
                onChangeText={text => this.setState({ price: text })}
              />
            </Item>
            <Item>
              <Label>Location</Label>
            </Item>
          </Form>
          <View style={styles.container}>
            <MapView
            provider={PROVIDER_GOOGLE}
              style={styles.map}
              initialRegion={{
                latitude: 30.028720288165424,
                latitudeDelta: 0.006903576446571691,
                longitude: 31.439715307205915,
                longitudeDelta: 0.004148371517661786
              }}
              onPress={this.handleClick1.bind(this)}
            >
            </MapView>
          </View>
          <View
            style={{
              paddingTop: 20,
              justifyContent: "center",
              flexDirection: "row"
            }}
          >
            <Button title="SUBMIT" onPress={this.handleClick.bind(this)} />
          </View>
        </Content>
      </Container>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  map: {
    width: Dimensions.get("window").width,
    height: 200
  }
});
