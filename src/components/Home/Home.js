import React from 'react';
import { Container, Grid,  } from '@mui/material';
import Profilepic from './profilepic.jpg'; 
import { Margin } from '@mui/icons-material';

function Home() {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Grid container spacing={2}   sx={{marginTop:'1px'}}>
          <Grid item xs={12} md={6}
           container
           direction="column"
           justifyContent="flex-start"
           alignItems="center"
           sx={{marginTop:'30px'}}
           >
            
            <h1 style={{marginBottom:'5px'}}>Hi,I am {' '}
                 <span style={{color:'darkviolet',fontSize:'50px',whiteSpace:'nowrap'}}> Don Thampy</span>
            </h1>
            <h2 style={{marginBottom:'15px'}}>A full Stack web dev</h2>
            <p    style={{fontSize:'20px'}}>
            Enthusiastic MkjfyvERN stack developer seeking to leverage my skills in building dynamic web applications. I'm passionate about crafting user-friendly interfaces and robust backends, and I'm eager to contribute to a team that values innovation.
            </p>
          </Grid>
          <Grid item xs={12} md={6}  
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          
  
  
  
>
            
          
              <img src={Profilepic} alt="Don Thampy Profile Picture"   style={{
                  maxWidth: `100%`, 
                  maxHeight: '80%', 
                  objectFit: 'contain', 
                  
                  borderRadius: '1%',
                  
                  
                 
                }}
              />
            
              
            
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Home;
