import React, { useContext, useEffect } from 'react'
import Scope1Com from './Scope1'
import Scope2Com from './Scope2'
import Scope3Com from './Scope3'
import { Appbar } from '../../../Components'
import NIUK from './NIUK'
import { Context } from '../../../Context'

export default function Asset() {
  const { user, setHeadText } = React.useContext(Context)
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
          Measure
        </span>
      </p>,
    )
  }, [])

  return (
    <div>
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
