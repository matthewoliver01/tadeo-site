import { motion } from "framer-motion";
import {
  CheckCircle,
  Shield,
  TrendingUp,
  BookOpen,
  Truck,
  Activity,
} from "lucide-react";
import GlassSurface from "../components/GlassSurface";

const About = () => {
  const services = [
    {
      category: "Program Management",
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      items: [
        "Contract Management",
        "Cost, Schedule, and Risk Management",
        "Organizational Optimization",
        "Resource Allocation",
        "Team Building",
      ],
    },
    {
      category: "Training",
      icon: <BookOpen className="h-6 w-6 text-white" />,
      items: [
        "Training Video Development Services (IMI)",
        "Training Instruction & Documentation",
        "Training Delivery and Execution",
      ],
    },
    {
      category: "CBRN & System",
      icon: <Shield className="h-6 w-6 text-white" />,
      items: ["Sensor", "Logistics"],
    },
    {
      category: "Logistics & Support",
      icon: <Truck className="h-6 w-6 text-white" />,
      items: [
        "Technical Manuals",
        "Provisioning",
        "Analyses",
        "LORA",
        "MTA",
        "FMECA",
      ],
    },
    {
      category: "Spares & Sustainability",
      icon: <Activity className="h-6 w-6 text-white" />,
      items: ["Supportability", "Maintenance Planning", "SPIs", "RPSTL"],
    },
  ];

  return (
    <div className="py-[170px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left md:order-2"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Who We Are
            </h1>
            <GlassSurface
              width="100%"
              height="auto"
              borderRadius={16}
              className="shadow-lg shadow-black/20"
            >
              <div className="w-full p-6">
                <p className="text-xl text-white leading-relaxed">
                  Tadeo Services was created in October of 2020. Jennifer
                  Medillin, the owner and founder, was looking for a new career
                  venture during a time of uncertainty. While utilizing the
                  resources around her, she was able to enhance her expertise
                  and expand the business. The company that started as a
                  one-woman-show has grown to a small team. Tadeo Services has
                  50+ years of work experience that includes military veterans.
                </p>
              </div>
            </GlassSurface>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center md:order-1"
          >
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 bg-zinc-800 rounded-full flex items-center justify-center border-4 border-zinc-700 overflow-hidden shadow-xl mb-4">
                <img
                  src="/jennifer-medillin.jpg"
                  alt="Jennifer Medillin, Owner"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-zinc-400 font-medium">
                Jennifer Medillin, Owner
              </span>
            </div>
          </motion.div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlassSurface
              width="100%"
              height={384}
              borderRadius={16}
              className="shadow-lg shadow-black/20 overflow-hidden"
            >
              <img
                src="/dinner-picture.webp"
                alt="Tadeo Company Dinner 2025"
                className="w-full h-full object-cover"
              />
            </GlassSurface>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlassSurface
              width="100%"
              height="auto"
              borderRadius={16}
              className="shadow-lg shadow-black/20"
            >
              <div className="w-full p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  What is Important to Us
                </h3>
                <p className="text-zinc-200 mb-4">
                  We are a firm believer in trust, quality, and results for all
                  of our clients: Private, Government, State, and Federal.
                </p>
                <p className="text-zinc-200">
                  We use our experience to assist our clients in managing their
                  project schedules, cost versus risk, maximizing profits, and
                  strengthening relationships.
                </p>
              </div>
            </GlassSurface>
          </motion.div>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              What We Can Do For You
            </h2>
            <p className="text-zinc-200 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <GlassSurface
                  width="100%"
                  height="100%"
                  borderRadius={16}
                  className="h-full shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-[1.02]"
                >
                  <div className="w-full p-6 h-full">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-zinc-700/70 rounded-lg mr-4">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {service.category}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {service.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-zinc-200"
                        >
                          <CheckCircle className="h-5 w-5 text-zinc-300 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassSurface>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
