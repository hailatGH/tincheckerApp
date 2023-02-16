import { SafeAreaView, StatusBar, View } from "react-native";
import Constants from "expo-constants";
import Logo from "./Logo";
import TextComp from "./TextComp";
import SearchInput from "./SearchInput";

const Header = (props) => {
  const topVal = Constants.statusBarHeight;
  return (
    <SafeAreaView
      style={{
        top: StatusBar.currentHeight,
      }}
    >
      <View className="p-4 bg-gray-900 pb-6">
        <Logo />
        <TextComp />
        <SearchInput />
      </View>
    </SafeAreaView>
  );
};

export default Header;
