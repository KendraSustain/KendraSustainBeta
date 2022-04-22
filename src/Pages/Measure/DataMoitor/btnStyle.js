import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  buttonGroup: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    margin: "10px 0",
  },
  button: {
    transition: "color 500ms",
  },
}));

export default useStyles;
