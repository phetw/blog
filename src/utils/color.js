const dark = {
  menu: '#E5E9F0',
  menuBg: 'rgba(76, 86, 106, 0.8)',
  bodyBg: '#2E3440',
  cardBg: '#4C566A',
  cardTitle: '#E5E9F0',
  cardContent: '#D8DEE9',
  postBg: '#4C566A',
  postTitle: '#E5E9F0',
  postContent: '#D8DEE9',
  postContentCode: '#4C566A',
  publishDate: '#D8DEE9',
}

const light = {
  menu: '#3B4252',
  menuBg: 'rgba(236, 239, 244, 0.4)',
  bodyBg: '#D8DEE9',
  cardBg: '#F9F9F9',
  cardTitle: '#3B4252',
  cardContent: '#4C566A',
  postBg: '#F9F9F9',
  postTitle: '#3B4252',
  postContent: '#4C566A',
  postContentCode: '#4C566A',
  publishDate: '#4C566A',
}

export default theme => (theme === 'light' ? light : dark)
