import info from '__MOCKS__/info';

const coords = (t) => (
  [{
    section: 'intro',
    name: '',
    x: '',
    y: '',
    cx: '',
    cy: ''
  },
  {
    section: 'monastery',
    name: t('monastery'),
    x: '145',
    y: '39',
    cx: '217',
    cy: '24'
  },
  {
    section: 'genesis',
    name: t('genesis'),
    x: '286',
    y: '27',
    cx: '358',
    cy: '12'
  },
  {
    section: 'immersion',
    name: t('immersion'),
    x: '451',
    y: '39',
    cx: '523',
    cy: '24'
  },
  {
    section: 'transmission',
    name: t('transmission'),
    x: '618',
    y: '26',
    cx: '690',
    cy: '11'
  },
  {
    section: 'dharma',
    name: t('dharma'),
    x: '832',
    y: '38',
    cx: '904',
    cy: '23'
  },
  {
    section: 'sound',
    name: t('sound'),
    x: '1100',
    y: '26',
    cx: '1172',
    cy: '11'
  },
  {
    section: 'characters',
    name: t('characters'),
    x: '1219',
    y: '45',
    cx: '1291',
    cy: '30'
  }]
);

export const sections = (t) => coords(t).map((item, i) => Object.assign({}, item, info[i]))