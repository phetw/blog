import Typography from 'typography'
import grandViewTheme from 'typography-theme-grand-view'

grandViewTheme.googleFonts = [
  {
    name: 'Montserrat',
    styles: ['400', '700'],
  },
  {
    name: 'Kanit',
    styles: ['400', '700'],
  },
]
grandViewTheme.headerFontFamily = ['Montserrat ', 'Kanit']
grandViewTheme.bodyFontFamily = ['Montserrat', 'Kanit']
grandViewTheme.headerWeight = 700
grandViewTheme.bodyWeight = 400
grandViewTheme.headerColor = 'hsla(0,0%,0%,0.875)'
grandViewTheme.bodyColor = 'hsla(0,0%,0%,0.815)'

const typography = new Typography(grandViewTheme)

export default typography
