import React, { useState } from 'react'
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout'
import { withSize } from 'react-sizeme'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import {
  Intensity,
  IntensityLine,
  MediaCard,
  Weather,
  Widget
} from '../../Components'
import FeaturedInfo from '../../Components/FeaturedInfo'
const originalItems = ['a', 'b', 'c', 'd', 'e']

const initialLayouts = {
  lg: [
    { i: 'a', x: 0, y: 0, w: 10, h: 3 },
    { i: 'b', x: 3, y: 3, w: 7, h: 8 },
    { i: 'c', x: 0, y: 3, w: 3, h: 8 },
    { i: 'd', x: 0, y: 11, w: 5, h: 8 },
    { i: 'e', x: 5, y: 11, w: 5, h: 8 }
  ]
}

export function Dashboard () {
  function getFromLS (key) {
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

  const componentList = {
    a: FeaturedInfo,
    b: Weather,
    c: MediaCard,
    d: Intensity,
    e: IntensityLine
  }

  const [items, setItems] = useState(originalItems)
  const [layouts, setLayouts] = useState(getFromLS('layouts') || initialLayouts)
  const onLayoutChange = (_, allLayouts) => {
    setLayouts(allLayouts)
  }
  //   const onLayoutSave = () => {
  //     saveToLS('layouts', layouts)
  //   }
  const onRemoveItem = itemId => {
    setItems(items.filter(i => i !== itemId))
  }
  //   const onAddItem = itemId => {
  //     setItems([...items, itemId])
  //   }
  return (
    <div>
      <ResponsiveGridLayout
        className='layout'
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={50}
        width={1600}
        onLayoutChange={onLayoutChange}
      >
        {items.map(key => (
          <div key={key} data-grid={{ w: 3, h: 2, x: 0, y: Infinity }}>
            <Widget
              id={key}
              onRemoveItem={onRemoveItem}
              backgroundColor='#867ae9'
              Item={componentList[key]}
            />
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  )
}

export default withSize({ refreshMode: 'debounce', refreshRate: 60 })(Dashboard)
