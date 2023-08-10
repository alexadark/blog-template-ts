import { storyblokEditable } from '@storyblok/react'
import { useLoaderData, Link } from '@remix-run/react'
import type { LastPostsStoryblok, PostStoryblok } from '~/types'
import PostCard from '../PostCard'

const LastPosts = ({ blok }: LastPostsStoryblok) => {
  const { headline, grid } = blok
  const { lastPosts } = useLoaderData()
  console.log({ lastPosts })

  return (
    <div {...storyblokEditable(blok)} className="center-container">
      <h2>{headline}</h2>
      <div className={grid && 'grid grid-cols-2 gap-5'}>
        {lastPosts.map((post: PostStoryblok) => {
          return <PostCard post={post} key={post.id} grid={grid} />
        })}
      </div>
      <div className="flex justify-center mt-10">
        <Link to={`/blog`} className="button py-4 px-7">
          View all posts
        </Link>
      </div>
    </div>
  )
}

export default LastPosts
