import React, { useState } from "react";
import style from "./index.module.css";
import { MTable } from "../../../Components";
const users = [
  {
    photo:
      "https://th.bing.com/th/id/R.6335f33fe06225a5233e6b4dd028142a?rik=CDtAY2OCYCcyvg&riu=http%3a%2f%2ftalkingoffice365.com%2fimages%2fteam%2f12.jpg&ehk=oPG5KQMwuCfOpdBJ%2blnA%2f1I7USBaoefYDq1rWMrFoXQ%3d&risl=&pid=ImgRaw&r=0",
    name: "John",
    status: true,
    lastseen: "1 min ago",
    role: "Product Manager",
  },
  {
    photo:
      "https://med.uottawa.ca/emergency/sites/med.uottawa.ca.emergency/files/mungham_2019.jpg",
    name: "Viky",
    status: false,
    lastseen: "1 Week ago",
    role: "HR",
  },
  {
    photo: "https://haagglobal.com/am-site/media/chris-bright1low.jpg",
    name: "Ron",
    status: true,
    lastseen: "Yesterday",
    role: "Software Engg.",
  },
  {
    photo:
      "https://www.gibsondunn.com/wp-content/uploads/2017/07/DWatson_web.jpg",
    name: "Rock",
    status: true,
    lastseen: "Yesterday",
    role: "IT Manager",
  },
  {
    photo:
      "https://s3.amazonaws.com/ballotpedia-api4/files/thumbs/200/300/Jon_Ossoff.png",
    name: "Robin",
    status: true,
    lastseen: "Yesterday",
    role: "HOD",
  },
];
export default function Org() {
  const arr = [
    {
      title: "Total Employee",
      data: 614,
    },
    {
      title: "New Employee",
      data: 112,
    },
    {
      title: "Male",
      data: 504,
    },
    {
      title: "Female",
      data: 100,
    },
  ];
  const columns = [
    {
      title: "Photo",
      field: "Photo",
      editable: "never",
      render: (item) => (
        <img
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
          }}
          src={item.Photo}
          alt={item.Name}
        />
      ),
    },
    { title: "Name", field: "Name" },
    { title: "Role", field: "Role" },
    { title: "Last seen", field: "Last Seen", editable: "never" },
    {
      title: "status",
      field: "Status",
      align: "center",
      grouping: false,
      render: (item) => (item.Status ? "Active" : "Inactive"),
    },
  ];

  const [data, setData] = useState(users);
  return (
    <>
      <div className={style.container}>
        {arr.map((item, pos) => (
          <div className={style.card} key={pos}>
            <span>{item.title}</span>
            <p>{item.data}</p>
          </div>
        ))}
        <div></div>
        <div></div>
      </div>
      <MTable
        title={"Employee"}
      
        tableData={data.map((item, pos) => {
          return {
            Photo: item.photo,
            Name: item.name,
            Role: item.role,
            "Last Seen": item.lastseen,
            Status: item.status,
            id: pos,
          };
        })}
        columns={columns}
      />
    </>
  );
}
