import { Button } from '../../components/ui/button';
import { researchProjects } from './projects';

export const ResearchPage = () => {
  return (
    <div className="min-h-screen pt-20 bg-[#F9F5F0]">
      <div className="py-12 px-4 sm:px-6 lg:px-8 border-b border-[#344F1F]/10 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#344F1F] mb-4">研究内容</h1>
          <p className="text-[#344F1F]/70 text-lg">Research Projects</p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col h-full bg-[#F9F5F0] border border-[#344F1F]/20 hover:border-[#344F1F] transition-colors duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-[#344F1F] mb-4 group-hover:text-[#F4991A] transition-colors">
                  {project.title}
                </h2>
                <p className="text-[#344F1F]/80 mb-8 leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="mt-auto">
                  {project.link ? (
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-[#F4991A] text-[#F4991A] hover:bg-[#F4991A] hover:text-white rounded-none transition-colors"
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        {project.ctaLabel ?? '詳細を見る'}
                      </a>
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      className="w-full border-[#344F1F]/25 text-[#344F1F]/60 rounded-none cursor-not-allowed"
                      disabled
                    >
                      詳細準備中
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
