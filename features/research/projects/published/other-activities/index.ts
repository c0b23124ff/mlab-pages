import type { ResearchProject } from '../../../types';
import otherActivitiesImage from '../../../images/other-activities.svg';

const otherActivitiesProject: ResearchProject = {
  id: 'other-activities',
  title: 'その他活動',
  sortOrder: 22,
  category: 'ロボット',
  subcategory: 'その他活動',
  description:
    'ロボット技術の応用分野を広げるための多様な活動と研究開発を行っています。',
  image: otherActivitiesImage,
  detail: {
    subtitle: 'ロボット技術の多角的応用研究',
    keywords: [
      'ロボティクス',
      '応用研究',
      '技術開発',
      '実用化',
      '産学連携',
    ],
    overview:
      '本研究では、ロボット技術の産業応用や社会実装に向けた多様な活動を展開しています。新たなユースケースの発掘と技術の実用化を目指します。',
    progress:
      '現在、複数の産業パートナーとの共同研究を進めています。実環境での技術検証とフィードバック収集に注力しています。',
    references: [
      {
        label: 'ロボット応用技術の事例',
        url: 'https://example.com/other-activities',
      },
    ],
  },
  relatedPublicationKeywords: [
    'robotics applications',
    'industrial robotics',
    'robot technology',
    'implementation',
  ],
};

export default otherActivitiesProject;