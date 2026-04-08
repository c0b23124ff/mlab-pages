import { motion } from 'motion/react';
import { ArrowRight, FileText, BookOpen, Presentation } from 'lucide-react';
import { getAllPublications } from '../../achievements/data/loader';
import { Publication } from '../../achievements/types';

interface RecentAchievementsProps {
  onNavigate: (page: string) => void;
}

const typeLabel: Record<Publication['type'], string> = {
  journal: '論文誌',
  conference: '国際会議',
  workshop: 'ワークショップ',
  thesis: '学位論文',
};

const typeIcon = (type: Publication['type']) => {
  switch (type) {
    case 'journal': return BookOpen;
    case 'conference': return Presentation;
    case 'workshop': return Presentation;
    case 'thesis': return FileText;
    default: return FileText;
  }
};

export const RecentAchievements = ({ onNavigate }: RecentAchievementsProps) => {
  const items = getAllPublications().slice(0, 5);

  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#344F1F] mb-2">
              最新業績
            </h2>
            <p className="text-xl text-[#344F1F]/80">Recent Publications</p>
          </div>
          <button
            onClick={() => onNavigate('achievements')}
            className="hidden sm:flex items-center gap-2 text-[#344F1F] hover:text-[#F4991A] transition-colors font-bold group"
          >
            View All
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* List */}
        <div className="divide-y divide-[#344F1F]/10">
          {items.map((pub, index) => {
            const Icon = typeIcon(pub.type);
            return (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-start gap-4 py-5 group"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-full bg-[#F2EAD3] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#F4991A]/20 transition-colors">
                  <Icon className="w-5 h-5 text-[#344F1F]" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-[#344F1F]/60 mb-1">
                    <span className="font-bold text-[#F4991A]">{typeLabel[pub.type]}</span>
                    　{pub.venue}　{pub.year}
                  </p>
                  <p className="font-bold text-[#344F1F] leading-snug mb-1 line-clamp-2">
                    {pub.title}
                  </p>
                  <p className="text-sm text-[#344F1F]/60">{pub.authors}</p>
                  {pub.award && (
                    <span className="inline-block mt-1 text-xs bg-[#F4991A]/15 text-[#F4991A] font-bold px-2 py-0.5 rounded-full">
                      🏆 {pub.award}
                    </span>
                  )}
                </div>

                {/* Year badge */}
                <span className="flex-shrink-0 text-sm font-bold text-[#344F1F]/40 hidden sm:block">
                  {pub.year}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center sm:hidden"
        >
          <button
            onClick={() => onNavigate('achievements')}
            className="inline-flex items-center gap-2 bg-[#344F1F] hover:bg-[#2a3f18] text-white px-8 py-4 rounded-full font-bold transition-colors"
          >
            View All Publications
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
