import { Link, useLocation } from "react-router-dom";
import Layout from "../component/Layout";
import SEO from "../component/SEO";

export default function NotFoundPage() {
  const { pathname } = useLocation();
  return (
    <Layout>
      <SEO
        title="Page not found | Skilltrixa"
        description="The page you requested could not be found. Return to Skilltrixa home or browse programs and blogs."
        url={pathname || "/"}
        noindex
      />
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
        <p className="text-sm font-semibold text-[#ED0331]">404</p>
        <h1 className="mt-2 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-gray-600">
          That URL may have moved or doesn&apos;t exist. Try the home page or our
          programs below.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="rounded-lg bg-[#ED0331] px-6 py-3 font-semibold text-white hover:bg-[#87021C]"
          >
            Home
          </Link>
          <Link
            to="/blogs"
            className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-800 hover:border-[#ED0331]"
          >
            Blogs
          </Link>
        </div>
      </div>
    </Layout>
  );
}
