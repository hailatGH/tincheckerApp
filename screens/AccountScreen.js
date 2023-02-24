import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";

import { auth } from "../firebase";

const AccountScreen = (props) => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigation.replace("Login"))
      .catch((error) => alert(error.message));
  };

  return (
    <View>
      <Text onPress={handleSignOut}>AccountScreen</Text>
    </View>
  );
};

export default AccountScreen;
