import { BlogHero } from "@/components/BlogHero";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Blog | LENCA",
  description: "Stories, recipes, and news from LENCA.",
};

const BLOG_POSTS = [
  {
    tag: "ARTICLES",
    title: "Savor the Flavors: A Taste of Italy",
    excerpt:
      "The Kitchen Table at The Modern offers a truly extraordinary dining experience that combines culinary excellence with a behind-the-scenes glimpse into the world of fine dining.",
    author: "David Lee",
    image: "/images/couple_dining-p-800.jpg",
    imageAlt: "Couple dining outdoors by a lake at sunset",
    href: "#",
  },
  {
    tag: "FEATURED",
    title: "Our Culinary Journey Through Italy",
    excerpt:
      "Our culinary journey through Italy was an unforgettable experience. From the hearty flavors of Tuscany to the fresh seafood of Sicily, we were amazed by the diversity and quality of Italian cuisine. We can't wait to return to Italy and explore even more of its culinary treasures.",
    author: "Maria Lopez",
    image: "/images/view_of_Tuscany-p-800.jpg",
    imageAlt: "Outdoor dining table overlooking Tuscan landscape",
    href: "#",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#111]">
      <BlogHero />
      <section className="py-24 pl-[4rem] pr-[4rem]">
        <div className="mx-auto max-w-5xl space-y-16">
          {BLOG_POSTS.map((post, index) => (
            <article
              key={post.title}
              className="grid min-h-0 grid-cols-1 overflow-hidden rounded-sm bg-[#1e1e1e] md:grid-cols-[1fr_1fr] md:min-h-[320px] opacity-0 animate-fade-in-up [animation-fill-mode:forwards]"
              style={{ animationDelay: index === 0 ? "0ms" : "350ms" }}
            >
              <div className="relative min-h-[260px] sm:min-h-[320px] md:h-full md:min-h-[320px]">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col justify-center px-8 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
                <span className="mb-4 inline-block w-fit bg-[#111] px-6 py-1 font-barlow-c text-[20px] font-medium uppercase tracking-widest text-header-accent">
                  {post.tag}
                </span>
                <h2 className="font-gilda text-2xl font-normal leading-tight text-white sm:text-3xl lg:text-4xl">
                  {post.title}
                </h2>
                <p className="mt-4 font-barlow text-base leading-relaxed text-[#cccccc] sm:text-lg">
                  {post.excerpt}
                </p>
                <p className="mt-5 font-barlow text-sm text-[#cccccc]">
                  <span className="text-header-accent">by</span> {post.author}
                </p>
                <Link
                  href={post.href}
                  className="mt-8 inline-flex w-fit items-center justify-center rounded-md border border-[#dfb18780] bg-[#111] px-8 py-3 font-barlow-c text-base font-semibold uppercase tracking-widest text-white transition-colors hover:bg-[#1a1a1a]"
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
