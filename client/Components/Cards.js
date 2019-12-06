import React, { Component } from "react";
import axios from "axios";
import {View,ScrollView} from "react-native";
import Card from './Card.js'

export default class Cards extends Component {

    state = {
      apartments: [],
      loaded:false
    }
    onFocusFunction = () => {
        // do some stuff on every screen focus
        axios
      .get(`http://192.168.1.8:3000/apartments/`)
        .then((res) =>  {
          this.setState({apartments: res.data.data})
        //   console.log(this.state.apartments)
          console.log(this.state.loaded)
          this.setState({loaded:true})  
    }
        )
      }
    componentDidMount() {
        this.focusListener = this.props.navigation.addListener('didFocus', () => {
            this.onFocusFunction()
          })
          axios
          .get(`http://192.168.1.8:3000/apartments/`)
            .then((res) =>  {
              this.setState({apartments: res.data.data})
            //   console.log(this.state.apartments)
              console.log(this.state.loaded)
              this.setState({loaded:true})  
        }
            )
    }

    getPartner(){
      var shownData=[]
      if(this.state.loaded)
       this.state.apartments.map((post)=>
          shownData.push(<Card apartment={post} navigation={this.props.navigation}/>)
       )
 
      return shownData
    }
    render() {

        if(this.state.loaded){
      return (
        // <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
        //     {/* {this.getPartner()} */}
        // </ScrollView>
        <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
            {this.getPartner()}
            </ScrollView>
        </View>
      );
        }
        else{
            return(
                <View></View>
            )
        }
    }
  }