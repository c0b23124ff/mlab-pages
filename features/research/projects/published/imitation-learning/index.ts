import type { ResearchProject } from '../../../types';
import imitationLearningImage from '../../../images/imitation-learning.svg';

const imitationLearningProject: ResearchProject = {
  id: 'imitation-learning',
  title: '模倣学習',
  sortOrder: 21,
  category: 'ロボット',
  subcategory: '模倣学習',
  description:
    '人間の動作を観察し学習することで、ロボットが複雑なタスクを効率的に習得する模倣学習技術の研究です。',
  image: imitationLearningImage,
  detail: {
    subtitle: 'ロボットのための模倣学習アルゴリズム開発',
    keywords: [
      '模倣学習',
      'ロボティクス',
      '機械学習',
      '動作学習',
      '教師あり学習',
    ],
    overview:
      '本研究では、人間のデモンストレーションからロボットが動作を学習する模倣学習手法を開発します。視覚情報と動作データを統合し、複雑な操作タスクの自動化を目指します。',
    progress:
      '現在、視覚-動作対応付けの学習モデルを構築中です。実環境でのデモンストレーション収集と学習効率の改善に取り組んでいます。',
    references: [
      {
        label: '模倣学習の基礎',
        url: 'https://example.com/imitation-learning',
      },
    ],
  },
  relatedPublicationKeywords: [
    'imitation learning',
    'robot learning',
    'demonstration learning',
    'behavior cloning',
  ],
};

export default imitationLearningProject;