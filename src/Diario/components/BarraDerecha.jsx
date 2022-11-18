import { TurnedInNot } from "@mui/icons-material"
import { Grid, Drawer, Box, Toolbar, Typography, Divider, ListItem, ListItemText, List, ListItemButton, ListItemIcon } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";



const usuario = {
    nombre: 'Juan',
    apellido: 'Perez',
}

export const BarraDerecha = ({ drowerWidth }) => {


    const { displayName } = useSelector( state => state.auth );
    const dispatch = useDispatch();



  return (
    
        <Box 
        component="nav"
        sx={{
            witdh: { sm: drowerWidth }, 
            flexShrink: { sm: 0}
        }}
        >

            <Drawer
            variant="permanent"
            open
            sx={{ display: {
                xs: "block"
                },
                "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drowerWidth
                }
            }}
            >

                <Toolbar>

                    <Typography variant="h6" noWrap component="div"> { displayName } </Typography>

                </Toolbar>

                <Divider/>

                <List>
                    {
                        [ "Enero", "Febrero", "Marzo", "Abril" ].map( text => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot>
                                        </TurnedInNot>
                                    </ListItemIcon>
                                    <Grid>
                                        <ListItemText primary={text} />
                                        <ListItemText secondary="lorem ipsum" />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>

                            )
                        )
                    }


                </List>




            </Drawer>

        </Box>
  )
}
