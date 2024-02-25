import Link from 'next/link';
import { getSortedPosts } from '../lib/mdx';

export default function Page() {
    const allBlogs = getSortedPosts();
    console.log(allBlogs);
    return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Blog
      </h1>
      {allBlogs
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.meta.title} 
              </p>
            </div>
          </Link>
        ))}
    </section>
    );
}
