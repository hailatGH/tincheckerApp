import { View, Text, ScrollView } from "react-native";
import Constants from "expo-constants";

const Details = ({ data }) => {
  return (
    <View
      style={{
        marginTop: "android" in Constants.platform ? 25 : 0,
      }}
      className="p-4"
    >
      {data && (
        <>
          <View className="mb-8">
            <Text className="text-2xl font-extrabold text-slate-700">
              Hailemichael Atrsaw
            </Text>
            <Text className="font-semibold text-slate-600">00216865876</Text>
          </View>

          <Text className="font-extrabold text-lg text-slate-700 mb-2">
            Detail Info
          </Text>

          <View className="mx-3">
            {data.map((val) => (
              <View className="flex-row space-x-3 my-1">
                <Text className="text-sm font-semibold text-slate-700">
                  {val[0]}:
                </Text>
                <Text
                  className="text-sm font-normal text-slate-700"
                  numberOfLines={3}
                >
                  {val[1]}
                </Text>
              </View>
            ))}
          </View>
        </>
      )}
      <View>
        <Text className="font-extrabold text-lg text-slate-700 mb-2 mt-7">
          Recent Searches
        </Text>
        <ScrollView
          horizontal
          className="space-x-3"
          showsHorizontalScrollIndicator={false}
        >
          <View className="bg-gray-800 h-14 rounded-md justify-center items-center p-4">
            <Text className="font-bold text-base text-gray-200">
              08977652134
            </Text>
          </View>
          <View className="bg-gray-800 h-14 rounded-md justify-center items-center p-4">
            <Text className="font-bold text-base text-gray-200">
              08977652134
            </Text>
          </View>
          <View className="bg-gray-800 h-14 rounded-md justify-center items-center p-4">
            <Text className="font-bold text-base text-gray-200">
              08977652134
            </Text>
          </View>
          <View className="bg-gray-800 h-14 rounded-md justify-center items-center p-4">
            <Text className="font-bold text-base text-gray-200">
              08977652134
            </Text>
          </View>
          <View className="bg-gray-800 h-14 rounded-md justify-center items-center p-4">
            <Text className="font-bold text-base text-gray-200">
              08977652134
            </Text>
          </View>
          <View className="bg-gray-800 h-14 rounded-md justify-center items-center p-4">
            <Text className="font-bold text-base text-gray-200">
              08977652134
            </Text>
          </View>
          <View className="bg-gray-800 h-14 rounded-md justify-center items-center p-4">
            <Text className="font-bold text-base text-gray-200">
              08977652134
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Details;
