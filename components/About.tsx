import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="animate-fadeInUp text-center">
                    <h2 className="text-4xl font-bold text-indigo-600 mb-4">About Me</h2>
                    <p className="text-lg text-slate-500 mb-16 max-w-3xl mx-auto">
                        A passionate Data Analyst with a knack for uncovering hidden patterns and stories within data.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-16 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                    <div className="md:w-1/3 flex justify-center">
                         <div className="relative group">
                            <div className="absolute -inset-1.5 bg-gradient-to-r from-teal-400 to-indigo-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                            <img src="https://picsum.photos/300/300" alt="Data Analyst Portrait" className="relative rounded-full w-52 h-52 mx-auto shadow-xl border-4 border-white" />
                         </div>
                    </div>
                    <div className="md:w-2/3 max-w-xl">
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Hello! I'm a detail-oriented Data Analyst with 5+ years of experience in leveraging data to drive business growth. My expertise lies in SQL, Python (Pandas, NumPy), and data visualization tools like Tableau and Power BI. I thrive on transforming raw data into clear, compelling narratives that inform strategic decision-making.
                            <br /><br />
                            Throughout my career, I've had the opportunity to work on diverse projects, from customer segmentation and market basket analysis to building predictive models for sales forecasting. I am always eager to learn new technologies and methodologies to stay at the forefront of the data analytics field.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;