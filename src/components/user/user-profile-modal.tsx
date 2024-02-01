import { useDispatch, useSelector } from "react-redux";
import { visibleUserProfile } from "../redux/actions/modal-action";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Modal, Button } from "@mui/material";
import { modalBoxStyle } from "../login/login.styles";
import { RootState } from "../redux/types";
import { AppDispatch } from "../redux/store";
import { fetchFavoriteMovies } from "../redux/api/movie-action";

function UserProfileModal() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const checkFavoriteMovies = useSelector((state: RootState) => state.favoriteMovies);
  const userProfileModalOpen = useSelector((state: RootState) => state.modal.visibleUserProfile);

  const checkFavoriteMoviesHandler = () => {
    dispatch(fetchFavoriteMovies());
    console.log(checkFavoriteMovies);
  };

  const closePostModal = () => {
    dispatch(visibleUserProfile(false));
  };
  return (
    <Modal open={userProfileModalOpen} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={modalBoxStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Профиль пользователя
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="text"
            onClick={() => {
              checkFavoriteMoviesHandler();
            }}
          >
            Узнать список избранного
          </Button>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Button
            variant="text"
            onClick={() => {
              closePostModal();
              navigate("/");
            }}
          >
            Выйти
          </Button>
          <Button
            variant="text"
            onClick={() => {
              closePostModal();
            }}
          >
            Закрыть
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export { UserProfileModal };
