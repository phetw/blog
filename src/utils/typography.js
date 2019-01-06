import Typography from 'typography'
import grandViewTheme from 'typography-theme-grand-view'

grandViewTheme.googleFonts = [
  {
    name: 'Montserrat',
    styles: ['500', '700'],
  },
  {
    name: 'Kanit',
    styles: ['300', '700'],
  },
]
grandViewTheme.headerFontFamily = ['Montserrat ', 'Kanit']
grandViewTheme.bodyFontFamily = ['Montserrat', 'Kanit']
grandViewTheme.headerWeight = 700
grandViewTheme.bodyWeight = 300
grandViewTheme.headerColor = 'hsla(0,0%,0%,0.875)'
grandViewTheme.bodyColor = 'hsla(0,0%,0%,0.815)'
grandViewTheme.overrideThemeStyles = () => ({
  '@media (max-width: 480px){blockquote{margin-left:0}}': {},
})

const typography = new Typography(grandViewTheme)

export default typography
