"use client";

import { createTheme, MantineTheme } from "@mantine/core";

export const theme = createTheme({
  components: {
    Input: {
      styles: () => ({
        input: {
          backgroundColor: "#F6F8F9",
          borderColor: "#F6F8F9",
          padding: "0 16px",
        },
      }),
    },
    Select: {
      styles: () => ({
        input: {
          backgroundColor: "#F6F8F9",
          borderColor: "#F6F8F9",
          padding: "0 16px",
        },
      }),
    },
    Textarea: {
      styles: () => ({
        input: {
          backgroundColor: "#F6F8F9",
          borderColor: "#F6F8F9",
          padding: "25px 16px 110px 16px",
        },
      }),
    },
    Button: {
      defaultProps: {
        radius: "12px",
        size: "md", // default size
        variant: "filled", // default variant
      },
      styles: (theme: MantineTheme, params: { variant: string }) => ({
        root: {
          ...(params.variant === "filled" && {
            backgroundColor: "#B7E08A", // filled variant background color
            color: "#111111", // filled variant text color
          }),
          ...(params.variant === "default" && {
            backgroundColor: "transparent", // outline variant background
            color: "#000000", // outline variant text color
            border: "1px solid #000000", // outline border
          }),
          ...(params.variant === "light" && {
            backgroundColor: "transparent", // outline variant background
            color: "#ffffff", // outline variant text color
            border: "1px solid #ffffff", // outline border
          }),
        },
      }),
    },
  },
});
