import { Link } from 'react-router-dom';
import { researchProjects } from './projects';

export const ResearchPage = () => {
  // Group projects by category and subcategory
  const groupedProjects = researchProjects.reduce((acc, project) => {
    const category = project.category || 'その他';
    const subcategory = project.subcategory || 'その他';
    if (!acc[category]) {
      acc[category] = {};
    }
    if (!acc[category][subcategory]) {
      acc[category][subcategory] = [];
    }
    acc[category][subcategory].push(project);
    return acc;
  }, {} as Record<string, Record<string, typeof researchProjects>>);

  // Define category order
  const categoryOrder = [
    'ロボット',
    'Spatial',
    'ロボットエンジニア教育',
    'スマート農業',
    '過去の研究',
  ];

  return (
    <div className="min-h-screen pt-28 bg-[#F9F5F0]">
      <div className="py-12 px-4 sm:px-6 lg:px-8 border-b border-[#344F1F]/10 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#344F1F] mb-4">研究内容</h1>
          <p className="text-[#344F1F]/70 text-lg">Research Projects</p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {categoryOrder.map((category) => {
          const subcategories = groupedProjects[category];
          if (!subcategories) return null;

          return (
            <section key={category}>
              <h2 className="text-3xl font-bold text-[#344F1F] mb-8">{category}</h2>
              <div className="space-y-12">
                {Object.entries(subcategories).map(([subcategory, projects]) => (
                  <div key={subcategory}>
                    <h3 className="text-2xl font-semibold text-[#344F1F] mb-6">{subcategory}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {projects.map((project) => (
                        <Link
                          key={project.id}
                          to={`/research/${project.id}`}
                          className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4991A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9F5F0]"
                        >
                          <article className="flex flex-col h-full bg-[#F9F5F0] border border-[#344F1F]/20 hover:border-[#344F1F] transition-colors duration-300">
                            <div className="aspect-[16/9] overflow-hidden">
                              <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                              />
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                              <h4 className="text-xl font-bold text-[#344F1F] mb-4 group-hover:text-[#F4991A] transition-colors">
                                {project.title}
                              </h4>
                              <p className="text-[#344F1F]/80 leading-relaxed flex-grow">{project.description}</p>
                            </div>
                          </article>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};
