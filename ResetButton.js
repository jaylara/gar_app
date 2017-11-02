import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  TouchableHighlight,
  View
} from 'react-native';


export default class ResetButton extends Component<{}> {
  render() {
    return (
      <View>
        <Button style={styles.button} onPress={() => { this.props.onReset("Sophia Touched Me!") }} title={'RESET'} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',

    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    height:70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize:24,
    color: 'white'
  }
});
