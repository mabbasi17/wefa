import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsappIcon from '@mui/icons-material/Whatsapp';
import YoutubeIcon from '@mui/icons-material/Youtube';
import EmailIcon from '@mui/icons-material/Email';
import Grid from '@mui/material/Grid';



function SocialBar() {
 

    return (
        <Grid container>
        <Box px={6}   display={'flex'} height={'50px'} sx={{borderTop: '2px solid #f00', position: 'sticky', top: 0, left: 0, width: '100vw'}} justifyContent={'space-between'} alignItems={'center'}>

            
               <Typography color={'#888'} variant='body2'>Call us! +49 221 880 64 80 | IBAN: DE10 3806 0186 6008 6880 18|info@wefa.org</Typography>
                <Box>
                    <FacebookIcon sx={{color: '#888'}} />
                    <InstagramIcon sx={{color: '#888'}}/>
                    <TwitterIcon sx={{color: '#888'}}/>
                    <WhatsappIcon sx={{color: '#888'}}/>
                    <YoutubeIcon sx={{color: '#888'}}/>
                    <EmailIcon sx={{color: '#888'}}/>
                </Box>
                </Box>
 </Grid>
    )
}

export default SocialBar
