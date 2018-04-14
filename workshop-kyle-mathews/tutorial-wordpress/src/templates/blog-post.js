import React from "react";
import Link from "gatsby-link";

export default ({data}) => {
  const node = data.wordpressPost;
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
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    wordpressPost(slug: {eq: $slug}) {
      id
      slug
      title
      content
      excerpt
      date
      modified
    }
  }
`;