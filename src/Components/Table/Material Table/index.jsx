import React, { useState } from "react";
import { forwardRef } from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import MaterialTable from "material-table";
import CalculateIcon from "@mui/icons-material/Calculate";


export default function MTable(props) {
  console.log(props.tableData);
  const [pageSize, setPageSize] = useState(7);
  const [isRun, setIsRun] = useState(false);
  function run() {
    if (isRun) return;
    if (Array.isArray(props.tableData))
      if (props.tableData.length < 10 && props.tableData.length > 0)
        setPageSize(props.tableData.length);
    setIsRun(true);
  }
  console.log(props.actions);
  run();
  const options = {
    sorting: true,
    search: true,
    searchFieldAlignment: "right",
    searchAutoFocus: true,
    searchFieldVariant: "standard",
    filtering: true,
    paging: true,
    pageSize: pageSize,
    paginationType: "stepped",
    showFirstLastPageButtons: false,
    paginationPosition: "both",
    exportButton: true,
    exportAllData: true,
    exportFileName: "TableData",
    addRowPosition: "first",
    actionsColumnIndex: -1,
    showSelectAllCheckbox: false,
    showTextRowsSelected: false,
    selectionProps: (rowData) => ({
      disabled: rowData.age == null,
    }),

    columnsButton: true,
    rowStyle: (data, index) =>
      index % 2 === 0 ? { background: "#f5f5f5" } : null,
    headerStyle: { background: "#00034F", color: "white" },
  };
  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };
  return (
    <div>
      <MaterialTable
        onChangePage={() => console.log()}
        onPageChange={() => console.log()}
        onChangeRowsPerPage={() => console.log()}
        columns={props.columns}
        data={props.tableData}
        editable={{ ...props.editable }}
        onRowClick={props.onRowClick}
        actions={
          props.actions
            ? props.actions
            : props.calculate
            ? [
                {
                  icon: () => <CalculateIcon />,
                  tooltip: "Calculate",
                  onClick: (e, data) => props.handleOpen(data),
                },
              ]
            : null
        }
        onSelectionChange={props.onSelect}
        options={{
          ...options,
          ...props.options,
        }}
        onRowSelected={props.onRowSelected}
        title={props.title}
        icons={tableIcons}
      />
    </div>
  );
}
