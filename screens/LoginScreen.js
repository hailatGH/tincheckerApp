import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import {
  auth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "../firebase";

const LoginScreen = (props) => {
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleGoogleSignIn = () => {};

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <View className="flex-1 justify-center items-center space-y-7">
        <View className="items-center">
          <Text className="text-3xl font-semibold">Welcome Back</Text>
          <Text className="text-gray-500">
            Welcome back! Please enter your credentials.
          </Text>
        </View>

        <View className="w-64">
          <Text className="text-base font-bold">Email</Text>
          <TextInput
            className="border-2 border-gray-300 rounded-md h-10 p-3 mt-2"
            placeholder="Enter your email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCapitalize={false}
          />
        </View>

        <View className="w-64">
          <Text className="text-base font-bold">Password</Text>
          <View>
            <TextInput
              className="border-2 border-gray-300 rounded-md h-10 p-3 mt-2"
              placeholder="Enter your password"
              secureTextEntry={showPassword}
              value={password}
              onChangeText={(text) => setPassword(text)}
              autoCapitalize={false}
            />
            <View className="absolute top-4 right-2">
              <TouchableWithoutFeedback
                onPress={() =>
                  setShowPassword((prevShowPassword) => !prevShowPassword)
                }
              >
                {showPassword ? (
                  <Entypo name="eye" size={24} color="#9CA3AF" />
                ) : (
                  <Entypo name="eye-with-line" size={24} color="#9CA3AF" />
                )}
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>

        <View className="w-64 items-center space-y-2">
          <TouchableOpacity
            className="w-full items-center justify-center h-10 rounded-md"
            style={{ backgroundColor: "#535250" }}
            onPress={handleLogin}
          >
            <Text className="text-gray-50 font-bold text-base">Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-row w-full items-center justify-center h-10 rounded-md border-2 space-x-3"
            style={{ borderColor: "#535250" }}
            onPress={handleGoogleSignIn}
          >
            <Image
              source={require("../assets/googlelogo.png")}
              className="h-7 w-7"
            />
            <Text className="font-bold text-base">Sign In with Google</Text>
          </TouchableOpacity>
        </View>

        <View className="w-64 flex-row space-x-3 justify-center">
          <Text className="text-base">Don't have account?</Text>
          <Text
            className="font-bold text-base text-gray-700"
            onPress={() => navigation.navigate("Register")}
          >
            Sign Up
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
