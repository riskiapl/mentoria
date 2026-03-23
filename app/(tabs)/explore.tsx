import ParallaxScrollView from "@/components/parallax-scroll-view";
import { Fonts } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons
          size={310}
          color="#808080"
          name="code-slash"
          style={styles.headerImage}
        />
      }
    >
      <View style={styles.titleContainer}>
        <Text
          style={{
            fontFamily: Fonts.rounded,
          }}
        >
          Explore
        </Text>
      </View>
      <Text>This app includes example code to help you get started.</Text>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
