
import React, {useState} from 'react'
import { AppBar, Typography,Toolbar, Tab, Tabs,Button, Drawer, useMediaQuery,useTheme, IconButton } from '@mui/material'
import JavascriptOutlinedIcon from '@mui/icons-material/JavascriptOutlined';
import DrawerComp from './DrawerComp';


const Header = () => {
  const [value, setValue ]= useState()
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <React.Fragment>
        <AppBar  sx={{background:"white",boxShadow:'2',height:'100px',position:'sticky'}}>
            <Toolbar>
                
            
            
          

       {
        isMatch ? (
          <>
          <IconButton>
          <JavascriptOutlinedIcon
              sx={{ marginRight: 'auto', fontSize: '100px', color: 'darkviolet', '&:hover': { cursor: 'pointer' } }}
            />
            </IconButton>
          
            <DrawerComp/>
            
            
            
            
            
            </>
        ):(
          <>
          <IconButton>
          
          <JavascriptOutlinedIcon
              sx={{ marginRight: 'auto', fontSize: '150px', color: 'darkviolet', '&:hover': { cursor: 'pointer' } }}
            />
            </IconButton>

          
          <Tabs 
          
          sx= {{color:'darkviolet',marginLeft:'auto',marginRight:'10%'
        
        }}
           >

  
  
  
            
          <Tab label="home" sx= {{color:'black',fontSize:'25px',textTransform: 'none'}}></Tab>
          
         
          <Tab label="skills" sx= {{color:'black',fontSize:'25px',textTransform: 'none'}} > </Tab>
          
          <Tab label="projects" sx= {{color:'black',fontSize:'25px',textTransform: 'none'}} />
          <Tab label="contact" sx= {{color:'black',fontSize:'25px',textTransform: 'none'}} />
  
         </Tabs>
         
          </>
  
  
  

        )
       }
            
            
            </Toolbar>


            
            
        </AppBar>
    </React.Fragment>
  )
}

export default Header