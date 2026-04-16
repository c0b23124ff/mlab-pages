import type { ResearchProject } from '../../../types';
import dojoImage from '../../../images/dojo.svg';

const dojoProject: ResearchProject = {
  id: 'dojo',
  title: '道場',
  sortOrder: 23,
  category: 'ロボット',
  subcategory: '道場',
  description:
    'ロボット技術の実践的なトレーニングとスキル習得のための道場活動を行っています。',
  image: dojoImage,
  detail: {
    subtitle: 'ロボット技術の実践トレーニング施設',
    keywords: [
      'ロボティクス',
      'トレーニング',
      'スキル習得',
      '実践教育',
      'ハンズオン',
    ],
    overview:
      '本活動では、ロボット技術の習得を目的とした実践的なトレーニングプログラムを提供します。理論と実践を組み合わせたカリキュラムで、参加者の技術力向上を支援します。',
    progress:
      '現在、トレーニングプログラムの開発と設備整備を進めています。参加者からのフィードバックを基にカリキュラムの改善を行っています。',
    references: [
      {
        label: 'ロボット道場の取り組み',
        url: 'https://example.com/dojo',
      },
    ],
  },
  relatedPublicationKeywords: [
    'robotics training',
    'skill development',
    'hands-on learning',
    'robot dojo',
  ],
};

export default dojoProject;