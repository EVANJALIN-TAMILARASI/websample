import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        Welcome to Restarunt, where culinary dreams come true! Our expert chefs craft
         each dish with passion, using only the finest ingredients. From sizzling appetizers
          to decadent desserts, every bite promises a delightful experience. Enjoy a cozy atmosphere 
          perfect for family gatherings, romantic dinners, or casual meet-ups. Our dedicated staff is here to 
          provide impeccable service, ensuring your visit is unforgettable. Join us for a memorable dining 
          experience that celebrates the joy of food. Restarunt — where every meal is a celebration!


        </p>
        <br />
        <p>
        Welcome to Healthy Restarunt, where wellness meets flavor!
         We believe that nutritious food should be delicious, and our menu
          features a vibrant array of dishes made from fresh, organic ingredients. 
          From hearty salads to grain bowls and smoothies, each item is crafted to nourish your body
           and delight your taste buds. Enjoy a tranquil atmosphere that promotes relaxation and mindfulness 
           as you dine. Our knowledgeable staff is here to guide you through our menu and help you make the best choices 
           for your health. Join us in celebrating the goodness of wholesome eating. Healthy Restarunt — fueling your
            body and uplifting your spirit!


        </p>
      </Box>
    </Layout>
  );
};

export default About;
