import React, { useState } from "react";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import { withSize } from "react-sizeme";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import {
  Intensity,
  IntensityLine,
  MediaCard,
  Table,
  Table2,
  Weather,
  Widget,
} from "../../Components";
import FeaturedInfo from "../../Components/FeaturedInfo";
import Scope11Graph from "./Scope11Graph";
import Scope12Graph from "./Scope12Graph";
import Scope11Table from "./Scope11Table";
import Scope12Table from "./Scope12Table";
import Scope21Graph from "./Scope21Graph";
import Scope22Graph from "./Scope22Graph";
import Scope21Table from "./Scope21Table";
import Scope22Table from "./Scope22Table";
import Card from "./Card";
import Card1 from "./Card1";
import Profile from "./Profile";
import Scope2CE from "./Scope2CE";
import Scope1CE from "./Scope1CE";
import TotalCE from "./TotalCE";
const originalItems = ["a", "b", "c"];

const initialLayouts = {
  lg: [
    { i: "a", x: 0, y: 0, w: 10, h: 3 },
    { i: "b", x: 3, y: 3, w: 7, h: 8 },
    { i: "c", x: 0, y: 3, w: 3, h: 8 },
    { i: "d", x: 0, y: 11, w: 5, h: 8 },
    { i: "e", x: 5, y: 11, w: 5, h: 8 },
    { i: "f", x: 0, y: 18, w: 5, h: 8 },
    { i: "g", x: 5, y: 18, w: 5, h: 8 },
    { i: "h", x: 0, y: 27, w: 5, h: 8 },
    { i: "i", x: 5, y: 27, w: 5, h: 8 },
    { i: "j", x: 0, y: 35, w: 5, h: 8 },
    { i: "k", x: 5, y: 35, w: 5, h: 8 },
    { i: "l", x: 0, y: 43, w: 5, h: 8 },
    { i: "m", x: 5, y: 43, w: 5, h: 8 },
    { i: "n", x: 0, y: 51, w: 5, h: 8 },
    { i: "o", x: 5, y: 51, w: 5, h: 8 },
  ],
};

export function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  // alert(user.id)
  function getFromLS(key) {
    let ls = {};
    if (global.localStorage) {
      try {
        ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
      } catch (e) {}
    }
    return ls[key];
  }

  //   function saveToLS (key, value) {
  //     if (global.localStorage) {
  //       global.localStorage.setItem(
  //         'rgl-8',
  //         JSON.stringify({
  //           [key]: value
  //         })
  //       )
  //     }
  //   }
  const NiukWigh = {
    h: <Scope11Graph />,
    i: <Scope12Graph />,
    j: <Scope11Table />,
    k: <Scope12Table />,
    l: <Scope21Graph />,
    m: <Scope22Graph />,
    n: <Scope21Table />,
    o: <Scope22Table />,
  };
  const NIUKNew = {
    a: (
      <MediaCard
        title={"Kendra Sustain"}
        content="Kendra Sustain enables enterprises to embed data-driven Sustainability Decision-Making across business operations by providing enterprises with the tools to build a Circular Economy model through Data and Artificial Intelligence."
        img={require("../../Assets/Images/backgroundimg6.jpg")}
        style={{
          boxShadow: "none",
        }}
      />
    ),
    b: <Card1 />,
    c: <Card />,
  };
  const l = {
    lg: [
      { i: "a", x: 0, y: 0, w: 2, h: 7 },
      { i: "b", x: 2, y: 0, w: 8.5, h: 7 },
      { i: "c", x: 0, y: 7, w: 10.5, h: 3 },
      { i: "d", x: 0, y: 0, w: 5, h: 6 },
    ],
  };

  const componentList = {
    a: <Card />,
    // a: <FeaturedInfo />,
    // b: <Weather />,
    // c: (
    //   <MediaCard
    //     title={"Kendra Sustain"}
    //     content="Kendra Sustain enables enterprises to embed data-driven Sustainability Decision-Making across business operations by providing enterprises with the tools to build a Circular Economy model through Data and Artificial Intelligence."
    //     img={require("../../Assets/Images/backgroundimg6.jpg")}
    //     style={{
    //       boxShadow: "none",
    //     }}
    //   />
    // ),
    d: <Intensity />,
    e: <IntensityLine />,
    f: user.id === 71 ? <Table /> : null,
    g: user.id === 71 ? <Table2 /> : null,
    ...NiukWigh,
    ...NIUKNew,
  };

  const [items, setItems] = useState(originalItems);
  // const [layouts, setLayouts] = useState(initialLayouts);
  const [layouts, setLayouts] = useState(l);
  const onLayoutChange = (_, allLayouts) => {
    setLayouts(allLayouts);
  };
  //   const onLayoutSave = () => {
  //     saveToLS('layouts', layouts)
  //   }
  const onRemoveItem = (itemId) => {
    setItems(items.filter((i) => i !== itemId));
  };
  //   const onAddItem = itemId => {
  //     setItems([...items, itemId])
  //   }
  return (
    <div>
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={52}
        width={1600}
        onLayoutChange={onLayoutChange}
      >
        {items.map((key) =>
          componentList[key] ? (
            <div key={key}>
              <Widget
                id={key}
                style={{
                  minHeight: "100%",
                }}
                onRemoveItem={onRemoveItem}
                backgroundColor="#867ae9"
                Item={componentList[key]}
              />
            </div>
          ) : null
        )}
      </ResponsiveGridLayout>
    </div>
  );
}

export default withSize({ refreshMode: "debounce", refreshRate: 60 })(
  Dashboard
);
