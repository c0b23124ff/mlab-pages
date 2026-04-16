import type { ResearchProject } from '../../../types';
import scopeImage from '../../../images/scope.svg';

const scopeProject: ResearchProject = {
  id: 'scope',
  title: 'SCOPE',
  sortOrder: 10,
  category: 'Spatial',
  subcategory: 'SCOPE',
  description:
    'Spatial 認識技術を活用した環境理解とナビゲーションのための研究です。',
  image: scopeImage,
  detail: {
    subtitle: 'Spatial Computing for Object Perception and Environment',
    keywords: [
      'Spatial',
      '環境認識',
      'ナビゲーション',
      '3D認識',
      'SLAM',
      '点群処理',
      'ロボットビジョン',
    ],
    overview:
      '本研究では、Spatial 技術を活用してロボットが環境を理解し、効率的に移動・操作を行うための基盤技術を開発する。3Dセンサやカメラからの情報を統合し、リアルタイムで環境マップを構築することで、複雑な環境での自律移動を実現する。',
    progress:
      '現在、SLAMアルゴリズムの改良と点群データの処理最適化に取り組んでいる。センサフュージョンによる高精度な環境モデリングを目指し、実環境での検証を進めている。',
    references: [
      {
        label: 'Spatial Computing の概要',
        url: 'https://example.com/scope',
      },
    ],
  },
  relatedPublicationKeywords: [
    'spatial computing',
    'slam',
    '3d perception',
    'robot navigation',
    'point cloud',
  ],
};

export default scopeProject;