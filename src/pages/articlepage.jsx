// src/pages/ArticlePage.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Individual article page at /insights/:slug
// Renders Sanity Portable Text with @portabletext/react
// ─────────────────────────────────────────────────────────────────────────────
import Navbar from '../components/navbar';
import Footer from '../components/footer';

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import { getPostBySlug, urlFor } from '../lib/sanity';
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, Bookmark } from 'lucide-react';

const SITE_URL = 'https://gratiacorporateconsult.com';
const SITE_NAME = 'Gratia Corporate Consult';
const FALLBACK_IMAGE = `${SITE_URL}/assets/logo-dark.jpeg`;

// ── Dynamic SEO / JSON-LD injector ───────────────────────────────────────────
function useSeoHead(post) {
  useEffect(() => {
    if (!post) return;

    const slug     = post.slug?.current ?? '';
    const pageUrl  = `${SITE_URL}/insights/${slug}`;
    const title    = `${post.title} | ${SITE_NAME}`;
    const desc     = post.excerpt || `Read ${post.title} on the Gratia Corporate Consult blog.`;
    const imgUrl   = post.coverImage?.asset
      ? urlFor(post.coverImage).width(1200).height(630).fit('crop').auto('format').url()
      : FALLBACK_IMAGE;
    const author   = post.author?.name ?? SITE_NAME;
    const pubDate  = post.publishedAt ? new Date(post.publishedAt).toISOString() : new Date().toISOString();
    const modDate  = post._updatedAt  ? new Date(post._updatedAt).toISOString()  : pubDate;

    const prevTitle = document.title;
    document.title = title;

    const injected = [];
    const setMeta = (attr, attrVal, content) => {
      let el = document.querySelector(`meta[${attr}="${attrVal}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, attrVal);
        document.head.appendChild(el);
        injected.push(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('name', 'description', desc);
    setMeta('name', 'author', author);

    let canonical = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonical?.href;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
      injected.push(canonical);
    }
    canonical.href = pageUrl;

    // Open Graph
    setMeta('property', 'og:type', 'article');
    setMeta('property', 'og:url', pageUrl);
    setMeta('property', 'og:title', post.title);
    setMeta('property', 'og:description', desc);
    setMeta('property', 'og:image', imgUrl);

    // Twitter
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', post.title);
    setMeta('name', 'twitter:description', desc);
    setMeta('name', 'twitter:image', imgUrl);

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: desc,
      image: imgUrl,
      datePublished: pubDate,
      dateModified: modDate,
      author: { '@type': 'Person', name: author },
      publisher: {
        '@type': 'Organization',
        name: SITE_NAME,
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` }
      }
    };
    const ldScript = document.createElement('script');
    ldScript.type = 'application/ld+json';
    ldScript.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(ldScript);

    return () => {
      document.title = prevTitle;
      if (prevCanonical) canonical.href = prevCanonical;
      injected.forEach(el => el.parentNode?.removeChild(el));
      ldScript.parentNode?.removeChild(ldScript);
    };
  }, [post]);
}

const CATEGORY_LABELS = {
  'corporate-law':                'Corporate Law',
  'contracts-legal-documentation': 'Contracts & Legal Documentation',
  'commercial':                   'Commercial Law',
  'real-estate':                  'Real Estate Law',
  'commercial-advisory':          'Commercial Advisory',
  'contract-drafting':           'Contract Drafting',
  'employment':                   'Employment Law',
  'legal-advisory':               'Legal Advisory',
  'legalDueDiligence':            'Legal Due Diligence',
  'online-business':              'Online Business Law',
};

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

