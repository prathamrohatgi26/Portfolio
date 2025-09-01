import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, TrendingUp, Globe, Code, Rocket } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      period: 'Jan 2025 - Present',
      title: 'Frontend Engineer',
      company: 'Kutumb, PrimeTrace',
      location: 'Remote',
      type: 'Full-time',
      achievements: [
        'Leading frontend development for innovative web applications',
        'Collaborating with cross-functional teams on product development',
        'Implementing modern UI/UX patterns and best practices',
        'Mentoring junior developers and code reviews'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      period: 'June 2023 - Nov 2023',
      title: 'Software Developer - Frontend',
      company: 'LENS Corporation',
      location: 'Remote',
      type: 'Full-time',
      achievements: [
        'Built and managed LensView, a Video Management System',
        'Led a team of developers in frontend development',
        'Implemented responsive design and modern UI components',
        'Optimized application performance and user experience'
      ],
      technologies: ['Next.js', 'PostgreSQL', 'TypeScript', 'Tailwind CSS'],
      icon: Code,
      color: 'from-green-500 to-emerald-500'
    },
    {
      period: 'Nov 2022 - May 2023',
      title: 'Frontend Developer Intern',
      company: 'LENS Corporation',
      location: 'Remote',
      type: 'Internship',
      achievements: [
        'Developed frontend applications using modern technologies',
        'Learned Next.js, PostgreSQL, and advanced frontend concepts',
        'Collaborated with senior developers on real projects',
        'Gained hands-on experience with production code'
      ],
      technologies: ['Next.js', 'React', 'JavaScript', 'CSS'],
      icon: Globe,
      color: 'from-purple-500 to-pink-500'
    },
    {
      period: 'Jan 2022 - Apr 2022',
      title: 'Software Developer Intern',
      company: 'OpenSense Labs',
      location: 'Remote',
      type: 'Internship',
      achievements: [
        'Contributed to open-source projects and documentation',
        'Learned agile methodologies and team collaboration',
        'Assisted in development of various software solutions',
        'Gained experience with version control and Git workflows'
      ],
      technologies: ['JavaScript', 'React', 'Git', 'Agile'],
      icon: Users,
      color: 'from-orange-500 to-red-500'
    },
    {
      period: 'July 2021 - Oct 2021',
      title: 'Cloud Intern, AWS',
      company: 'Siemens',
      location: 'Remote',
      type: 'Internship',
      achievements: [
        'Gained hands-on experience with AWS cloud services',
        'Learned about cloud infrastructure and deployment',
        'Worked on real-world cloud computing projects',
        'Understanding of cloud security and best practices'
      ],
      technologies: ['AWS', 'Cloud Computing', 'Infrastructure', 'Security'],
      icon: Award,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const education = [
    {
      period: '2019 - 2023',
      title: 'B.Tech (CCE)',
      company: 'Manipal University Jaipur',
      location: 'Jaipur, India',
      type: 'Education',
      achievements: [
        'Computer & Communication Engineering',
        'Graduated with strong foundation in computer science',
        'Completed multiple projects and assignments',
        'Active participation in technical events and workshops'
      ],
      technologies: ['Computer Science', 'Engineering', 'Programming', 'Networking'],
      icon: Award,
      color: 'from-indigo-500 to-blue-500'
    },
    {
      period: '2018 - 2019',
      title: '12th (PCM+IP)',
      company: 'Dayawati Modi Academy, Meerut',
      location: 'Meerut, India',
      type: 'Education',
      achievements: [
        'Physics, Chemistry, Mathematics + Informatics Practices',
        'Strong foundation in science and mathematics',
        'Developed logical thinking and problem-solving skills',
        'Prepared for engineering entrance examinations'
      ],
      technologies: ['Physics', 'Chemistry', 'Mathematics', 'Informatics'],
      icon: Users,
      color: 'from-green-500 to-emerald-500'
    },
    {
      period: '2016 - 2017',
      title: '10th CBSE',
      company: 'Dayawati Modi Academy, Meerut',
      location: 'Meerut, India',
      type: 'Education',
      achievements: [
        'Central Board of Secondary Education',
        'Strong academic foundation',
        'Developed study habits and discipline',
        'Participated in various school activities'
      ],
      technologies: ['General Studies', 'Mathematics', 'Science', 'Languages'],
      icon: Globe,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const stats = [
    { icon: Award, value: '2+', label: 'Years Experience', color: 'from-yellow-500 to-orange-500' },
    { icon: Users, value: '4+', label: 'Internships', color: 'from-blue-500 to-cyan-500' },
    { icon: TrendingUp, value: '10+', label: 'Projects Completed', color: 'from-green-500 to-emerald-500' },
    { icon: Globe, value: '24/7', label: 'Online Support', color: 'from-purple-500 to-pink-500' }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My journey in software development has been filled with exciting challenges, 
            continuous learning, and meaningful contributions to innovative projects.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Work Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Work <span className="gradient-text">Experience</span>
          </h3>
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-secondary-500" />
              
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                  className="relative mb-12"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 w-4 h-4 bg-gradient-to-br ${experience.color} rounded-full border-4 border-white dark:border-dark-800 z-10 shadow-lg`} />
                  
                  {/* Content Card */}
                  <div className={`ml-16 bg-white dark:bg-dark-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden group hover:shadow-2xl transition-all duration-500 ${
                    index % 2 === 0 ? 'lg:mr-16' : 'lg:ml-16'
                  }`}>
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${experience.color} p-6 text-white`}>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                            <experience.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{experience.title}</h3>
                            <p className="text-white/90 font-medium">{experience.company}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                            {experience.type}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center space-x-2">
                          <span>📍</span>
                          <span>{experience.location}</span>
                        </span>
                        <span className="font-semibold">{experience.period}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <motion.li
                              key={achievementIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.5, delay: 0.8 + index * 0.2 + achievementIndex * 0.1 }}
                              className="flex items-start space-x-3"
                            >
                              <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={inView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ duration: 0.3, delay: 1 + index * 0.2 + techIndex * 0.05 }}
                              className={`px-3 py-1 bg-gradient-to-r ${experience.color} text-white rounded-full text-sm font-medium`}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            <span className="gradient-text">Education</span>
          </h3>
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary-500 to-accent-500" />
              
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                  className="relative mb-12"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 w-4 h-4 bg-gradient-to-br ${edu.color} rounded-full border-4 border-white dark:border-dark-800 z-10 shadow-lg`} />
                  
                  {/* Content Card */}
                  <div className={`ml-16 bg-white dark:bg-dark-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden group hover:shadow-2xl transition-all duration-500 ${
                    index % 2 === 0 ? 'lg:mr-16' : 'lg:ml-16'
                  }`}>
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${edu.color} p-6 text-white`}>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                            <edu.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{edu.title}</h3>
                            <p className="text-white/90 font-medium">{edu.company}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                            {edu.type}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center space-x-2">
                          <span>📍</span>
                          <span>{edu.location}</span>
                        </span>
                        <span className="font-semibold">{edu.period}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Key Highlights
                        </h4>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, achievementIndex) => (
                            <motion.li
                              key={achievementIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.5, delay: 1.2 + index * 0.2 + achievementIndex * 0.1 }}
                              className="flex items-start space-x-3"
                            >
                              <span className="w-2 h-2 bg-secondary-500 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Areas of Study
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={inView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ duration: 0.3, delay: 1.4 + index * 0.2 + techIndex * 0.05 }}
                              className={`px-3 py-1 bg-gradient-to-r ${edu.color} text-white rounded-full text-sm font-medium`}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8 border border-primary-200 dark:border-primary-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, 
              and innovative ideas. Let's create something amazing together!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="button-primary"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
