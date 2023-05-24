import { Box } from '@mui/material'
import ForumIcon from '@mui/icons-material/Forum';

export const ChatBubble = () => {

    return (

        <a href='https://wa.me/+917510387887' style={{ listStyle: "none", color: "inherit", textDecoration: "none" }}>

            <Box sx={{
                width: "60px", height: "60px", bgcolor: "Red",
                position: "fixed", bottom: 0, right: 0, zIndex: 100, m: 2, cursor: "pointer",
                transition: "0.5s",
                borderRadius: "100%", display: "flex", justifyContent: "center", alignItems: "center",
                "&:hover": {
                    transform: "scale(1.1)",

                }
            }}>

                <ForumIcon sx={{ color: "white" }} />

            </Box>

        </a>


    )
}