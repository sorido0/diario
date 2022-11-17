import { TurnedInNot } from "@mui/icons-material"
import { Grid, Drawer, Box, Toolbar, Typography, Divider, ListItem, ListItemText, List, ListItemButton, ListItemIcon } from "@mui/material"



const usuario = {
    nombre: 'Juan',
    apellido: 'Perez',
}

export const BarraDerecha = ({ drowerWidth }) => {
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

                    <Typography variant="h6" noWrap component="div"> {usuario.nombre} {usuario.apellido} </Typography>

                </Toolbar>

                <Divider/>

                <List>
                    {
                        ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"].map( text => (
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
