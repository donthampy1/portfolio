import React from 'react'
import { Container,Paper,Typography,Grid,Box,IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';

function Projects() {
  return (
    <React.Fragment>
        

        <Container maxWidth='md' sx={{display:'flex',justifyContent:'center'}}>
          <Paper elevation={12} md={4} sx={{ padding:'2%',borderRadius:'10px'}}>
             <Typography sx={{ fontSize: '70px', textAlign: 'center',  }}>
               projects
             </Typography>
           </Paper>
      </Container>

      <Container maxWidth='md'sx={{marginTop:'30px'}}>
        <Grid container spacing={2}>


          <Grid item xs={12} md={6}
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
          
          >
            <Paper elevation={24} sx={{width: '100%', height: '250px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}
            
            
            
            
 >
              <Typography fontSize='25px' sx={{textAlign:'center', }}> 
                Kerala Tourism website
              </Typography>
              <Typography variant='body1'  sx={{textAlign:'center',margin:'4%'}}>
              built a multipage responsive Kerala Tourism Website and deployed it to github
              </Typography>
              

                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <IconButton   onClick={()=>window.location.href='https://donthampy1.github.io/main1/'}>
                  <GitHubIcon sx={{fontSize:'60px',color:'darkviolet',}} />
                </IconButton>
              </Box>



            </Paper>
          </Grid>

          <Grid item xs={12} md={6}
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
          
          >
            <Paper elevation={24} sx={{width: '100%', height: '250px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}
            
            
            
            
 >
              <Typography fontSize='25px' sx={{textAlign:'center', }}> 
                Login Page With Validation
              </Typography>
              <Typography variant='body1'  sx={{textAlign:'center',margin:'4%'}}>
              built a responsive login page with validation using javascript and deployed it to github
              </Typography>
              

                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <IconButton   onClick={()=>window.location.href='https://donthampy1.github.io/login-page-with-validation/'} >
                  <GitHubIcon sx={{fontSize:'60px',color:'darkviolet',}} />
                </IconButton>
              </Box>



            </Paper>
          </Grid>

          

          <Grid item xs={12} md={6}
          
          
          >
            <Paper elevation={24} sx={{width: '100%', height: '250px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}
            
            
            
            
 >
              <Typography fontSize='25px' sx={{textAlign:'center', }}> 
                passenger counter app
              </Typography>
              <Typography variant='body1'  sx={{textAlign:'center',margin:'4%'}}>
              built a passenger counter app and deployed it to github
              </Typography>
              

                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <IconButton onClick={()=>window.location.href='https://donthampy1.github.io/passenger-counter/'}>
                  <GitHubIcon sx={{fontSize:'60px',color:'darkviolet',}} />
                </IconButton>
              </Box>



            </Paper>
          </Grid>









        </Grid>







      </Container>




















    </React.Fragment>
  )
}

export default Projects