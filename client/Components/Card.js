import React, { Component } from "react";
import { Card, CardItem, Button, Icon } from "native-base";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
export default class card extends Component {
  render() {
    if (this.props.apartment.buyerName != null) {
      return (
        <Card>
          <CardItem style={{ justifyContent: "center" }}>
            <Text style={{ color: "red" }}>OWNED</Text>
          </CardItem>
          <CardItem>
          <Text>
            owner name : {this.props.apartment.ownerName} {"\n"}
            owner phone number : {this.props.apartment.ownerPhoneNumber} {"\n"}
            price of apartment : {this.props.apartment.price}
          </Text>
        </CardItem>
        <CardItem    style={{
            borderColor: "#d1cece",
            borderWidth: 1,
            justifyContent: "center"
          }}>
          <Text>location :</Text>
          <Button
            transparent
            style={{ color: "#1D8BF1" }}
            onPress={() =>
              this.props.navigation.navigate("MapComp", {
                latitude: this.props.apartment.latitude,
                longitude: this.props.apartment.longitude
              })
            }
          >
            <Icon name="navigate" />
          </Button>
        </CardItem>
          <CardItem style={{ borderColor: "#d1cece", borderWidth: 1 }}>
            <Text>
              bought by : {this.props.apartment.buyerName} {"\n"}
              phone number : {this.props.apartment.buyerPhoneNumber} {"\n"}
            </Text>
          </CardItem>
        </Card>
      );
    }
    return (
      <Card>
        <CardItem>
          <Text>
            owner name : {this.props.apartment.ownerName} {"\n"}
            owner phone number : {this.props.apartment.ownerPhoneNumber} {"\n"}
            price of apartment : {this.props.apartment.price}
          </Text>
        </CardItem>
        <CardItem    style={{
            borderColor: "#d1cece",
            borderWidth: 1,
            justifyContent: "center"
          }}>
          <Text>location :</Text>
          <Button
            transparent
            style={{ color: "#1D8BF1" }}
            onPress={() =>
              this.props.navigation.navigate("MapComp", {
                latitude: this.props.apartment.latitude,
                longitude: this.props.apartment.longitude
              })
            }
          >
            <Icon name="navigate" />
          </Button>
        </CardItem>

        <CardItem
          style={{
            borderColor: "#d1cece",
            borderWidth: 1,
            justifyContent: "center"
          }}
        >
          <Button
            transparent
            style={{ color: "#1D8BF1" }}
            onPress={() =>
              this.props.navigation.navigate("BuyingForm", {
                id: this.props.apartment._id
              })
            }
          >
            <Icon name="ios-briefcase" />
          </Button>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  underLineText: {
    fontSize: 12,
    textDecorationLine: "underline",
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
});
