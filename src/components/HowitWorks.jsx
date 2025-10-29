import { motion } from "motion/react";
import { ClipboardList, Share2, BarChart3, Database } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Create Your Form",
    icon: <ClipboardList className="w-8 h-8 text-indigo-600" />,
    description:
      "Design your form with a simple drag-and-drop builder. Add fields, set rules, and publish instantly — no coding required.",
  },
  {
    id: 2,
    title: "Share Your Link",
    icon: <Share2 className="w-8 h-8 text-indigo-600" />,
    description:
      "Get a unique shareable link and send it anywhere. Post it online, embed it, or share directly with your audience.",
  },
  {
    id: 3,
    title: "Collect Responses",
    icon: <Database className="w-8 h-8 text-indigo-600" />,
    description:
      "Every submission is securely stored in real-time. You can view, filter, and export responses anytime.",
  },
  {
    id: 4,
    title: "Analyze Results",
    icon: <BarChart3 className="w-8 h-8 text-indigo-600" />,
    description:
      "Visualize trends and response data in your dashboard. Make decisions with clean, actionable insights.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-2">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
        >
          How It Works
        </motion.h2>

        <div className="relative border-l-4 border-indigo-100 pl-6 space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -left-12 flex items-center justify-center w-10 h-10 bg-indigo-600 text-white rounded-full font-semibold">
                {step.id}
              </div>

              <div className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-3">
                  {step.icon}
                  <h3 className="text-xl font-semibold text-gray-800">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
