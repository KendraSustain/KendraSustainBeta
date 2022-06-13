import { Round } from 'Helper'
import React from 'react'
import ProgressBar from 'react-customizable-progressbar'
import style from './ScopeEmissions.module.scss'
interface PropType {
  scopeOne: number[]
  scopeTwo: number[]
  scopeThree: number[]
}
const ScopeEmissions: React.FC<PropType> = ({
  scopeOne = [],
  scopeTwo = [],
  scopeThree = [],
}) => {
  const scope1 = Round(scopeOne.reduce((a, b) => a + b, 0))
  const scope2 = Round(scopeTwo.reduce((a, b) => a + b, 0))
  const scope3 = Round(scopeThree.reduce((a, b) => a + b, 0))
  const total = Round(scope1 + scope2 + scope3)
  const data = [
    {
      color: '#6956E5',
      tag: 'Scope 1',
      data: scope1,
    },
    {
      color: '#FB896B',
      tag: 'Scope 2',
      data: scope2,
    },
    {
      color: '#F8C07F',
      tag: 'Scope 3',
      data: scope3,
    },
  ]
  return (
    <div className={style.container}>
      <div className={style.left}>
        <p
          style={{
            fontSize: 18,
            fontWeight: '700',
            // lineHeight: 40,
          }}
        >
          Scopes Emissions
        </p>
        <div className={style.list}>
          {data.map((x, i) => (
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    backgroundColor: x.color,
                    aspectRatio: '1 / 1',
                    width: 10,
                    marginRight: 8,
                    borderRadius: '50%',
                  }}
                ></div>
                <p>{x.tag}</p>
              </div>
              <p
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  marginTop: 10,
                  color: x.color,
                  letterSpacing: 2,
                }}
              >
                {x.data} kgCO2/KwH
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className={style.right}>
        <ProgressBar
          progress={(scope3 / total) * 100}
          radius={120}
          pointerStrokeWidth={6}
          trackStrokeWidth={0}
          strokeWidth={5}
          pointerRadius={2}
          strokeColor={'#F8C07F'}
          pointerStrokeColor={'#F8C07F'}
          // rotate={360}
        >
          <ProgressBar
            progress={(scope2 / total) * 100}
            radius={90}
            pointerStrokeWidth={6}
            trackStrokeWidth={0}
            strokeWidth={5}
            pointerRadius={2}
            strokeColor={'#FB896B'}
            pointerStrokeColor={'#FB896B'}
            className={style.progress}
            // rotate={270}
          >
            <ProgressBar
              progress={(scope1 / total) * 100}
              radius={60}
              pointerStrokeWidth={6}
              trackStrokeWidth={0}
              strokeWidth={5}
              pointerRadius={2}
              strokeColor={'#6956E5'}
              pointerStrokeColor={'#6956E5'}
              className={style.progress}
              // rotate={-180}
            >
              <div className={[style.circle, style.progress].join(' ')}></div>
            </ProgressBar>
          </ProgressBar>
        </ProgressBar>
      </div>
    </div>
  )
}

export default ScopeEmissions
