import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { connect } from "react-redux";

import styles from "./../styles/mainPage.css";
import { todoAdd, removeItem } from "../store/action";
import Padding from "./../components/Padding";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {}

  textboxChange = text => {
    this.setState({ textBox: text });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text>Login With Facebook</Text>
        </TouchableOpacity>
        <Padding height={20} />
        <TouchableOpacity style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    todoItems: state.todo.todoItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    todoAdd: t => dispatch(todoAdd(t)),
    removeItem: item => dispatch(removeItem(item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
