import { View, Text, Image } from "react-native";

const Logo = (props) => {
  return (
    <View className="flex-row">
      <View className="flex-row flex-1 items-center space-x-2">
        <Image
          source={require("../assets/tinlogo.jpeg")}
          className="h-8 w-8 rounded-full"
        />
        <Text className="font-bold text-2xl text-gray-200">TINChecker</Text>
      </View>
      <Image
        source={require("../assets/profileimg.jpeg")}
        className="h-10 w-10 rounded-full"
      />
    </View>
  );
};

export default Logo;
