import React, { Component } from 'react';
import GarList from './GarList';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

export default class WarningBanner extends Component<{}> {
  constructor(props){
    super(props);

    this.state={
      totalScore: this.props.total,
      // alert: 'Green',
      backgroundColor: styles.amber
    }
    this._color = this._color.bind(this);
  }

  _color(){
    this.props.onColorChange();
    var total = this.props.total;
    if (total<=23){
      return styles.green;
    } else if (total>=24 && total<=44){
      return styles.amber;
    } else if(total>=45){
      return styles.red;
    }

  }



  render() {
    return (
      <View style={this._color()}>
        <Text>
          {this.props.total}
        </Text>

      </View>
     );
  }
}

const styles = StyleSheet.create({
container:{
  flex: 1,
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: null,
  height: 300,
  resizeMode: 'cover',
},
score:{
  fontSize: 20,
  textAlign: 'center',
  marginTop: 30,
},
color:{
  fontSize: 20,
  textAlign: 'center',
  margin: 10,
},
red: {
  backgroundColor: '#D80000',
},
green: {
  backgroundColor: '#009900',
},
amber: {
  backgroundColor: '#FF9900',
}
});


//take scores from GarList (each GarElement)
//var totalScore = Supervision score + Planning score + Crew Selection score
//+ Crew Fitness score + Environment score + Complexity score
// if (totalScore<=23){
//  make background Green
// render totalScore
//render the word "Green"
//} else if (totalScore>=24 && totalScore<=44){
//  make background orange
// render totalScore
// render the word "Amber"
//} else if(totalScore>=45 && totalScore<=60){
// make background Red
// render totalScore
// render the word "Red"
//}
