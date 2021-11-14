import Color from "../constants/Color";

export interface StyleProvider {
  textColor: Color;
  bgColor: Color;
  primaryColor: Color;
  secondaryColor: Color;
}

function useStyleProvider(theme: string): StyleProvider {
  let style: StyleProvider = {
    textColor: Color.LT_TEXT_COLOR,
    bgColor: Color.LT_BG_COLOR,
    primaryColor: Color.LT_PRIMARY_COLOR,
    secondaryColor: Color.LT_SECONDARY_COLOR,
  };

  switch (theme) {
    case "dark":
      style = {
        textColor: Color.DT_TEXT_COLOR,
        bgColor: Color.DT_BG_COLOR,
        primaryColor: Color.DT_PRIMARY_COLOR,
        secondaryColor: Color.DT_SECONDARY_COLOR,
      };
      break;
  }

  return style;
}

export default useStyleProvider;
