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
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { app } from "../firebase";

const auth = getAuth(app);

const RegisterScreen = (props) => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const navigation = useNavigation();

  const handleSingUp = () => {
    if (password === confirmpassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    } else {
      console.log("Password and Confirm Password does not match");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  return (
    <ScrollView className="mt-20">
      <View className="flex-1 justify-center items-center space-y-7">
        <View className="items-center">
          <Text className="text-3xl font-semibold">Create an Account</Text>
          <Text className="text-gray-500">Let's get you started.</Text>
        </View>

        <View className="w-64">
          <Text className="text-base font-bold">Email</Text>
          <TextInput
            className="border-2 border-gray-300 rounded-md h-10 p-3 mt-2"
            placeholder="Enter your email"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
            // autoCorrect={false}
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

        <View className="w-64">
          <Text className="text-base font-bold">Confirm Password</Text>
          <View>
            <TextInput
              className="border-2 border-gray-300 rounded-md h-10 p-3 mt-2"
              placeholder="Enter your password again"
              secureTextEntry={showConfirmPassword}
              value={confirmpassword}
              onChangeText={(text) => setConfirmPassword(text)}
            />
            <View className="absolute top-4 right-2">
              <TouchableWithoutFeedback
                onPress={() =>
                  setShowConfirmPassword(
                    (prevShowConfirmPassword) => !prevShowConfirmPassword
                  )
                }
              >
                {showConfirmPassword ? (
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
            onPress={handleSingUp}
          >
            <Text className="text-gray-50 font-bold text-base">Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-row w-full items-center justify-center h-10 rounded-md border-2 space-x-3"
            style={{ borderColor: "#535250" }}
          >
            <Image
              source={require("../assets/googlelogo.png")}
              className="h-7 w-7"
            />
            <Text className="font-bold text-base">Sign Up with Google</Text>
          </TouchableOpacity>
        </View>

        <View className="w-64 flex-row space-x-3 justify-center">
          <Text className="text-base">Already have account?</Text>
          <Text
            className="font-bold text-base text-gray-700"
            onPress={() => navigation.navigate("Welcome")}
          >
            Sign In
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
