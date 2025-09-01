import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code2, Database, Cloud, Smartphone, Brain, Globe, 
  Shield, Zap, Palette, Server, Cpu, GitBranch 
} from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML', level: 95, icon: '🌐' },
        { name: 'CSS/SCSS', level: 90, icon: '🎨' },
        { name: 'JavaScript/TypeScript', level: 88, icon: '📘' },
        { name: 'React.js', level: 90, icon: '⚛️' },
        { name: 'Next.js', level: 85, icon: '⚡' },
        { name: 'Svelte', level: 80, icon: '🟠' },
        { name: 'Tailwind CSS', level: 92, icon: '🎨' },
      ]
    },
    {
      title: 'Backend & Database',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 75, icon: '🟢' },
        { name: 'Python', level: 70, icon: '🐍' },
        { name: 'C/C++', level: 60, icon: '⚙️' },
        { name: 'SQL/MySQL', level: 75, icon: '🗄️' },
        { name: 'MongoDB', level: 70, icon: '🍃' },
        { name: 'Supabase', level: 75, icon: '🔥' },
      ]
    },
    {
      title: 'Tools & Others',
      icon: GitBranch,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Git', level: 80, icon: '📚' },
        { name: 'Figma', level: 75, icon: '🎨' },
        { name: 'AWS', level: 65, icon: '☁️' },
        { name: 'Docker', level: 70, icon: '🐳' },
        { name: 'VS Code', level: 95, icon: '💻' },
      ]
    }
  ];

  const technologies = [
    { name: 'React', icon: '⚛️', color: 'bg-blue-500' },
    { name: 'Next.js', icon: '⚡', color: 'bg-black' },
    { name: 'Svelte', icon: '🟠', color: 'bg-orange-500' },
    { name: 'TypeScript', icon: '📘', color: 'bg-blue-600' },
    { name: 'Tailwind', icon: '🎨', color: 'bg-cyan-500' },
    { name: 'Node.js', icon: '🟢', color: 'bg-green-500' },
    { name: 'Python', icon: '🐍', color: 'bg-yellow-500' },
    { name: 'PostgreSQL', icon: '🐘', color: 'bg-blue-700' },
    { name: 'MongoDB', icon: '🍃', color: 'bg-green-600' },
    { name: 'Supabase', icon: '🔥', color: 'bg-orange-600' },
    { name: 'AWS', icon: '☁️', color: 'bg-orange-500' },
    { name: 'Git', icon: '📚', color: 'bg-red-500' },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            What I speak! Here's a comprehensive overview of my technical expertise 
            and proficiency levels in various technologies.
          </p>
        </motion.div>

        {/* Technology Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Technologies I Work With
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.1, 
                  rotateY: 10,
                  transition: { duration: 0.2 }
                }}
                className="group perspective-1000"
              >
                <div className="bg-white dark:bg-dark-800 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center preserve-3d group-hover:shadow-2xl transition-all duration-300">
                  <div className={`w-12 h-12 ${tech.color} rounded-lg flex items-center justify-center mx-auto mb-3 text-white text-2xl`}>
                    {tech.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + categoryIndex * 0.1 }}
              className="bg-white dark:bg-dark-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
              </div>

              {/* Skills List */}
              <div className="p-6">
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1, delay: 1 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          />
                        </div>
                        <span className="text-sm font-medium text-primary-600 dark:text-primary-400 w-8 text-right">
                          {skill.level}%
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Additional <span className="gradient-text">Capabilities</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Zap, title: 'Performance Optimization', desc: 'Fast & efficient applications' },
              { icon: Shield, title: 'Security Best Practices', desc: 'Secure by design' },
              { icon: Palette, title: 'UI/UX Design', desc: 'User-centered design' },
              { icon: Globe, title: 'Responsive Design', desc: 'Mobile-first approach' },
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-dark-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <capability.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {capability.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {capability.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
