import { Grid } from '@mui/material'
import React from 'react'
import Banner from '../AboutUs/Banner'
import EnquireNow from '../HomePage/EnquireNow'

export default function BookSpace() {
  return (
    <Grid sx={{ mt: 10 }}>

      <Banner />

      <EnquireNow />

    </Grid>
  )
}
