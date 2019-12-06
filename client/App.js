import React from "react";
import * as Expo from "expo";
import AppNavigator from "./AppNavigator";
console.disableYellowBox = true;
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }
  render() {
    return (
      <AppNavigator/>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
