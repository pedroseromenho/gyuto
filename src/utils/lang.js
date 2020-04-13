export const selectedLang = (i18n, en, fr) => {
  switch(i18n.language){
  case 'en':
    return en;
  case 'fr':
    return fr;
  default:
    return en
  }
}

export const changeLang = (i18n) => {
  i18n.changeLanguage(
    i18n.language === 'en' 
      ? 'fr' 
      : 'en')
}