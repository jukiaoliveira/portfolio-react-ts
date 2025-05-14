import { Box, Container, Grid, styled, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Avatar from "../../../../assets/images/eu.jpeg";
import theme from "../../../../theme";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import Typewriter from "../../../../components/Typewriter/Typewriter"

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    padding: "40px 0",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      paddingTop: "150px",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "100px",
    }
  }));

  const StyledImg = styled("img")(({ theme }) => ({
    width: "80%",
    maxWidth: "300px",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.secondary.main}`,
    display: "block",
    zIndex: 2,
  }));

  const handleDownload = () => {
        console.log("download")
        const link = document.createElement('a');
        link.href = '/public/pdfs/CV_Julia_Oliveira.pdf';
        link.download = 'CV_Julia_Oliveira.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleEmail = () => {
        const emailAddress = 'jurafaoliveira@icloud.com';
        const subject = 'Interesse em seu portfólio';
        const body = 'Olá! Eu vi seu portfólio e fiquei interessado(a) em seu trabalho.';

        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink);
    }

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                position: "absolute",
                width: {
                  xs: "100%", 
                  sm: "80%",
                  md: "60%",
                  lg: "50%", 
                },
                top: {
                  xs: -50, 
                  sm: -70,
                  md: -80,
                  lg: -100,
                },
                left: 0,
              }}
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
            <Typewriter text="I'm a front-end developer" delay={120} variant="h2" color="secondary" />
            <Grid
              container
              spacing={3}
              pt={3}
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
                <StyledButton onClick={() => handleDownload()}>
                  <DownloadIcon />
                  <Typography>Download CV</Typography>
                </StyledButton>
              </Grid>
              <Grid
                size={{ xs: 12, md: 4 }}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <StyledButton onClick={() => handleEmail()}>
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
