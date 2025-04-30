import gql from "graphql-tag";

export const all_posts =  gql`
        query Queries {
        allPosts {
          id
          category {
            slug
          }
          content
          featuredImage
          isFeatured
          user {
            username
          }
          title
        }
}`

export const site_info = gql`
query Queries{
    site{
        name
        description
        logo
    }
}
`