import { View } from "react-native";
import Details from "../components/Details";
import Header from "../components/Header";

const data = null;

const data3 = Object.entries({
  "ZONE/SUB CITY": "ADDIS KETEMA",
  "TIN NUMBER": "00",
  WOREDA: "12",
  LOCALITYDESC: "NO WOREDA-140",
  REGION: "ADDIS ABABA",
  "STREET NUMBER": "084",
  "TAX CENTER NUMBER": "823",
  "TELEPHONE NUMBER": "251932974375",
  "TAX PAYER NAME": "SOLOMON GEBREGIORGIS TESFAYE",
  "TAX PAYER NAME (AMHARIC)": "ሰለሞን ገብረጊዮርጊስ ተስፋዬ",
});

const HomeScreen = (props) => {
  return (
    <View className="bg-gray-200 flex-1 justify-start">
      <Header />
      <Details data={data} />
    </View>
  );
};

export default HomeScreen;
