import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { PrimaryButton } from '../../components/Ui/Button/CustomizedButton'
import { H1 } from '../../components/Ui/ResponsiveText/ResponsiveText'

export const NotFound = () => {

    const navigate = useNavigate()


    return (

        <Box sx={{
            position: 'fixed',
            backgroundColor: 'white',
            zIndex: '100',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            top: '0',
            left: '0'
        }}>

            <Box sx={{
                display: 'flex', flexDirection: "column",
                justifyContent: 'center',
                alignItems: 'center',
            }}>

                <H1>404</H1>

                <Typography variant='h5' sx={{ m: 1 }}>Page Not Found</Typography>

                <PrimaryButton onClick={() => navigate("/")} bgcolor="black">Back To Home</PrimaryButton>

            </Box>

        </Box>
    )
}
