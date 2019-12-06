import React, { Component } from 'react';
import { Container, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import SellingForm from './sellingForm';
import Cards from './Cards';
export default class HomePage extends Component {
    static navigationOptions = {
        title: 'Be3lY',
        headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: "center",
            flexGrow: 1,
            alignSelf: "center"
          },
      };
  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading={ <TabHeading><Text>Sell</Text></TabHeading>}>
            <SellingForm navigation={this.props.navigation}/>
          </Tab>
          <Tab heading={ <TabHeading><Text>Buy</Text></TabHeading>}>
              <Cards navigation={this.props.navigation}/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}