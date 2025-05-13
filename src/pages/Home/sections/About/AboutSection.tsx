import { Box, Card, Container, Grid, Typography, styled } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SchoolIcon from "@mui/icons-material/School";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const AboutSection: React.FC = () => {
  const StyledAbout = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
  }));

  const StyledCard = styled(Card)(({ theme }) => ({
    padding: "10px 10px",
    textAlign: "center",
    marginBottom: "10px",
    backgroundColor: theme.palette.primary.light,
    border: `1px solid ${theme.palette.secondary.main}`,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  }));

  const skillsSet = [
    "Javascript",
    "Typescript",
    "React",
    "Git",
    "HTML",
    "CSS",
    "Material UI",
    "Figma",
  ];

  return (
    <>
      <StyledAbout>
        <Container maxWidth="lg">
          <Box id="about" pt={5} mb={3}>
            <Typography variant="h2" textAlign="center" color="secondary.main">
              About me
            </Typography>
          </Box>
          <Grid
            container
            spacing={2}
            display="flex"
            justifyContent="center"
            pb={3}
          >
            <Grid size={{ xs: 9, md: 2.5 }}>
              <AnimationComponent moveDirection="right">
                <StyledCard variant="outlined">
                  <WorkspacePremiumIcon />
                  <Typography textAlign="center" fontWeight={600}>
                    Experience
                  </Typography>
                  <Typography textAlign="center">Não tenho</Typography>
                  <Typography textAlign="center">
                    Atrás da primeira oportunidade
                  </Typography>
                </StyledCard>
              </AnimationComponent>
            </Grid>
            <Grid size={{ xs: 9, md: 2.5 }}>
              <AnimationComponent moveDirection="left">
                <StyledCard variant="outlined">
                  <SchoolIcon />
                  <Typography textAlign="center" fontWeight={600}>
                    Education
                  </Typography>
                  <Typography textAlign="center">Associate Degree</Typography>
                  <Typography textAlign="center">
                    Systems Analysis and Development
                  </Typography>
                </StyledCard>
              </AnimationComponent>
            </Grid>
          </Grid>
          <Box pb={1}>
            <Typography>
              Sou desenvolvedora front-end com foco na criação de interfaces
              modernas, responsivas e acessíveis. Tenho experiência com
              tecnologias como React, JavaScript, TypeScript, Material UI, além
              de boas práticas com Git, Figma, HTML e CSS. Atualmente, curso
              Tecnologia em Análise e Desenvolvimento de Sistemas na FEPI, onde
              também participo de projetos de extensão. Tenho formação técnica
              em Marketing e um curso complementar em Design de Interfaces, o
              que me ajuda a unir design e código de forma estratégica. Sou
              curiosa, dedicada e apaixonada por transformar ideias em
              experiências digitais eficientes e agradáveis para o usuário.
            </Typography>
          </Box>
          <hr />
          <Box id="skills" pt={1} mb={3}>
            <Typography
              variant="h3"
              textAlign="center"
              fontWeight={300}
              color="secondary.main"
            >
              Skills
            </Typography>
          </Box>
          <Box mb={5}>
            <Grid container spacing={3} justifyContent="center">
              {skillsSet.map((skill, index) => (
                <Grid size={{ xs: 5, sm: 4, md: 2, lg: 2 }} key={index}>
                  <StyledCard variant="outlined">{skill}</StyledCard>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </StyledAbout>
    </>
  );
};

export default AboutSection;
