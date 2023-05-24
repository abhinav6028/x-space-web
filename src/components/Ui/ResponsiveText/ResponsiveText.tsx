import { Typography } from '@mui/material'

export const H1 = (props: any) => {

    const { mt, width, color } = props

    return (

        <Typography fontWeight={props.fontWeight}

            sx={{ width: width, color: color, mt: mt, fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" } }}>{props.children}</Typography>

    )
}


export const H2 = (props: any) => {

    const { mt, width, mb } = props

    return (

        <Typography fontWeight={props.fontWeight}

            sx={{ width: width, mb: mb, mt: mt, fontSize: { xs: "1rem", sm: "1.7rem", md: "2rem", lg: "2.5rem" } }}>{props.children}</Typography>

    )
}

export const H3 = (props: any) => {

    const { mt, width } = props

    return (

        <Typography fontWeight={props.fontWeight}

            sx={{ width: width, mt: mt, fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem", lg: "2rem" } }}>{props.children}</Typography>

    )
}

export const H4 = (props: any) => {

    const { mt, width, fontWeight, textAlign } = props

    return (

        <Typography fontWeight={props.fontWeight}

            sx={{
                width: width, mt: mt,
                fontWeight: fontWeight,
                textAlign: textAlign,
                fontSize: {
                    xs: ".8rem", sm: "1.2rem", md: "1.5rem",
                    lg: "1.5rem"
                }
            }}>{props.children}</Typography>

    )
}