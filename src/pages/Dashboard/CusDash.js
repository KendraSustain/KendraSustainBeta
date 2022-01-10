import styles from "./Dash.module.css";
import { useContext, useEffect } from "react";
import React, { useState } from "react";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import { withSize } from "react-sizeme";
import TopBar from "../../components/Dash/CustomDash/TopBar";
import Widget from "../../components/Dash/CustomDash/Widget";
import { Context } from "../../context/Contexts";
import KendraBlogCard from "../../components/Dash/KendraBlogCard/KendraBlogCard";
import Weather from "../../components/Dash/Weather/Weather";
import FeaturedInfo from "../../components/Dash/featuredInfo/FeaturedInfo";
import Intensity from "../../components/Dash/CustomComponent/Intensity";
// import BarCharts from "../../components/Graphs/BarCharts";


// import RealTime from "../AI Models/Prediction Model/RealTime";
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import IntensityLine from "../../components/Dash/CustomComponent/IntensityLine";
// import { width } from "@mui/system";

const originalItems = ["a", "b", "c", "d", "e"];

const initialLayouts = {
    lg: [
        { i: "a", x: 0, y: 0, w: 10, h: 3 },
        { i: "b", x: 3, y: 3, w: 7, h: 8 },
        { i: "c", x: 0, y: 3, w: 3, h: 8 },
        { i: "d", x: 0, y: 11, w: 5, h: 8 },
        { i: "e", x: 5, y: 11, w: 5, h: 8 }
    ]
};



export function CusDash() {

    function getFromLS(key) {
        let ls = {};
        if (global.localStorage) {
            try {
                ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
            } catch (e) { }
        }
        return ls[key];
    }

    function saveToLS(key, value) {
        if (global.localStorage) {
            global.localStorage.setItem(
                "rgl-8",
                JSON.stringify({
                    [key]: value
                })
            );
        }
    }

    const context = useContext(Context);

    useEffect(() => {

        context.setShowNavTop(true);
    }, []);

    const componentList = {
        a: FeaturedInfo,
        b: Weather,
        c: KendraBlogCard,
        d: Intensity,
        e: IntensityLine
        // d: <BarCharts labels={localDate} data={intensity} title="Carbon Intensity for UK" label="Carbon Intensity" time="Time" />,

    };


    const [items, setItems] = useState(originalItems);
    const [layouts, setLayouts] = useState(
        getFromLS("layouts") || initialLayouts
    );
    const onLayoutChange = (_, allLayouts) => {
        setLayouts(allLayouts);
    };
    const onLayoutSave = () => {
        saveToLS("layouts", layouts);
    };
    const onRemoveItem = (itemId) => {
        setItems(items.filter((i) => i !== itemId));
    };
    const onAddItem = (itemId) => {
        setItems([...items, itemId]);
    };
    return (
        <div className={[styles.home, context.close ? styles.close : ""].join(" ")}>
            <TopBar
                onLayoutSave={onLayoutSave}
                items={items}
                onRemoveItem={onRemoveItem}
                onAddItem={onAddItem}
                originalItems={originalItems}
            />
            <ResponsiveGridLayout
                className="layout"
                layouts={layouts}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                rowHeight={60}
                width="1600"
                onLayoutChange={onLayoutChange}
            >
                {items.map((key) => (
                    <div
                        key={key}
                        className="widget"
                        data-grid={{ w: 3, h: 2, x: 0, y: Infinity }}
                    >
                        <Widget
                            id={key}
                            onRemoveItem={onRemoveItem}
                            backgroundColor="#867ae9"
                            component={componentList[key]}
                        />
                    </div>
                ))}
            </ResponsiveGridLayout>

        </div>
    );
}

export default withSize({ refreshMode: "debounce", refreshRate: 60 })(CusDash);

// export const withSize({ refreshMode: "debounce", refreshRate: 60 })(CusDash);

// function getFromLS(key) {
//     let ls = {};
//     if (global.localStorage) {
//         try {
//             ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
//         } catch (e) { }
//     }
//     return ls[key];
// }

// function saveToLS(key, value) {
//     if (global.localStorage) {
//         global.localStorage.setItem(
//             "rgl-8",
//             JSON.stringify({
//                 [key]: value
//             })
//         );
//     }
// }
