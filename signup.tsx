import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { green, red } from "@mui/material/colors"; // Import MUI's color system
import { Link } from "react-router-dom";

function SignUp() {
  const theme = createTheme({
    palette: {
      primary: {
        main: green[900], // Change primary color to dark green
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>

          <form>
            <TextField
              id="username"
              name="username"
              label="Username"
              variant="standard"
              color="primary"
              fullWidth
              required
              sx={{ mt: 1 }}
            />
            <TextField
              id="email"
              name="email"
              label="E-mail"
              variant="standard"
              fullWidth
              required
              sx={{ mt: 1 }}
            />

            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              variant="standard"
              fullWidth
              required
              sx={{ mt: 1 }}
            />

            <TextField
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              variant="standard"
              fullWidth
              required
              sx={{ mt: 1 }}
            />

            <TextField
              id="organisation"
              name="organisation"
              label="Organisation"
              variant="standard"
              fullWidth
              sx={{ mt: 1 }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signin">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;
