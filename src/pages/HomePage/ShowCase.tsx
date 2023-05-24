import { Grid, Typography, Box } from '@mui/material'
//import { Box } from '@mui/system'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { PrimaryButton } from '../../components/Ui/Button/CustomizedButton'
import { BLACK, WHITE, FONT_FAMILY } from '../../utils/colors'

export default function ShowCase() {

    const navigate = useNavigate();

    const showCases = [
        {
            image: "teamspace.jpg",
            name: "Team Space",
            discription: "You will have a designated office space and can have upto people inside the room."
        },
        {
            image: "A.jpg",
            name: "Single Chair",
            discription: "Bring your device, pick a seat, and get to work."
        },
        {
            image: "coffebar.jpeg",
            name: "Coffee Bar",
            discription: "Enjoy work with your coffee to refresh"
        },
        {
            image: "officespace.webp",
            name: "Event Space",
            discription: "Having a meeting or corporate The Market is where clients, coworkers, and colleagues get together and get down to business."
        },
    ]

    return (
        <Grid container justifyContent="center" sx={{ background: WHITE, fontFamily: { FONT_FAMILY } }}>

            <Grid container lg={11}>

                <Grid container sx={{ pt: 3 }}>

                    <Typography color={BLACK} sx={{
                        fontWeight: '800',
                        color: BLACK,
                        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                        ml: { xs: '.5rem', sm: '1rem', md: '1.5rem' },
                        background: { xs: 'red', sm: 'blue', md: 'green', lg: 'yellow' },
                        textAlign: "center",
                        // fontFamily:"Fredoka One"
                    }}>Space for teams of all sizes </Typography>

                </Grid>

                <Grid container>

                    {showCases.map((item: any) => (


                            <Grid xs={12} sm={6} lg={3}>


                                <Grid sx={{m:1}}>

                                    <img width="100%"  height="500px"                      
                                        alt="The house from the offer."
                                        src={require(`../../assets/Images/ShowCase/${item.image}`)}
                                    />

                            
                                <Box>

                                    <Typography variant='h6' sx={{
                                        color: 'red', fontWeight: "bold", mt: 1,
                                        fontSize: { xs: '1.5rem', md: '1.7em', lg: '1.5rem' },
                                   
                                    }}>{item.name}</Typography>

                                    <Typography sx={{
                                        color: BLACK, fontWeight: '700',
                                    
                                        fontSize: { md: '1.3rem', lg: '1rem' },
                                  
                                    }}>{item.discription}</Typography>

                                </Box>

</Grid>

                            </Grid>

                    ))}

                </Grid>

                <Grid container sx={{ ml: 3, pb: 3 }}>

                    <PrimaryButton bgcolor="black" onClick={() => navigate('/bookspace')}>Book Your Office</PrimaryButton>

                </Grid>

            </Grid>

        </Grid >
    )
}
