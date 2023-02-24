import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { create } from "apisauce";

import Cards from "../components/Cards";
import Header from "../components/Header";

const api = create({
  baseURL: "http://127.0.0.1:5000/",
  headers: { Accept: "application/vnd.github.v3+json" },
});

const HomeScreen = (props) => {
  const [tin, setTin] = useState(0);
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    api
      .get(`tinchecker/${tin}`)
      .then((response) => setResponseData(response.data?.tax_payers));
  }, [tin]);

  return (
    <View className="bg-gray-200 flex-1 justify-start">
      <Header tin={tin} setTin={setTin} />
      {responseData &&
        responseData.map((data) => <Cards data={data} key={data.tin} />)}
    </View>
  );
};

export default HomeScreen;
