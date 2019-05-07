import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: 'white',
  },
  skipButton: {
    padding: 8,
    borderWidth: 0.6,
    borderColor: 'black',
    borderRadius: 4,
    width: "60%",
    alignItems: 'center'
  },
  skipText: {
    color: 'black',
    fontSize: 18,
  }
});

export default styles;
