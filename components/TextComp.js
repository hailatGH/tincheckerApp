import { View, Text } from "react-native";

const TextComp = (props) => {
  return (
    <View className="my-2">
      <Text className="text-gray-100 font-medium">Hello, Hailemichael 👋</Text>
      <Text className="text-gray-100 text-xl font-extrabold mt-1">
        Let's validate a TIN for you.
      </Text>
    </View>
  );
};

export default TextComp;
