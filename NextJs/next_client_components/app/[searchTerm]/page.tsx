// create a search results compoentn s
import getWikiResults from '@/lib/getWikiResults'

import React from 'react'

type Props = {
    params:{
        searchTerm:string
    }
}
export async function generateMetadata({
    params:{searchTerm}}:Props)
    {
        const wikiData:Promise<SearchResult>=getWikiResults(searchTerm)
        const data=await wikiData
        const displayTerm = searchTerm.replaceAll('%20',' ')
        // if we have no results
        if(!data?.query?.pages)
        {
            return {
                title:`${displayTerm} not found`
            }
        }

        return {
            title:displayTerm,
            description:`Search Results for ${displayTerm}`
        }

    }


export default async function SearchResults({params:{searchTerm}}: Props) {
    const wikiData:Promise<SearchResult> = getWikiResults(searchTerm)
    const data=await wikiData
    const results: Result[] | undefined = data?.query?.pages
    const content = (
        <main className='bg-slate-200 mx-auto max-w-lg py-1 min-h-screen'>
            { results
                ? Object.values(results).map(result => {
                    return <p>{JSON.stringify(result)}</p>
                })

                :<h2 className='p-2 text-xl'>{`${searchTerm} Not found `}</h2>
            }

        </main>
    )
  return content
}