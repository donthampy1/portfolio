import React from 'react'
import { Box, Button, Card, Container,Grid,Paper,TextField,Typography } from '@mui/material'

function Contact() {
  return (
    <React.Fragment>

       <Container maxWidth='md' sx={{display:'flex',justifyContent:'center', marginTop:'4vh',marginBottom:'4vh'}}>
          <Paper elevation={12} md={4} sx={{ padding:'2%',borderRadius:'10px'}}>
             <Typography sx={{ fontSize: '70px', textAlign: 'center',  }}>
               contact
             </Typography>
           </Paper>
      </Container >
      <Container maxWidth="md"  >
      <Card elevation={12} sx={{padding:'7%',marginBottom:'20%',paddingTop:'10%',display:'flex',flexDirection:'column',justifyContent:'flex-start',alignitems:"center",color:'darkviolet'}}>




      <Grid container   xs={12}  md={6}>
        
        <TextField fullWidth   label="name" id="fullWidth" variant='outlined' color="secondary"  sx={{marginBottom:'20px',
              '& .MuiInputBase-input:focus': {
                color: 'darkviolet', 
              },
            }} />
            </Grid>
            

   
            <Grid container   xs={12}  md={12}>
        
        <TextField fullWidth   label="email" id="fullWidth" variant='outlined' color="secondary"  sx={{marginBottom:'20px',
              '& .MuiInputBase-input:focus': {
                color: 'darkviolet', 
              },
            }} />
            </Grid>


<TextField fullWidth   label="subject" id="fullWidth" multiline rows={5} variant='outlined' color="secondary"  sx={{marginBottom:'20px',
              '& .MuiInputBase-input:focus': {
                color: 'darkviolet', 
              },
            }} />


            <Box >
            <Button  fullWidth variant="contained" color="primary" sx={{ backgroundColor: 'darkviolet', color: 'white', padding: '10px 20px', fontSize: '16px',
          '&:hover': {backgroundColor:'darkviolet',}}}>
  Submit
</Button>
</Box>



          

   


        



      </Card>
      </Container>


      








    </React.Fragment>
  )
}

export default Contact