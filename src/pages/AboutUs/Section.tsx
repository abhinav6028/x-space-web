import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { RED, WHITE } from '../../utils/colors'

export default function Section() {
    return (
        <Grid container sx={{ bgcolor: WHITE, justifyContent: 'center', alignItems: 'center' }}>

            <Grid container lg={11} sx={{ bgcolor: '', justifyContent: 'space-around', alignItems: 'center' }}>



                <Grid container justifyContent='center'>

                    <Grid container sx={{ position: "relative" }} md={8} lg={10} justifyContent="end" >

                        <Box
                            sx={{
                                width: '100%',
                                mt: 7
                                // bgcolor: { xs: 'red',sm:'green',md:'blue' },
                                //fontSize: { xs: '1rem' }
                            }}
                        >
                            <Typography sx={{
                                color: '#5A5A5A',
                                textAlign: 'center', mt: 2, fontWeight: 'bold',
                                fontSize: { xs: "1rem", sm: '1.2rem', md: '1.5rem' }
                            }}>
                                Evoke an emotional business experience with unique and engaging office and blissful environments. X-Space provides both design and technology to transform your desired space in a way that is both functional and beautiful.
                            </Typography>

                            <Typography sx={{
                                color: '#5A5A5A',
                                textAlign: 'center', mt: 2, fontWeight: 'bold',
                                fontSize: { xs: "1rem", sm: '1.2rem', md: '1.5rem' }
                            }}>
                                Whether you are an enterprise company who needs temporary space for your team, or you are a remote worker seeking a collaboration hub, or you are a startup looking to connect with the local tech ecosystem, our team can design a flexible and customized solution to meet your needs.
                            </Typography>

                            <Typography sx={{
                                color: '#5A5A5A',
                                textAlign: 'center', mt: 2, mb: 6, fontWeight: 'bold',
                                fontSize: { xs: "1rem", sm: '1.2rem', md: '1.5rem' },
                            }}>
                                X-Space offers everything from state-of-the-art workspaces inside the Hilite Business Park to easy access to the city's best shopping and dining centre.
                            </Typography>
                        </Box>

                    </Grid>

                </Grid>

            </Grid>

        </Grid>
    )
}
