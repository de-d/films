import { useDispatch } from "react-redux";
import { visibleUserProfile } from "../redux/actions/modal-action";
import { Box, IconButton, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { GetTokenModal } from "../login/get-token-modal";
import { PostTokenModal } from "../login/post-token-modal";
import { UserProfileModal } from "../user/user-profile-modal";

function Header({ title }: { title: string }) {
  const dispatch = useDispatch();

  const openGetModal = () => {
    dispatch(visibleUserProfile(true));
  };
  return (
    <Box sx={{ width: "100%", backgroundColor: "#2196F3" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "1560px",
          margin: "0 auto",
          height: "64px",
          backgroundColor: "#2196F3",
        }}
      >
        <Typography variant="h1" sx={{ fontSize: "20px", color: "#fff" }}>
          {title}
        </Typography>
        <IconButton onClick={openGetModal}>
          <AccountCircleIcon sx={{ color: "#fff" }} />
        </IconButton>
        <GetTokenModal />
        <PostTokenModal />
        <UserProfileModal />
      </Box>
    </Box>
  );
}

export { Header };
