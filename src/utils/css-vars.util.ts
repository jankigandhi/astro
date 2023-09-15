import { hexToRgb, mix } from './hex-to-rgb.util';

const primaryColorHash = '#006763';
export const computeCssVariables = `--font-family: 'Matter', sans-serif;
--fontSize: 16px;
--lineHeight: 24px;
--black: #1c1c1c;
--white: #ffffff;
--textColor: var(--black);
--primaryColor: ${primaryColorHash};
--primaryColorRgb: ${hexToRgb(primaryColorHash)};
--primaryColorLight: ${mix(primaryColorHash, 'ffffff', 30)};
--primaryColorLighter: ${mix(primaryColorHash, 'ffffff', 15)};
--primaryColorDark: ${mix(primaryColorHash, '000000', 80)};
--secondaryColor: var(--black)`.replace(/\n/gi, '');
