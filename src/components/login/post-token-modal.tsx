import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Modal, TextField, Button } from "@mui/material";
import { modalBoxStyle } from "./login.styles";
import { useDispatch, useSelector } from "react-redux";
import { setUserToken } from "../redux/actions/user-action";
import { getUserToken, postUserToken } from "../redux/actions/modal-action";
import { RootState } from "../redux/types";

function PostTokenModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [cookie, setCookie] = useCookies(["apiKey"]);
  const postTokenModalOpen = useSelector((state: RootState) => state.modal.postUserTokenValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToken(event.target.value);
  };
  const closePostModal = () => {
    dispatch(getUserToken(true));
    dispatch(postUserToken(false));
  };
  const setApiToken = () => {
    setCookie("apiKey", token, { path: "/" });
    dispatch(postUserToken(false));
    navigate("/home");
  };

  useEffect(() => {
    const token = cookie.apiKey;
    if (token) {
      dispatch(setUserToken(token));
    }
  }, [cookie, dispatch]);
  return (
    <Modal open={postTokenModalOpen} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={modalBoxStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Введите токен
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <TextField sx={{ width: "100%", marginBottom: "20px" }} id="standard-basic" label="Токен" variant="standard" onChange={handleChange} />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Button
            variant="text"
            onClick={() => {
              closePostModal();
            }}
          >
            Назад
          </Button>
          <Button
            variant="text"
            onClick={() => {
              setApiToken();
            }}
          >
            Ок
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export { PostTokenModal };
