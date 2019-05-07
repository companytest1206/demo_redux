import React, { Component } from 'react'
import { View } from 'react-native'

export default class Padding extends Component {
  render() {
    return (
      <View style={{ padding: this.props.height }} />
    )
  }
}
