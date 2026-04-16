import type { ResearchProject } from '../../../types';
import classImage from '../../../images/class.svg';

const classProject: ResearchProject = {
  id: 'class',
  title: '授業',
  sortOrder: 24,
  category: 'ロボット',
  subcategory: '授業',
  description:
    'ロボット工学の基礎から応用までを体系的に学ぶ授業プログラムを提供しています。',
  image: classImage,
  detail: {
    subtitle: 'ロボット工学の教育プログラム',
    keywords: [
      'ロボティクス',
      '教育',
      'カリキュラム',
      '工学教育',
      '実習',
    ],
    overview:
      '本授業では、ロボット工学の理論的基礎から実践的な応用までを体系的に学習します。講義と実習を組み合わせたカリキュラムで、学生の技術理解と実践力を養います。',
    progress:
      '現在、カリキュラムの更新と教材開発を進めています。最新のロボット技術を反映した内容に改善しています。',
    references: [
      {
        label: 'ロボット工学教育の方法',
        url: 'https://example.com/class',
      },
    ],
  },
  relatedPublicationKeywords: [
    'robotics education',
    'engineering curriculum',
    'robot learning',
    'technical education',
  ],
};

export default classProject;