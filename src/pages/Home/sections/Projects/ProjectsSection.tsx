import { Box, Container, Grid, Typography, styled } from "@mui/material";
import type { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const ProjectsSection: React.FC = () => {
  const StyledExperience = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    
  }));

  const projects = [
    {
      title: "Project Custom Countdown",
      subtitle: "2025",
      srcImg: "/public/images/contador.jpg",
      description:
        "Este projeto é um contador regressivo personalizável desenvolvido com React. O usuário pode: definir o nome do evento, escolher uma data alvo, adicionar uma imagem representando o evento, alterar a cor do tema do contador",
      technologies: "Technologies: JavaScript, HTML, CSS, React",
      websiteURL: "",
      codeURL: "https://github.com/jukiaoliveira/custom-countdown-react",
    },
    {
      title: "Project Programming Quiz",
      subtitle: "2025",
      srcImg: "/public/images/quiz.jpg",
      description:
        "Este é um projeto de quiz interativo desenvolvido com React, utilizando o Vite para uma build rápida e desenvolvimento local ágil. O quiz permite que o usuário escolha entre as linguagens HTML, CSS e JavaScript para testar seus conhecimentos com perguntas de múltipla escolha. Em algumas questões, é possível solicitar uma dica ou remover uma das alternativas, facilitando a escolha da resposta correta.",
      technologies: "Technologies: JavaScript, HTML, CSS, React",
      websiteURL: "",
      codeURL: "https://github.com/jukiaoliveira/quiz-programacao-react",
    },
    {
      title: "Project Advanced Todo List",
      subtitle: "2024",
      srcImg: "/public/images/todolist.jpg",
      description:
        "Um aplicativo avançado de lista de tarefas, onde é possível adicionar, editar, remover e filtrar tarefas. Este projeto utiliza HTML, CSS e JavaScript, e visa demonstrar habilidades em manipulação de DOM e interatividade de interfaces.",
      technologies: "Technologies: JavaScript, HTML, CSS",
      websiteURL:
        "",
      codeURL: "https://github.com/jukiaoliveira/todo-list-avancado",
    },
    {
      title: "Project Password Master",
      subtitle: "2024",
      srcImg: "/public/images/senha.jpg",
      description:
        "Um gerador de senhas seguras e personalizáveis, com opções para incluir números, letras e símbolos, além de escolher o comprimento da senha. Inclui uma tela de cadastro simples e intuitiva.",
      technologies: "Technologies: JavaScript, HTML, CSS",
      websiteURL:
        "",
      codeURL: "https://github.com/jukiaoliveira/Password-Master",
    },
  ];

  return (
    <StyledExperience>
      <Container maxWidth="lg">
        <Box id="projects" pt={5} pb={3}>
          <Typography variant="h2" textAlign="center" color="secondary">
            Projects
          </Typography>
        </Box>
        <Grid container spacing={5} pb={3}>
          {projects.map((project: ProjectCardProps, index: number) => (
            <Grid size={{ md: 6 }} key={index}>
              <AnimationComponent
                moveDirection={index % 2 == 0 ? "right" : "left"}
              >
                <ProjectCard
                  title={project.title}
                  subtitle={project.subtitle}
                  srcImg={project.srcImg}
                  description={project.description}
                  technologies={project.technologies}
                  websiteURL={project.websiteURL}
                  codeURL={project.codeURL}
                />
              </AnimationComponent>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledExperience>
  );
};

export default ProjectsSection;
