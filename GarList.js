import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Alert,
  FlatList
} from 'react-native';
import GarElement from './GarElement';



const elements = ['Supervision', 'Planning', 'Selection', 'Fitness', 'Environment', 'Event'];

export default class GarList extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      scores: [2,2,2,2,2,2]
    }
    this._handleScoreChange = this._handleScoreChange.bind(this);
    this._getTotal = this._getTotal.bind(this);
  }

  _getTotal() {
    return this.state.scores.reduce((a,b) => a+b, 0);
  }

  _handleScoreChange(idx, newScore) {
    var newScores = this.state.scores;
    newScores[idx] = newScore;
    this.setState({scores: newScores});
    this.props.onScoreChange(this._getTotal());
  }


  render() {
    return (
      <View>
        <FlatList data={this.props.data}
            extraData={this.state}
          renderItem={({item}) => <GarElement elementInfo={item} onScoreChange={this._handleScoreChange}></GarElement>}
          keyExtractor={(item,index) => item.id}
            />

        {/*<GarElement id={1} onScoreChange={this._handleScoreChange}/>

        <GarElement id={2} onScoreChange={this._handleScoreChange}/>*/}

        {/*<GarElement key={0} onScoreChange={this._handleScoreChange}/>
        <GarElement key={1} onScoreChange={this._handleScoreChange}/>*/}
      </View>
    );
  }
}
