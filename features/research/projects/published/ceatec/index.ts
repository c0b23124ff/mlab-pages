import type { ResearchProject } from '../../../types';
import ceatecImage from '../../../images/ceatec.svg';

const ceatecProject: ResearchProject = {
  id: 'ceatec',
  title: 'CEATEC',
  sortOrder: 25,
  category: 'ロボット',
  subcategory: 'ceatec',
  description:
    'CEATEC展示会でのロボット技術展示とデモンストレーション活動を行っています。',
  image: ceatecImage,
  detail: {
    subtitle: 'ロボット技術の展示と普及活動',
    keywords: [
      '展示会',
      'デモンストレーション',
      '技術普及',
      '産学連携',
      'CEATEC',
    ],
    overview:
      'CEATEC展示会において、最新のロボット技術を展示し、一般公開と産業関係者へのデモンストレーションを行っています。技術の社会実装と認知度向上を目指します。',
    progress:
      '現在、次回展示に向けたデモンストレーションコンテンツの準備を進めています。来場者からのフィードバックを技術開発に反映しています。',
    references: [
      {
        label: 'CEATEC展示の事例',
        url: 'https://example.com/ceatec',
      },
    ],
  },
  relatedPublicationKeywords: [
    'ceatec',
    'technology exhibition',
    'robot demonstration',
    'public outreach',
  ],
};

export default ceatecProject;