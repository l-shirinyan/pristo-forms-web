import { isRtlLanguage } from './isRtlLanguage';

export function setDocumentDirection(lang: string) {
  document.dir = isRtlLanguage(lang) ? 'rtl' : 'ltr';
}
