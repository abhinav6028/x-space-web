import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../components/Ui/Button/CustomizedButton';
import { WHITE } from '../utils/colors';

export const MobileAppBar = () => {


	const [menu, setMenu] = useState(false)

	const navigate = useNavigate();


	const navbar = [
		{
			title: "Home",
			path: "/",
		},
		{
			title: "Gallery",
			path: "/gallery",
		},
		{
			title: "About Us",
			path: "/aboutus",
		},

	]


	const MenuBar = () => {

		setMenu(!menu)

	}


	return (


		<Grid container sx={{ display: { xs: "block", sm: "block", md: "none", lg: "none", xl: "none" } }}>

			<Box sx={{
				width: "100%", display: 'flex',
				justifyContent: "center", alignItems: "center",
				py: 1,
				backgroundColor: "white",
				position: "fixed",
				zIndex: "110", top: "0", left: "0"
			}} >

				<Box position="fixed" left="0">

					{menu ? <CloseIcon sx={{ ml: 2, color: "black", fontSize: "2rem" }} onClick={() => setMenu(!menu)} /> :
						<MenuIcon sx={{ ml: 2, color: "black", fontSize: "2rem" }} onClick={() => setMenu(!menu)} />}

				</Box>

				<img style={{ cursor: "pointer" }} width="120px" onClick={() => navigate('/')} src={require("../assets/Images/logo/logo.png")} />

			</Box>


			<Box sx={{
				transition: "1s",
				width: "100%", height: "100vh", backgroundColor: "white",
				position: "fixed", zIndex: "100", top: "50px", left: menu ? "0%" : "-100%",
			}}>

				{navbar.map(data =>

					<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2 }}>

						<Box onClick={MenuBar} sx={{ display: "flex", justifyContent: "center", alignItems: "center", }}>

							<Typography variant='h6' onClick={() => navigate(data.path)}>{data.title}</Typography>

						</Box>

					</Box>
				)}


				<PrimaryButton bgcolor={WHITE}>Get in Touch</PrimaryButton>

			</Box>

		</Grid >
	)
}
