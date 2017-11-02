import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Alert,
  View
} from 'react-native';

import WarningBanner from './WarningBanner';
import GarList from './GarList';
import GarElement from './GarElement';
import ResetButton from './ResetButton';

const gars = [
    {"id": 0, "name": "Supervision", "desc": "Supervisor Qualification/Engagement"},
    {"id": 1, "name": "Planning", "desc": "Time, Effort, Quality"},
    {"id": 2, "name": "Crew Selection", "desc": "Assignment vs. Experience"},
    {"id": 3, "name": "Crew Fitness", "desc": "Physical/Mental State"},
    {"id": 4, "name": "Environment", "desc": "Environment"},
    {"id": 5, "name": "Complexity", "desc": "Event or Evolution Complexity"}
];

export default class App extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      total: 12
    }
    this._handleReset = this._handleReset.bind(this);
    this._handleColorChange = this._handleColorChange.bind(this);
    this._handleScoreChange = this._handleScoreChange.bind(this);
  }

  _handleReset (val) {
    this.setState({total: 12});
  }

  _handleColorChange() {
  }

  _handleScoreChange(newScore) {
    this.setState({total: newScore});
  }


  render() {
    return (
      <View style={styles.container} >
        <WarningBanner total={this.state.total} onColorChange={this._handleColorChange}/>
        <GarList onScoreChange={this._handleScoreChange} data={gars}/>
        <ResetButton onReset={this._handleReset} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
