import { motion } from 'motion/react';
import { Calendar, ArrowLeft, ExternalLink, Tag } from 'lucide-react';
import { Badge } from '../../components/ui/badge';
import { getNewsById } from './data/loader';
import { categoryColors, getCategoryIcon } from './types';

interface NewsDetailPageProps {
  newsId: string;
  onNavigate: (page: string) => void;
}

export const NewsDetailPage = ({ newsId, onNavigate }: NewsDetailPageProps) => {
  const item = getNewsById(newsId);

  if (!item) {
    return (
      <div className="min-h-screen pt-20 bg-[#F9F5F0] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#344F1F]/70 text-lg mb-4">記事が見つかりませんでした。</p>
          <button
            onClick={() => onNavigate('news')}
            className="inline-flex items-center gap-2 text-[#F4991A] font-bold hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            ニュース一覧に戻る
          </button>
        </div>
      </div>
    );
  }

  const Icon = getCategoryIcon(item.category);

  return (
    <div className="min-h-screen pt-20 bg-[#F9F5F0]">
      {/* Back navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <button
          onClick={() => onNavigate('news')}
          className="inline-flex items-center gap-2 text-[#344F1F]/70 hover:text-[#F4991A] transition-colors font-bold mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          ニュース一覧に戻る
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hero image */}
          <div className="w-full h-72 sm:h-96 rounded-2xl overflow-hidden mb-8 shadow-md">
            {item.image ? (
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#344F1F] to-[#4A6B2E] flex items-center justify-center">
                <Icon className="w-24 h-24 text-[#F4991A]" />
              </div>
            )}
          </div>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge className={`${categoryColors[item.category]} border-0 px-3 py-1 font-bold`}>
              {item.category}
            </Badge>
            <span className="flex items-center gap-1 text-sm text-[#344F1F]/60">
              <Calendar className="w-4 h-4" />
              {item.date}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-[#344F1F] mb-6 leading-tight">
            {item.title}
          </h1>

          {/* Summary / body */}
          {item.summary && (
            <p className="text-lg text-[#344F1F]/80 leading-relaxed mb-8 border-l-4 border-[#F4991A] pl-5">
              {item.summary}
            </p>
          )}

          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <Tag className="w-4 h-4 text-[#344F1F]/50" />
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm bg-[#F2EAD3] text-[#344F1F] px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Related members */}
          {item.related_members && item.related_members.length > 0 && (
            <div className="mb-8 p-5 bg-white rounded-xl border border-[#344F1F]/10">
              <p className="text-sm font-bold text-[#344F1F]/60 mb-2">関連メンバー</p>
              <p className="text-[#344F1F]">{item.related_members.join('、')}</p>
            </div>
          )}

          {/* External link */}
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F4991A] hover:bg-[#D88615] text-white font-bold px-8 py-4 rounded-full transition-colors"
            >
              詳細・外部リンク
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </motion.article>
      </div>
    </div>
  );
};
