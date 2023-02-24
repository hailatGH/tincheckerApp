import { TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BackButton = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Home")}
      className="h-11 w-11  justify-center items-center"
    >
      <Feather name="arrow-left-circle" size={35} color="black" />
    </TouchableOpacity>
  );
};

export default BackButton;
