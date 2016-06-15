
import React, { Component } from 'react';
import {styles} from './Styles'
import {
  Text,
  View
} from 'react-native'

import CanvasDemo from './CanvasDemo'

class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <CanvasDemo />
      </View>
    )
  }
}

export default App
