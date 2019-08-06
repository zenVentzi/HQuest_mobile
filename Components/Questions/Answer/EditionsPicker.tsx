import React, { Component, Fragment } from 'react';
import { StyleSheet, View, Picker } from 'react-native';

export default class EditionsPicker extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Picker
          mode="dropdown"
          style={styles.picker}
          selectedValue={this.state.selected}
          onValueChange={itemValue => {
            this.setState({ selected: itemValue });
          }}>
          <Picker.Item label="1'st edition" value="key0" />
          <Picker.Item label="2'nd edition" value="key4" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
  picker: {
    width: 150,
    height: 30,
  },
});
