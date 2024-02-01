import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

export const FilterPaper = styled(Paper)(({ theme }) => ({
  width: 345,
  height: 850,
  margin: "25px 30px 0 12px",
  ...theme.typography.body2,
  textAlign: "center",
}));

export const boxStyles = {
  display: "flex",
  flexDirection: "column",
  width: "300px",
  height: "840px",
  margin: "0 auto",
};
export const clearBtnStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingBottom: "16px",
};
export const paginationStyles = {
  display: "flex",
  justifyContent: "center",
  width: "298px",
  marginTop: "auto",
};
