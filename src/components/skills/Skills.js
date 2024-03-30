import { Grid, Typography,Paper, Container, Box } from '@mui/material'
import React from 'react'
import Html from '../../assets/HTML.png'
import CSS from '../../assets/CSS.png'
import JAVASCRIPT from '../../assets/JAVASCRIPT.png'
import REACT from '../../assets/REACT.png'
import EXPRESS from '../../assets/express.png'
import MONGO from '../../assets/mongodb.png'
import GIT from '../../assets/git.png'
import boot from '../../assets/bootstrap.png'
import node from '../../assets/NOSE.png'


function Skills() {
  return (
    <>
    <Container maxWidth='md' sx={{display:'flex',justifyContent:'center'}}>
    <Paper elevation={12} md={4} sx={{ padding:'2%',borderRadius:'10px'}}>
    <Typography sx={{ fontSize: '70px', textAlign: 'center',  }}>
          skills
    </Typography>
      </Paper>
      </Container>
      <>
      <Container   
      maxWidth='md'
      >
              <Grid container   
                    spacing={0} 
                    rowSpacing={0}  
                    sx={{marginTop:'30px'}}          
              >

<Grid item xs={6} md={4}
                
                
                >
                  <Paper elevation={12}    sx={{
                                    margin:'20px',
                                     }}>
                      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                        <img src={Html}  style={{
                                          maxWidth: `100%`, 
                                          maxHeight: '250px', 
                                          objectFit: 'contain', 
                                          }}/>
                       </Box>
                  </Paper>
                  </Grid>

               

                  <Grid item xs={6} md={4}
                
                
                >
                  <Paper elevation={12}    sx={{
                                    margin:'20px',
                                     }}>
                      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                        <img src={CSS}  style={{
                                          maxWidth: `100%`, 
                                          maxHeight: '250px', 
                                          objectFit: 'contain', 
                                          }}/>
                       </Box>
                  </Paper>
                  </Grid>


                  <Grid item xs={6} md={4}
                
                
                >
                  <Paper elevation={12}    sx={{
                                    margin:'20px',
                                     }}>
                      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                        <img src={JAVASCRIPT}  style={{
                                          maxWidth: `100%`, 
                                          maxHeight: '250px', 
                                          objectFit: 'contain', 
                                          }}/>
                       </Box>
                  </Paper>
                  </Grid>


                  <Grid item xs={6} md={4}
                
                
                >
                  <Paper elevation={12}    sx={{
                                    margin:'20px',
                                     }}>
                      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                        <img src={REACT}  style={{
                                          maxWidth: `100%`, 
                                          maxHeight: '250px', 
                                          objectFit: 'contain', 
                                          }}/>
                       </Box>
                  </Paper>
                  </Grid>

                  <Grid item xs={6} md={4}
                
                
                >
                  <Paper elevation={12}    sx={{
                                    margin:'20px',
                                     }}>
                      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                        <img src={EXPRESS}  style={{
                                          maxWidth: `100%`, 
                                          maxHeight: '250px', 
                                          objectFit: 'contain', 
                                          }}/>
                       </Box>
                  </Paper>
                  </Grid>



                  


                  <Grid item xs={6} md={4}
                
                
                >
                  <Paper elevation={12}    sx={{
                                    margin:'20px',
                                     }}>
                      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                        <img src={node}  style={{
                                          maxWidth: `100%`, 
                                          maxHeight: '250px', 
                                          objectFit: 'contain', 
                                          }}/>
                       </Box>
                  </Paper>
                  </Grid>


                  <Grid item xs={6} md={4}
                
                
                >
                  <Paper elevation={12}    sx={{
                                    margin:'20px',
                                     }}>
                      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                        <img src={MONGO}  style={{
                                          maxWidth: `100%`, 
                                          maxHeight: '250px', 
                                          objectFit: 'contain', 
                                          }}/>
                       </Box>
                  </Paper>
                  </Grid>

                  <Grid item xs={6} md={4}
                
                
                >
                  <Paper elevation={12}    sx={{
                                    margin:'20px',
                                     }}>
                      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                        <img src={GIT}  style={{
                                          maxWidth: `100%`, 
                                          maxHeight: '250px', 
                                          objectFit: 'contain', 
                                          }}/>
                       </Box>
                  </Paper>
                  </Grid>


                  <Grid item xs={6} md={4}
                
                
                >
                  <Paper elevation={12}    sx={{
                                    margin:'20px',
                                     }}>
                      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                        <img src={boot}  style={{
                                          maxWidth: `100%`, 
                                          maxHeight: '250px', 
                                          objectFit: 'contain', 
                                          }}/>
                       </Box>
                  </Paper>
                                        </Grid> 


                  
                 
                 
                  
                  
              </Grid>
              </Container>
              </></>
          
  )   
 

}

export default Skills