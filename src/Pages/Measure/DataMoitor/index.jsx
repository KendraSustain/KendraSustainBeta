import { useEffect, useContext } from 'react'
import { Appbar } from '../../../Components'
import Scope1Com from './Scope1'
import Scope2Com from './Scope2'
import Scope3Com from './Scope3'
import CloudCarbon from './Scope3CloudCal'
import NIUK from './NIUK'
import { Context } from '../../../Context'

export default function DataMonitor() {
  const { user } = useContext(Context)

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
        Data Monitor {'>'}{' '}
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
            ? [<Scope1Com />, <Scope2Com />, <Scope3Com />, <CloudCarbon />]
            : user.id === 71
            ? [<NIUK />, <Scope2Com />, <CloudCarbon />]
            : []
        }
        labels={[<>Scope 1</>, <>Scope 2</>, <>Scope 3</>]}
      />
    </div>
  )
}
