import React, { Component } from "react";
import {Button,Alert} from "react-native";
import axios from 'axios';
import {
    Container,
    Content,
    Form,
    Item,
    Input,
    Label,
    Text,
    View,
  } from "native-base";


export default class ProposalForm extends Component {
    
    state = {
        buyerName:null,
        buyerPhoneNumber:null,
      }
      componentWillMount(){
          console.log(this.props.navigation.state.params.id)
      }
      handleClick() {
        if(this.state.buyerName==null){
          Alert.alert("please enter the name");
        }
        else if(this.state.buyerPhoneNumber==null){
          Alert.alert("please enter the phone number");
        }
         axios.put(`http://192.168.1.8:3000/apartments/${this.props.navigation.state.params.id}`, {
            buyerName: this.state.buyerName,
            buyerPhoneNumber: Number(this.state.buyerPhoneNumber),
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          Alert.alert("submited")
          this.props.navigation.navigate("HomePage")
      }


    render() {
      return (
        <Container>
          <Content>
            <Form>
            <Item floatingLabel>
              <Label>name</Label>
              <Input onChangeText={(text) => this.setState({buyerName:text})}/>
            </Item>
            <Item floatingLabel>
              <Label>phone number</Label>
              <Input keyboardType="numeric" onChangeText={(text) => this.setState({buyerPhoneNumber:text})}/>
            </Item>
            </Form>
            <View style={{paddingTop:20,justifyContent: 'center',flexDirection: 'row',}}>
            <Button
          title="SUBMIT"
          onPress={this.handleClick.bind(this)}
        />
            </View>
          </Content>
        </Container>
      );
    }
  }