import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import { css } from "@emotion/react"
import { Link } from "gatsby"

export default function Home({data}) {
  return (<div style={{ color: `purple` }}>
    <Layout>
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <div>
        <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
        <p>
          What do I like to do? Lots of course but definitely enjoy building
          websites.
        </p>
        <h3>
          There are two more pages generated from markdown files.
        </h3>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug} > 
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #bbb;
                  `}
                >
                  — {node.frontmatter.date}
                </span>
              </h3> 
            </Link>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`