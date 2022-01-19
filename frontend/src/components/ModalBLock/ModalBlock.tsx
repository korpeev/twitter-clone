import React, { FC } from "react";
import { Dialog, DialogTitle, Typography, IconButton, Box } from "@mui/material";
import { Close as CloseIcon, Twitter as TwitterIcon } from "@mui/icons-material";
interface ModalBlockProps {
  open: boolean;
  handleClose: () => void;
  title: string;
}

const ModalBlock: FC<ModalBlockProps> = ({ children, handleClose, title, open }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <Box component="div" display={"flex"} alignItems={"center"}>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <TwitterIcon sx={{ flex: 1 }} fontSize={"large"} color="primary" />
        </Box>
        <Typography pt={1} fontWeight={"bold"} fontSize={23}>
          {title}
        </Typography>
      </DialogTitle>
      {children}
    </Dialog>
  );
};

export default ModalBlock;
