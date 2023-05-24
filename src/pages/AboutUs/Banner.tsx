import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { BLACK, WHITE } from '../../utils/colors'

export default function Banner() {
    return (

        <Grid container justifyContent="center" sx={{ mt: 10 }}>

            <Grid lg={12} container justifyContent="center" alignItems="start" sx={{ p: 1 }}>

                <Grid md={5} sx={{

                    color: 'white',
                    py: {lg:8}
                }} >

                    <Box sx={{

                        borderLeft: "4px solid red",
                        // background: { xs: 'blue' }
                    }}>

                        <Typography sx={{
                            fontSize: { xs: '3rem' },
                            fontWeight: 'bold', color: BLACK,

                        }}>

                            <span>”</span><span style={{ fontSize: '4rem', color: 'red' }}>R</span>aise your passion  with  an    <br />

                            e<span style={{ fontSize: '4rem', color: 'red' }}>X</span>traordinary <span style={{ fontSize: '4rem', color: 'red' }}>SPACE</span><span>”</span>

                        </Typography>

                    </Box>

                </Grid>

                <Grid container md={6} lg={6} justifyContent="center" >



                    <Box sx={{
                        position: "relative",
                        mt: { xs: 6 },
                    }}>


                        <img style={{ position: "relative" }} src={require("../../assets/Images/About/Banner/banner1.png")} alt=""
                            width="300px" height="400px" />


                        <Box sx={{

                            bgcolor: "red", width: "300px", height: "400px", position: "absolute", bottom: 50, left: 50, zIndex: "-2"

                        }}></Box>

                    </Box>




                </Grid>

            </Grid>

        </Grid >
    )
}





