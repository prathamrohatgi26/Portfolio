import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Globe, Smartphone, Brain, Award, Users } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Code, value: '10+', label: 'Projects Completed', color: 'from-blue-500 to-cyan-500' },
    { icon: Globe, value: '2+', label: 'Years Experience', color: 'from-green-500 to-emerald-500' },
    { icon: Users, value: '24/7', label: 'Online Support', color: 'from-purple-500 to-pink-500' },
    { icon: Award, value: '4+', label: 'Internships', color: 'from-orange-500 to-red-500' },
  ];

  const skills = [
    { name: 'Frontend Development', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'React & Next.js', level: 90, color: 'from-green-500 to-emerald-500' },
    { name: 'Svelte & TypeScript', level: 85, color: 'from-purple-500 to-pink-500' },
    { name: 'Backend & Database', level: 80, color: 'from-orange-500 to-red-500' },
    { name: 'Cloud & DevOps', level: 75, color: 'from-indigo-500 to-blue-500' },
  ];

  const timeline = [
    {
      year: 'Jan 2025 - Present',
      title: 'Frontend Engineer',
      company: 'Kutumb, PrimeTrace',
      description: 'Leading frontend development and building innovative web applications.',
      icon: '🚀',
    },
    {
      year: 'June 2023 - Nov 2023',
      title: 'Software Developer - Frontend',
      company: 'LENS Corporation',
      description: 'Built and managed LensView, a Video Management System with Next.js and PostgreSQL.',
      icon: '💻',
    },
    {
      year: 'Nov 2022 - May 2023',
      title: 'Frontend Developer Intern',
      company: 'LENS Corporation',
      description: 'Developed frontend applications and learned modern web technologies.',
      icon: '🎨',
    },
    {
      year: 'Jan 2022 - Apr 2022',
      title: 'Software Developer Intern',
      company: 'OpenSense Labs',
      description: 'Contributed to open-source projects and learned agile methodologies.',
      icon: '🎯',
    },
    {
      year: 'July 2021 - Oct 2021',
      title: 'Cloud Intern, AWS',
      company: 'Siemens',
      description: 'Gained experience with AWS cloud services and infrastructure.',
      icon: '☁️',
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-800/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A Software Developer - Frontend based in Meerut, India, with a passion for web development 
            and creating efficient, visually appealing interfaces.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              My Introduction
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              I enjoy working with modern web technologies and am always eager to take on new challenges, 
              pushing myself to explore new areas in development. Currently, I lead a team of developers 
              and am responsible for building and managing LensView, a Video Management System.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              With 2+ years of experience, I've completed multiple projects using technologies like 
              Next.js, PostgreSQL, Svelte, and Pocketbase. I believe in writing clean, maintainable 
              code and staying up-to-date with the latest technologies.
            </p>

            {/* Key Strengths */}
            <div className="space-y-4">
              {[
                { icon: Code, text: 'Frontend development expertise' },
                { icon: Brain, text: 'Problem-solving mindset' },
                { icon: Users, text: 'Team collaboration skills' },
                { icon: Award, text: 'Continuous learning approach' },
              ].map((strength, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                    <strength.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {strength.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-dark-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
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
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Technical <span className="gradient-text">Skills</span>
          </h3>
          <div className="max-w-4xl mx-auto space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-white dark:bg-dark-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </span>
                  <span className="text-primary-600 dark:text-primary-400 font-medium">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 1 + index * 0.1 }}
                    className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Professional <span className="gradient-text">Journey</span>
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500" />
              
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="relative flex items-start mb-8"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full border-4 border-white dark:border-dark-800 z-10" />
                  
                  {/* Content */}
                  <div className="ml-16 bg-white dark:bg-dark-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30 px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                      {item.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
