import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import dayjs from "dayjs";
import validator from "validator";
import { authenticationAction } from "../../store/action";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import history from "../../utils/history";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © Place Holder "}

      {/* <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "} */}
      {dayjs().year()}
      {"."}
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(15),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [input, setInput] = React.useState({
    email: "johndoe@gmail.com",
    password: "johndoe",
  });
  const [errorPassword, setErrorPassword] = React.useState(false);
  const [helperTextPassword, setHelperTextPassword] = React.useState("");

  const [errorEmail, setErrorEmail] = React.useState(false);
  const [helperTextEmail, setHelperTextEmail] = React.useState("");

  const [open, setOpen] = React.useState(false);

  const authentication = useSelector((state) => state.authentication);

  React.useEffect(() => {
    if (authentication.error !== "") {
      setOpen(true);
    }
  }, [authentication]);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setErrorEmail(false);
      setHelperTextEmail("");
    }
    if (name === "password") {
      setErrorPassword(false);
      setHelperTextPassword("");
    }

    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.email) {
      setErrorEmail(true);
      setHelperTextEmail("Email is empty");
    }
    if (input.email && !validator.isEmail(input.email)) {
      setErrorEmail(true);
      setHelperTextEmail("Invalid email");
    }
    if (!input.password) {
      setErrorPassword(true);
      setHelperTextPassword("Password is empty");
    }

    if (input.email && input.password && validator.isEmail(input.email)) {
      setErrorEmail(false);
      setHelperTextEmail("");
      setErrorPassword(false);
      setHelperTextPassword("");

      dispatch(authenticationAction.authenticate(input.email, input.password));
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h3">
          Place Holder
        </Typography>
        <br />
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            error={errorEmail}
            helperText={helperTextEmail}
            onChange={handleChange}
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={input.email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            error={errorPassword}
            helperText={helperTextPassword}
            onChange={handleChange}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={input.password}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to={"/v1/main"}>Go to main</Link>
            </Grid>
            {/* <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid> */}
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={"error"}>
          {authentication.error}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default SignIn;
