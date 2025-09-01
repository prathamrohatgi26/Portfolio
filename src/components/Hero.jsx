import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const FloatingSphere = () => {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#3b82f6"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0}
      />
    </Sphere>
  );
};

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900" />
      
      {/* Floating 3D Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary-200/30 to-secondary-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-secondary-200/30 to-accent-200/30 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-accent-200/30 to-primary-200/30 rounded-full blur-2xl animate-pulse-slow" />
      </div>

      {/* 3D Canvas */}
      <div className="absolute top-20 right-20 w-64 h-64 hidden lg:block">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <FloatingSphere />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-4">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Pratham</span>
              <br />
              <span className="text-4xl lg:text-6xl text-gray-700 dark:text-gray-300">
                Frontend Engineer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl lg:max-w-none"
            >
              B.Tech. Computer & Communication, 2023
              <br />
              Manipal University Jaipur
              <br />
              Based in Meerut, India
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="button-primary group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download CV
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="button-secondary group"
              >
                <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Say Hello!
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex justify-center lg:justify-start space-x-4 mt-8"
            >
              {[
                { icon: Github, href: 'https://github.com/prathamrohatgi', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/prathamrohatgi', label: 'LinkedIn' },
                { icon: Twitter, href: 'https://twitter.com/prathamrohatgi', label: 'Twitter' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Floating Cards */}
            <div className="relative h-96 lg:h-[500px]">
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute top-0 left-0 w-64 h-80 bg-gradient-to-br from-primary-100/80 to-secondary-100/80 dark:from-primary-900/40 dark:to-secondary-900/40 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-2xl shadow-2xl"
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Frontend Development
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    React, Next.js, Svelte, TypeScript
                  </p>
                </div>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute top-20 right-0 w-56 h-72 bg-gradient-to-br from-secondary-100/80 to-accent-100/80 dark:from-secondary-900/40 dark:to-accent-900/40 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-2xl shadow-2xl"
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-xl mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Backend & Database
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Node.js, Python, PostgreSQL, MongoDB
                  </p>
                </div>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 3, 0]
                }}
                transition={{ 
                  duration: 7, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 4
                }}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-64 bg-gradient-to-br from-accent-100/80 to-primary-100/80 dark:from-accent-900/40 dark:to-primary-900/40 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-2xl shadow-2xl"
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-primary-500 rounded-xl mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Cloud & DevOps
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    AWS, Docker, Git, CI/CD
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="p-3 bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300 shadow-lg"
        >
          <ArrowDown size={24} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
