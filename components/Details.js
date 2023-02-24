import { View, Text, ScrollView } from "react-native";
import Constants from "expo-constants";

const Details = ({ data }) => {
  console.log(data);
  return (
    <View
      style={{
        marginTop: "android" in Constants.platform ? 25 : 0,
      }}
    >
      {data && (
        <View className="p-4">
          <View className="mb-4">
            <Text
              className="text-2xl font-extrabold"
              style={{ color: "#535250" }}
            >
              {data.map((val) => {
                if (val[0] === "TAX PAYER NAME") return val[1];
              })}
            </Text>
            <Text className="font-semibold" style={{ color: "#535250" }}>
              {data.map((val) => {
                if (val[0] === "TIN NUMBER") return val[1];
              })}
            </Text>
          </View>

          <Text
            className="font-extrabold text-lg mb-2"
            style={{ color: "#535250" }}
          >
            Detail Info
          </Text>
          <View className="mx-3">
            {data.map((val) => (
              <View className="flex-row space-x-3 my-1" key={val[0]}>
                <Text
                  className="text-sm font-semibold"
                  style={{ color: "#3F3E3C" }}
                >
                  {val[0]}:
                </Text>
                <Text
                  className="text-sm font-normal"
                  numberOfLines={3}
                  style={{ color: "#3F3E3C" }}
                >
                  {val[1]}
                </Text>
              </View>
            ))}
          </View>
        </View>
      )}

      {/* Recent Section */}
      <View>
        <Text
          className="font-extrabold text-lg mb-2 mt-4 px-4"
          style={{ color: "#535250" }}
        >
          Recent Searches
        </Text>
        <ScrollView
          horizontal
          className="space-x-3 px-2"
          showsHorizontalScrollIndicator={false}
        >
          <View
            className="h-14 rounded-md justify-center items-center p-4"
            style={{ backgroundColor: "#C2C2C2" }}
          >
            <Text className="font-bold text-base" style={{ color: "#535250" }}>
              08977652134
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Details;

const data1 = null;

const data2 = Object.entries({
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
