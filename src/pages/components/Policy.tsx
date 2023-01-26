import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'


function Policy() {
    const [accepted ,setAccepted]=useState(false)
console.log(accepted)
    return (
        !accepted ? <Box  display={'flex'} height={'70px'} sx={{ position: 'fixed', bottom: 0, left: 0, width: '100%', background: '#333' }}>

                  <Box display={'flex'} p={4} width={'100%'}  justifyContent={'space-between'} alignItems={'center'}>
            <Typography variant='body1' color='#666' sx={{fontSize: '12px'}}>Our website uses cookies to provide you with the best service. Some of the cookies used are for the functionality of our website, and some are used to improve our services by analyzing your experience.</Typography>
                <Button variant='contained'  color='error' size='large' onClick={()=>setAccepted(true)}>I Accept</Button>
                </Box>
        </Box>
  : <></>
    )

}

export default Policy
