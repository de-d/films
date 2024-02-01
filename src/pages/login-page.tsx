import { Header } from "../components/header/header-component";
import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { getUserToken } from "../components/redux/actions/modal-action";

function LoginPage() {
  const dispatch = useDispatch();

  const openGetModal = () => {
    dispatch(getUserToken(true));
  };
  return (
    <Box>
      <Header title={`Фильмы - Вход`} />
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Button
          sx={{
            marginTop: "400px",
            marginBottom: "100px",
            width: "200px",
            height: "50px",
          }}
          variant="contained"
          onClick={() => {
            openGetModal();
          }}
        >
          Войти
        </Button>
      </Box>
    </Box>
  );
}

export { LoginPage };
