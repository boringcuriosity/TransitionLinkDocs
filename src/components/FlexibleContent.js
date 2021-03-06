import React from 'react'

import 'clipboard'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'
import 'prismjs/plugins/toolbar/prism-toolbar'
import 'prismjs/plugins/toolbar/prism-toolbar.css'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard'
import Parser from 'html-react-parser'

import ExampleGrid from './ExampleGrid'
import Link from 'gatsby-plugin-transition-link/AniLink'
import Card, { CardTag } from './Card'
import Box from './Box'
import ContentMenu from './Menus/ContentMenu'
import ParseMarkdownToJsx from './ParseMarkdownToJsx'

import { Img } from 'wordsby-components'

class FlexibleContent extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    Prism.highlightAll()
  }

  render() {
    const { rows } = this.props
    return rows.map(({ __typename: typename, ...data }, index) => {
      const type = typename.replace('WordPressAcf_', '')
      const Component = Components[type]
      return Component ? (
        <Component key={index} {...data} />
      ) : (
        console.warn(`No component found for ${type} type`)
      )
    })
  }
}

export default FlexibleContent

const Components = {
  markdown: ({ markdown: input }) => ParseMarkdownToJsx(input),
  text: ({ text }) => Parser(text),
  menu: ({ menu: { slug } }) => <ContentMenu slug={slug} />,
  image: ({ image }) => {
    return !!image && !!image.url && <Img field={image.url} />
  },
  card_grid: ({ cards }) => {
    return (
      <ExampleGrid>
        {cards.map(
          ({
            link_type,
            title,
            link,
            transition,
            bg,
            direction,
            duration,
            top,
          }) => {
            return (
              <Link
                cover={transition === 'cover'}
                fade={transition === 'fade'}
                swipe={transition === 'swipe'}
                paintDrip={transition === 'paintDrip'}
                to={link}
                duration={duration}
                direction={direction}
                top={top}
                key={title}
                bg={bg}
              >
                <Card>
                  <CardTag>{link_type.map(tag => tag.name).join(', ')}</CardTag>
                  {title}
                </Card>
              </Link>
            )
          }
        )}
      </ExampleGrid>
    )
  },
  table_of_contents: ({ title, menu, type, hash_links }) => (
    <ContentMenu
      slug={menu && menu.slug ? menu.slug : false}
      type={type}
      links={hash_links}
      title={title}
    />
  ),
  box: ({ title, content }) => {
    return (
      <Box darkTitle title={title}>
        {ParseMarkdownToJsx(content)}
      </Box>
    )
  },
}
