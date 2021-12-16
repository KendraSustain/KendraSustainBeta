import React, { useState, useContext, useEffect } from 'react';
import styles from './Register.module.css';
import MaterialTable from 'material-table';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Context } from '../../../context/Contexts';
import axios from 'axios';
import Cookies from 'js-cookie';
import jwt_decode from "jwt-decode";
import { columns } from './columns';
import { useHistory } from "react-router-dom";

const Register = () => {
    const context = useContext(Context);
    const history = useHistory();

    const apiAsset = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${Cookies.get("tok_sustain")}`,
        },
    });
    const apiDelAsset = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
            Accept: '*/*',
            'Authorization': `Bearer ${Cookies.get("tok_sustain")}`,
        },
    });

    const [localData, setLocalData] = useState();
    const [pageSizeOptions, setPageSizeOptions] = useState([]);

    const updatePageSize = (data) => {
        if (data) {
            for (let i = 5; i < data.length; i = i + 5)
                setPageSizeOptions([...pageSizeOptions, i]);
            setPageSizeOptions([...pageSizeOptions, data.length]);
        }
    }
    useEffect(() => {
        async function getData() {
            let decoded = jwt_decode(Cookies.get("tok_sustain"));
            const apiGetAsset = axios.create({
                baseURL: process.env.REACT_APP_API_URL,
                headers: {
                    Accept: 'application/json',
                    'Authorization': `Bearer ${Cookies.get("tok_sustain")}`,
                },
            });
            try {
                const { data } = await apiGetAsset.get(`/api/asset/${decoded.id}`)
                setLocalData(data);
                console.log(data)
                // updatePageSize(data);
                if (data) {
                    for (let i = 5; i < data.length; i = i + 5)
                        setPageSizeOptions(p => [...p, i]);
                    setPageSizeOptions(p => [...p, data.length]);
                }
            } catch (error) {
                console.log(error);
                console.log("Unable to get Asset");
            }
        }
        if (context.showNavTop)
            getData();
        context.setShowNavTop(true);
    }, [context]);

    const addRow = async (newRow) => {
        let jsonData = {
            "asset_name": newRow.asset_name,
            "asset_type": newRow.asset_type,
            "location": newRow.location
        }
        try {
            const res = await apiAsset.post("/api/asset", jsonData);
            const updatedRows = [...localData, { id: res.data.id }];
            setLocalData(updatedRows);
        } catch (error) {
            console.log("Unable to create asset");
        }
    }
    const updateRow = async (updatedRow, oldRow) => {
        const index = oldRow.tableData.id;
        let jsonData = {
            "asset_name": updatedRow.asset_name,
            "asset_type": updatedRow.asset_type,
            "location": updatedRow.location
        }
        try {
            await apiAsset.put(`/api/asset/${oldRow.id}`, jsonData);
            const updatedRows = [...localData];
            updatedRows[index] = updatedRow;
            setLocalData(updatedRows);
        } catch (error) {
            console.log("Unable to update asset");
        }
    }
    const deleteRow = async (selectedRow) => {
        // console.log(selectedRow);
        const index = selectedRow.tableData.id;
        try {
            await apiDelAsset.delete(`/api/asset/${selectedRow.id}`);
            const updatedRows = [...localData]
            updatedRows.splice(index, 1);
            setLocalData(updatedRows);
        } catch (error) {
            console.log("Unable to delete asset");
        }
    }

    return (
        <div className={[styles.register, context.close ? styles.close : ""].join(" ")}>
            {localData && (
                < MaterialTable
                    icons={{
                        Add: () => <AddBoxIcon style={{ color: "#0b2738" }} />,
                        Edit: () => <EditIcon style={{ color: "#0a5e91" }} />,
                        Delete: () => <DeleteOutlineIcon style={{ color: "red" }} />
                    }}
                    style={{
                        boxShadow: "0 2px 5px #aaaaaa99",
                        borderRadius: "15px",
                        padding: "10px",
                        paddingBottom: "0",
                        fontWeight: "600"
                    }}
                    title="Register Your Asset"
                    data={localData}
                    columns={columns}
                    actions={[
                        {
                            icon: () => <AddCircleOutlineIcon />,
                            tooltip: 'Add Data',
                            onClick: (event, rowData) => history.push(rowData.asset_name),
                        }
                    ]}
                    editable={{
                        onRowAdd: (newRow) => new Promise((resolve, reject) => {
                            addRow(newRow);
                            setTimeout(() => {
                                resolve();
                            }, 2000);
                        }),
                        onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
                            deleteRow(selectedRow);
                            setTimeout(() => {
                                resolve();
                            }, 2000)
                        }),
                        onRowUpdate: (updatedRow, oldRow) => new Promise((resolve, reject) => {
                            updateRow(updatedRow, oldRow);
                            setTimeout(() => {
                                resolve();
                            }, 2000);
                        })

                    }}
                    options={{
                        titleStyle: { color: "red" },
                        sorting: false,
                        pageSizeOptions: pageSizeOptions,
                        pageSize: localData ? localData.length < 5 ? localData.length : 5 : 0,
                        actionsColumnIndex: -1, addRowPosition: "first",
                        headerStyle: { fontSize: "1rem", fontWeight: "600", borderBottom: "none", whiteSpace: "nowrap" },
                        rowStyle: {
                            backgroundColor: '#fff',
                        },
                    }}
                />
            )}

        </div>
    )
}

export default Register;
