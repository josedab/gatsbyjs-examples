import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const Post = (node) => {
  console.log("NODE", node);
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
          resolutions={ node.childWordPressAcfImageGallery.pictures[0].picture.localFile.childImageSharp.image1_resolutions } />
      }
      {
        node.childWordPressAcfImageGallery &&
        <Img
          resolutions={ node.childWordPressAcfImageGallery.pictures[0].picture.localFile.childImageSharp.image2_resolutions } />
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
        data.allWordpressPost.edges.map(({ node }, index) =>
          <Post key={index} {...node} />
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
                    image1_resolutions: resolutions(width:400, height:200) {
                      ...GatsbyImageSharpResolutions_tracedSVG
                    }
                    image2_resolutions: resolutions(width:200, height:200) {
                      ...GatsbyImageSharpResolutions_tracedSVG

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
