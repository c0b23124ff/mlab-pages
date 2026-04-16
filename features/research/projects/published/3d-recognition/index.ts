import type { ResearchProject } from '../../../types';
import recognition3dImage from '../../../images/3d-recognition.svg';

const recognition3dProject: ResearchProject = {
  id: '3d-recognition',
  title: '3D Recognition',
  sortOrder: 11,
  category: 'Spatial',
  subcategory: '3次元空間認識',
  description:
    '3D物体認識技術を用いた精密な環境理解と物体操作のための研究です。',
  image: recognition3dImage,
  detail: {
    subtitle: 'Advanced 3D Object Recognition and Pose Estimation',
    keywords: [
      '3D認識',
      '物体認識',
      '姿勢推定',
      '点群処理',
      '深層学習',
      'ロボットビジョン',
      '物体操作',
    ],
    overview:
      '本研究では、3Dセンサからの点群データを活用して、環境中の物体の正確な認識と姿勢推定を行う技術を開発する。深層学習と幾何学的手法を組み合わせ、複雑な形状の物体でも高精度な認識を実現し、ロボットによる精密な操作を可能にする。',
    progress:
      '現在、PointNet++などの深層学習モデルを3D認識に適用し、点群データの特徴抽出と分類精度の向上に取り組んでいる。実環境での物体姿勢推定の実験を進め、産業応用に向けた技術開発を進めている。',
    references: [
      {
        label: '3D物体認識の最新技術',
        url: 'https://example.com/3d-recognition',
      },
    ],
  },
  relatedPublicationKeywords: [
    '3d recognition',
    'point cloud',
    'pose estimation',
    'deep learning',
    'object detection',
    'robot vision',
  ],
};

export default recognition3dProject;