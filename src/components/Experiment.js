import { Box, Paper } from "@mui/material";

const Experiment = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 0, 0)",
      }}
    >
      <Box>
        <Paper
          elevation={3}
          sx={{
            backgroundColor: "rgb(255, 255, 255)",
          }}
        >
          <Box
            component="img"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original-wordmark.svg"
            alt="Software Skill Icon"
            sx={{
              objectFit: "contain",
              borderRadius: 2,
            }}
          />
        </Paper>
      </Box>
    </Box>
  );
};

export default Experiment;
