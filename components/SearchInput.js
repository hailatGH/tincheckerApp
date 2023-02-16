import { View, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SearchInput = (props) => {
  return (
    <View className="flex-row items-center space-x-3 bg-gray-700 rounded-md px-4 mt-4">
      <AntDesign name="search1" size={30} color="#64748B" />
      <TextInput
        className="flex-1 text-xl h-12 font-bold text-gray-400"
        style={{ lineHeight: -1 }}
        placeholder="Enter a TIN."
        placeholderTextColor="#64748B"
      />
    </View>
  );
};

export default SearchInput;
