import type { ResearchProject } from '../../../types';
import roverImage from '../../../images/rover.svg';

const roverProject: ResearchProject = {
  id: 'rover',
  title: 'ローバ',
  sortOrder: 51,
  category: '過去の研究',
  subcategory: 'ローバ',
  description:
    '惑星探査用ローバーの自律移動と環境適応技術の研究開発を行いました。',
  image: roverImage,
  detail: {
    subtitle: '惑星探査ローバーの自律制御システム',
    keywords: [
      'ローバ',
      '惑星探査',
      '自律移動',
      '環境適応',
      'ロボティクス',
    ],
    overview:
      '本研究では、火星などの過酷な環境での探査を目的としたローバーの開発を行いました。自律ナビゲーションと障害物回避、科学観測機能の実装を目指しました。',
    progress:
      'プロジェクト完了。実機によるフィールドテストを実施し、基本的な自律移動機能を検証しました。将来的な火星ミッションへの技術基盤を確立しました。',
    references: [
      {
        label: 'ローバ開発の技術的挑戦',
        url: 'https://example.com/rover',
      },
    ],
  },
  relatedPublicationKeywords: [
    'planetary rover',
    'autonomous navigation',
    'space robotics',
    'exploration robotics',
  ],
};

export default roverProject;