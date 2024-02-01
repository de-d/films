import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, Modal, TextField, Button } from "@mui/material";
import { modalBoxStyle } from "./login.styles";
import { getUserToken, postUserToken } from "../redux/actions/modal-action";
import { RootState } from "../redux/types";

function GetTokenModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getTokenModalOpen = useSelector((state: RootState) => state.modal.getUserTokenValue);

  const closeGetModal = () => {
    dispatch(getUserToken(false));
  };
  const openPostModal = () => {
    dispatch(getUserToken(false));
    dispatch(postUserToken(true));
  };

  return (
    <Modal open={getTokenModalOpen} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={modalBoxStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Запросить токен
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <TextField sx={{ width: "100%", marginBottom: "20px" }} id="standard-basic" label="Почта" variant="standard" />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Button
            variant="text"
            onClick={() => {
              closeGetModal();
              navigate("/");
            }}
          >
            Отмена
          </Button>
          <Button
            variant="text"
            onClick={() => {
              openPostModal();
            }}
          >
            Запросить
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export { GetTokenModal };
