const themeLight = {
  'primary': '#3E4455',
  'secondary': '#333333',
  'accent': '#FF023E',
  'bg_primary': '#FFFFFF',
  'bg_secondary': '#e0dcd7'
};

const themeDark = {
  'primary': themeLight.bg_primary,
  'secondary': themeLight.bg_secondary,
  'accent': themeLight.accent,
  'bg_primary': themeLight.primary,
  'bg_secondary': themeLight.secondary
};

const themes = {
  'light': themeLight,
  'dark': themeDark
};

export default themes;
