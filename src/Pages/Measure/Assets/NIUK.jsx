import React from "react";
import { useNavigate } from "react-router-dom";
import { CardChart, MTable } from "../../../Components";
// import Data from "./NIUK_data.json";
import Data from "./NiukData.json";
export default function NIUK() {
  const columns = [
    {
      title: "S.NO.",
      field: "sn",
    },
    {
      title: "Vehicle Reg",
      field: "Vehicle Reg",
    },
    {
      title: "Vehicle Reg Driver",
      field: "Vehicle Reg Driver",
    },
    {
      title: "Mileage",
      field: "mileage",
    },

    {
      title: "Location",
      field: "Location",
    },
  ];
  const navigate = useNavigate();
  return (
    <div>
      <MTable
        columns={columns}
        tableData={Data.map((item, pos) => {
          return {
            sn: pos + 1,
            "Vehicle Reg": item["Vehicle Reg"],
            "Vehicle Reg Driver": item["Vehicle Reg/Driver"],
          };
        })}
        onRowClick={(event, rowData) =>
          navigate("/asset/one", {
            state: { detail: rowData.sn },
          })
        }
        title="Scope 1"
      />
      {/* <CardChart
        x_items={Data.map((item) => item["Vehicle Reg"])}
        y_item={Data.map((item) => item["Distance Traveled"] / item["Litres"])}
        type="bar"
      /> */}
    </div>
  );
}
