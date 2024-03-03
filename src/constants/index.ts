import BIO from './bio'

const constants: any = {
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