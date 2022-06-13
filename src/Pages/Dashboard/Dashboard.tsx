import {
  CEGraph,
  ScopeEmissions,
  Topbar,
  TotalCE,
  StatsRate,
  Tour,
  Forcast,
  AssetBreackDown,
} from 'Components'
import { Context } from 'Context'
import React, { useContext, useEffect, useState } from 'react'
import style from './Dashboard.module.scss'
export default function Dashboard() {
  const {
    scopeOneData,
    scopeTwoData,
    scopeTwoAsset,
    scopeThreeData,
    user,
    setHeadText,
  } = useContext(Context)
  const [Scope1Emission, setScope1Emission] = useState<number[]>([])
  const [Scope2Emission, setScope2Emission] = useState<number[]>([])
  const [Scope3Emission, setScope3Emission] = useState<number[]>([])
  const getGreet = () => {
    const date = new Date()
    let curHr = date.getHours()

    if (curHr < 12) return 'Good Morning'
    if (curHr < 17) return 'Good Afternoon'
    return 'Good Evening'
  }

  useEffect(() => {
    setHeadText(
      <>
        <p>
          <strong>
            {getGreet()} {user.firstname}
          </strong>
        </p>

        <p>Hope you have a good day</p>
      </>,
    )
    let temp = scopeOneData.flat()
    temp = temp.map((e: any) => e.Data.map((i: any) => i['CO2 Emission']))
    temp = temp.flat()
    setScope1Emission(temp)
    temp = scopeTwoData.flat()
    temp = temp.map((e: any) => e['Carbon Emission'])
    setScope2Emission(temp)
    setScope3Emission([])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className={style.gridContainer}>
        <div
          style={{
            gridColumn: 'span 3',
            gridRow: 'span 3',
          }}
        >
          <TotalCE
            scopeOneData={Scope1Emission}
            scopeTwoData={Scope2Emission}
            scopeThreeData={Scope3Emission}
          />
        </div>
        <div
          style={{
            gridColumn: 'span 6',
            gridRow: 'span 3',
          }}
        >
          <ScopeEmissions
            scopeOne={Scope1Emission}
            scopeTwo={Scope2Emission}
            scopeThree={Scope3Emission}
          />
        </div>
        <div
          style={{
            gridColumn: 'span 3',
            gridRow: 'span 1',
          }}
        >
          <StatsRate />
        </div>
        <div
          style={{
            gridColumn: 'span 3',
            gridRow: 'span 2',
          }}
        >
          <AssetBreackDown />
        </div>

        <div
          style={{
            gridColumn: 'span 9',
            gridRow: 'span 4',
          }}
        >
          <CEGraph
            scope1={scopeOneData}
            scope2={scopeTwoData}
            scope3={scopeThreeData}
          />
        </div>
        <div
          style={{
            gridColumn: 'span 3',
            gridRow: 'span 3',
          }}
        >
          <Forcast />
        </div>
        <div
          style={{
            gridColumn: 'span 3',
            gridRow: 'span 1',
          }}
        >
          <Tour />
        </div>
      </div>
    </>
  )
}
