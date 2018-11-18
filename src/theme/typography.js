import Typography from '../utils/typography'
import breakpoint from './breakpoints'

const typeConfig = {
  bodyFontFamily: ['Roboto Mono', 'sans-serif'],
  headerFontFamily: ['Roboto Mono', 'sans-serif'],
  bodyWeight: 300,
  headerWeight: 500,
  baseFontSize: '18px',
  baseLineHeight: 1.6,
  scaleRatio: 1.5,
  blockMarginBottom: 1,
  includeNormalize: false,
  breakpoints: {
    [`@media screen and (min-width:${breakpoint.small})`]: {
      baseFontSize: '20px',
      scaleRatio: 1.8,
    },
    [`@media screen and (min-width:${breakpoint.large})`]: {
      baseFontSize: '22px',
      scaleRatio: 1.9,
    },
  },
  overrideStyles: ({ rhythm }) => ({
    h1: {
      letterSpacing: '-1px',
    },
    'p + h1, p + h2, p + h3, p + h4, p + h5, p + h6, ul + h1, ul + h2, ul + h3, ul + h4, ul + h5, ul + h6, ol + h1, ol + h2, ol + h3, ol + h4, ol + h5, ol + h6': {
      marginTop: rhythm(2.5),
    },
    '.gatsby-highlight + h2, .gatsby-highlight + h1, .gatsby-highlight + h3, .gatsby-highlight + h4, .gatsby-highlight + h5, .gatsby-highlight + h6, pre + h2, pre + h1, pre + h3, pre + h4, pre + h5, pre + h6, pre + p': {
      marginTop: rhythm(1.5),
    },
    '.gatsby-highlight + p': {
      marginTop: rhythm(1.5),
    },
    'p + .gatsby-highlight': {
      marginTop: rhythm(-0.5),
    },
    'p:last-child': {
      marginBottom: rhythm(2),
    },
    'ul + p, ol + p': {
      marginTop: rhythm(1.5),
    },
    '.super-title': {
      fontSize: rhythm(4),
      letterSpacing: rhythm(-0.2),
      borderBottom: '3px solid black',
      paddingBottom: rhythm(1),
      marginBottom: rhythm(2),
      display: 'inline-block',
    },
  }),
}

const typography = new Typography(typeConfig)
const Rhythm = typography.rhythm
const typographyString = typography.toString()

export { Rhythm, typographyString }