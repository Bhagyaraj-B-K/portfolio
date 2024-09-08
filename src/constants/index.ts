import BIO from './bio'
import PROJECTS from './projects'

interface Constants {
  STATUS: {
    ACTIVE: number;
    INACTIVE: number;
  };
  BG_IMG: {
    BG1: number;
    BG2: number;
    BG3: number;
    IMG_FILE: (img: number) => string;
  };
}

const constants: Constants = {
    STATUS: {
      ACTIVE: 1,
      INACTIVE: 2,
    },
    BG_IMG: {
        BG1: 0,
        BG2: 1,
        BG3: 2,
        IMG_FILE: (img: number) => `bg_${img}.jpg`
    }
}

export default constants;
export const bio = BIO;
export const projects = PROJECTS;