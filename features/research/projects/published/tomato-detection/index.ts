import type { ResearchProject } from '../../../types';
import tomatoDetectionImage from '../../../images/tomato.png';

const tomatoDetectionProject: ResearchProject = {
  id: 'tomato-detection',
  title: 'トマト収穫ロボット',
  sortOrder: 30,
  category: 'スマート農業',
  description:
    'トマト収穫ロボットの効率向上を目的に、機械学習・強化学習を活用して最適化を行う研究です。',
  image: tomatoDetectionImage,
  detail: {
    subtitle: 'ロボットビジョンを用いた果実検出と計測のためのトマト検知技術',
    keywords: [
      'スマート農業',
      '果実検出',
      '農業ロボティクス',
      '物体検出',
      'Semantic Segmentation',
      'データ拡張',
      '収穫支援',
      '品質評価',
      'RGB画像',
      '深層学習',
    ],
    overview:
      '本研究では、トマト収穫ロボットの作業効率向上を目的として、圃場環境内におけるロボットアームの適切な作業開始位置および移動経路を自動的に決定するシステムを提案する。本システムは、カメラやセンサから取得される環境情報をもとに、3次元空間上での障害物配置を考慮した経路計画を行うものであり、従来の固定的な動作計画に比べて柔軟な収穫動作を実現する。特に、作業対象である果実を基準とした視点から移動可能な空間（トンネル）を定義し、ロボットの到達可能性や作業効率を考慮した計画を行うことで、多様な圃場環境に適応可能な収穫支援を目指す。',
    progress:
      '令和6年度は、圃場環境の表現および経路生成の基盤構築を主眼に、骨格情報および3次元点群を用いた環境モデル化手法の実装と検証を進めた。まず、仮想圃場生成環境において植物構造を骨格情報として抽出・表現し、これをもとに障害物近似モデルを構築した。さらに、VSLAMによる点群生成およびボクセル化を通じて、実環境に近い形での空間表現を可能とした。これらの環境情報を入力として、MoveItやOMPLを用いたモーションプランニングの適用可能性を検証し、障害物回避を考慮した経路生成が実現可能であることを確認した。加えて、作業開始位置の最適化に向けて評価関数を設計し、反復的探索および機械学習を用いた効率化の枠組みを構築した。今後は、強化学習を導入した作業位置決定の高度化や、実環境データに基づく検証を進め、非構造環境下における収穫作業の実用化を目指す。',
    references: [
      {
        label: '農業向け果実検出の研究概要',
        url: 'https://example.com/tomato-detection',
      },
    ],
  },
  relatedPublicationKeywords: [
    'tomato detection',
    'fruit detection',
    'agricultural robotics',
    'deep learning',
    'object detection',
    'semantic segmentation',
  ],
};

export default tomatoDetectionProject;
