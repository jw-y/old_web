import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

function readMDXFile(filePath: string) {
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const { data: meta, content } = matter(fileContents);
  return {meta, content};
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function getMDXData(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { meta, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));
    //let tweetIds = extractTweetIds(content);
    return {
      meta,
      slug,
      //tweetIds,
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'posts'));
}

export function findBlogPost(slug: string) {
    return getBlogPosts().find((post) => post.slug === slug);
}


export function getSortedPosts() {
  let data = getMDXData(path.join(process.cwd(), 'posts'));
  return data.sort((a, b) => {
        if (new Date(a.meta.date) > new Date(b.meta.date)){
            return -1;
        }
        return 1;
  })
}
