// import { Banner } from "./Banner"
import { Divider, Grid } from '@mui/material';
import { AboutCoworking } from './AboutCoworking';
import Banner from './Banner';
import { CampusAmenities } from './CampusAmenities';
import EnquireNow from './EnquireNow';
import ShowCase from './ShowCase';

const Home = () => {



  return (

    <Grid>

      <Banner />

      <CampusAmenities />

      {/* <ShowCase /> */}

      {/* <Divider />

      <AboutCoworking />

      <Divider />

      <Divider /> */}

      <EnquireNow />

    </Grid>

  )
}

export default Home