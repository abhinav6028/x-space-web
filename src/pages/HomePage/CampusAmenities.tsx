import { Grid, Typography } from '@mui/material'
import React from 'react'
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import PermCameraMicIcon from '@mui/icons-material/PermCameraMic';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import PowerIcon from '@mui/icons-material/Power';
import HvacIcon from '@mui/icons-material/Hvac';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import { WHITE,BLACK} from '../../utils/colors';

export const CampusAmenities = () => {

    const amenities = [
        {
            icon: WifiOutlinedIcon,
            title: "Fully equipped conference Room",
        },
        {
            icon: WifiOutlinedIcon,
            title: "Fast and secure wifi Internet",
        },
        {
            icon: PermCameraMicIcon,
            title: "24/7 Video serveilance and secured access",
        },
        {
            icon: FingerprintIcon,
            title: "Wire free intercom",
        },
        {
            icon: MeetingRoomIcon,
            title: "Dedicated private cabins",
        },
        {
            icon: HvacIcon,
            title: "Advanced & centralised HVAC system",
        },
        {
            icon: PowerIcon,
            title: "Power back-up",
        },
        {
            icon: SoupKitchenIcon,
            title: "Fully equipped butlery room",
        },
        {
            icon: EmojiFoodBeverageIcon,
            title: "Complementary hot & cold beverage",
        },
        {
            icon: WifiOutlinedIcon,
            title: "House Keeping and waste management",
        },
        {
            icon: WifiOutlinedIcon,
            title: "On-campus financial services",
        },
        {
            icon: WifiOutlinedIcon,
            title: "On-campus IT and Non-It business Institutions and services",
        }
    ]

    return (

        <Grid container justifyContent="center" alignItems="center" sx={{
            bgcolor: WHITE,
            py: 5
        }}>

            <Typography variant='h4' color={BLACK} sx={{
                fontWeight: 'bold',
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                ml: { xs: '.5rem', sm: '1rem', md: '1.5rem' },
                // background: { xs: 'pink', sm: 'blue', md: 'green', lg: 'yellow' },
                textAlign: "center",
                // fontFamily: "Fredoka One"
            }}>Campus Amenities </Typography>

            <Typography variant='h6' sx={{
                width: "100%", textAlign: "center", p: 2, fontWeight: '600',color:'#5A5A5A',
                fontSize:{xs:'1rem',sm:'1.3rem',md:'1.7rem'}
            }}>Our campus have all the amenities of a typical co-working space, <br /> plus
                mentorship opportunities,learning workshops and more</Typography>

            <Grid container lg={12} justifyContent="center" alignItems="center" sx={{ mt: 2 }}>

                {amenities.map(data =>

                    <Grid justifyContent="center"
                        alignItems="center" xs={6} md={4} lg={3} container sx={{ p: 1 }}>

                        <data.icon sx={{ p: 2, fontSize: '2.5rem'}} />

                        <Typography variant='subtitle1' sx={{ width: "100%", textAlign: "center", fontWeight: "600",color:'#5A5A5A' }}>{data.title}</Typography>

                    </Grid>

                )}

            </Grid>

        </Grid>

    ) }