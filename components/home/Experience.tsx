// components/Experience.tsx
import { motion } from 'framer-motion';

const experienceItems = [
  {
    company: "Nblik, Delhi, India",
    role: "Fullstack Web Developer",
    duration: "June 2022 – September 2023",
    achievements: [
      "Designed RESTful APIs using Node.js/TypeScript",
      "Built recyclable code architecture",
      "Collaborated with senior developers"
    ]
  },
  // Add other experience items
];

export default function Experience() {
  return (
    <section className="py-12 px-4 bg-slate-50">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-indigo-600 mb-8 text-center"
      >
        Professional Experience
      </motion.h2>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {experienceItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-slate-800">{item.role}</h3>
            <p className="text-indigo-500 font-medium mt-2">{item.company}</p>
            <p className="text-slate-500 text-sm mb-4">{item.duration}</p>
            <ul className="list-disc list-inside space-y-2">
              {item.achievements.map((achievement, i) => (
                <li key={i} className="text-slate-600">{achievement}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}