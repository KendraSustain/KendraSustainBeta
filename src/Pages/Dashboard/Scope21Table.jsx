import React from "react";
import axios from "axios";
import { CHART, MTable } from "../../Components";
export default function Scope21Graph() {
  const authToken = `Bearer ${localStorage.getItem("authToken")}`;

  const [row, setRow] = React.useState([]);

  let meta = {
    assetName: "MPAN-K05G00388",
    type: "emission",
  };
  React.useEffect(() => {
    const getData = async () => {
      const apiGetData = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
          Accept: "application/json",
          Authorization: authToken,
        },
      });

      const { data } = await apiGetData.post(
        `/api/getEmission?name=${meta.assetName}&type=${meta.type}`
      );

      setRow(data);
    };
    getData();
  }, [authToken]);

  return (
    <>
      <MTable
        tableData={row}
        title={meta.assetName}
        columns={[
          {
            field: "Date",
            title: "Date",
          },
          {
            field: "Carbon Emission",
            title: "Carbon Emission",
          },
          {
            field: "Energy Consumption",
            title: "Energy Consumption",
          },
        ]}
      />
    </>
  );
}
