import type { JSX } from "react";
import type React from "react";
import { blue } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          variants: [
            {
              // override outlined to be dashed, usually a bad move, done for educational purposes
              props: { variant: "outlined" },
              style: {
                textTransform: "none",
                border: `2px dashed ${blue[500]}`,
              },
            },
          ],
        },
      },
    },
  },
});

export function MyThemeProvider({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>): JSX.Element {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
