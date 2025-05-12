import { colors, styled } from "@mui/material";
import type { ReactNode } from "react";

interface StyledButtonProps {
    children: ReactNode;
}

const StyledButton: React.FC<StyledButtonProps> = ({children}) => {

    const StyledButton = styled("button")(({ theme }) => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.secondary.main}`,
        borderRadius: "3px",
        width: "100%",
        color: theme.palette.secondary.main,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.primary.main,
        }
  }));

    return (
        <>
            <StyledButton>
                {children}
            </StyledButton>
        </>
    )
}

export default StyledButton