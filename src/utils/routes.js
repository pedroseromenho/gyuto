export const routes = (t) => (
  [{
    name: t('videos'),
    pathname: "/doclist",
    isFooter: false,
    displayMobile: true,
    displayDesktop: false
  },
  {
    name: t('info'),
    pathname: "/info",
    isFooter: false,
    displayMobile: false,
    displayDesktop: true
  },
  {
    name: t('music'),
    pathname: "/music",
    isFooter: false,
    displayMobile: true,
    displayDesktop: true
  },
  {
    name: t('portraits'),
    pathname: "/portraits",
    isFooter: false,
    displayMobile: true,
    displayDesktop: true
  },
  {
    name: t('docList'),
    pathname: "/doclist",
    isFooter: true,
    displayMobile: false,
    displayDesktop: true
  },
  {
    name: t('credits'),
    pathname: "/credits",
    isFooter: true,
    displayMobile: true,
    displayDesktop: true
  }]
)