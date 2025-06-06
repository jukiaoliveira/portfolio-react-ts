import { Grid, Typography, styled } from "@mui/material";
import StyledButton from "../StyledButton/StyledButton";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export interface ProjectCardProps {
  title: string;
  subtitle: string;
  srcImg: string[];
  description: string;
  technologies: string;
  websiteURL: string;
  codeURL: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  srcImg,
  description,
  technologies,
  codeURL,
}) => {
  const StyledImg = styled("img")(({ theme }) => ({
    width: "100%",
    objectFit: "contain",
    height: "80vw",
    padding: "10px 0",
    [theme.breakpoints.up("md")]: {
      height: "45vh",
    },
  }));

  const StyledCard = styled("div")(({ theme }) => ({
    borderRadius: "3px",
    border: `0.5px solid  ${theme.palette.secondary.dark}`,
    backgroundColor: "transparent",
    color: theme.palette.primary.contrastText,
    padding: "20px",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  }));

  return (
    <StyledCard>
      <Typography variant="h5">{title}</Typography>
      <Typography>{subtitle}</Typography>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
        style={{ width: "100%", marginTop: "10px", marginBottom: "20px" }}
      >
        {srcImg.map((imgSrc, idx) => (
          <SwiperSlide key={idx}>
            <StyledImg src={imgSrc} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Typography>{description}</Typography>
      <Typography fontWeight={600} pt={2}>
        {technologies}
      </Typography>
      <Grid container spacing={1} pt={2}>
        <Grid
          size={{ xs: 12 }}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <StyledButton onClick={() => window.open(codeURL)}>
            View Code
          </StyledButton>
        </Grid>
      </Grid>
    </StyledCard>
  );
};

export default ProjectCard;
