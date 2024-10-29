import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Space } from 'lucide-react';
import { Analytics } from "@vercel/analytics/react";

interface Orb {
    x: number;
    y: number;
    size: number;
    delay: number;
    gradient: string;
}



const achievements = [
  {
    title: "FacEmotion",
    icon: "🏆",
    description: "Led the development of an advanced emotional analysis system that secured first place among 18 teams. The system utilizes a CNN architecture trained on 35,000+ facial images, achieving 87% accuracy in emotion detection. Integrated with Gemini 1.5 Pro to provide personalized mood enhancement recommendations based on real-time analysis.",
    tags: ["PyTorch", "OpenCV", "Gemini API", "CNN", "Streamlit"],
    link: "https://github.com/mihir-s-05/FacEmotion",
    achievements: [
      "1st Place Winner - UCSB Data Science Competition",
      "87% Emotion Detection Accuracy",
      "35,000+ Training Images"
    ]
  },
  {
    title: "AIHelp CLI Tool",
    icon: "🚀",
    description: "Engineered an innovative command-line interface tool that translates natural language into executable bash commands using the GroqCloud API. Implemented comprehensive command validation and error handling mechanisms to ensure secure execution across diverse computing environments.",
    tags: ["Python", "GroqCloud API", "NLP", "CLI", "Bash"],
    link: "https://github.com/mihir-s-05/aihelp",
    achievements: [
      "95% Command Translation Accuracy",
      "Robust Error Handling",
      "Cross-Platform Compatibility"
    ]
  },
  {
    title: "Parallel Patterns Research",
    icon: "🔬",
    description: "Currently conducting research on decompiling Boolean logic to high-level software abstractions under Prof. Jonathan Balkind through the Early Research Scholars Program (ERSP). Focused on optimizing decompilation processes using Python and advanced debugging tools for novel hardware decompilation methods.",
    tags: ["Python", "Boolean Logic", "Verilog", "PyRTL", "Hardware"],
    link: null,
    achievements: [
      "ERSP Research Fellowship",
      "Hardware Decompilation Innovation",
      "Formal Presentation - June 2025"
    ]
  }
];

