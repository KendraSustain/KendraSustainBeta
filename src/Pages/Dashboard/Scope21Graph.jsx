import React from "react";
import axios from "axios";
import { CHART } from "../../Components";
export default function Scope21Graph() {
  const authToken = `Bearer ${localStorage.getItem("authToken")}`;

  const [row, setRow] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      const apiGetData = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
          Accept: "application/json",
          Authorization: authToken,
        },
      });
      let meta = {
        assetName: "MPAN-K05G00388",
        type: "emission",
      };

      const { data } = await apiGetData.post(
        `/api/getEmission?name=${meta.assetName}&type=${meta.type}`
      );

      setRow(data);
    };
    getData();
  }, [authToken]);

  return (
    <>
      <CHART
        x_items={row.map((item) => item["Date"])}
        type="line"
        y_item={row.map((item) => item["Carbon Emission"])}
        label={"Carbon Emission : MPAN-K05G00388"}
      />
    </>
  );
}
