export interface FileIcon {
  src: string;
  width: number;
  height: number;
}

export interface InlineIcon {
  viewBox: string;
  paths: readonly string[];
}

export const fileIcons = {
  Accommodation: { src: '/icons/Accommodation.png', width: 35, height: 32 },
  ArrowLeft: { src: '/icons/ArrowLeft.png', width: 24, height: 24 },
  ArrowRight: { src: '/icons/ArrowRight.png', width: 31, height: 31 },
  Essay: { src: '/icons/Essay.png', width: 22, height: 19 },
  Globe: { src: '/icons/Globe.png', width: 20, height: 20 },
  Lightening: { src: '/icons/Lightening.png', width: 16, height: 20 },
  LinkedIn: { src: '/icons/LinkedIn.png', width: 20, height: 20 },
  MagicStick: { src: '/icons/MagicStick.png', width: 28, height: 28 },
  MagicStick2: { src: '/icons/MagicStick2.png', width: 20, height: 20 },
  Medal: { src: '/icons/Medal.png', width: 16, height: 20 },
  Message: { src: '/icons/Message.png', width: 20, height: 20 },
  Minus: { src: '/icons/Minus.png', width: 12, height: 2 },
  Package: { src: '/icons/Package.png', width: 20, height: 20 },
  Play: { src: '/icons/Play.svg', width: 21, height: 23 },
  Plus: { src: '/icons/Plus.png', width: 12, height: 12 },
  Question: { src: '/icons/Question.png', width: 20, height: 20 },
  Quote: { src: '/icons/Quote.png', width: 28, height: 21 },
  Telegram: { src: '/icons/Telegram.png', width: 20, height: 20 },
  User: { src: '/icons/User.png', width: 22, height: 22 },
  Video: { src: '/icons/Video.png', width: 20, height: 20 },
  X: { src: '/icons/X.png', width: 19, height: 17 },
  YT: { src: '/icons/YT.png', width: 20, height: 15 },
} satisfies Record<string, FileIcon>;

export const inlineIcons = {
  Menu: {
    viewBox: '0 0 24 24',
    paths: ['M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z'],
  },
} satisfies Record<string, InlineIcon>;

export type FileIconName = keyof typeof fileIcons;
export type InlineIconName = keyof typeof inlineIcons;
export type IconName = FileIconName | InlineIconName;

export const getFileIcon = (name: IconName): FileIcon | undefined =>
  (fileIcons as Record<string, FileIcon | undefined>)[name];

export const getInlineIcon = (name: IconName): InlineIcon | undefined =>
  (inlineIcons as Record<string, InlineIcon | undefined>)[name];
