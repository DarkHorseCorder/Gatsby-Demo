import React from "react"
import Container from "./container"
import Header from "./header"
import { useStaticQuery } from "gatsby"

export default function Layout({ children }) {
  return (
    <Container>
      <Header data={useStaticQuery(query)}/>
      {children}
    </Container>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`