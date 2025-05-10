import { Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../src/assets/images/eu.jpeg";

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "#ebe7da",
    padding: "40px 0",
  }));

  const StyledImg = styled("img")(() => ({
    width: "80%",
    maxWidth: "300px",
    borderRadius: "50%",
    display: "block",
  }));

  return (
    <StyledHero>
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={4}>
            <StyledImg src={Avatar} alt="Júlia Oliveira" />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" color="#ff4da6" fontWeight="bold" gutterBottom>
              Júlia Oliveira
            </Typography>
            <Typography variant="h6" color="#ff4da6">
              I am a front-end developer
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;