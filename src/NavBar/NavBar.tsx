import { Box, Grid, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { WHITE, RED, BLACK } from '../utils/colors'
import { ArrowedButton, PrimaryButton } from '../components/Ui/Button/CustomizedButton'
import { useState } from 'react'

export const NavBar = () => {

    const navigate = useNavigate()

    const path = useParams()

    console.log("path", window.location.pathname)

    const navbar = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Book Space",
            path: "/bookspace",
        },
        {
            title: "Gallery",
            path: "/gallery",
        },
        {
            title: "About Us",
            path: "/aboutus"
        }
    ]


    return (

        <Grid container justifyContent="center" sx={{
            zIndex: "100",
            position: "fixed",
            top: 0, bgcolor: 'white',
            display: { xs: "none", sm: "none", md: "flex", lg: "flex", xl: "flex" }
        }}>


            <Grid container lg={11} justifyContent="start" sx={{ p: 2 }}>


                <Grid container lg={5} md={3} justifyContent="start">

                    <img style={{ cursor: "pointer" }} onClick={() => navigate("/")} width="150px" src={require("../assets/Images/logo/logo.png")} />


                </Grid>

                <Grid container md={8} lg={7} >

                    <Box sx={{
                        width: "100%", display: "flex",
                        justifyContent: "space-between", alignItems: "center"
                    }}>

                        {navbar.map(data =>

                            <Box sx={{ ml: 3 }}>

                                <Typography variant='subtitle1' sx={{ fontFamily: '', cursor: "pointer", color: BLACK, fontWeight: '800' }} onClick={() => navigate(data.path)}>{data.title}</Typography>

                                <Box sx={{ bgcolor: window.location.pathname === data.path ? BLACK : "transaparent", p: 0.15 }}></Box>

                            </Box>

                        )}

                        <a href='https://wa.me/+917510387887' target="blank" style={{ listStyle: "none", color: "inherit", textDecoration: "none" }}>

                            <ArrowedButton bgcolor="black"
                                // onClick={() => navigate("/contactus")}
                            >Get in Touch</ArrowedButton>

                        </a>

                    </Box>

                </Grid>

            </Grid >

        </Grid >
    )
}
