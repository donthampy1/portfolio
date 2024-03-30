import React,{useState} from 'react'
import { Drawer,IconButton,List, ListItemButton, ListItemText, Tabs , Tab, Button} from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const DrawerComp = () => {
    const [openDrawer,setOpenDrawer] = useState(false);


  return (
    <React.Fragment>


        <Drawer  open={openDrawer} onClose={()=>setOpenDrawer(false)}>
            <List  sx={{marginTop:'30px',marginLeft:'10px',marginBottom:'5px',marginRight:'20px'}}>
                
                    <ListItemText >
                    
  
  
  
  
         <Tab label="home" sx= {{color:'black',fontSize:'25px',textTransform: 'none'}}/>
         </ListItemText>
         <ListItemText>
          <Tab label="skills" sx= {{color:'black',fontSize:'25px',textTransform: 'none'}}/>
          </ListItemText>
          <ListItemText>
          <Tab label="projects" sx= {{color:'black',fontSize:'25px',textTransform: 'none'}}/>
          </ListItemText>
          <ListItemText>
          <Tab label="contact" sx= {{color:'black',fontSize:'25px',textTransform: 'none'}}/>
          </ListItemText>
                   



  

            </List>






        </Drawer>
        <IconButton  sx={{ marginLeft:'auto'}}          onClick={()=>setOpenDrawer(!openDrawer)}>


            <MenuRoundedIcon sx={{ fontSize: '50px' , color: 'darkviolet'}}></MenuRoundedIcon>
        </IconButton>














    </React.Fragment>
    












  )
}

export default DrawerComp