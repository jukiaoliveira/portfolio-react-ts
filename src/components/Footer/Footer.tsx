import { Box, Container, IconButton, Typography, useTheme } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer: React.FC = () => {

    const theme = useTheme();

    return (
        <>
            <Box pt={2} pb={2} sx={{ backgroundColor: theme.palette.primary.main, color: theme.palette.secondary.main }}>
                <Container maxWidth="sm">
                    <Box display="flex" alignItems="center" justifyContent="space-around" pb={1}>
                        <IconButton onClick={() => window.open("https://github.com/jukiaoliveira")} color="secondary">
                            <GitHubIcon />
                        </IconButton>
                        <IconButton onClick={() => window.open("https://www.linkedin.com/in/jurafaoliveira/")} color="secondary">
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton href="mailto:jurafaoliveira@icloud.com" target="_blank" color="secondary">
                            <EmailIcon />
                        </IconButton >
                    </Box>
                    <Typography textAlign="center">
                        © 2025 Julia Oliveira - All rights reserved
                    </Typography>
                </Container>
            </Box>
        </>
    )
}

export default Footer