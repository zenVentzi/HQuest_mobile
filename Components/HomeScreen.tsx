import React, {Fragment, Component} from 'react';
import { Button, View, TouchableOpacity, Text } from 'react-native';

export default class HomeScreen extends React.Component<any,any> {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "black" }}>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text style={{color: "white"}}>Open Drawer</Text>
        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold', color: "white", marginTop: 20 }}>Home</Text>
      </View>
    );
  }
}