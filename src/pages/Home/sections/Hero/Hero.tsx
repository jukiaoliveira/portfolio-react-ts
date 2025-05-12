import { Box, Container, Grid, styled, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Avatar from "../../../../assets/images/eu.jpeg";
import theme from "../../../../theme";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    padding: "40px 0",
    height: "100vh",
    display: "flex",
    alignItems: "center",
  }));

  const StyledImg = styled("img")(({ theme }) => ({
    width: "80%",
    maxWidth: "300px",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.secondary.main}`,
    display: "block",
    zIndex: 2,
  }));

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{ position: "absolute", width: "50%", top: -100, left: 0 }}
            >
              <AnimatedBackground />
            </Box>
            <StyledImg src={Avatar} alt="Júlia Oliveira" />
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography
              variant="h1"
              color="secondary"
              fontWeight="bold"
              textAlign="center"
              gutterBottom
            >
              Júlia Oliveira
            </Typography>
            <Typography variant="h3" color="secondary" textAlign="center">
              I am a front-end developer
            </Typography>
            <Grid
              container
              spacing={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Grid
                size={{ xs: 12, md: 4 }}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <StyledButton>
                  <DownloadIcon />
                  <Typography>Download CV</Typography>
                </StyledButton>
              </Grid>
              <Grid
                size={{ xs: 12, md: 4 }}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <StyledButton>
                  <MailOutlineIcon />
                  <Typography>Contact me</Typography>
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
