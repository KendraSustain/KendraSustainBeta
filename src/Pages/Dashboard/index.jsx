import React, { useEffect, useState } from 'react'
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout'
import { withSize } from 'react-sizeme'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import { Intensity, IntensityLine, Widget } from '../../Components'
import FeaturedInfo from '../../Components/FeaturedInfo'
import Scope21Graph from './Scope21Graph'
import Scope22Graph from './Scope22Graph'
import Compare from './Compare'
import Card from './Card'
import Summary from './Summary'
import DoghnutCom from './DoghnutCom'
const originalItems = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
]

const initialLayouts = {
  lg: [
    { i: 'a', x: 0, y: 0, w: 12, h: 3 },
    { i: 'b', x: 0, y: 3, w: 12, h: 8 },
    { i: 'c', x: 0, y: 3, w: 12, h: 6 },
    { i: 'd', x: 0, y: 11, w: 6, h: 8 },
    { i: 'e', x: 6, y: 11, w: 6, h: 8 },
    { i: 'f', x: 0, y: 18, w: 6, h: 8 },
    { i: 'g', x: 6, y: 18, w: 6, h: 8 },
    { i: 'h', x: 0, y: 27, w: 6, h: 8 },
    { i: 'i', x: 6, y: 27, w: 6, h: 8 },
    { i: 'j', x: 0, y: 35, w: 6, h: 8 },
    { i: 'k', x: 6, y: 35, w: 6, h: 8 },
    { i: 'l', x: 0, y: 43, w: 6, h: 8 },
    { i: 'm', x: 6, y: 43, w: 6, h: 8 },
    { i: 'n', x: 0, y: 51, w: 6, h: 8 },
    { i: 'o', x: 6, y: 51, w: 6, h: 8 },
  ],
}

export function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user'))
  // alert(user.id)
  function getFromLS(key) {
    let ls = {}
    if (global.localStorage) {
      try {
        ls = JSON.parse(global.localStorage.getItem('rgl-8')) || {}
      } catch (e) {}
    }
    return ls[key]
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
    h: user.id === 71 ? <Compare /> : null,
    // i: <Scope12Graph />,
    i: user.id === 71 ? <Summary /> : null,
    // j: user.id === 71 ? <Scope11Table /> : null,
    // k: user.id === 71 ? <Scope12Table /> : null,
    l: user.id === 71 ? <Scope21Graph /> : null,
    m: user.id === 71 ? <Scope22Graph /> : null,
    // n: <Scope21Table />,
    // o: <Scope22Table />,
  }
  const NIUKNew = {
    // b: <Card1 />,
  }
  const l = {
    lg: [
      { i: 'a', x: 0, y: 0, w: 2, h: 7 },
      { i: 'b', x: 2, y: 0, w: 12, h: 7 },
      { i: 'c', x: 0, y: 7, w: 12, h: 3 },
      { i: 'd', x: 0, y: 0, w: 6, h: 6 },
    ],
  }

  const componentList = {
    a: user.id === 71 ? <Card /> : <FeaturedInfo />,
    // b: (
    //   <MediaCard
    //     title={"Kendra Sustain"}
    //     content="Kendra Sustain enables enterprises to embed data-driven Sustainability Decision-Making across business operations by providing enterprises with the tools to build a Circular Economy model through Data and Artificial Intelligence."
    //     img={require("../../Assets/Images/backgroundimg6.jpg")}
    //     style={{
    //       boxShadow: "none",
    //     }}
    //   />
    // ),
    c: user.id === 71 ? <DoghnutCom /> : null,
    d: user.id === 71 ? null : <Intensity />,
    e: user.id === 71 ? null : <IntensityLine />,
    // f: user.id === 71 ? <Table /> : null,
    // g: user.id === 71 ? <Table2 /> : null,
    ...NiukWigh,
    ...NIUKNew,
  }
  useEffect(() => {}, [])

  const [items, setItems] = useState(originalItems)
  // const [layouts, setLayouts] = useState(initialLayouts);
  const [layouts, setLayouts] = useState(initialLayouts)
  const onLayoutChange = (_, allLayouts) => {
    setLayouts(allLayouts)
  }
  //   const onLayoutSave = () => {
  //     saveToLS('layouts', layouts)
  //   }
  const onRemoveItem = (itemId) => {
    setItems(items.filter((i) => i !== itemId))
  }
  //   const onAddItem = itemId => {
  //     setItems([...items, itemId])
  //   }
  return (
    <div>
      <div
        style={{ fontSize: '25px', fontWeight: 'bold', textAlign: 'center' }}
      >
        {' '}
        Dashboard: {user.company}
      </div>
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 12, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={52}
        width={1420}
        onLayoutChange={onLayoutChange}
      >
        {items.map((key) =>
          componentList[key] ? (
            <div key={key}>
              <Widget
                id={key}
                style={{
                  minHeight: '100%',
                }}
                onRemoveItem={onRemoveItem}
                backgroundColor="#867ae9"
                Item={componentList[key]}
              />
            </div>
          ) : null,
        )}
      </ResponsiveGridLayout>
    </div>
  )
}

export default withSize({ refreshMode: 'debounce', refreshRate: 60 })(Dashboard)
