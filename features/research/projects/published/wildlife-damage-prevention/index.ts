import type { ResearchProject } from '../../../types';
import wildlifeDamagePreventionImage from '../../../images/wildlife-damage-prevention.svg';

const wildlifeDamagePreventionProject: ResearchProject = {
  id: 'wildlife-damage-prevention',
  title: '獣害対策',
  sortOrder: 31,
  category: 'スマート農業',
  subcategory: '獣害対策',
  description:
    '野生動物による農作物被害を防ぐためのスマートな監視・駆除システムの開発研究です。',
  image: wildlifeDamagePreventionImage,
  detail: {
    subtitle: 'AIを活用した獣害対策システム',
    keywords: [
      '獣害対策',
      'スマート農業',
      '野生動物検知',
      'AI監視',
      '農作物保護',
    ],
    overview:
      '本研究では、カメラとセンサーを用いた野生動物の自動検知システムを開発します。AIによる画像認識と音波駆除を組み合わせ、効率的な農作物保護を実現します。',
    progress:
      '現在、動物検知アルゴリズムの精度向上と実環境でのフィールドテストを進めています。気象条件への適応性も考慮したシステム開発を行っています。',
    references: [
      {
        label: '獣害対策技術の研究',
        url: 'https://example.com/wildlife-damage-prevention',
      },
    ],
  },
  relatedPublicationKeywords: [
    'wildlife damage prevention',
    'animal detection',
    'smart agriculture',
    'crop protection',
    'AI monitoring',
  ],
};

export default wildlifeDamagePreventionProject;