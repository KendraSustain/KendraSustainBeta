// import React from 'react'
// import { nodes } from './Data'
// import Xarrow, { Xwrapper } from 'react-xarrows'

// const boxStyle = {
//   border: 'grey solid 2px',
//   borderRadius: '10px',
//   padding: '5px',
// }
// interface Node {
//   title: string
//   children?: Node[]
// }

// interface PropType {
//   item?: Node
//   isRoot: boolean
// }
// const RenderTree: React.FC<PropType> = ({ item, isRoot }) => {
//   if (!item) return <></>
//   return (
//     <Xwrapper>
//       <div
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: !isRoot ? 'flex-start' : 'center',
//           alignItems: !isRoot ? 'flex-start' : 'center',
//           padding: 10,
//         }}
//       >
//         <div
//           style={{
//             width: '200px',
//             minHeight: '50px',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             textAlign: 'center',
//             fontSize: 12,
//             borderRadius: 20,
//             padding: 10,
//             border: '2px solid',
//             borderColor: 'blue',
//             // marginLeft: 100,
//             // background: isRoot ? 'red' : '',
//           }}
//           id={item.title}
//         >
//           {item.title}
//         </div>
//         <div
//           style={{
//             display: 'flex',
//             flexDirection: !isRoot ? 'column' : 'row',
//             marginLeft: 80,
//           }}
//         >
//           {item.children?.map((x, i) => (
//             <RenderTree item={x} key={i} isRoot={false} />
//           ))}
//           {/* {item.children?.map((x, i) => (
//             <Xarrow start={item.title} end={x.title} />
//           ))} */}
//         </div>
//       </div>
//     </Xwrapper>
//   )
// }

// export default function Tree() {
//   return (
//     <div
//       style={{
//         display: 'inline',
//       }}
//     >
//       {nodes.map((x, i) => (
//         <RenderTree item={x} key={i} isRoot={true} />
//       ))}
//     </div>
//   )
// }

import React from 'react'

export default function Tree() {
  return <div>Tree</div>
}
