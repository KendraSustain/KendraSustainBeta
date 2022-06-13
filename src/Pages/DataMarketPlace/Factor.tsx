import React, { useContext, useEffect } from 'react'
import ReactECharts from 'echarts-for-react'
import { nodes } from './Data'
import Tree from './Tree'
import { Context } from 'Context'

const options = {
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove',
  },

  series: [
    {
      type: 'tree',
      name: 'tree1',
      data: nodes,
      initialTreeDepth: 3,
      width: 1000,
      // top: '5%',
      // left: '40%',
      // bottom: '2%',
      // right: '100%',
      symbolSize: 15,
      // edgeShape: 'polyline',
      label: {
        position: 'left',
        verticalAlign: 'middle',
        align: 'right',
      },
      leaves: {
        label: {
          position: 'right',
          verticalAlign: 'middle',
          align: 'left',
        },
      },
      emphasis: {
        focus: 'descendant',
      },
      expandAndCollapse: true,
      animationDuration: 550,
      animationDurationUpdate: 750,
    },
  ],
}

export default function FactorTree() {
  // const [name, setName] = useState("");

  // TODO: remove flashing of Echarts component somehow when clicking on Node
  // TODO: performance optimization => only include needed comps
  const { setHeadText } = useContext(Context)
  useEffect(() => {
    setHeadText(
      <p
        style={{
          fontFamily: 'Manrope',
          fontWeight: 700,
          fontSize: 22,
        }}
      >
        Emission Factor /{' '}
        <span
          style={{
            color: '#808080',
            fontFamily: 'Manrope',
          }}
        >
          Data Marketplace
        </span>
      </p>,
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {/* <ReactECharts
        style={{
          height: '100vh',
          width: '100%',
          position: 'relative',
          // left: 40,
          // maxWidth: 1000,
        }}
        option={options}
      /> */}
      <Tree />
    </>
  )
}
/* <Grid
  container
  style={{
    flexGrow: 1,
  }}
  spacing={2}
>
  <Grid
    item
    style={{
      flexGrow: 1,
      minWidth: 350,
    }}
  >
    <Box
      style={{
        backgroundColor: 'var(--white)',
        padding: '10px 0',
        borderRadius: 5,
      }}
    >
      <TreeCheckBox setCheckedItems={setChecked} />
    </Box>
  </Grid>
  <Grid item xs={8}>
    <Tree />
  </Grid>
</Grid> */
