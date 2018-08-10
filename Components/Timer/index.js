import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Timer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Timer Goes Here</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Timer;
