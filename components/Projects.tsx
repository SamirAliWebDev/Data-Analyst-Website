import React from 'react';

const ProjectCard: React.FC<{ imgUrl: string; title: string; description: string; tags: string[]; delay: number }> = ({ imgUrl, title, description, tags, delay }) => (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-300 group animate-fadeInUp transform hover:-translate-y-2"
      style={{ animationDelay: `${delay}s` }}
    >
        <div className="overflow-hidden h-56">
            <img src={imgUrl} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
        </div>
        <div className="p-6">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">{title}</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">{description}</p>
            <div className="flex flex-wrap gap-2 pt-2">
                {tags.map(tag => (
                    <span key={tag} className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold">{tag}</span>
                ))}
            </div>
        </div>
    </div>
);

const Projects: React.FC = () => {
    const projects = [
        {
            imgUrl: 'https://picsum.photos/400/300?random=1',
            title: 'Retail Sales Dashboard',
            description: 'An interactive dashboard built with Tableau to monitor KPIs, track sales performance, and identify growth opportunities.',
            tags: ['Tableau', 'SQL', 'Data Visualization']
        },
        {
            imgUrl: 'https://picsum.photos/400/300?random=2',
            title: 'Customer Churn Prediction',
            description: 'A machine learning model developed in Python to predict customer churn, helping reduce attrition rates by 15%.',
            tags: ['Python', 'Scikit-learn', 'Pandas']
        },
        {
            imgUrl: 'https://picsum.photos/400/300?random=3',
            title: 'Market Basket Analysis',
            description: 'Analyzed transaction data to uncover product associations and inform cross-selling strategies for an e-commerce platform.',
            tags: ['SQL', 'R', 'Association Rules']
        },
    ];

    return (
        <section id="projects" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="animate-fadeInUp text-center">
                    <h2 className="text-4xl font-bold text-indigo-600 mb-4">My Projects</h2>
                    <p className="text-lg text-slate-500 mb-16 max-w-3xl mx-auto">
                        A selection of projects that demonstrate my skills and expertise in data analysis.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} {...project} delay={0.2 + index * 0.15} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;