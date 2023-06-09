import { gql } from 'graphql-request'


export const GET_PAGES = gql`
  query getPages($first: Int) {
    blogs(first: $first) {
      id
      heading
      slug
      body {
        html
      }
    }
  }
`

export const GET_PAGE_BY_SLUG = gql`
  query getPageBySlug($slug: String!) {
    blogs(where: { slug: $slug }) {
      id
      slug
      heading
      body {
        html
      }
    }
  }
`

export const GET_BLOGS = gql`
query getBlogs{
  blogs {
    heading
    slug
  }
}
`