import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Image,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { Entypo } from "@expo/vector-icons";

import { auth } from "../firebase";

const AccountScreen = (props) => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigation.replace("Login"))
      .catch((error) => alert(error.message));
  };

  return (
    <SafeAreaView>
      <ImageBackground source={require("../assets/profileimg.jpeg")}>
        <View className="items-center my-5">
          <View className="flex-row items-center space-x-4">
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              className="h-11 w-11 justify-center items-center"
            >
              <Entypo name="chevron-left" size={30} color="white" />
            </TouchableOpacity>

            <View className="flex-row justify-between flex-1">
              <Text className="text-xl font-bold text-white">Profile</Text>
              <TouchableOpacity className="mr-3 border justify-center items-center w-16 rounded-full border-white">
                <Text className="text-white font-semibold">EDIT</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Image
            source={require("../assets/profileimg.jpeg")}
            className="h-36 w-36 rounded-full border-4 border-white"
          />
          <View className="items-center mt-2">
            <Text className="text-xl font-semibold text-white">eLosts</Text>
            <Text className="text-lg text-white">Hailemichael Atrsaw</Text>
          </View>
        </View>
      </ImageBackground>

      <View className="px-4 py-5 space-y-4 mb-8">
        <Text className="text-xl font-semibold">Personal Detail</Text>
        <View className="flex-row justify-between">
          <Text>Phone No.</Text>
          <Text>+251912828397</Text>
        </View>
        <View className="flex-row justify-between">
          <Text>Email</Text>
          <Text>hailat.alx@gmail.com</Text>
        </View>
        <View className="flex-row justify-between">
          <Text>Gender</Text>
          <Text>Male</Text>
        </View>
        <View className="flex-row justify-between">
          <Text>Set Language</Text>
          <Text>English</Text>
        </View>
      </View>

      <View className="flex-row justify-center">
        <TouchableOpacity
          onPress={handleSignOut}
          className="h-11 w-56 justify-center items-center bg-gray-600 rounded-full"
        >
          <Text className="text-gray-200 font-bold text-lg">Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AccountScreen;
