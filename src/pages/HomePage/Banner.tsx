import { Box, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import { url } from 'inspector'
import React from 'react'
import { useNavigate } from 'react-router-dom'
//import image from "../../assets/Images/ShowCase/hiLite.jpg"
import BannerImage from "../../assets/Images/Home/Banner.jpg"
import BannerImage1 from "../../assets/Images/Home/banner1.jpeg";
import { PrimaryButton } from '../../components/Ui/Button/CustomizedButton'
import { BLACK } from '../../utils/colors'



export default function Banner() {

    const navigate = useNavigate()

    return (

        <Grid container justifyContent="center" sx={{
            position: "relative",
            mt: { xm: 15, sm: 13, lg: 10 }, height: "80vh",
        }}>

            <Grid container justifyContent="center" alignItems="center"
                sx={{
                    backgroundImage: `url(${BannerImage1})`,
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                    WebkitBackgroundSize: 'cover'
                }}>

                <Grid container justifyContent="center" alignItems="center"
                    style={{
                        // background: "linear-gradient(to bottom,rgba(199,215,218,100))"
                        background: "linear-gradient(to bottom,rgba(199,215,218,100),rgba(255,255,255,100))"
                    }}
                    sx={{
                        position: "absolute", top: 0, left: 0,
                        //bgcolor: 'white',opacity:"80%",
                        // boxShadow: "rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px",
                        py: { lg: 8 }
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

            </Grid>

        </Grid >
    )
}


