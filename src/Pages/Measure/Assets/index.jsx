import * as React from 'react'
import Scope1Com from './Scope1'
import Scope2Com from './Scope2'
import Scope3Com from './Scope3'
import { Appbar } from '../../../Components'
import NIUK from './NIUK'
import { Context } from '../../../Context'

export default function Asset() {
  const { user } = React.useContext(Context)

  return (
    <div>
      <div
        style={{
          height: '50px',
          color: 'black',
          fontSize: '30px',
          fontWeight: 'bold',
        }}
      >
        Assets {'>'}{' '}
        <span
          style={{
            fontSize: 15,
            color: '#9D9D9D',
          }}
        >
          Measure
        </span>
      </div>
      <Appbar
        components={
          user.id === 66
            ? [<Scope1Com />, <Scope2Com />, <Scope3Com />]
            : user.id === 71
            ? [<NIUK />, <Scope2Com />]
            : []
        }
        labels={
          user.id === 66
            ? [<>Scope 1</>, <>Scope 2</>, <>Scope 3</>]
            : user.id === 71
            ? [<>Scope 1</>, <>Scope 2</>]
            : []
        }
      />
    </div>
  )
}
