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
      title: "CodeQuest",
      subtitle: "2025",
      srcImg: ["/images/codequest.jpg", "/images/codequest-selection.jpg", "/images/codequest-tema.jpg", "/images/codequest-questions.jpg", "/images/codequest-ranking.jpg"],
      description:
        "Este é um projeto de quiz interativo desenvolvido com React, utilizando o Vite para uma build rápida e desenvolvimento local ágil. O quiz permite que o usuário escolha entre as linguagens HTML, CSS e JavaScript para testar seus conhecimentos com perguntas de múltipla escolha. Em algumas questões, é possível solicitar uma dica ou remover uma das alternativas, facilitando a escolha da resposta correta.",
      technologies: "Technologies: JavaScript, HTML, CSS, React",
      websiteURL: "",
      codeURL: "https://github.com/jukiaoliveira/quiz-programacao-react",
    },
    {
      title: "Inclusive Info Page",
      subtitle: "2025",
      srcImg: ["/images/extensao-inicio.jpg", "/images/extensao-modal.jpg", "/images/extensao-medicos.jpg", "/images/extensao-depoimentos.jpg", "/images/extensão-info.jpg"],
      description:
        "Projeto de extensão desenvolvido para a faculdade, com foco em inclusão e conscientização sobre o Transtorno do Espectro Autista (TEA). A aplicação é uma landing page informativa. O objetivo é fornecer informações sobre o TEA, incluindo sintomas, diagnóstico e tratamento, além de depoimentos de pessoas com autismo e seus familiares. A página também conta com um formulário para contato.",
      technologies: "Technologies: React, JavaScript, HTML, CSS, BD: #C",
      websiteURL:
        "",
      codeURL: "https://github.com/jukiaoliveira/projeto-extensao",
    },
    {
      title: "Pam Art (REAL)",
      subtitle: "2025",
      srcImg: ["/images/pamart.jpg", "/images/pamart-home.jpg", "/images/pamart-selection.jpg", "/images/pamart-sale.jpg"],
      description:
        "Aplicação desenvolvida para facilitar o orçamento de festas. O cliente pode selecionar os itens desejados, visualizar o valor total em tempo real e enviar o pedido diretamente via WhatsApp. O sistema também oferece a opção pegue e monte, ideal para quem busca praticidade e economia.",
      technologies: "Technologies: React e Typescript",
      websiteURL: "",
      codeURL: "https://github.com/jukiaoliveira/pam-art-events",
    },
    {
      title: "Custom Countdown",
      subtitle: "2025",
      srcImg: ["/images/contador.jpg"],
      description:
        "Este projeto é um contador regressivo personalizável desenvolvido com React. O usuário pode: definir o nome do evento, escolher uma data alvo, adicionar uma imagem representando o evento, alterar a cor do tema do contador",
      technologies: "Technologies: JavaScript, HTML, CSS, React",
      websiteURL: "",
      codeURL: "https://github.com/jukiaoliveira/custom-countdown-react",
    },
    {
      title: "Advanced Todo List",
      subtitle: "2024",
      srcImg: ["/images/todolist.jpg", "/images/todolist1.jpg"],
      description:
        "Um aplicativo avançado de lista de tarefas, onde é possível adicionar, editar, remover e filtrar tarefas. Este projeto utiliza HTML, CSS e JavaScript, e visa demonstrar habilidades em manipulação de DOM e interatividade de interfaces.",
      technologies: "Technologies: JavaScript, HTML, CSS",
      websiteURL:
        "",
      codeURL: "https://github.com/jukiaoliveira/todo-list-avancado",
    },
    {
      title: "Password Master",
      subtitle: "2024",
      srcImg: ["/images/senha.jpg", "/images/gerador-senha1.jpg", "/images/gerador-senha2.jpg"],
      description:
        "Um gerador de senhas seguras e personalizáveis, com opções para incluir números, letras e símbolos, além de escolher o comprimento da senha. Inclui uma tela de cadastro simples e intuitiva.",
      technologies: "Technologies: JavaScript, HTML, CSS",
      websiteURL:
        "",
      codeURL: "https://github.com/jukiaoliveira/Password-Master",
    },
    {
      title: "IMC Calculator + Teste de Software",
      subtitle: "2025",
      srcImg: ["/images/calc-imc-test.jpg", "/images/calc-imc-test-resultado.jpg",],
      description:
        "Calculadora de IMC, além de realizar o cálculo tradicional do Índice de Massa Corporal, este projeto inclui um teste de software feito em Python para garantir que todas as funcionalidades estão operando corretamente.",
      technologies: "Technologies: JavaScript, HTML, CSS e Python",
      websiteURL:
        "",
      codeURL: "https://github.com/jukiaoliveira/calculadora-imc-software-testing",
    },
    {
      title: "Multiplication Table",
      subtitle: "2024",
      srcImg: ["/images/tabuada.jpg", "/images/tabuada-resultado.jpg",],
      description:
        "Projeto simples e interativo o usuário escolhe qual número deseja multiplicar e até quantas vezes, gerando automaticamente a tabuada com base nas escolhas.",
      technologies: "Technologies: JavaScript, HTML e CSS",
      websiteURL:
        "",
      codeURL: "https://github.com/jukiaoliveira/multiplication-table-js",
    },
    {
      title: "QR Code Generator",
      subtitle: "2024",
      srcImg: ["/images/gerador-qrcode.jpg", "/images/gerador-qrcode-resultado.jpg",],
      description:
        "Aplicação permite ao usuário gerar QR Codes a partir de qualquer texto ou link inserido. Simples e funcional, o projeto converte a informação em um código escaneável instantaneamente.",
      technologies: "Technologies: JavaScript, HTML e CSS",
      websiteURL:
        "",
      codeURL: "https://github.com/jukiaoliveira/qr-code-generator",
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
