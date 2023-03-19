import { Box, Flex } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";
import "./Industry.css"

export const Industry = () =>  {
    var settings = {
      dots: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 1000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Box border="2px solid green">
        <Slider {...settings}>
          <Flex
            flexDirection={["column-reverse", "column-reverse", "row", "row"]}
            h="100%"
            alignItems="center"
          >
            <Box className="slider-trustee"></Box>
            <Box className="slider-trustee"></Box>
            <Box className="slider-trustee"></Box>
            <Box className="slider-trustee"></Box>
            <Box className="slider-trustee"></Box>
            <Box className="slider-trustee"></Box>
            <Box className="slider-trustee"></Box>
            <Box className="slider-trustee"></Box>
            <Box className="slider-trustee"></Box>
            <Box className="slider-trustee"></Box>
            <Box className="slider-trustee"></Box>
            <Box className="slider-trustee"></Box>
          </Flex>
        </Slider>
      </Box>
    );
  }
