
export enum Language {
  TH = 'th',
  EN = 'en',
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}
export type Page = 'location' | 'info' | 'install';


export type Translations = {
  [key: string]: {
    [key: string]: string;
  };
};

export interface CustomerInfo {
    name: string;
    phone: string;
    email: string;
      nickname: string;
    kycFile: File | null;
    idCardAddress: string;
    idCardFile: File | null;

    presentAddress: string;
}