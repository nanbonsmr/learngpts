import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
  image?: string;
  jsonLd?: Record<string, unknown>;
}

const SITE_NAME = "LearnGPTs";
const DEFAULT_DESCRIPTION =
  "Master ChatGPT with 24+ hands-on lessons covering prompt engineering, business automation, coding, freelancing & productivity. Free certificate included.";
const DEFAULT_IMAGE = "/og-image.png";
const BASE_URL = "https://learngpts.lovable.app";

const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  type = "website",
  image = DEFAULT_IMAGE,
  jsonLd,
}: SEOProps) => {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — Master ChatGPT with Practical Lessons`;
  const fullImage = image.startsWith("http") ? image : `${BASE_URL}${image}`;
  const fullCanonical = canonical ? `${BASE_URL}${canonical}` : undefined;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {fullCanonical && <link rel="canonical" href={fullCanonical} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={fullImage} />
      {fullCanonical && <meta property="og:url" content={fullCanonical} />}
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
