
import { SaveOutlined } from '@mui/icons-material';
import { Grid, Typography, TextField, Button } from '@mui/material';
import { ImgGalery } from '../components';






export const VerNota = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ padding: 1, borderRadius: 3, mb: 1 }}
        >
            <Grid item >
                <Typography fontSize={39} fontWeight="light"> 28 de Agosto, 2023</Typography>
            </Grid>

            <Grid item >
                <Button color='primary' sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>

            <Grid container direction="column" justifyContent="center" sx={{ width: '100%', mt: 2 }}>

                <Grid item >
                    <TextField

                        type="text"
                        label="Titulo"
                        variant="filled"
                        fullWidth
                        placeholder='Ingrese un titulo'
                        sx={{ border: "none", mb: 1, color: "white" }}
                    >

                    </TextField>
                </Grid>

                <Grid item >
                    <TextField
                        color='white'
                        type="text"
                        variant="filled"
                        placeholder='Que paso en el dia de hoy'
                        sx={{ border: "none", mb: 1, color: "white" }}
                        fullWidth
                        minRows={ 6 }
                        multiline
                    >

                    </TextField>

                </Grid>

            </Grid>

            <ImgGalery />

        </Grid>
    )
}