// ── Portable Text component overrides ────────────────────────────────────────
const ptComponents = {
  block: {
    normal:     ({ children }) => <p className="text-neutral-600 text-lg leading-[1.8] mb-8 font-sans">{children}</p>,
    h2:         ({ children }) => <h2 className="font-heading text-3xl text-secondary mt-16 mb-6 font-bold uppercase tracking-tight">{children}</h2>,
    h3:         ({ children }) => <h3 className="font-heading text-2xl text-secondary mt-12 mb-4 font-bold uppercase">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary bg-neutral-50 p-8 my-12 italic text-xl text-secondary leading-relaxed font-heading">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-secondary">{children}</strong>,
    link:   ({ value, children }) => (
      <a href={value.href} className="text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary transition-all">
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => (
      <figure className="my-16 space-y-4">
        <img
          src={urlFor(value).width(1200).auto('format').url()}
          alt={value.alt || ''}
          className="w-full h-auto rounded-sm border border-neutral-100"
        />
        {value.caption && <figcaption className="text-center text-xs text-neutral-400 italic uppercase tracking-widest">{value.caption}</figcaption>}
      </figure>
    ),
  },
};

export default function ArticlePage() {
  const { slug }    = useParams();
  const [post,    setPost]    = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);
  const [copied,  setCopied]  = useState(false);

  useSeoHead(post);

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getPostBySlug(slug)
      .then(data => {
        if (!data) setError('Publication not found.');
        else setPost(data);
      })
      .catch(() => setError('Unable to load this publication.'))
      .finally(() => setLoading(false));
  }, [slug]);

  const label = post ? (CATEGORY_LABELS[post.category] || post.category) : '';

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {loading ? (
        <div className="pt-32 px-6">
          <div className="max-w-4xl mx-auto space-y-8 animate-pulse">
            <div className="h-4 w-24 bg-neutral-100" />
            <div className="h-16 w-3/4 bg-neutral-200" />
            <div className="h-[500px] bg-neutral-100" />
          </div>
        </div>
      ) : error ? (
        <div className="pt-48 pb-32 text-center px-6">
          <h1 className="font-heading text-3xl text-secondary mb-8 uppercase">{error}</h1>
          <Link to="/insights" className="bg-secondary text-white px-10 py-4 text-xs font-bold tracking-widest uppercase hover:bg-primary transition-colors inline-block">
            Back to Library
          </Link>
        </div>
      ) : (
        <article>
          {/* Article Header */}
          <header className="pt-32 pb-16 border-b border-neutral-100">
            <div className="max-w-4xl mx-auto px-6">
              <Link to="/insights" className="group inline-flex items-center gap-2 text-neutral-300 hover:text-primary transition-colors text-[10px] font-bold uppercase tracking-widest mb-12">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Insights
              </Link>
              
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 border-l-2 border-primary">
                  {label}
                </span>
                <div className="h-px flex-1 bg-neutral-100" />
              </div>

              <h1 className="font-heading text-4xl md:text-6xl text-secondary leading-[1.1] font-black uppercase mb-10">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center justify-between gap-8 py-8 border-y border-neutral-100">
                <div className="flex items-center gap-4">
                  {post.author?.photo?.asset ? (
                    <img src={urlFor(post.author.photo).width(48).height(48).url()} className="w-12 h-12 rounded-full object-cover" alt="" />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-sm uppercase">
                      {post.author?.name?.[0] || 'A'}
                    </div>
                  )}
                  <div>
                    <h4 className="text-[11px] font-bold text-secondary uppercase tracking-wider">{post.author?.name || 'Firm Attorney'}</h4>
                    <p className="text-[10px] text-neutral-400 font-medium uppercase tracking-widest">{post.author?.role || 'Legal Counsel'}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-[10px] text-neutral-400 font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-2.5"><Calendar className="w-4 h-4 text-primary" /> {formatDate(post.publishedAt)}</span>
                  <span className="flex items-center gap-2.5"><Clock className="w-4 h-4 text-primary" /> {post.readTime} min read</span>
                  
                  <button 
                    onClick={handleShare}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-300 ${
                      copied 
                      ? 'bg-primary text-white' 
                      : 'bg-neutral-50 text-neutral-500 hover:bg-neutral-100'
                    }`}
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    {copied ? 'Link Copied!' : 'Share Article'}
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          {post.coverImage?.asset && (
            <div className="max-w-6xl mx-auto px-6 -mt-10 lg:-mt-20">
              <img 
                src={urlFor(post.coverImage).width(1600).height(900).fit('crop').auto('format').url()} 
                alt={post.title} 
                className="w-full h-auto object-cover shadow-2xl rounded-sm"
              />
            </div>
          )}

          {/* Article Body */}
          <div className="max-w-4xl mx-auto px-6 py-24 relative">

            {/* Excerpt Lead */}
            <div>
              <p className="font-heading text-2xl lg:text-3xl text-secondary leading-relaxed font-medium italic opacity-80 border-b border-neutral-100 pb-10">
                {post.excerpt}
              </p>
            </div>

            {/* Main Content */}
            <div className="prose prose-neutral max-w-none">
              {post.body
                ? <PortableText value={post.body} components={ptComponents} />
                : <p className="text-neutral-400 italic">This publication content is currently being finalized.</p>
              }
            </div>

            {/* Author Footer Card */}
            {post.author && (
              <footer className="mt-24 border-t border-neutral-100">
                <div className="bg-neutral-50 p-10 lg:p-16 flex flex-col md:flex-row gap-10 items-center text-center md:text-left">
                  {post.author.photo?.asset ? (
                    <img src={urlFor(post.author.photo).width(120).height(120).url()} className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover border-4 border-white shadow-lg" alt="" />
                  ) : (
                    <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-3xl uppercase shadow-lg">
                      {post.author.name?.[0] || 'A'}
                    </div>
                  )}
                  <div className="flex-1">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-4 block">About the Author</span>
                    <h3 className="font-heading text-2xl text-secondary uppercase font-bold mb-4">{post.author.name}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed mb-6 font-medium">
                      {post.author.role} at Gratia Corporate Consult. Specialist in complex corporate legal frameworks and strategic advocacy.
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                      <Link to="/contact" className="text-[10px] font-bold text-secondary uppercase tracking-widest flex items-center gap-2 hover:text-primary transition-colors">
                        Consult with Author <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <button 
                        onClick={handleShare}
                        className="text-[10px] font-bold text-secondary uppercase tracking-widest flex items-center gap-2 hover:text-primary transition-colors border-l border-neutral-200 pl-4"
                      >
                        {copied ? 'Link Copied!' : 'Copy Share Link'} <Share2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </footer>
            )}

            {/* Navigation Secondary */}
            <div className="mt-20 flex justify-center">
              <Link to="/insights" className="group inline-flex items-center gap-4 bg-secondary text-white px-12 py-5 text-xs font-bold tracking-[0.2em] uppercase transition-all hover:bg-white hover:text-secondary hover:ring-1 hover:ring-secondary">
                Explore Full Library <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </article>
      )}

      <Footer />
    </div>
  );
}