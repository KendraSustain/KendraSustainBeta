import { Grid } from '@material-ui/core'
import { useState, useContext } from 'react'
import { CardChart, MTable } from '../../../Components'
import { Context } from '../../../Context'
import options from './Options.json'

export default function NIUK() {
  const { scopeOneData } = useContext(Context)
  const DataToMeShowed = { 'On-Road Vehicles': scopeOneData }
  const graphLabel = {
    Litres: 'Average Fuel Consumption - Year 2021',
    Odometer: 'Average Odometer Reading of Vehicles',
    Gross: 'Average Expenditure on Fuel',
    DistanceTraveled: 'Average Distance Covered',
  }

  const cardDetails = ['CO2 Emission', 'DistanceTraveled']
  const columns = [
    {
      field: 'sn',
      title: 'S No.',
    },
    {
      field: 'Vehicle Reg',
      title: 'Vehicle Reg',
    },
    // {
    //   field: 'Litres',
    //   title: 'Avg. Litres',
    //   render: (i) => Math.round(i['Litres'] * 100) / 100,
    // },
    // {
    //   field: 'Odometer',
    //   title: 'Avg. Odometer Reading',
    //   render: (i) => Math.round(i['Odometer'] * 100) / 100,
    // },
    // {
    //   field: 'DistanceTraveled',
    //   title: 'Avg. Distance Covered(km)',
    //   render: (i) => Math.round(i['DistanceTraveled'] * 100) / 100,
    // },
    // {
    //   field: 'Price/Litre',
    //   title: 'Avg. Price/Litre(£)',
    //   render: (i) => Math.round(i['Price/Litre'] * 100) / 100,
    // },
    // {
    //   field: 'CO2 Emission',
    //   title: 'Avg. Carbon Emission(kgCO2/KwH)',
    //   render: (i) => Math.round(i['CO2 Emission'] * 100) / 100,
    // },
    {
      field: 'Vehicle type',
      title: 'Vehicle type',
    },
    {
      field: 'Fuel type',
      title: 'Fuel type',
    },
    {
      field: 'Vehicle Reg Driver',
      title: 'Vehicle Reg Owner',
    },
    {
      field: 'Location',
      title: 'Location',
    },
  ]

  const [optionsSelected, setOptionsSelected] = useState(
    options[0].children[0].name,
  )

  return (
    <>
      <Grid container spacing={1}>
        <Grid
          item
          xs={12}
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            gap: 10,
            border: '1px solid rgba(0, 0, 0, 0.05)',
            borderRadius: 16,
            padding: 10,
          }}
        >
          {options.map((x, i) => (
            <div
              key={i}
              style={{
                flexGrow: 1,
                // borderRadius: 10,
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'center',
                gap: 20,
                // maxHeight: 160,
                // overflowY: 'scroll',
                // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                padding: 10,
              }}
            >
              <p
                style={{
                  width: '100%',
                  background: 'white',
                  // textAlign: 'center',
                  position: 'sticky',
                  top: 0,
                  zIndex: 2,
                  fontStyle: 'normal',
                  fontWeight: 800,
                  fontSize: 15,
                }}
              >
                {x.name}
              </p>
              {x.children.map((y, j) => (
                <div
                  style={{
                    display: 'flex',
                    // justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      height: 20,
                      width: 20,
                      backgroundColor:
                        optionsSelected === y.name ? '#2F3DA9' : '#DADADA',
                      borderRadius: 4,
                      cursor: 'pointer',
                      marginRight: 5,
                    }}
                    onClick={() => setOptionsSelected(y.name)}
                  ></div>
                  <p
                    style={{
                      fontFamily: 'Manrope',
                      fontStyle: 'normal',
                      fontWeight: 600,
                      fontSize: 14,
                      color: '#828282',
                    }}
                  >
                    {y.name}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </Grid>
        {/* <Grid item xs={12} style={{ textAlign: 'center', padding: '10px' }}>
          <h2>{optionsSelected}</h2>
        </Grid> */}
      </Grid>
      {DataToMeShowed[optionsSelected] ? (
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <MTable
              title={optionsSelected}
              columns={columns}
              tableData={DataToMeShowed[optionsSelected].map((d, p) => {
                return {
                  sn: p + 1,
                  // 'Vehicle Reg': d['Vehicle Reg'],
                  // ...d.Data[0],
                  ...d,
                }
              })}
            />
          </Grid>

          {cardDetails.map((data, pos) => (
            <Grid item xs={6} key={pos}>
              <CardChart
                x_items={DataToMeShowed[optionsSelected].map(
                  (item) => item['Vehicle Reg'],
                )}
                y_item={DataToMeShowed[optionsSelected].map(
                  (v) =>
                    v.Data.map((i) => i[data]).reduce((a, b) => a + b, 0) /
                    v.Data.length,
                )}
                type="bar"
                label={graphLabel[data] ? graphLabel[data] : data}
              />
            </Grid>
          ))}

          {/* {cardDetails.map((data, pos) => (
      <Grid item xs={6} key={pos}>
        <CardChart
          x_items={Data.map((item) => item["Vehicle Reg"])}
          y_item={Data.map(
            (v) =>
              v.Data.map((item) => item[data]).reduce(
                (a, b) => a + b,
                0
              ) / v.Data.length
          )}
          type="line"
          label={data}
        />
      </Grid>
    ))} */}
        </Grid>
      ) : (
        <Grid
          item
          xs={12}
          style={{
            textAlign: 'center',
            paddingTop: '20px',
          }}
        >
          No data to be displayed
        </Grid>
      )}
    </>
  )
}
