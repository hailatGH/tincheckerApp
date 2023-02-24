import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Cards = ({ data }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Details")}>
      <View
        style={{ backgroundColor: "#C2C2C2" }}
        className="justify-center h-16 mx-5 my-2 px-10 rounded-lg"
      >
        <Text
          style={{ color: "#535250" }}
          numberOfLines={1}
          className="text-lg font-extrabold"
        >
          {data?.tax_payer_name}
        </Text>
        <Text style={{ color: "#535250" }} className="text-sm">
          {data?.tin}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Cards;
