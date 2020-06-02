import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import lightGreen from "@material-ui/core/colors/lightGreen";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: lightGreen,
  },
  status: {
    danger: "orange",
  },
});

export default theme;
