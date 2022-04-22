import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import useStyle from './btnStyle'

import Box from '@mui/material/Box'
import { ButtonGroup } from '@mui/material'
import { Button } from '@material-ui/core'
const CloudCarbon = () => {
    const classess = useStyle()
    const btn = [
        'Cloud Footprint',
        'Purchased Goods and Services',
        'Capital Goods',
        'Fuel & Energy Activities',
        'Upstream Transportation And Distribution',
        'Waste Genrated in Operations',
        'Business Travel',
        'Employee Commuting',
        'Upstream Leased Assets',
        'Downstream Transportatio and Distribution',
        'Processing of Sold Products',
        'Use of Sold Products',
        'End-of-life Treatment of Sold Products',
        'Downstream Leased Assets',
        'Franchises',
        'Investments',
    ]
    const [select, setSelect] = useState(0)
    return (
        <div>
            <Box>
                <ButtonGroup
                    sx={{
                        height: '100%',
                    }}
                    className={classess.buttonGroup}
                >
                    {btn.map((item, pos) => (
                        <Button
                            key={pos}
                            variant={select === pos ? 'contained' : 'outlined'}
                            color={select === pos ? 'primary' : 'default'}
                            className={classess.button}
                            onClick={() => setSelect(pos)}
                        >
                            {item}
                        </Button>
                    ))}
                </ButtonGroup>
            </Box>

            <iframe
                src="http://18.185.48.92:3000/"
                height="1000"
                width="100%"
                title="Cloud Carbon"
            />
        </div>
    )
}

export default CloudCarbon