import { motion } from "motion/react";

const Features = () => {
  const features = [
    {
      title: "Smart Form Builder",
      description:
        "Design and deploy powerful forms in seconds with an intuitive, drag-and-drop interface.Collect anything — feedback, registrations, surveys — all without writing code.",
    },
    {
      title: "User Authentication & Roles",
      description:
        "Formly includes built-in authentication and authorization, so users can safely manage their forms and submissions.",
    },
    {
      title: "Secure Data Storage",
      description:
        "All your submissions are stored safely and served through a robust Node.js backend.Your data stays private, accessible only through authenticated endpoints",
    },
    {
      title: "Public & Private Forms",
      description:
        "Choose whether your forms are shareable with the public or accessible only to logged-in users.Perfect for both open surveys and internal company workflows.",
    },
    {
      title: "Email Notifications",
      description:
        "Stay informed with customizable email notifications for new form submissions.Keep track of responses without constantly checking the dashboard.",
    },
    {
      title: "Real-Time Submissions",
      description:
        "Experience instant updates with real-time form submissions using WebSockets.Keep your team in the loop as responses come in.",
    },
    {
      title: "Real-time Analytics",
      description:
        "Gain insights with real-time analytics on form submissions. Track user engagement, response rates, and more with our comprehensive dashboard.",
    },
    {
      title: "Customizable Themes",
      description:
        "Match your forms to your brand or project aesthetics with built-in customization options — colors, inputs, and buttons.",
    },
  ];
  return (
    <div className="space-y-5  px-2 py-3 max-w-[1200px] mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
      >
        Key Features
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-4 border border-foreground/0 hover:border-foreground/20 m-2 rounded-lg shadow-sm   cursor-pointer bg-gray-50  hover:bg-background hover:shadow-lg transition duration-150"
          >
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
