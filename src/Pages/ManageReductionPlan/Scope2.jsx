import React, { useContext, useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import { CardChart, TextCards } from '../../Components'
import { Context } from '../../Context'

const CarbonFootprintCalculator = () => {
  const { scopeTwoData, scopeTwoAsset } = useContext(Context)
  const [CE, setCE] = useState([])
  const [GC, setGC] = useState([])
  useEffect(() => {
    let temp = scopeTwoData.map((e) => e.map((i) => i['Carbon Emission']))
    temp = temp.flat()
    setCE(temp)
    temp = scopeTwoData.map((e) => e.map((i) => i['Energy Consumption']))
    temp = temp.flat()
    setGC(temp)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [select, setSelect] = useState(0)
  const content = [
    {
      title: 'Total Carbon Emission',
      data:
        Math.round(CE.reduce((a, b) => a + b, 0) * 100) / 100 + ' kgCO2/kwH',
    },
    {
      title: 'Max Carbon Emission',
      data: Math.round(Math.max(...CE) * 100) / 100 + ' kgCO2/kwH',
    },
    {
      title: 'Min Carbon Emission',
      data: Math.round(Math.min(...CE) * 100) / 100 + ' kgCO2/kwH',
    },
    {
      title: 'Avrage Carbon Emission',
      data:
        Math.round((CE.reduce((a, b) => a + b, 0) * 100) / CE.length) / 100 +
        ' kgCO2/kwH',
    },
  ]
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          gap: 20,
          paddingBottom: 10,
        }}
      >
        {scopeTwoAsset.map((x, i) => (
          <div
            key={i}
            style={{
              border: select === i ? '1px solid black' : '',
              padding: '10px 0',
              flexGrow: 1,
              textAlign: 'center',
              borderRadius: 10,
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              cursor: 'pointer',
            }}
            onClick={() => setSelect(i)}
          >
            <h5>{x.asset_type}</h5>
            <p>{x.asset_name}</p>
          </div>
        ))}
      </div>
      <TextCards cards={content} grid={4} />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <CardChart
            title={scopeTwoData[select].assetName}
            x_items={scopeTwoData[select].map((e) => e.Date)}
            type="line"
            showYear={true}
            y_item={scopeTwoData[select].map((e) => e['Carbon Emission'])}
            label={'Carbon Emission for ' + scopeTwoAsset[select].asset_type}
          />
        </Grid>

        <Grid item xs={12}>
          <CardChart
            title={scopeTwoAsset[select].assetName}
            x_items={scopeTwoData[select].map((e) => e.Date)}
            type="bar"
            showYear={true}
            y_item={scopeTwoData[select].map((e) => e['Carbon Emission'])}
            label={'Carbon Emission for ' + scopeTwoAsset[select].asset_type}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default CarbonFootprintCalculator
