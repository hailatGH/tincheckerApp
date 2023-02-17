import { View, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SearchInput = (props) => {
  return (
    <View
      className="flex-row items-center space-x-3 rounded-md px-4 mt-4"
      style={{ backgroundColor: "#535250" }}
    >
      <AntDesign name="search1" size={30} color="#CBCAC8" />
      <TextInput
        className="flex-1 text-xl h-12 font-bold"
        style={{ lineHeight: -1, color: "#CBCAC8" }}
        placeholder="Enter a TIN."
        placeholderTextColor="#858482"
      />
    </View>
  );
};

export default SearchInput;
