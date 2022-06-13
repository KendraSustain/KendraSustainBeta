import { useEffect, useContext } from 'react'
import { Appbar } from '../../../Components'
import Scope1Com from './Scope1'
import Scope2Com from './Scope2'
import Scope3Com from './Scope3'
import CloudCarbon from './Scope3CloudCal'
import NIUK from './NIUK'
import { Context } from '../../../Context'

export default function DataMonitor() {
  const { user, setHeadText } = useContext(Context)
  useEffect(() => {
    setHeadText(
      <p
        style={{
          fontFamily: 'Manrope',
          fontWeight: 700,
          fontSize: 22,
        }}
      >
        Assets /{' '}
        <span
          style={{
            color: '#808080',
            fontFamily: 'Manrope',
          }}
        >
          Data Monitor
        </span>
      </p>,
    )

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
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
