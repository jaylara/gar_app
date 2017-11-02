import React, { Component } from 'react';
import {
  Slider,
  Text,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import GarList from './GarList';

export default class GarElement extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      score: 2
    }
  }

_handleScoreChange(newScore) {
  this.setState({score: newScore})
  this.props.onScoreChange(this.props.elementInfo.id,newScore)
}
  render() {
    return (
      <View >
      <Text>{this.props.elementInfo.name} {this.state.score}</Text>
      <Slider
        maximumValue={10}
        step={1}
        value={2}
        onValueChange={(score) => this._handleScoreChange(score)}
        />

      </View>
    );
  }
}