const PersonalWebsite = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [letterIndex, setLetterIndex] = useState(0);
  const [currentAchievement, setCurrentAchievement] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const name = "Mihir Srivastava";
  const [displayText, setDisplayText] = useState("");
  const descriptions = [
  "tinkerer.",
  "innovator.",
  "problem solver.",
  "developer.",
  "researcher.",
  "engineer.",
 ];
 const [currentText, setCurrentText] = useState('');
 const [isDeleting, setIsDeleting] = useState(false);
 const [descriptionIndex, setDescriptionIndex] = useState(0);
 const [delta, setDelta] = useState(200);
 const [orbs, setOrbs] = useState<Orb[]>([]);


  // Typewriter effect for name
  useEffect(() => {
    if (letterIndex < name.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + name[letterIndex]);
        setLetterIndex(letterIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [letterIndex]);

  useEffect(() => {
    const generateOrbs = () => {
      return [...Array(6)].map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 128 + Math.random() * 256,
        delay: Math.random() * 8,
        gradient: [
          'from-orange-400 to-pink-500',
          'from-pink-500 to-purple-600',
          'from-purple-600 to-blue-500',
          'from-blue-400 to-purple-500',
        ][Math.floor(Math.random() * 4)]
      }));
    };

    setOrbs(generateOrbs());
  }, []);

  // Achievement rotation
  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentAchievement((prev) => (prev + 1) % achievements.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(rotationInterval);
  }, []);

  useEffect(() => {
    let timeout;
  
    const tick = () => {
      const currentWord = descriptions[descriptionIndex];
      
      if (!isDeleting) {
        setCurrentText(prev => currentWord.substring(0, prev.length + 1));
        setDelta(150);
  
        if (currentText === currentWord) {
          setDelta(2000);
          setIsDeleting(true);
        }
      } else {
        setCurrentText(prev => currentWord.substring(0, prev.length - 1));
        setDelta(100);
  
        if (currentText === '') {
          setIsDeleting(false);
          setDescriptionIndex((prev) => (prev + 1) % descriptions.length);
          setDelta(500);
        }
      }
    };
  
    timeout = setTimeout(tick, delta);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, descriptionIndex, delta, descriptions]);

  // Fade-in effect
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="fixed w-full bg-gray-800 bg-opacity-90 backdrop-blur-sm z-50">
        <div className="w-full px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {displayText}
          </h1>
          <div className="flex space-x-4">
            <a
              href="https://github.com/mihir-s-05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/mihir-srivastava-19a342240"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={`pt-32 px-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {/* Profile Section */}
            <div className="text-center space-y-6 relative">
              <div className="relative">
                <div className="absolute inset-0 rounded-full animate-spin-slow">
                  <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 blur-xl opacity-50 animate-pulse"></div>
                </div>
                <div className="w-32 h-32 mx-auto relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400 via-pink-500 to-blue-500 animate-gradient"></div>
                <div className="absolute inset-0.5 rounded-full bg-gray-900 overflow-hidden">
                    <img 
                    src="/profile.jpg" 
                    alt="Mihir Srivastava" 
                    className="w-full h-full object-cover"
                    />
                </div>
                </div>
              </div>
              <h2 className="text-4xl font-bold relative z-10 flex justify-center items-center gap-2">
                 <span className="text-gray-300 whitespace-nowrap">Hi, I&apos;m a</span>
                 <div className="h-[1.5em] inline-flex items-center">
                 <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-blue-500 bg-clip-text text-transparent whitespace-nowrap">
                     {currentText}
                     <span className="animate-blink">|</span>
                 </span>
                 </div>
             </h2>
            </div>

            <style>{`
              @keyframes gradient {
                0% {
                  background-position: 0% 50%;
                }
                50% {
                  background-position: 100% 50%;
                }
                100% {
                  background-position: 0% 50%;
                }
              }
              
              .animate-gradient {
                background-size: 200% 200%;
                animation: gradient 8s ease infinite;
              }
              
              .animate-spin-slow {
                animation: spin 8s linear infinite;
              }
              
              @keyframes spin {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(360deg);
                }
              }
            `}</style>

            {/* About Section */}
            <div className="space-y-6 animate-fadeIn">
            <p className="text-lg text-gray-300 leading-relaxed">
            I&apos;m a sophomore at the University of California, Santa Barbara majoring in Computer Engineering.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">  
            I&apos;ve worked on a variety of projects ranging from emotion detection systems to AI-powered CLI tools. I&apos;m passionate about leveraging technology to solve real-world problems and am always eager to learn new things.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
            Through my work at Spillbox and the OpenROAD Project, I&apos;ve gained extensive experience in distributed systems and DevOps.
            Currently, I&apos;m researching parallel patterns in hardware decompilation under Professor Jonathan Balkind through the Early Research Scholars Program.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
                I&apos;m always open to new opportunities and collaborations, so feel free to reach out to me at  <a href="mailto:m_srivastava@ucsb.edu" className="text-blue-400 hover:underline">m_srivastava@ucsb.edu</a> if you&apos;d like to connect!
            </p>

              <div className="flex flex-wrap gap-3 justify-center py-4">
              {['Python', 'React Native', 'Machine Learning', 'Computer Vision', 'Go', 'Cloud Computing'].map((skill, index) => (
                <span
                  key={skill}
                  className="relative px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300 group hover:transform hover:-translate-y-1 transition-all duration-300"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <span className="relative z-10">{skill}</span>
                  {/* Glowing border that changes color */}
                  <span className="absolute inset-0 rounded-full animate-trace-glow" />
                </span>
              ))}
              </div>

              <div className="text-center pt-8">
                <a
                  href="/Mihir's Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
                >
                  View My Resume
                </a>
              </div>
            </div>

            {/* Featured Projects Carousel */}
            <div className="mt-16 space-y-6">
            <h3 className="text-2xl font-bold text-center animate-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent bg-300% transition-all duration-300">
              Featured Projects
            </h3>
              <div className="relative">
                <div 
                  className={`transition-all duration-500 transform ${
                    isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                  }`}
                >
                    <div 
                      className="relative p-6 rounded-xl border border-gray-700/50 
                        bg-gradient-to-br from-gray-800/80 to-gray-900/80 
                        backdrop-blur-xl backdrop-saturate-150
                        shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                        hover:shadow-[0_8px_30px_rgb(0,0,0,0.24)]
                        transition-all duration-300"
                    >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/5 to-blue-500/5" />
                    <div className="flex flex-col md:flex-row gap-6">
                    <div className="relative z-10">
                      {/* Project Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-2xl">{achievements[currentAchievement].icon}</span>
                          <h4 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            {achievements[currentAchievement].title}
                          </h4>
                        </div>
                        
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {achievements[currentAchievement].description}
                        </p>

                        {/* Key Achievements */}
                        <div className="mb-4">
                          {achievements[currentAchievement].achievements.map((achievement, index) => (
                            <div key={index} className="flex items-center gap-2 mb-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              <span className="text-gray-300">{achievement}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                        {achievements[currentAchievement].tags.map((tag) => (
                          <span 
                            key={tag}
                            className="relative px-3 py-1 bg-gray-800/50 backdrop-blur-sm
                            rounded-full text-sm text-gray-300 group border border-gray-700/30
                            hover:bg-gray-700/50 transition-all duration-300"
                          >
                            <span className="relative z-10">{tag}</span>
                            <span className="absolute inset-0 rounded-full animate-trace-glow" />
                          </span>
                        ))}
                        </div>
                      </div>

                      {/* GitHub Preview */}
                    {achievements[currentAchievement].link && (
                    <div className="w-full md:w-80 bg-gray-900/40 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700/50 transition-all duration-300 hover:bg-gray-900/60">
                        <div className="p-4">
                        <div className="flex items-center gap-2 mb-4">
                            <Github size={20} className="text-gray-400" />
                            <a 
                            href={achievements[currentAchievement].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-semibold"
                            >
                            {achievements[currentAchievement].link?.split('github.com/')[1]}
                            </a>
                        </div>
                        
                        {/* Repository Preview Image */}
                        <a 
                            href={achievements[currentAchievement].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block mb-4 overflow-hidden rounded-md hover:opacity-90 transition-opacity"
                        >
                            <img 
                            src={`https://opengraph.githubassets.com/1/${achievements[currentAchievement].link?.split('github.com/')[1]}`}
                            alt="Repository preview"
                            className="w-full h-auto rounded-md"
                            loading="lazy"
                            />
                        </a>

                        <p className="text-sm text-gray-300 mb-4">
                            {achievements[currentAchievement].title} - {achievements[currentAchievement].description.slice(0, 100)}...
                        </p>

                        <div className="flex items-center gap-4 text-sm text-gray-400">
                            <div className="flex items-center gap-1">
                            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                            <span>Python</span>
                            </div>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                            <svg height="16" viewBox="0 0 16 16" width="16" className="fill-current">
                                <path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"></path>
                            </svg>
                            <span>Star</span>
                            </div>
                        </div>
                        </div>

                        <div className="border-t border-gray-700 mt-4 p-4 bg-gray-800/50">
                        <button
                            onClick={() => {
                              if (achievements[currentAchievement].link) {
                                window.open(achievements[currentAchievement].link, '_blank');
                              }
                            }}
                            className="w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 transition-colors rounded-md text-sm text-gray-300 flex items-center justify-center gap-2"
                        >
                            <Github size={16} />
                            View Repository
                        </button>
                        </div>
                    </div>
                    )}
                    </div>
                    </div>
                  </div>
                </div>
                {/* Progress Indicator */}
                <div className="flex justify-center gap-2 mt-4">
                  {achievements.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (index !== currentAchievement) {
                          setIsTransitioning(true);
                          setTimeout(() => {
                            setCurrentAchievement(index);
                            setIsTransitioning(false);
                          }, 500);
                        }
                      }}
                      className={`h-1 w-8 rounded-full transition-all duration-300 ${
                        index === currentAchievement ? 'bg-blue-500' : 'bg-gray-700'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
        <footer className="mt-20 py-8 bg-gray-800">
        <div className="max-w-5xl mx-auto px-8 flex flex-col items-center">
            <a
            href="mailto:m_srivastava@ucsb.edu"
            className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
            title="Email me!"
            >
            <Mail size={20} />
            </a>
            <p className="text-gray-400">© 2024 Mihir Srivastava. All rights reserved.</p>
        </div>
        </footer>
      {/* Background Animation */}
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-30">
      {orbs.map((orb, i) => (
        <div
          key={i}
          className={`absolute bg-gradient-to-r ${orb.gradient} rounded-full mix-blend-multiply filter blur-xl animate-blob`}
          style={{
            top: `${orb.y}%`,
            left: `${orb.x}%`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            animationDelay: `${orb.delay}s`,
          }}
        />
      ))}
    </div>
    <style>{`
      @keyframes trace-glow {
        0%, 100% {
          box-shadow: 0 0 4px 2px rgba(255, 169, 64, 0.8),
                    0 0 8px 4px rgba(255, 169, 64, 0.6),
                    0 0 12px 6px rgba(255, 169, 64, 0.4);
        }
        25% {
          box-shadow: 0 0 4px 2px rgba(236, 72, 153, 0.6),
                    0 0 8px 4px rgba(236, 72, 153, 0.4),
                    0 0 12px 6px rgba(236, 72, 153, 0.2);
        }
        50% {
          box-shadow: 0 0 4px 2px rgba(147, 51, 234, 0.6),
                    0 0 8px 4px rgba(147, 51, 234, 0.4),
                    0 0 12px 6px rgba(147, 51, 234, 0.2);
        }
        75% {
          box-shadow: 0 0 4px 2px rgba(59, 130, 246, 0.6),
                    0 0 8px 4px rgba(59, 130, 246, 0.4),
                    0 0 12px 6px rgba(59, 130, 246, 0.2);
        }
      }

      .animate-trace-glow {
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      .group:hover .animate-trace-glow {
        opacity: 1;
        animation: trace-glow 3s linear infinite;
      }
    `}</style>
        <style>{`
        @keyframes blob {
            0% {
            transform: translate(0px, 0px) scale(1) rotate(0deg);
            }
            33% {
            transform: translate(30px, -50px) scale(1.1) rotate(120deg);
            }
            66% {
            transform: translate(-20px, 20px) scale(0.9) rotate(240deg);
            }
            100% {
            transform: translate(0px, 0px) scale(1) rotate(360deg);
            }
        }
        .animate-blob {
            animation: blob 15s infinite;
        }
        `}</style>
        <Analytics />
    </div>
  );
};

export default PersonalWebsite;