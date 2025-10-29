import { motion } from "framer-motion";
import {
  Rocket,
  GraduationCap,
  Briefcase,
  Code2,
  Calendar,
  Building2,
} from "lucide-react";

const useCases = [
  {
    title: "Startups",
    icon: <Rocket className="w-8 h-8 text-indigo-600" />,
    description:
      "Launch fast, test ideas, and collect feedback from users without engineering bottlenecks.",
  },
  {
    title: "Educators",
    icon: <GraduationCap className="w-8 h-8 text-indigo-600" />,
    description:
      "Create quizzes, assignments, and course feedback forms in minutes. Track responses with ease.",
  },
  {
    title: "Agencies",
    icon: <Briefcase className="w-8 h-8 text-indigo-600" />,
    description:
      "Simplify client onboarding with branded intake forms and organized response management.",
  },
  {
    title: "Developers",
    icon: <Code2 className="w-8 h-8 text-indigo-600" />,
    description:
      "Use our REST API to create, fetch, and analyze forms programmatically in your own apps.",
  },
  {
    title: "Event Managers",
    icon: <Calendar className="w-8 h-8 text-indigo-600" />,
    description:
      "Manage event registrations, RSVPs, and feedback seamlessly in one dashboard.",
  },
  {
    title: "Small Businesses",
    icon: <Building2 className="w-8 h-8 text-indigo-600" />,
    description:
      "Turn website visitors into leads with forms that connect directly to your backend.",
  },
];

export default function UseCases() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Who Uses Formly?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center text-gray-600 max-w-2xl mx-auto mb-16"
        >
          Formly is built for everyone — from startups to educators. Whether you
          need feedback, registrations, or automation, we’ve got you covered.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 hover:bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg p-8 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {useCase.icon}
                <h3 className="text-xl font-semibold text-gray-800">
                  {useCase.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
