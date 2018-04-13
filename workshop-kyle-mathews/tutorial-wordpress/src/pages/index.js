import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const Post = (node) => {
  return (
    <div key={node.id}>
      <Link
        to={node.slug}
      >
        <h3>
          {node.title}{" "}
          <span>— {node.date}</span>
        </h3>
      </Link>
      <div dangerouslySetInnerHTML={ {__html: node.excerpt} }/>

      {
        node.childWordPressAcfImageGallery &&
        <Img
          resolutions={ node.childWordPressAcfImageGallery.pictures[0].picture.localFile.childImageSharp.resolutions } />
      }
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
      {
        data.allWordpressPost.edges.map(({ node }) =>
          <Post {...node} />
        )
      }
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
          childWordPressAcfImageGallery {
            id
            pictures{
              title
              picture {
                localFile {
                  childImageSharp {
                    resolutions {
                      ...GatsbyImageSharpResolutions
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
