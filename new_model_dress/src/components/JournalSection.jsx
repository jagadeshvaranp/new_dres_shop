import React, { useState } from 'react';
import { JOURNAL_ARTICLES } from '../data/journal';
import { X, ArrowRight, BookOpen } from 'lucide-react';

export default function JournalSection() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="journal-section" className="bg-white dark:bg-[#121413] py-24 sm:py-32 border-b border-neutral-100 dark:border-neutral-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Centered Editorial Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3.5">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-neutral-900 dark:text-neutral-100 tracking-tight">
            Our Journal
          </h2>
          <p className="text-xs sm:text-[14px] text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
            More than a brand, a perspective. Our Journal is where we share the stories, moods, and daily rhythms that inform the way we design — from athletic-inspired shapes to timeless pieces built for real life.
          </p>
          <div className="pt-1">
            <button
              onClick={() => setSelectedArticle(JOURNAL_ARTICLES[0])}
              className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-medium text-neutral-900 dark:text-neutral-200 hover:text-forest-700 dark:hover:text-luxegold transition-colors tracking-wide"
            >
              <span>•</span>
              <span className="underline underline-offset-4">Unfold the Story</span>
            </button>
          </div>
        </div>

        {/* 4 Editorial Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {JOURNAL_ARTICLES.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group cursor-pointer relative aspect-[3/4] sm:aspect-[4/5] rounded-sm overflow-hidden bg-neutral-900 shadow-sm transition-all duration-500 hover:shadow-xl"
            >
              {/* Photo */}
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Bottom Caption */}
              <div className="absolute inset-x-0 bottom-0 p-5 text-white space-y-1.5">
                <h3 className="text-sm sm:text-[15px] font-normal leading-snug group-hover:text-luxegold transition-colors">
                  {article.title}
                </h3>
                <p className="text-[11px] text-neutral-300 font-light tracking-wide flex items-center gap-1.5 flex-wrap">
                  <span>{article.author}</span>
                  <span>•</span>
                  <span>{article.tag}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Reading Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div
            className="relative w-full max-w-2xl bg-white dark:bg-[#151816] text-neutral-900 dark:text-white rounded-sm shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black transition-colors"
            >
              <X size={18} />
            </button>

            <div className="aspect-[16/9] w-full bg-neutral-900 relative">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
              <div className="text-xs text-forest-700 dark:text-luxegold uppercase tracking-widest font-semibold">
                {selectedArticle.tag} • {selectedArticle.date}
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif">{selectedArticle.title}</h2>
              <p className="text-sm text-neutral-500 font-mono">By {selectedArticle.author}</p>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 font-light leading-relaxed">
                {selectedArticle.excerpt}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
                In every collection, the intention remains the same: designing foundational garments that seamlessly bridge off-duty relaxation with sartorial poise. From the subtle tension in French terry loops to the drape of Italian wool, quiet luxury is an ongoing dialogue with craftsmanship.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
