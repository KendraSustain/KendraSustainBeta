import React from 'react'
import { Progress } from 'antd'

const App: React.FC = () => (
  <>
    <Progress
      // type="circle"
      width={1000}
      strokeColor={{
        '43%': 'rgba(161,81,168,1)',
        '100%': ' rgba(161,81,168,0)',
      }}
      percent={100}
    />
  </>
)

export default App
