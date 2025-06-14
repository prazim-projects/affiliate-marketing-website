import gql from "graphql-tag";

export const all_posts =  gql`
        query getPost {
        allPosts {
          id
          category {
            slug
          }
          content
          featuredImage
          isFeatured
          snapView
          affiliateLink
          user {
            username
          }
          title
        }
}`

export const all_categories = gql`
    query getAllCategories{
      allCategories {
    name
  }
 }`

export const post_by_category = gql `
  query getPostWCategory($category: String!){
    postsByCategory(category: $category) {
      content
      createdAt
      featuredImage
      id
      isFeatured
      likes {
        id
      }
    }
  }
 
 `

export const site_info = gql`
query getSite{
    site{
        name
        description
        logo
    }
}
`