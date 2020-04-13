export const routes = (t) => (
  [{
    name: t('info'),
    pathname: "/info",
    isFooter: false,
  },
  {
    name: t('music'),
    pathname: "/music",
    isFooter: false,
  },
  {
    name: t('images'),
    pathname: "/images",
    isFooter: false,
  },
  {
    name: t('docList'),
    pathname: "/doclist",
    isFooter: true,
  },
  {
    name: t('credits'),
    pathname: "/credits",
    isFooter: true,
  }]
)