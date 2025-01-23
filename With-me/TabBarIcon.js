import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
// import Feather from '@expo/vector-icons/Feather';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
// import {
//     widthPercentageToDP as wp,
//     heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
import Icon from "react-native-vector-icons/FontAwesome";
const icons = {
  Dashboard: (props) => <Icon name="dashboard" size={20} {...props} />,
  Services: (props) => <Icon name="th-large" size={20} {...props} />,
  Activity: (props) => <Icon name="list-alt" size={20} {...props} />,
  Account: (props) => <Icon name="user" size={20} {...props} />,
};

const TabBarIcon = ({ onPress, isFocused, label }) => {
  const translateY = useSharedValue(0);
  const scale = useSharedValue(0);
  const textOpacity = useSharedValue(0);
  const iconOpacity = useSharedValue(0);

  useEffect(() => {
    textOpacity.value = withTiming(isFocused ? 1 : 0, { duration: 400 });
    iconOpacity.value = withTiming(isFocused ? 0 : 1, { duration: 400 });
    translateY.value = withTiming(isFocused ? 12 : 0, { duration: 400 });
  }, [isFocused]);

  const rText = useAnimatedStyle(() => {
    return {
      opacity: textOpacity.value,
      transform: [{ translateY: translateY.value }],
    };
  });

  const rImage = useAnimatedStyle(() => {
    return {
      opacity: iconOpacity.value,
    };
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
      }}
    >
      <Animated.View style={[rImage, { position: "absolute" }]}>
        {icons[label]({ color: "#000000" })}
      </Animated.View>

      <Animated.Text
        style={[
          {
            color: "black",
            fontWeight: "600",
            fontFamily: "mon-bold",
            fontSize: 13,
          },
          rText,
        ]}
      >
        {label}
      </Animated.Text>
    </TouchableOpacity>
  );
};

export default TabBarIcon;

const styles = StyleSheet.create({});
