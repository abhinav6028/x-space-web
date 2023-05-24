import { Grid } from '@mui/material'
import React from 'react'
import Banner from './Banner'
import Section from './Section'

export default function AboutUs() {
    return (
        <Grid container sx={{ mt: 7 }}>

            <Banner />

            <Section />

        </Grid>
    )
}
