import React from 'react'
import { Box, Grid, TextField, Typography } from '@mui/material'
import { PrimaryButton } from '../../components/Ui/Button/CustomizedButton'
import { BLACK, RED, WHITE,GREY } from '../../utils/colors'
import { useFormik } from 'formik';
import emailjs from "@emailjs/browser"

const EnquireNow = () => {

    const formik = useFormik({
        initialValues: {

            full_name: '',
            last_name: '',
            email: '',
            phone_number: '',
            message: '',

        },

        //console.log("");


        // validationSchema: clinicSchemea,

        onSubmit: (values: any) => {

            emailjs.send('service_o1b32yc', 'template_b90ayhg', {
                to_name: 'shameer',
                full_name: values.full_name,
                email: values.email,
                phone_number: values.phone_number,
                message: values.message,

                reply_to: 'abhinavtv6028@gmail.com'
            }, 'OyyykmxyDr00Emynn').then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })

        },

    });



    const formData = [

        {
            title: "Full Name",
            label: "full_name",
            type: "text",
            rows: 1,
            value: formik.values.full_name,
            touched: formik.touched.full_name,
            errors: formik.errors.full_name,
        },
        {
            title: "Email",
            label: "email",
            type: "email",
            rows: 1,
            value: formik.values.email,
            touched: formik.touched.email,
            errors: formik.errors.email,
        },
        {
            title: "Phone Number",
            label: "phone_number",
            type: "number",
            rows: 1,
            value: formik.values.phone_number,
            touched: formik.touched.phone_number,
            errors: formik.errors.phone_number,
        },
        {
            title: "Message",
            label: "message",
            type: "text",
            rows: 6,
            value: formik.values.message,
            touched: formik.touched.message,
            errors: formik.errors.message,
        },
    ]


    return (

        <Grid container justifyContent="center" alignItems="center" sx={{ bgcolor: WHITE, py: 5 }}>

            <Grid container justifyContent="center" alignItems="center" lg={11}>

                <Grid container sx={{ p: 5 }} lg={6}>

                    <Typography variant='h3' fontWeight="bold" sx={{
                        fontWeight: '800',
                        // background: { xs: 'blue',sm:'green',md:'yellow' },
                        fontSize: { xs: '2.5rem', sm: '3,5rem', md: '4rem' }
                    }}>Contact Us</Typography>

                    <Typography variant='h6' fontWeight="bold" sx={{
                        textAlign: 'center',
                        color: '#5A5A5A', py: 2,
                        fontSize: { xs: '1rem', sm: '1.5rem', md: '1.8rem' }
                    }}>Feel free to contact us any time.We will get
                        back to you as soon as we can !</Typography>


                    <Grid container sx={{}}>

                        {formData.map(data =>

                            <Grid container xs={12} lg={12} md={12} sx={{ p: 1 }}>

                                < TextField sx={{ flex: 2, width: "100%", mb: 2 }}
                                    fullWidth
                                    id={data.label}
                                    label={data.title}
                                    name={data.label}
                                    multiline={true}
                                    value={data.value}
                                    type={data.type}
                                    variant="standard"
                                    onChange={formik.handleChange}
                                    inputProps={{ style: { fontFamily: 'Arial', color: RED } }}
                                    error
                                    helperText={data.touched && data.errors}
                                />


                            </Grid>

                        )}

                    </Grid>

                    <PrimaryButton onClick={formik.handleSubmit} my={2} fullWidth bgcolor={BLACK}>Send</PrimaryButton>

                </Grid>

                {/* <Grid container lg={6} sx={{ bgcolor: 'red' }} height='100px'
                    position='relative'
                >

                </Grid> */}

                <Grid container lg={6} sx={{
                    border: "2px solid red",
                    justifyContent: 'center', position: "relative"
                }}>

                    <img width="100%"
                        src={require(`../../assets/Images/works/work-5.jpeg`)}
                        loading="lazy"
                        alt="gallery"
                    />

                    <Box sx={{
                        bgcolor: "black", position: 'absolute',
                        top: 0, left: 0, width: "100%", height: "100%", opacity: "30%"
                    }}>

                    </Box>

                </Grid>

            </Grid >

        </Grid >

    )
}

export default EnquireNow