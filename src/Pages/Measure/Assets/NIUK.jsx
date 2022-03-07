import React from "react";
import { useNavigate } from "react-router-dom";
import { MTable } from "../../../Components";
import Data from "./NIUK_data.json";
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
            ...item,
            sn: pos+1,
          };
        })}
        onRowClick={(event, rowData) =>
          navigate("/asset/one", {
            state: { detail: rowData.sn },
          })
        }
        title="Scope 1"
      />
    </div>
  );
}
