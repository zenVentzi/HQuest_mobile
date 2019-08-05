import React, { Component, Fragment } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Form, Picker, Icon } from 'native-base';

export default class EditionsPicker extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {};
  }

  onValueChange = (itemValue: any, itemPosition: number) => {};

  render() {
    return (
      <Fragment>
        <Form>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            placeholder="Select your SIM"
            placeholderStyle={{ color: '#bfc6ea' }}
            placeholderIconColor="#007aff"
            style={{ width: 200, backgroundColor: 'red' }}
            selectedValue={this.state.selected}
            onValueChange={this.onValueChange}>
            <Picker.Item label="Wallet" value="key0" />
            <Picker.Item label="ATM Card" value="key1" />
            <Picker.Item label="Debit Card" value="key2" />
            <Picker.Item label="Credit Card" value="key3" />
            <Picker.Item label="Net Banking" value="key4" />
          </Picker>
        </Form>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({});
