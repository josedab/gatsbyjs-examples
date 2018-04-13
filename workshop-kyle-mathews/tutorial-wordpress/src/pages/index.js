import React from 'react'
import Link from 'gatsby-link'

const Post = (node) => {
  return (
    <div key={node.id}>
      <Link
        to={node.slug}
        css={{ textDecoration: `none`, color: `inherit` }}
      >
        <h3>
          {node.title}{" "}
          <span>— {node.date}</span>
        </h3>
      </Link>
      <p>
        <div dangerouslySetInnerHTML={ {__html: node.content} }/>
      </p>
    </div>
  )
}

const IndexPage = ({data}) => {

  return (
    <div>
      <h1>These are the wordpress posts</h1>
      <h4>
        Posts:
      </h4>
      {data.allWordpressPost.edges.map(({ node }) =>
        <Post {...node} />
      )}
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  )
};

export const query = graphql`
  query IndexQuery {
    allWordpressPost {
      edges {
        node {
          id
          slug
          title
          content
          excerpt
          date
          modified
        }
      }
    }
  }
`

export default IndexPage
