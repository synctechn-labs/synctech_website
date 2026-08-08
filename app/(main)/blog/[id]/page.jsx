import { blogs } from "@/data/blogs/index.js";
import BlogDetails from "@/views/blog/BlogDetails";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const blog = blogs[id];

  if (!blog) {
    return {
      title: "Blog Not Found | SyncTechn",
      description: "The requested blog post could not be found."
    };
  }

  const canonicalUrl = `https://synctechn.com/blog/${blog.id}/`;

  const seoTitle = blog.metaTitle || `${blog.title} | SyncTechn`;
  const seoDescription = blog.metaDescription || blog.description;

  return {
    title: seoTitle,
    description: seoDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: canonicalUrl,
      type: "article",
      publishedTime: blog.date ? new Date(blog.date).toISOString() : undefined,
      images: [
        {
          url: blog.coverImage,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: [blog.coverImage],
    },
  };
}

export default function Page(props) {
  return <BlogDetails {...props} />;
}
