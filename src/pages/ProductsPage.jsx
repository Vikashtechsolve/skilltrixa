import { ExternalLink } from "lucide-react";
import Layout from "../component/Layout";
import SEO from "../component/SEO";
import { buildProductPlatformListSchema } from "../config/seoConfig";

const platforms = [
  {
    name: "Skilltrixa LMS",
    url: "https://course.skilltrixa.com/",
    description:
      "Learning management system with structured courses, materials, and progress tracking.",
    accent: "from-[#ED0331]/10 to-[#87021C]/5",
  },
  {
    name: "Test Platform",
    url: "https://test.skilltrixa.com/",
    description:
      "Practice coding problems, timed tests, and contests to sharpen interview readiness.",
    accent: "from-blue-500/10 to-indigo-500/5",
  },
  {
    name: "Online Courses",
    url: "https://learn.skilltrixa.com/",
    description:
      "Instructor-led online programs to start learning full stack, analytics, and core skills.",
    accent: "from-emerald-500/10 to-teal-500/5",
  },
];

export default function ProductsPage() {
  const listSchema = buildProductPlatformListSchema(
    platforms.map(({ name, url, description }) => ({
      name,
      url,
      description,
    }))
  );

  return (
    <Layout>
      <SEO
        title="Learning Products | LMS, Tests & Online Courses | Skilltrixa"
        description="Explore Skilltrixa products: LMS portal at course.skilltrixa.com, assessments at test.skilltrixa.com, and live online courses at learn.skilltrixa.com."
        keywords="Skilltrixa LMS, coding test platform, online courses India, learn.skilltrixa, course.skilltrixa, test.skilltrixa"
        url="/products"
        image="/images/preview-home.png"
        jsonLd={listSchema}
      />

      <section className="relative border-b border-gray-200 bg-gradient-to-b from-white via-gray-50 to-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(237, 3, 49, 0.12), transparent 70%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl px-4 py-14 text-center md:py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#ED0331]">
            Our products
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            Platforms that power your learning
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Skilltrixa runs dedicated products for courses, assessments, and live
            programs. Sign in on each subdomain with your learner account.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {platforms.map(({ name, url, description, accent }) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col rounded-2xl border border-gray-200 bg-gradient-to-br ${accent} p-8 shadow-sm transition hover:border-[#ED0331]/40 hover:shadow-md`}
            >
              <div className="flex items-start justify-between gap-2">
                <h2 className="font-serif text-xl font-bold text-gray-900 group-hover:text-[#ED0331]">
                  {name}
                </h2>
                <ExternalLink
                  className="h-5 w-5 shrink-0 text-gray-400 group-hover:text-[#ED0331]"
                  aria-hidden
                />
              </div>
              <p className="mt-4 flex-1 text-gray-600">{description}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[#ED0331]">
                Open platform
                <ExternalLink className="h-4 w-4" aria-hidden />
              </span>
            </a>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-gray-500">
          Prefer the main site? Explore{" "}
          <a href="/masterClass" className="font-semibold text-[#ED0331] hover:underline">
            Masterclasses
          </a>
          ,{" "}
          <a
            href="/oneToOneMentoring"
            className="font-semibold text-[#ED0331] hover:underline"
          >
            mentorship
          </a>
          , and{" "}
          <a href="/blogs" className="font-semibold text-[#ED0331] hover:underline">
            our blog
          </a>
          .
        </p>
      </section>
    </Layout>
  );
}
