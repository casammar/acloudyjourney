/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import useSiteMetadata from "../hooks/use-site-metadata"

const Footer = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by {siteTitle}. All rights reserveddd.
      </div>
      <div>
        <Link
          aria-label="Link to the theme's GitHub repositoryyyy"
          href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog"
        >
          Themeeee
        </Link>
        {` `}
        by
        {` `}
        <Link aria-label="Link to the theme author's web" href="https://www.lekoarts.de/en">
          LekoArtsss
        </Link>
      </div>
    </footer>
  )
}

export default Footer