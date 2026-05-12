// src/pages/InsightsPage.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Full /insights page — lists ALL articles with category filter tabs.
// ─────────────────────────────────────────────────────────────────────────────
import Navbar from '../components/navbar';
import Footer from '../components/footer';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts, urlFor } from '../lib/sanity';
import { Search, Calendar, Clock, ArrowRight, X } from 'lucide-react';

const CATEGORY_LABELS = {
  all:                            'All Insights',
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
  'property-dispute':             'Property Dispute Resolution',
};

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

function ArticleCard({ post }) {
  const label = CATEGORY_LABELS[post.category] || post.category;
  const imageUrl = post.coverImage?.asset
    ? urlFor(post.coverImage).width(800).height(500).fit('crop').auto('format').url()
    : 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format&fit=crop';

  return (   
    <Link 
      to={`/insights/${post.slug.current}`} 
      className="group bg-white border border-neutral-200 overflow-hidden hover:shadow-brand transition-all duration-300 flex flex-col"
    >
      <div className="h-64 overflow-hidden relative">
        <img 
          src={imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
        <span className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm border-l-2 border-primary px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase text-secondary">
          {label}
        </span>
      </div>
      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center gap-4 text-[10px] text-neutral-400 font-bold uppercase tracking-widest mb-4">
          <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {formatDate(post.publishedAt)}</span>
          <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime} min</span>
        </div>
        <h3 className="font-heading text-2xl text-secondary mb-4 group-hover:text-primary transition-colors leading-tight">
          {post.title}
        </h3>
        <p className="text-neutral-500 text-sm leading-relaxed line-clamp-2 mb-8">
          {post.excerpt}
        </p>
        <div className="mt-auto pt-6 border-t border-neutral-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {post.author?.photo?.asset ? (
              <img src={urlFor(post.author.photo).width(32).height(32).url()} className="w-8 h-8 rounded-full object-cover" alt="" />
            ) : (
              <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-[10px] uppercase">
                {post.author?.name?.[0] || 'A'}
              </div>
            )}
            <span className="text-[10px] font-bold text-secondary uppercase tracking-wider">{post.author?.name || 'Firm Attorney'}</span>
          </div>
          <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

function SkeletonCard() {
  return (
    <div className="bg-white border border-neutral-200 overflow-hidden animate-pulse">
      <div className="h-64 bg-neutral-200" />
      <div className="p-8 space-y-4">
        <div className="h-4 w-1/3 bg-neutral-100 rounded" />
        <div className="h-7 w-5/6 bg-neutral-200 rounded" />
        <div className="space-y-2">
          <div className="h-3 w-full bg-neutral-100 rounded" />
          <div className="h-3 w-2/3 bg-neutral-100 rounded" />
        </div>
      </div>
    </div>
  );
}

export default function InsightsPage() {
  const [allPosts,    setAllPosts]    = useState([]);
  const [activeTab,   setActiveTab]   = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading,     setLoading]     = useState(true);
  const [error,       setError]       = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    getAllPosts()
      .then(setAllPosts)
      .catch(() => setError('Unable to load our publication library.'))
      .finally(() => setLoading(false));
  }, []);

  const categories = ['all', ...Array.from(new Set(allPosts.map(p => p.category).filter(Boolean)))];

  const filtered = allPosts.filter(p => {
    const matchCat    = activeTab === 'all' || p.category === activeTab;
    const matchSearch = !searchQuery ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#030930] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-primary/5 -skew-x-12 translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">Corporate Library</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl text-white leading-[0.9] uppercase font-black mb-8">
              Legal <span className="text-neutral-500 font-light italic">Insights</span>
              <br /><span className="text-primary">& Developments</span>
            </h1>
            <p className="text-neutral-200 text-lg leading-relaxed max-w-2xl">
              Comprehensive analysis of emerging legal trends, landmark case reviews, and strategic guidance across our core practice areas.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <div className="sticky top-[70px] z-40 bg-white border-b border-neutral-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
                  activeTab === cat 
                  ? 'bg-[#030930] text-white' 
                  : 'bg-neutral-50 text-neutral-400 hover:bg-neutral-100 hover:text-secondary'
                }`}
              >
                {CATEGORY_LABELS[cat] || cat}
              </button>
            ))}
          </div>

          <div className="relative group min-w-[300px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-300 group-focus-within:text-primary transition-colors" />
            <input
              type="text"
              placeholder="Search library..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-50 border-none pl-12 pr-10 py-3 text-sm focus:ring-1 focus:ring-primary focus:bg-white transition-all placeholder:text-neutral-300 text-secondary"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-300 hover:text-secondary transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Results Summary */}
          {!loading && !error && (
            <div className="mb-12 flex items-center justify-between border-b border-neutral-200 pb-6">
              <h2 className="font-heading text-lg text-secondary uppercase tracking-wider">
                Showing <span className="text-primary font-bold">{filtered.length}</span> {filtered.length === 1 ? 'Publication' : 'Publications'}
              </h2>
              {activeTab !== 'all' && (
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                  Filtered by {CATEGORY_LABELS[activeTab]}
                </span>
              )}
            </div>
          )}

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
            </div>
          ) : error ? (
            <div className="text-center py-32 bg-white border border-neutral-100">
              <p className="font-heading text-xl text-secondary mb-4 uppercase tracking-wider">{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="text-primary font-bold text-xs uppercase tracking-[0.2em] hover:opacity-80 transition-opacity"
              >
                Refetch Data
              </button>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-32 bg-white border border-dashed border-neutral-200">
              <h3 className="font-heading text-2xl text-secondary uppercase mb-2">No matching results</h3>
              <p className="text-neutral-400 text-sm mb-8">Try adjusting your filters or search terms.</p>
              <button 
                onClick={() => {setActiveTab('all'); setSearchQuery('');}}
                className="bg-secondary text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-primary transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map(post => <ArticleCard key={post._id} post={post} />)}
            </div>
          )}
        </div>
      </main>

      {/* CTA Section */}
      <section className="py-32 bg-[#030930] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-heading text-4xl md:text-5xl uppercase font-black mb-8 leading-tight">
            Stay Informed with Our <span className="text-primary italic">Global</span> Perspectives
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto mb-12 text-lg">
            Our legal alerts provide timely information on the most critical developments impacting your business and interests.
          </p>
          <Link 
            to="/"
            className="group inline-flex items-center gap-4 border border-white/20 px-10 py-5 text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-secondary transition-all"
          >
            Back to Homepage <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}