/* eslint-disable prettier/prettier */
import client from 'graphql/client'
import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphql/queries'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import PageTemplate from 'templates/Pages'

export default function Blog({heading, body}){
    const router = useRouter()

    // retorna um loading, qq coisa enquanto tá sendo criado
    if (router.isFallback) return null

    return <PageTemplate heading={heading} body={body} />
}

export async function getStaticPaths() {
    const { blogs } = await client.request(GET_PAGES, { first: 50 })
  
    const paths = blogs.map(({ slug }) => ({
      params: { slug }
    }))
  
    return { paths, fallback: true }
  }



export const getStaticProps = async ({ params }) =>{
    const {blogs} = await client.request(GET_PAGE_BY_SLUG, {
        slug: `${params?.slug}`
    })
    if(!blogs) return {notFound: true}
    return{
        props: {
            heading: blogs[0].heading,
            body: blogs[0].body.html
        }
    }
}

