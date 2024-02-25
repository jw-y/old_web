import { getSortedPosts, findBlogPost } from "@/app/lib/mdx"

export function generateStaticParams() {
  const allBlogs = getSortedPosts();
  return allBlogs.map((post) => ({
    slug: post.slug,
  }))
}
 
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = findBlogPost(params.slug) || {meta: {title:""}, content: ""};
  return {
    title: post.meta.title,
  }
}

export default function Page({ params }: { params: { slug: string } }) {
    const post = findBlogPost(params.slug) || {meta: {title:""}, content: ""};
    return (
    <section>
    <h1>
        {post.meta.title}
    </h1>
    <article>
        {post.content}
    </article>
    </section>
    )
}

/*
export default function Page({ params }: { params: { slug: string } }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://leerob.io${post.metadata.image}`
              : `https://leerob.io/og?title=${post.metadata.title}`,
            url: `https://leerob.io/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Lee Robinson',
            },
          }),
        }}
      />
      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </Suspense>
        <Suspense fallback={<p className="h-5" />}>
          <Views slug={post.slug} />
        </Suspense>
      </div>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
*/
