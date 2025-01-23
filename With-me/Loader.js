import React from "react";
import { StyleSheet, View, Modal } from "react-native";
import LottieView from "lottie-react-native";

const Loader = ({
  viewStyle = styles.modalBackground,
  isLoading = false,
  backgroundColor = "rgba(0, 0, 0, 0.5)",
  size = "small",
}) => {
  return (
    <Modal
      transparent={true}
      animationType="none"
      visible={isLoading}
      onRequestClose={() => {}}
    >
      <View style={[viewStyle, { backgroundColor }]}>
        <View style={styles.activityIndicatorWrapper}>
          <LottieView
            source={require("../assets/animations/car_location.json")}
            style={{ width: 100, height: 90 }}
            autoPlay
            loop
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  activityIndicatorWrapper: {
    height: 100,
    width: 100,
    borderRadius: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default Loader;
