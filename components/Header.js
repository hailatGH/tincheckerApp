import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import Constants from "expo-constants";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

import { app } from "../firebase";
import SearchInput from "./SearchInput";

const auth = getAuth(app);

const Header = (props) => {
  const topVal = Constants.statusBarHeight;

  const navigation = useNavigation();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigation.replace("Welcome"))
      .catch((error) => alert(error.message));
  };

  return (
    <SafeAreaView
      style={{
        top: StatusBar.currentHeight,
      }}
    >
      <View className="p-4 pb-6" style={{ backgroundColor: "#C2C2C2" }}>
        {/* Logo */}
        <View className="flex-row items-center space-x-2">
          <Text
            className="font-extrabold flex-1 text-3xl"
            style={{ color: "#535250" }}
          >
            TINChecker
          </Text>
          <TouchableWithoutFeedback onPress={handleSignOut}>
            <Image
              source={require("../assets/profileimg.jpeg")}
              className="h-10 w-10 rounded-full"
            />
          </TouchableWithoutFeedback>
        </View>

        {/* Header Text */}
        <View className="my-2">
          <Text className="font-medium" style={{ color: "#535250" }}>
            Hello, Hailemichael 👋
          </Text>
          <Text
            className="text-xl font-extrabold mt-1"
            style={{ color: "#535250" }}
          >
            Let's validate a TIN for you.
          </Text>
        </View>

        {/* Search Input */}
        <SearchInput />
      </View>
    </SafeAreaView>
  );
};

export default Header;
