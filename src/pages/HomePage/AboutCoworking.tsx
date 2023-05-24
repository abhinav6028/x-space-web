import { Grid, Typography } from '@mui/material'
import React from 'react'
import { PrimaryButton } from '../../components/Ui/Button/CustomizedButton'
import { WHITE, BLACK } from '../../utils/colors'

export const AboutCoworking = () => {
    return (

        <Grid container justifyContent="center" alignItems="center" sx={{ bgcolor: WHITE, py: 5 }}>

            <Grid container justifyContent="center" alignItems="center" lg={9}>

                <Grid container lg={6} sx={{ height: 'fit-content', color: BLACK, fontWeight: 'bold', textAlign: 'center' }}>

                    <Typography variant='h2' sx={{
                        my: 2,
                        textAlign: 'center',
                        // fontFamily: 'Fredoka One',
                        // fontWeight: '800',
                        // background: { xs: "red", sm: "blue", md: 'green', lg: 'yellow' },
                        fontSize: { xs: '2rem', sm: '4rem', md: '4.5', lg: '4.5' }

                    }} color="" fontWeight="bold">Co-working space is defying gravity</Typography>

                    <Typography color="" sx={{
                        my: 2, mx: 2, fontWeight: '600',
                        fontSize: { sm: '1.2rem',md:'1.5rem' }
                    }}>Evoke an emotional business experience with unique and engaging
                        office and blissful environments. X-Space provides both design and
                        technology to transform your desired space in a way that is both
                        functional and beautiful.
                    </Typography>

                    <Typography color="" sx={{
                        my: 2, mx: 2, fontWeight: '600',
                        fontSize: { sm: '1.2rem',md:'1.5rem' }                    }}>Whether you are an enterprise company who needs temporary space
                        for your team, or you are a remote worker seeking a collaboration hub,
                        or you are a startup looking to connect with the local tech ecosystem,
                        our team can design a flexible and customized solution to meet your
                        needs.
                    </Typography>

                    <Typography color="" sx={{
                        my: 2, mx: 2, fontWeight: '600',
                        fontSize: { sm: '1.2rem',md:'1.5rem' }
                    }}>X-Space offers everything from state-of-the-art workspaces inside
                        the Hilite Business Park to easy access to the city's best shopping and
                        dining centre.
                    </Typography>


                </Grid>


                <Grid container lg={6} justifyContent="center"
                    alignItems="center">

                    <img width="70%"
                        src={require(`../../assets/Images/ShowCase/about-coworking.png`)}
                        loading="lazy"
                        alt=''
                    />

                </Grid>

            </Grid>

        </Grid >

    )
}
