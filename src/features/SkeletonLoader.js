import React, { useEffect, useState } from "react";
import { View, StyleSheet, Animated } from "react-native";

const SkeletonLoader = () => {
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  const getLoaderStyle = () => {
    const backgroundColor = animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["#e0e0e0", "#f5f5f5"],
    });

    return {
      flex: 1,
      backgroundColor,
    };
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.loader, getLoaderStyle(), { opacity: animation }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  loader: {
    marginBottom: 8,
  },
});

export default SkeletonLoader;
