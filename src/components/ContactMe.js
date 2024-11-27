import React from "react";
import { Box, TextField, Button, Typography, Container } from "@mui/material";
import theme from "./colorTheme";

const ContactMe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 5,
        p: 3,
        background: "rgba(255, 255, 255, 0.1)", // Semi-transparent background
        borderRadius: "12px",
        boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.2)", // Outer shadow for depth
        backdropFilter: "blur(12px)", // Frosted glass effect
        WebkitBackdropFilter: "blur(12px)", // Frosted glass for Safari
        border: "1px solid rgba(255, 255, 255, 0.2)", // Subtle border
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          color: "#ffffff",
          fontWeight: "bold",
        }}
      >
        Contact Me
      </Typography>
      <Typography
        variant="body1"
        align="center"
        gutterBottom
        sx={{ color: "#b0b0b0" }}
      >
        Feel free to reach out for collaborations or just a friendly hello!
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          mt: 2,
        }}
      >
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          InputProps={{
            sx: { color: "text.primary" },
          }}
          InputLabelProps={{
            sx: { color: "text.secondary" },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "rgba(255, 255, 255, 0.1)", // Glass-like semi-transparent background
              borderRadius: "8px",
              "& fieldset": {
                borderColor: "rgba(255, 255, 255, 0.3)", // Subtle border for default
              },
              "&:hover fieldset": {
                borderColor: "rgba(255, 255, 255, 0.5)", // Slightly brighter on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "primary.main", // Theme's primary color on focus
              },
            },
            "& .MuiOutlinedInput-input": {
              color: "text.primary", // Input text color
              background: "transparent",
            },
            "& .MuiInputLabel-root": {
              color: "text.secondary", // Label default color
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "primary.main", // Label focus color
            },
          }}
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          InputProps={{
            sx: { color: "text.primary" }, // Use theme's primary text color
          }}
          InputLabelProps={{
            sx: { color: "text.secondary" }, // Use theme's secondary text color
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "rgba(255, 255, 255, 0.1)", // Glass-like semi-transparent background
              borderRadius: "8px",
              "& fieldset": {
                borderColor: "rgba(255, 255, 255, 0.3)", // Subtle border for default
              },
              "&:hover fieldset": {
                borderColor: "rgba(255, 255, 255, 0.5)", // Slightly brighter on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "primary.main", // Theme's primary color on focus
              },
            },
            "& .MuiOutlinedInput-input": {
              color: "text.primary", // Input text color
              background: "transparent",
            },
            "& .MuiInputLabel-root": {
              color: "text.secondary", // Label default color
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "primary.main", // Label focus color
            },
          }}
        />
        <TextField
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          InputProps={{
            sx: { color: "text.primary" }, // Use theme's primary text color
          }}
          InputLabelProps={{
            sx: { color: "text.secondary" }, // Use theme's secondary text color
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "rgba(255, 255, 255, 0.1)", // Glass-like semi-transparent background
              borderRadius: "8px",
              "& fieldset": {
                borderColor: "rgba(255, 255, 255, 0.3)", // Subtle border for default
              },
              "&:hover fieldset": {
                borderColor: "rgba(255, 255, 255, 0.5)", // Slightly brighter on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "primary.main", // Theme's primary color on focus
              },
            },
            "& .MuiOutlinedInput-input": {
              color: "text.primary", // Input text color
              background: "transparent",
            },
            "& .MuiInputLabel-root": {
              color: "text.secondary", // Label default color
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "primary.main", // Label focus color
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            background: "rgba(255, 255, 255, 0.1)",
            color: "black", // Use theme's primary color
            fontWeight: "bold",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            transition: "all 0.3s ease",
            "&:hover": {
              background: `linear-gradient(135deg, rgba(255, 255, 255, 0.2), ${theme.palette.primary.main})`,
              boxShadow: `0px 6px 20px ${theme.palette.primary.main}`,
              transform: "scale(1.05)",
            },
            "&:active": {
              background: "rgba(255, 255, 255, 0.15)",
              boxShadow: `0px 2px 10px ${theme.palette.primary.main}`,
              transform: "scale(0.97)",
            },
            "&:focus": {
              outline: "none",
            },
          }}
        >
          Contact Message
        </Button>
      </Box>
    </Container>
  );
};

export default ContactMe;
