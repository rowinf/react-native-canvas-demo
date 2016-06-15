
import React, {Component} from 'react'
import {View, WebView} from 'react-native'


function executor(render, context) {
  const script =  `var canvas = document.querySelector('canvas');(${render.toString()}).call(${JSON.stringify(context)}, canvas)`
  const template = `<style>*{margin:0;padding:0;}canvas{position:absolute;transform:translateZ(0);}</style><canvas><script>${script}</script></canvas>`
  return template
}

function renderSource(argument) {

  executor()
}

class Canvas extends Component {
  render() {

    const context = this.props.context
    const render = this.props.render

    return (
      <View>
        <WebView
          automaticallyAdjustContentInsets={false}
          contentInset={{top: 0, right: 0, bottom: 0, left: 0}}
          source={{html: executor(render, context)}}
          opaque={false}
          underlayColor={'transparent'}
          style={this.props.style}
        />
      </View>
    );
  }
}
export default Canvas
