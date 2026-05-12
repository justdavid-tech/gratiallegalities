// ─────────────────────────────────────────────────────────────────────────────
// Homepage section — shows the 3 latest articles fetched live from Sanity.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getLatestPosts, urlFor } from '../lib/sanity';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

const CATEGORY_LABELS = {
  'corporate-law':        'Corporate Law',
  'litigation':           'Litigation',
  'real-estate-law':      'Real Estate Law',
  'employment-law':       'Employment Law',
  'intellectual-property':'Intellectual Property',
  'family-law':           'Family Law',
  'criminal-defense':     'Criminal Defense',
  'firm-news':            'Firm News',
};

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day:   'numeric',
    month: 'long',
    year:  'numeric',
  });
}

function SkeletonCard() {
  return (
    <div className="bg-white border border-neutral-200 overflow-hidden animate-pulse">
      <div className="h-56 bg-neutral-200" />
      <div className="p-6 space-y-4">
        <div className="h-4 w-1/4 bg-neutral-100 rounded" />
        <div className="h-6 w-3/4 bg-neutral-200 rounded" />
        <div className="space-y-2">
          <div className="h-3 w-full bg-neutral-100 rounded" />
          <div className="h-3 w-2/3 bg-neutral-100 rounded" />
        </div>
      </div>
    </div>
  );
}

function ArticleCard({ post, featured = false }) {
  const label = CATEGORY_LABELS[post.category] || post.category;
  const imageUrl = post.coverImage?.asset
    ? urlFor(post.coverImage).width(featured ? 1200 : 800).height(featured ? 600 : 500).fit('crop').auto('format').url()
    : `https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80&auto=format&fit=crop`;

  if (featured) {
    return (
      <Link 
        to={`/insights/${post.slug.current}`} 
        className="group relative flex flex-col lg:flex-row bg-white border border-neutral-200 overflow-hidden hover:shadow-brand-lg transition-all duration-500"
      >
        <div className="lg:w-3/5 overflow-hidden relative">
          <img 
            src={imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
          <span className="absolute top-6 left-6 bg-primary px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase text-white">
            Featured
          </span>
        </div>
        <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
          <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4">
            {label}
          </span>
          <h3 className="font-heading text-3xl lg:text-4xl text-secondary mb-6 leading-tight group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-neutral-500 text-sm leading-relaxed mb-8 line-clamp-3">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between mt-auto pt-6 border-t border-neutral-100">
            <div className="flex items-center gap-3">
              {post.author?.photo?.asset ? (
                <img src={urlFor(post.author.photo).width(40).height(40).url()} className="w-10 h-10 rounded-full object-cover" alt="" />
              ) : (
                <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xs uppercase">
                  {post.author?.name?.[0] || 'A'}
                </div>
              )}
              <span className="text-xs font-semibold text-secondary uppercase tracking-tight">{post.author?.name || 'Firm Attorney'}</span>
            </div>
            <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link 
      to={`/insights/${post.slug.current}`} 
      className="group bg-white border border-neutral-200 overflow-hidden hover:shadow-brand transition-all duration-300 flex flex-col"
    >
      <div className="h-56 overflow-hidden relative">
        <img 
          src={imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm border-l-2 border-primary px-3 py-1 text-[9px] font-bold tracking-widest uppercase text-secondary">
          {label}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-4 text-[10px] text-neutral-400 font-bold uppercase tracking-widest mb-4">
          <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {formatDate(post.publishedAt)}</span>
          <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {post.readTime} min</span>
        </div>
        <h3 className="font-heading text-xl text-secondary mb-4 group-hover:text-primary transition-colors leading-snug">
          {post.title}
        </h3>
        <p className="text-neutral-500 text-xs leading-relaxed line-clamp-2 mb-6">
          {post.excerpt}
        </p>
        <div className="mt-auto pt-4 border-t border-neutral-100 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-widest group-hover:text-primary transition-colors flex items-center gap-1">
            Read Inside <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function InsightsPreview() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getLatestPosts()
      .then(setPosts)
      .catch(() => setError('Unable to load our latest insights.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="insights" className="py-24 bg-neutral-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          {/* SECTION HEADER */}
      <div className="text-center mb-20">

        <div
          className="
          inline-flex items-center gap-2
          px-5 py-2
          rounded-full
          border
          backdrop-blur-xl
          mb-6
          "
           style={{
        background: '#f1ede7ff',
            borderColor: '#f1ede7ff',
          }}
        >
          <BookOpen
            className="w-4 h-4"
            style={{ color: '#d47f11' }}
          />

          <span
            className="
            text-xs
            
            font-bold
            uppercase
            tracking-[0.25em]
            text-[#d47f11]
            "

          >
            Knowledge Hub
          </span>
        </div>

        <h2
          className="
          text-5xl md:text-6xl
          font-black
          text-black
          font-heading
          leading-[1.1]
          mb-6
          "
        >
          Legal{' '}

          <span
            className="relative inline-block"
            style={{ color: '#d47f11' }}
          >
            Perspectives
          </span>
        </h2>

        <p
          className="
          text-lg
          text-black
          max-w-2xl
          mx-auto
          leading-relaxed
          "
        >
          Insights that empower and protect your business.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        </div>

        {error ? (
          <div className="text-center py-20 bg-white border border-neutral-100 shadow-sm">
            <p className="font-heading text-xl text-secondary uppercase tracking-wider">{error}</p>
          </div>
        ) : loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkeletonCard /><SkeletonCard /><SkeletonCard />
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-24 bg-white border border-dashed border-neutral-200">
            <h3 className="font-heading text-2xl text-secondary uppercase mb-2">New Insights Brewing</h3>
            <p className="text-neutral-400 text-sm">Our attorneys are currently drafting new updates for you.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Asymmetric Layout: Featured on top, others below */}
            {posts[0] && <ArticleCard post={posts[0]} featured />}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.slice(1, 3).map(post => (
                <ArticleCard key={post._id} post={post} />
              ))}
            </div>

            <div className="flex justify-center pt-12">
              <Link 
                to="/insights" 
                className="group relative inline-flex items-center gap-4 bg-secondary text-white px-10 py-5 text-xs font-bold tracking-[0.2em] uppercase overflow-hidden transition-all hover:bg-primary"
              >
                <span className="relative z-10">Explore All Insights</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}