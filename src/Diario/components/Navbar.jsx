import { Link as RLink } from "react-router-dom"
import { Link } from "react-router-dom"

import { AppBar, IconButton, Toolbar, Grid, Typography } from '@mui/material';
import { MenuOutlined, LogoutOutlined } from '@mui/icons-material';


export const NavBar = ( { drowerWidth} ) => {
  return (
   
    <AppBar position="fixed" sx={{ 
        width: { sm : `calc(100% - ${drowerWidth}px)`},
        ml: { sm: `${drowerWidth}px` }
     }}>
    
        <Toolbar >
            
            <IconButton 
            color='inherit'
            edge='start'
            sx={{ mr: 2, display: { sm: "none"}}}
            >
                <MenuOutlined />
            </IconButton>

            <Grid
            container direction='row' justifyContent="space-between" alignItems="center">
                <Typography variant='h6' noWrap component="div"> Diario </Typography> 

                <IconButton color='error'>

                <Link compenent={RLink} color="inherit" to="/auth/login">
                    
                    <LogoutOutlined/>
                    </Link>
                </IconButton>

            </Grid>

        </Toolbar>
    </AppBar>

  )
}
