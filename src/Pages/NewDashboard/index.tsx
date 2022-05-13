import React, { useContext, useEffect, useState } from 'react'
import Lable from './Lable'
import Total from './Total'
import Card from './Card'
import { Context } from '../../Context'
import style from './index.module.scss'
import { Info, Weather } from '../../Components'
import UserProfile from './UserProfile'
import up from './up.svg'
export default function Dashboard() {
  const { scopeOneData, scopeTwoData, user } = useContext(Context)
  const [Scope1Emission, setScope1Emission] = useState<number[]>([])
  const [Scope2Emission, setScope2Emission] = useState<number[]>([])
  const [Scope3Emission, setScope3Emission] = useState<number[]>([])
  const scope1 =
    Math.round(100 * Scope1Emission.reduce((a, b) => a + b, 0)) / 100
  const scope2 =
    Math.round(100 * Scope2Emission.reduce((a, b) => a + b, 0)) / 100
  const scope3 =
    Math.round(100 * Scope3Emission.reduce((a, b) => a + b, 0)) / 100

  const totalEmission = scope1 + scope2 + scope3
  useEffect(() => {
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
          className={style.userInfo}
          style={{
            gridColumn: '1 / span 2',
            gridRow: 1,
            boxShadow: 'none',
          }}
        >
          <p>
            Welcome back <strong>{user.firstname} !</strong>
          </p>
        </div>
        <div
          style={{
            gridColumn: 3,
            gridRow: '1 / span 2',
            boxShadow: 'none',
          }}
        >
          <UserProfile />
        </div>

        <Weather />
        <div
          className={style.gridBox}
          style={{
            display: 'flex',
            paddingLeft: 30,
            flexDirection: 'column',
          }}
        >
          <h3
            style={{
              color: '#808080',
            }}
          >
            Todays Stats
          </h3>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingRight: 20,
            }}
          >
            <p>
              TODAY CARBON EMISSIONS
              <br />
              <b>14,102 kgCO2/KwH</b>
            </p>
            <img src={up} alt="" width={100} />
          </div>
        </div>
        <div
          style={{
            gridRow: 3,
            gridColumn: '1 / span 2',
          }}
        >
          <Lable
            emission={totalEmission}
            scope1={Scope1Emission}
            scope3={Scope3Emission}
            scope2={Scope2Emission}
          />
        </div>

        <Card
          scope={1}
          emission={scope1}
          percentage={Math.round((scope1 / totalEmission) * 100 * 100) / 100}
          color={'#FBBC05'}
          description={
            'emissions includes the direct GHG that occur from sources that are controlled or owned by an organization.'
          }
        />

        <Card
          scope={2}
          emission={scope2}
          percentage={Math.round((scope2 / totalEmission) * 100 * 100) / 100}
          color={'#00B0FF'}
          description={
            'emissions includes the indirect GHG emissions associated with the purchase of electricity, steam, heat, or cooling.'
          }
        />
        <Card
          scope={3}
          emission={scope3}
          percentage={Math.round((scope3 / totalEmission) * 100 * 100) / 100}
          color={'#35DC94'}
          description={
            'emission is the result of activities from assets not owned or controlled by the reporting organization'
          }
        />
        <div
          style={{
            // gridRow: 3,
            gridColumn: '1 / span 3',
          }}
        >
          <Total
            scope1={scopeOneData}
            scope3={Scope3Emission}
            scope2={scopeTwoData}
          />
        </div>
      </div>
    </>
  )
}

// {false && (
//   <div className={style.gridContainer}>
//     <div
//       className={style.gridItem}
//       style={{
//         gridColumn: '1 / span 2',
//         gridRow: 1,
//       }}
//     >
//       1
//     </div>
//     <div
//       className={style.gridItem}
//       style={{
//         gridColumn: 3,
//         gridRow: '1 / span 2',
//       }}
//     >
//       2
//     </div>
//     <div className={style.gridItem}>3</div>
//     <div className={style.gridItem}>4</div>
//     <div
//       className={style.gridItem}
//       style={{
//         gridColumn: '1 / span 3',
//         gridRow: 3,
//       }}
//     >
//       5
//     </div>
//   </div>
// )}
