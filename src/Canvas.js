
import React, {Component} from 'react'
import {View, WebView} from 'react-native'

const defaultCss = '*{margin:0;padding:0;background-color:#222222;overflow:hidden}canvas{position:absolute;transform:translateZ(0);width:200px;height:200px}'

function executor(render, context, css) {
  const script =  `var canvas = document.querySelector('canvas');(${render.toString()}).call(${JSON.stringify(context)}, canvas)`
  const template = `<style>${css}</style><canvas><script>${script}</script></canvas>`
  return template
}

class Canvas extends Component {
  render() {

    const context = this.props.context
    const render = this.props.render
    const css = this.props.css || defaultCss

    return (
      <WebView
        automaticallyAdjustContentInsets={false}
        contentInset={{top: -1, right: 0, bottom: 0, left: -1}}
        source={{html: executor(render, context, css)}}
        opaque={false}
        underlayColor={'transparent'}
        style={this.props.style}
      />
    );
  }
}
export default Canvas
