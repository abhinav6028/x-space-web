import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Twitter from '@mui/icons-material/Twitter';
import { useNavigate, useLocation } from 'react-router-dom';
import { BLACK, RED, WHITE } from '../../utils/colors';
import { useEffect } from 'react';

export const Footer = () => {

	const route = useNavigate();

	// const { pathName } = useLocation();

	const footerData = [
		{
			id: 1,
			main_title: "COMPANY",
			children: [
				{
					sub_title: "Home",
					path: "/"
				},
				{
					sub_title: "Book Space",
					path: "/bookspace"
				},
				{
					sub_title: "Gallery",
					path: "/gallery"
				},
				{
					sub_title: "Aboutus",
					path: "/aboutus"
				},
			]
		},
		{
			id: 2,
			main_title: "ADDRESS",
			children: [
				{
					sub_title: "Hi Lite Business Park, 3rd Floor, Kozhikode – 673014",
					path: "null"
				},
				{
					sub_title: "xspaceindialimited@gmail.com",
					path: "null"
				},
				{
					sub_title: "+91 79944760400",
					path: "null"
				},
			]
		},

	];

	//const { pathName } = useLocation();


	return (

		<Grid container justifyContent="space-around" sx={{ bgcolor: WHITE, pt: 5 }}>

			<Grid container lg={12} sx={{ display: "flex", justifyContent: "space-around", pt: 5, pb: 10 }}>

				<Grid container sm={12} md={4} lg={4} >

					<Box sx={{
						width: "100%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center", alignItems: "center"
					}}>

						<img width="200px" src={require("../../assets/Images/logo/logo.png")} />


						<Typography sx={{ color: "black", my: 1 }}>Social Links</Typography>

						<Box display="flex" sx={{ my: 3 }}>

							{[{ icon: FacebookIcon }, { icon: InstagramIcon }, { icon: LinkedInIcon },
							{ icon: Twitter }, { icon: YouTubeIcon },].map(data =>


								<data.icon sx={{

									color: "black", mr: 2, fontSize: "1.8rem", cursor: "pointer", '&:hover': {

										color: RED
									}

								}}></data.icon>
							)}

						</Box>

					</Box>

				</Grid>


				<Grid container sm={12} md={4} lg={8}>

					{footerData.map(data =>

						<Grid xs={12} sm={12} lg={4} sx={{ p: 2 }}>

							<Typography variant='h6' sx={{ fontWeight: "bold", color: "black", mb: 1 }}>{data.main_title}</Typography>

							{data.children.map(child =>

								<Typography variant='subtitle1'

									//onClick={ () => route(child.path)} sx={{ color: "black", mb: 1 }}
									onClick={() => route(child.path)}

								>{child.sub_title}</Typography>

							)}

						</Grid>

					)}

				</Grid>

			</Grid >

			<Grid container justifyContent="center" sx={{ p: 2 }}>

				<Typography sx={{ fontSize: "0.8rem", color: "white" }}><b>© 2023 X-SPACE.</b> All rights reserved.</Typography>

			</Grid>

		</Grid >
	)
}
