
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
        <View style={styles.container}>
          <CanvasDemo />
        </View>
      </View>
    )
  }
}

export default App
