import { duration, Grid, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
// import GridImages from "../../components/Ui/Button/GridImages/GridImages";
import Banner from "../AboutUs/Banner";
import AOS from "aos";
// import 'aos/dist/aos.css';
import "../../../node_modules/aos/dist/aos.css"
import { useEffect } from "react";

export const Gallery = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  const itemData = [
    {
      img: 'work-1.jpeg',
    },
    {
      img: 'work-2.jpeg',
    },
    {
      img: 'work-3.jpeg',
    },
    {
      img: 'work-4.jpeg',
    },
    {
      img: 'work-5.jpeg',
    },
    {
      img: 'work-6.jpeg',
    },
    {
      img: 'work-7.jpeg',
    },
    {
      img: 'work-8.jpeg',
    },
    {
      img: 'work-9.jpeg',
    },

  ];

  return (

    <Grid container justifyContent="center" sx={{ py: 5 }}>


      <Banner />

      <Grid container justifyContent="center" lg={12} >

        <Typography variant='h3' fontWeight="bold"
          sx={{ width: "100%", textAlign: "center", fontFamily: 'Noto Serif Ahom', mb: 2, color: "black" }}>Our Gallery</Typography>


        <Grid container data-aos="fade-left">

          {itemData.map((item: any) => (


            <Grid xs={12} sm={6} lg={4}>


              <Grid sx={{ m: 1 }}>

                <img width="100%"
                  alt="The house from the offer."
                  src={require(`../../assets/Images/works/${item.img}`)}
                />

              </Grid>

            </Grid>

          ))}

        </Grid>



      </Grid>

    </Grid >

  );
}