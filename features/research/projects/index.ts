import type { ResearchProject } from '../types';
import { atFactoryProject } from './at-factory';
import { autonomousDrivingProject } from './autonomous-driving';
import { cmcProject } from './cmc';
import { columnDetectionProject } from './column-detection';
import { pestControlProject } from './pest-control';
import { robotSpatialRecognitionProject } from './robot-spatial-recognition';

export const researchProjects: ResearchProject[] = [
  columnDetectionProject,
  atFactoryProject,
  pestControlProject,
  cmcProject,
  autonomousDrivingProject,
  robotSpatialRecognitionProject,
];

export function getResearchProjectById(id: string): ResearchProject | undefined {
  return researchProjects.find((project) => project.id === id);
}
