// import React, { useState, useContext, useEffect } from 'react';
// import styles from './Register.module.css';
// import { Context } from '../../../context/Contexts';
// import { Data } from '../../../Data';
// import DyTable from '../../../components/Table/DyTable';

// const Register2 = (props) => {
//     const context = useContext(Context);
//     // const history = useHistory();
//     const [rows, setRows] = React.useState([]);

//     const columns = [
//         { id: 'Asset_name', label: 'Asset Name', minWidth: 170 },
//         { id: 'Asset_type', label: 'Asset type', minWidth: 170 },
//         { id: 'location', label: 'Location', minWidth: 170 },



//     ];


//     useEffect(() => {
//         setRows(Data);
//         context.setShowNavTop(true);
//         // console.log(Data);
//     }, []);




//     return (
//         <div className={[styles.register, context.close ? styles.close : ""].join(" ")} >
//             <DyTable columns={columns} rows={rows} head="Scope 1" />

//         </div>
//     )
// }

// export default Register2;

import React, { useState, useContext, useEffect } from 'react';
// import './App.css';
import MaterialTable from 'material-table'
import GetAppIcon from '@material-ui/icons/GetApp';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import styles from './Register.module.css';
import { Context } from '../../../context/Contexts';
import { Data } from '../../../Data';

function Register2() {
    const context = useContext(Context);
    const [tableData, setTableData] = useState(
        Data
    )
    console.log(Data);
    const columns = [
        { title: "Name of Asset", field: "Asset_name", sorting: false, filtering: false, headerStyle: { color: "#fff" } },
        { title: "Asset Type", field: "Asset_type" },
        { title: "Location", field: "location", align: "center", grouping: false },
    ]
    return (
        <div className={[styles.register, context.close ? styles.close : ""].join(" ")}>
            {/* <h1 align="center">React-App</h1>
            <h4 align='center'>Crash Course on Material Table </h4> */}

            <MaterialTable columns={columns} data={tableData}
                editable={{
                    onRowAdd: (newRow) => new Promise((resolve, reject) => {
                        setTableData([...tableData, newRow])

                        setTimeout(() => resolve(), 500)
                    }),
                    onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {
                        const updatedData = [...tableData]
                        updatedData[oldRow.tableData.id] = newRow
                        setTableData(updatedData)
                        setTimeout(() => resolve(), 500)
                    }),
                    onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
                        const updatedData = [...tableData]
                        updatedData.splice(selectedRow.tableData.id, 1)
                        setTableData(updatedData)
                        setTimeout(() => resolve(), 1000)

                    })
                }}
                actions={[
                    {
                        icon: () => <GetAppIcon />,
                        tooltip: "Click me",
                        onClick: (e, data) => console.log(data),
                        // isFreeAction:true
                    }
                ]}
                onSelectionChange={(selectedRows) => console.log(selectedRows)}
                options={{
                    sorting: true, search: true,
                    searchFieldAlignment: "right", searchAutoFocus: true, searchFieldVariant: "standard",
                    filtering: true, paging: true, pageSizeOptions: [2, 5, 10, 20, 25, 50, 100], pageSize: 5,
                    paginationType: "stepped", showFirstLastPageButtons: false, paginationPosition: "both", exportButton: true,
                    exportAllData: true, exportFileName: "TableData", addRowPosition: "first", actionsColumnIndex: -1,
                    showSelectAllCheckbox: false, showTextRowsSelected: false, selectionProps: rowData => ({
                        disabled: rowData.age == null,
                        // color:"primary"
                    }),
                    grouping: true, columnsButton: true,
                    rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
                    headerStyle: { background: "#00034f", color: "white" }
                }}
                title="Scope 1"
                icons={{
                    Add: () => <AddBoxIcon style={{ color: "#0b2738" }} />,
                    Edit: () => <EditIcon style={{ color: "#0a5e91" }} />,
                    Delete: () => <DeleteOutlineIcon style={{ color: "red" }} />
                }} />

        </div>
    );
}

export default Register2;
