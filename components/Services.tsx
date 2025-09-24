import React from 'react';

const ServiceCard: React.FC<{ icon: JSX.Element; title: string; description: string; delay: number }> = ({ icon, title, description, delay }) => (
    <div 
        className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-indigo-100 hover:-translate-y-2 transition-all duration-300 animate-fadeInUp"
        style={{ animationDelay: `${delay}s` }}
    >
        <div className="text-teal-500 mb-5">{icon}</div>
        <h3 className="text-2xl font-bold text-slate-800 mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
);

const Services: React.FC = () => {
    const services = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
            title: 'Data Visualization',
            description: 'Creating intuitive dashboards and reports in Tableau, Power BI, and D3.js to bring your data to life.'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg>,
            title: 'ETL Pipelines',
            description: 'Developing robust Extract, Transform, Load (ETL) processes to ensure data is clean, consistent, and ready for analysis.'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
            title: 'Predictive Modeling',
            description: 'Using statistical models and machine learning algorithms to forecast trends and predict future outcomes.'
        }
    ];

    return (
        <section id="services" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                 <div className="animate-fadeInUp text-center">
                    <h2 className="text-4xl font-bold text-indigo-600 mb-4">Services</h2>
                    <p className="text-lg text-slate-500 mb-16 max-w-3xl mx-auto">
                        Offering a range of data services to help you achieve your business objectives.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={service.title} {...service} delay={0.2 + index * 0.15} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;