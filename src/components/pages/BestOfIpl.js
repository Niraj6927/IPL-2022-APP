import React, { useEffect } from "react";
import { styled, Paper, Typography, Grid } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const videoList = [
  {
    src: "https://www.youtube.com/embed/SyMMbjPX2zw",
    animation: "zoom-in-down",
  },
  { src: "https://www.youtube.com/embed/wDSpSF0fqXk", animation: "zoom-in-up" },
  {
    src: "https://www.youtube.com/embed/9b1XlGenH9s",
    animation: "zoom-in-down",
  },
  {
    src: "https://www.jiocinema.com/sports/venkatesh-s-104-vs-mi/3726238",
    animation: "zoom-in-down",
  },
  {
    src: "https://www.jiocinema.com/sports/kishan-s-58-vs-kkr/3726300",
    animation: "zoom-in-up",
  },
  {
    src: "https://www.youtube.com/embed/5TfOE_dZqsQ",
    animation: "zoom-in-down",
  },
  {
    src: "https://www.youtube.com/embed/erFkel9Qny4",
    animation: "zoom-in-down",
  },
  {
    src: "https://www.youtube.com/embed/V7FyDVmZcwQ",
    animation: "zoom-in-up",
  },
  {
    src: "https://jiocinema.onelink.me/fRhd/h7xwkroh",
    animation: "zoom-in-down",
  },
  {
    src: "https://jiocinema.onelink.me/fRhd/gz5d8u18",
    animation: "zoom-in-down",
  },
  {
    src: "https://jiocinema.onelink.me/fRhd/vkw1i5x0",
    animation: "zoom-in-up",
  },
  {
    src: "https://www.youtube.com/embed/-zXtUt5sV8M",
    animation: "zoom-in-down",
  },
  {
    src: "https://jiocinema.onelink.me/fRhd/zyp46h2o",
    animation: "zoom-in-down",
  },
  {
    src: "https://jiocinema.onelink.me/fRhd/wtailgoa",
    animation: "zoom-in-up",
  },
  {
    src: "https://jiocinema.onelink.me/fRhd/e2qcus08",
    animation: "zoom-in-down",
  },
  {
    src: "https://www.youtube.com/embed/hv_MFT__hyY",
    animation: "zoom-in-down",
  },
  {
    src: "https://jiocinema.onelink.me/fRhd/c5oxqpo2",
    animation: "zoom-in-down",
  },
  {
    src: "https://jiocinema.onelink.me/fRhd/798lykje",
    animation: "zoom-in-down",
  },
  {
    src: "https://jiocinema.onelink.me/fRhd/f9in7d4b",
    animation: "zoom-in-down",
  },
  {
    src: "https://jiocinema.onelink.me/fRhd/blonc6j0",
    animation: "zoom-in-down",
  },
];

const BestOfIpl = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      style={{ minHeight: "90vh", padding: "1rem 1rem", marginBottom: "2rem" }}
    >
      <Typography
        variant="h5"
        component="h2"
        align="center"
        sx={{ textDecoration: "underline", marginBottom: "1rem" }}
      >
        BEST OF IPL
      </Typography>

      <Grid container rowSpacing={3} spacing={3}>
        {videoList.map(({ src, animation }) => (
          <Grid data-aos={animation} key={src} item xs={12} sm={6} md={4}>
            <Item sx={{ height: "40vh" }}>
              <iframe
                width="100%"
                height="100%"
                src={src}
                title="YouTube video player"
                frameBorder="0"
                loading="lazy"
                fetchpriority="high"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen"
                msallowfullscreen="msallowfullscreen"
                oallowfullscreen="oallowfullscreen"
                webkitallowfullscreen="webkitallowfullscreen"
              ></iframe>
            </Item>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BestOfIpl;
