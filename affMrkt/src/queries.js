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

export const all_categories = gql`
    query Queries{
      allCategories {
    name
  }
 }`

 export const post_by_category = gql `
  query Queries($category: String!){
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
query Queries{
    site{
        name
        description
        logo
    }
}
`