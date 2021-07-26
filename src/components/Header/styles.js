import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: "white",
  },
  button: {
    color: "white",
    alignItems: "flex-end",
  },
  logo: {
    width: "150px",
    padding: "10px",
  },
  toolbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  div: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
}));
