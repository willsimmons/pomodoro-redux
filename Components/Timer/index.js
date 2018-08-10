import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

class Timer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'}/>
        <View style={styles.upper}>
          <Text style={styles.time}>Timer Goes Here</Text>
        </View>
        <View style={styles.lower}>
          <Text style={styles.startAndStop}>buttons go here</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  upper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lower: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  time: {
    color: '#fff',
    fontSize: 30,
  },
  startAndStop: {
    flex: 1,
    color: '#fff',
    fontSize: 30,
  }
});

export default Timer;
