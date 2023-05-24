import { Button } from '@mui/material';
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';
import { BLACK } from '../../../utils/colors';

export const PrimaryButton = (props: any) => {

    const { children, onClick, bgcolor, fullWidth, my, type, px, className } = props;

    return (
        <Button className={className} fullWidth={fullWidth} type={type} sx={{
            textTransform: "uppercase",
            width: props.width, px: px, borderRadius: "0",
            boxShadow: "none", my: my, color: "red", bgcolor: bgcolor, border: `1px solid white`, "&:hover": {
                bgcolor: bgcolor, boxShadow: "none",
                color: "red", border: `1px solid white`,

            },
        }}
            variant="contained"
            onClick={onClick}
        >
            {children}
        </Button >
    )
}


export const OutlinedButton = (props: any) => {

    const { children, onClick, bgcolor, type, px } = props;

    return (
        <Button type={type} sx={{
            textTransform: "initial",
            color: bgcolor,
            width: props.width, px: 4, borderRadius: "0",
            boxShadow: "none", m: 1, bgcolor: "transparent", border: `1px solid ${bgcolor}`, "&:hover": {
                bgcolor: bgcolor, boxShadow: "none",
                color: "white", border: `1px solid ${bgcolor}`,
            },
        }}
            variant="contained"
            onClick={onClick}
        >
            {children}
        </Button >
    )
}

export const ArrowedButton = (props: any) => {

    const { children, onClick, bgcolor, type, px } = props;

    return (

        <Box sx={{
            bgcolor: "white", display: "flex",
            justifyContent: "center", alignItems: "center", border: `1px solid ${bgcolor}`
        }}>

            <Button type={type} sx={{
                textTransform: "initial",
                color: bgcolor,
                width: props.width, borderRadius: "0",
                boxShadow: "none", bgcolor: "transparent", "&:hover": {
                    bgcolor: "transparent", boxShadow: "none",
                    color: BLACK,
                },
            }}
                variant="contained"
                onClick={onClick}
            >
                {children}
            </Button >


            <ArrowForwardIcon />

        </Box>



    )
}