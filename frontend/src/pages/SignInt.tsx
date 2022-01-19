import React, { useState } from "react";
import {
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import mainBg from "../assets/main-bg.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import ModalBlock from "../components/ModalBLock/ModalBlock";
const useStyles = makeStyles({
  wrapper: {
    display: "flex",
  },
  leftSide: {
    height: "100vh",
    backgroundColor: "#1d9bf0",
    flex: "0 0 50%",
    position: "relative",
  },
  leftSideImgWrapper: {
    overflow: "hidden",
    position: "absolute",
    top: 0,
    display: "flex",
    justifyContent: "center",
    right: 0,
    width: "100%",
    bottom: 0,
  },
  leftSideIconWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    color: "#Fff",
    fontSize: "25rem !important",
  },
  rightSide: {
    flex: "0 0 50%",
    padding: "3rem",
    display: "flex",
    flexDirection: "column",
  },
  rightSideIconWrapper: {
    fontSize: "2.8rem",
  },
  rightSideWrapperText: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  rightSideTitle: {
    // fontWeight: 900,
    paddingBottom: "2.5rem",
  },
  rightSideDescription: {
    // fontWeight: 900,
    letterSpacing: ".1rem",
  },
  rightSideAuth: {
    paddingTop: "3rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  rightSideRegisterBlock: {
    padding: "1rem 0 0 0 ",
    display: "flex",
    flexDirection: "column",
    width: "50%",
  },
  rightSideGoogleIcon: {
    marginRight: "1rem",
  },
  rightSideLoginBlock: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    paddingTop: "4rem",
  },
});

const SignIn = () => {
  const classes = useStyles();
  const [open, setOpen] = useState<"signIn" | "signUp" | null>(null);
  const handleClose = (): void => {
    setOpen(null);
  };

  const handleModalOpen = (type: typeof open): (() => void) => {
    return () => setOpen(type);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.leftSide}>
        <div className={classes.leftSideImgWrapper}>
          <img src={mainBg} alt="main-bg" />
        </div>
        <div className={classes.leftSideIconWrapper}>
          <TwitterIcon color="inherit" fontSize="inherit" />
        </div>
      </div>
      <div className={classes.rightSide}>
        <div className={classes.rightSideIconWrapper}>
          <TwitterIcon color="primary" fontSize="inherit" />
        </div>
        <div className={classes.rightSideWrapperText}>
          <Typography
            fontWeight={"bold"}
            component={"span"}
            className={classes.rightSideTitle}
            variant="h2">
            В курсе происходящего
          </Typography>
          <Typography
            fontWeight={"bold"}
            variant="h4"
            className={classes.rightSideDescription}>
            Присоединяйтесь к Твиттеру прямо сейчас!
          </Typography>
        </div>
        <div className={classes.rightSideRegisterBlock}>
          <Button variant="outlined" color="secondary">
            <GoogleIcon />
            <Typography>Регистрация с помощью Google</Typography>
          </Button>
          <Typography py={1} textAlign="center" component="span">
            или
          </Typography>
          <Button
            onClick={handleModalOpen("signUp")}
            variant="contained"
            color="secondary">
            <Typography>Регистрация</Typography>
          </Button>
        </div>
        <div className={classes.rightSideLoginBlock}>
          <Typography paddingBottom={1} fontWeight="bold" variant="h6">
            Уже зарегистрированы
          </Typography>
          <Button onClick={handleModalOpen("signIn")} variant="outlined">
            <Typography>Вход</Typography>
          </Button>
        </div>
      </div>
      <ModalBlock
        open={open === "signIn"}
        title="Войти в аккаунт"
        handleClose={handleClose}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type="password"
            fullWidth
          />
          <Button sx={{ my: "1rem" }} variant="contained" fullWidth>
            Вход
          </Button>
        </DialogContent>
      </ModalBlock>
      <ModalBlock open={open === "signUp"} title="Регистрация" handleClose={handleClose}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Имя"
            type="name"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type="password"
            fullWidth
          />
          <Button sx={{ my: "1rem" }} variant="contained" fullWidth>
            Далле
          </Button>
        </DialogContent>
      </ModalBlock>
    </div>
  );
};

export default SignIn;
