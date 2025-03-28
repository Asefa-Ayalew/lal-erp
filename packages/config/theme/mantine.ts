import { type MantineThemeOverride } from "@mantine/core";
export const theme: Partial<MantineThemeOverride> = {
  defaultRadius: "sm",
  primaryColor: "primary",
  primaryShade: 7,
  fontFamily: "inherit",
  fontFamilyMonospace: "inherit",
  cursorType: "default",
  scale: 1,
  fontSmoothing: true,
  focusRing: "auto",
  activeClassName: "mantine-active",
  respectReducedMotion: false,
  fontSizes: {
    xs: "calc(0.75rem * var(--mantine-scale))",
    sm: "calc(0.875rem * var(--mantine-scale))",
    md: "calc(1rem * var(--mantine-scale))",
    lg: "calc(1.125rem * var(--mantine-scale))",
    xl: "calc(1.25rem * var(--mantine-scale))",
  },
  lineHeights: {
    xs: "1.4",
    sm: "1.45",
    md: "1.55",
    lg: "1.6",
    xl: "1.65",
  },
  radius: {
    xs: "calc(0.125rem * var(--mantine-scale))",
    sm: "calc(0.25rem * var(--mantine-scale))",
    md: "calc(0.5rem * var(--mantine-scale))",
    lg: "calc(1rem * var(--mantine-scale))",
    xl: "calc(2rem * var(--mantine-scale))",
  },
  spacing: {
    xs: "calc(0.625rem * var(--mantine-scale))",
    sm: "calc(0.75rem * var(--mantine-scale))",
    md: "calc(1rem * var(--mantine-scale))",
    lg: "calc(1.25rem * var(--mantine-scale))",
    xl: "calc(2rem * var(--mantine-scale))",
  },
  shadows: {
    xs: "0 calc(0.0625rem * var(--mantine-scale)) calc(0.1875rem * var(--mantine-scale)) rgba(0, 0, 0, 0.05), 0 calc(0.0625rem * var(--mantine-scale)) calc(0.125rem * var(--mantine-scale)) rgba(0, 0, 0, 0.1)",
    sm: "0 calc(0.0625rem * var(--mantine-scale)) calc(0.1875rem * var(--mantine-scale)) rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 calc(0.625rem * var(--mantine-scale)) calc(0.9375rem * var(--mantine-scale)) calc(-0.3125rem * var(--mantine-scale)), rgba(0, 0, 0, 0.04) 0 calc(0.4375rem * var(--mantine-scale)) calc(0.4375rem * var(--mantine-scale)) calc(-0.3125rem * var(--mantine-scale))",
    md: "0 calc(0.0625rem * var(--mantine-scale)) calc(0.1875rem * var(--mantine-scale)) rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 calc(1.25rem * var(--mantine-scale)) calc(1.5625rem * var(--mantine-scale)) calc(-0.3125rem * var(--mantine-scale)), rgba(0, 0, 0, 0.04) 0 calc(0.625rem * var(--mantine-scale)) calc(0.625rem * var(--mantine-scale)) calc(-0.3125rem * var(--mantine-scale))",
    lg: "0 calc(0.0625rem * var(--mantine-scale)) calc(0.1875rem * var(--mantine-scale)) rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 calc(1.75rem * var(--mantine-scale)) calc(1.4375rem * var(--mantine-scale)) calc(-0.4375rem * var(--mantine-scale)), rgba(0, 0, 0, 0.04) 0 calc(0.75rem * var(--mantine-scale)) calc(0.75rem * var(--mantine-scale)) calc(-0.4375rem * var(--mantine-scale))",
    xl: "0 calc(0.0625rem * var(--mantine-scale)) calc(0.1875rem * var(--mantine-scale)) rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 calc(2.25rem * var(--mantine-scale)) calc(1.75rem * var(--mantine-scale)) calc(-0.4375rem * var(--mantine-scale)), rgba(0, 0, 0, 0.04) 0 calc(1.0625rem * var(--mantine-scale)) calc(1.0625rem * var(--mantine-scale)) calc(-0.4375rem * var(--mantine-scale))",
  },
  headings: {
    fontWeight: "700",
    textWrap: "wrap",
    sizes: {
      h1: {
        fontSize: "calc(2.125rem * var(--mantine-scale))",
        lineHeight: "1.3",
      },
      h2: {
        fontSize: "calc(1.625rem * var(--mantine-scale))",
        lineHeight: "1.35",
      },
      h3: {
        fontSize: "calc(1.375rem * var(--mantine-scale))",
        lineHeight: "1.4",
      },
      h4: {
        fontSize: "calc(1.125rem * var(--mantine-scale))",
        lineHeight: "1.45",
      },
      h5: {
        fontSize: "calc(1rem * var(--mantine-scale))",
        lineHeight: "1.5",
      },
      h6: {
        fontSize: "calc(0.875rem * var(--mantine-scale))",
        lineHeight: "1.5",
      },
    },
  },
  breakpoints: {
    xs: "412px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },

  colors: {
    primary: [
      "#f0fff4", // Lightest Green
      "#dcfce7", // Very Light Green
      "#bbf7d0", // Light Green
      "#86efac", // Medium Light Green
      "#4ade80", // Medium Green
      "#22c55e", // Primary Green
      "#16a34a", // Darker Green
      "#15803d", // Deep Green
      "#166534", // Dark Green
      "#14532d", // Very Dark Green
      "#0f381d", // Darkest Green
    ],
  },

  components: {
    Container: {
      defaultProps: {
        sizes: {
          xs: 540,
          sm: 720,
          md: 960,
          lg: 1140,
          xl: 1320,
        },
      },
    },
    Button: {
      defaultProps: {
        size: "xs",
        fz: "12px",
        fw: 500,
        px: 12,
      },
      styles: {
        section: {
          marginRight: 4,
          marginLeft: 8,
        },
      },
    },

    Input: {
      defaultProps: {
        size: "sm",
        miw: 100,
      },
      classNames: {
        root: "form-field",
        label: "font-bold",
      },
    },
    TextInput: {
      defaultProps: {
        size: "sm",
        miw: 100,
      },
      classNames: {
        root: "form-field",
        label: "font-bold",
        error: "min-h-[15px]",
      },
    },
    // TextInput: TextInput.extend({
    //   classNames: InputClasses
    // }),
    NumberInput: {
      defaultProps: {
        size: "sm",
        miw: 100,
      },
      classNames: {
        root: "form-field",
        label: "font-bold",
      },
    },
    Select: {
      defaultProps: {
        size: "sm",
        miw: 100,
      },
      classNames: {
        root: "form-field",
        label: "font-bold",
      },
    },
    PasswordInput: {
      defaultProps: {
        size: "sm",
        miw: 100,
      },
      classNames: {
        root: "form-field",
        label: "font-bold",
      },
    },
    DatePickerInput: {
      defaultProps: {
        size: "sm",
        miw: 100,
      },
      classNames: {
        root: "form-field",
        label: "font-bold",
      },
    },
    Checkbox: {
      defaultProps: {
        size: "sm",
        miw: 60,
      },
    },
    CheckboxGroup: {
      defaultProps: {
        size: "sm",
        miw: 100,
      },
      classNames: {
        root: "form-field",
        label: "font-bold",
      },
    },
    Radio: {
      defaultProps: {
        size: "sm",
        miw: 60,
      },
    },
    RadioGroup: {
      defaultProps: {
        size: "sm",
        miw: 100,
      },
      classNames: {
        root: "form-field",
        label: "font-bold",
      },
    },
    Textarea: {
      defaultProps: {
        size: "sm",
        miw: 100,
      },
      classNames: {
        root: "form-field",
        label: "font-bold",
      },
    },
    Breadcrumbs: {
      styles: {
        breadcrumb: {
          fontSize: "14px",
        },
      },
    },
    Paper: {
      styles: {
        root: {
          backgroundColor: "var(--card)",
        },
      },
    },
    AppShell: {
      styles: {
        main: {
          backgroundColor: "#F3F4F6",
        },
        header: {
          height: 40,
        },
      },
    },
  },
};
