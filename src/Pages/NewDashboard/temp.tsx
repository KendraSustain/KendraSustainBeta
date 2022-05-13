// import React, { useContext, useEffect, useState } from 'react'
// import Lable from './Lable'
// import Grid from '@mui/material/Grid'
// import Total from './Total'
// import Card1 from './Card'
// import { Context } from '../../Context'
// import style from './index.module.scss'
// function Dashboard() {
//   const { scopeOneData, scopeTwoData, user } = useContext(Context)
//   const [Scope1Emission, setScope1Emission] = useState([])
//   const [Scope2Emission, setScope2Emission] = useState([])
//   const [Scope3Emission, setScope3Emission] = useState([])
//   useEffect(() => {
//     let temp = scopeOneData.flat()
//     temp = temp.map((e: any) => e.Data.map((i: any) => i['CO2 Emission']))
//     temp = temp.flat()
//     setScope1Emission(temp)
//     temp = scopeTwoData.flat()
//     temp = temp.map((e: any) => e['Carbon Emission'])
//     setScope2Emission(temp)
//     setScope3Emission([])
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])

//   return (
//     <>
//       <Grid container spacing={2}>
//         <Grid item xs={8}>
//           <div className={style.userInfo}>
//             <p>
//               Welcome Back <strong>{user.firstname} !</strong>
//             </p>
//             <div>
//               <i className="bx bxs-calendar"></i>
//               {new Date().toDateString()}
//             </div>
//           </div>
//         </Grid>
//         <Grid item xs={4}>
//           <div className={style.userProfile}></div>
//         </Grid>
//         <Grid item xs={8}>
//           <Lable
//             emission={
//               Math.round(
//                 (Scope1Emission.reduce((a, b) => a + b, 0) +
//                   Scope2Emission.reduce((a, b) => a + b, 0) +
//                   Scope3Emission.reduce((a, b) => a + b, 0)) *
//                   100,
//               ) / 100
//             }
//             scope1={Scope1Emission}
//             scope3={Scope3Emission}
//             scope2={Scope2Emission}
//           />
//         </Grid>
//         <Grid item xs={4}>
//           <Card1
//             scope={'Scope 1'}
//             emission={
//               Math.round(Scope1Emission.reduce((a, b) => a + b, 0) * 100) / 100
//             }
//             scope1={Scope1Emission}
//             scope3={Scope3Emission}
//             scope2={Scope2Emission}
//             parsantage={
//               Math.round(
//                 ((Scope1Emission.reduce((a, b) => a + b, 0) * 100) /
//                   (Scope1Emission.reduce((a, b) => a + b, 0) +
//                     Scope2Emission.reduce((a, b) => a + b, 0) +
//                     Scope3Emission.reduce((a, b) => a + b, 0))) *
//                   100,
//               ) / 100
//             }
//           />
//         </Grid>
//         <Grid item xs={4}>
//           <Card1
//             color={'#F5651F'}
//             scope={'Scope 2'}
//             emission={
//               Math.round(Scope2Emission.reduce((a, b) => a + b, 0) * 100) / 100
//             }
//             scope1={Scope1Emission}
//             scope3={Scope3Emission}
//             scope2={Scope2Emission}
//             parsantage={
//               Math.round(
//                 ((Scope2Emission.reduce((a, b) => a + b, 0) * 100) /
//                   (Scope1Emission.reduce((a, b) => a + b, 0) +
//                     Scope2Emission.reduce((a, b) => a + b, 0) +
//                     Scope3Emission.reduce((a, b) => a + b, 0))) *
//                   100,
//               ) / 100
//             }
//             description={
//               'Scope 2 emission includes the indirect GHG emissions associated with the purchase of electricity, steam, heat, or cooling.'
//             }
//           />
//         </Grid>
//         <Grid item xs={4}>
//           <Card1
//             color={'#01A14B'}
//             scope={'Scope 3'}
//             emission={
//               Math.round(Scope3Emission.reduce((a, b) => a + b, 0) * 100) / 100
//             }
//             scope1={Scope1Emission}
//             scope3={Scope3Emission}
//             scope2={Scope2Emission}
//             parsantage={
//               Math.round(
//                 ((Scope3Emission.reduce((a, b) => a + b, 0) * 100) /
//                   (Scope1Emission.reduce((a, b) => a + b, 0) +
//                     Scope2Emission.reduce((a, b) => a + b, 0) +
//                     Scope3Emission.reduce((a, b) => a + b, 0))) *
//                   100,
//               ) / 100
//             }
//             description={
//               'Scope 3 emission is the result of activities from assets not owned or controlled by the reporting organization'
//             }
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <Total
//             scope3={Scope3Emission}
//             scope1={scopeOneData}
//             scope2={scopeTwoData}
//           />
//         </Grid>
//       </Grid>
//     </>
//   )
// }

// export default Dashboard
import React from 'react'

export default function temp() {
  return <div>temp</div>
}
