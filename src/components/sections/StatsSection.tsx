import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Users,
  Award,
  Truck,
  Star,
  Shield,
  Clock,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [counts, setCounts] = useState({
    customers: 0,
    products: 0,
    deliveries: 0,
    rating: 0,
    warranty: 0,
    support: 0,
    growth: 0,
    satisfaction: 0,
  });

  const stats = [
    {
      icon: Users,
      value: 10000,
      suffix: "+",
      label: "Happy Customers",
      description: "Satisfied clients worldwide",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Award,
      value: 500,
      suffix: "+",
      label: "Products Sold",
      description: "Quality products delivered",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Truck,
      value: 15000,
      suffix: "+",
      label: "Fast Deliveries",
      description: "Quick and reliable shipping",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Star,
      value: 4.9,
      suffix: "/5",
      label: "Customer Rating",
      description: "Based on verified reviews",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: Shield,
      value: 100,
      suffix: "%",
      label: "Warranty Coverage",
      description: "Full warranty on all products",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Clock,
      value: 24,
      suffix: "/7",
      label: "Support Hours",
      description: "Round-the-clock assistance",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: TrendingUp,
      value: 150,
      suffix: "%",
      label: "Growth Rate",
      description: "Year-over-year growth",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: CheckCircle,
      value: 99,
      suffix: "%",
      label: "Satisfaction Rate",
      description: "Customer satisfaction score",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  const achievements = [
    {
      title: "Best Tech Retailer 2024",
      description: "Awarded by Tech Industry Association",
      icon: Award,
      year: "2024",
    },
    {
      title: "Customer Service Excellence",
      description: "Recognized for outstanding support",
      icon: Star,
      year: "2023",
    },
    {
      title: "Innovation in Technology",
      description: "Leading edge product solutions",
      icon: TrendingUp,
      year: "2023",
    },
    {
      title: "Quality Assurance Certified",
      description: "ISO 9001:2015 certified processes",
      icon: Shield,
      year: "2022",
    },
  ];

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      stats.forEach((stat, index) => {
        const targetValue = stat.value;
        const stepValue = targetValue / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
          currentStep++;
          const currentValue = Math.min(stepValue * currentStep, targetValue);

          setCounts((prev) => ({
            ...prev,
            [Object.keys(counts)[index]]: currentValue,
          }));

          if (currentStep >= steps) {
            clearInterval(timer);
          }
        }, stepDuration);
      });
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Numbers that speak for themselves. We're proud of our journey and
            the trust our customers place in us.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-500 overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </div>

              {/* Counter */}
              <motion.div
                className="text-4xl md:text-5xl font-bold text-white mb-2"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {stat.value % 1 === 0
                  ? Math.floor(
                      counts[Object.keys(counts)[index] as keyof typeof counts]
                    )
                  : counts[
                      Object.keys(counts)[index] as keyof typeof counts
                    ].toFixed(1)}
                <span className="text-primary text-2xl">{stat.suffix}</span>
              </motion.div>

              {/* Label */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                {stat.label}
              </h3>
              <p className="text-gray-300 text-sm">{stat.description}</p>

              {/* Hover Effect */}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Awards & <span className="text-primary">Recognition</span>
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by industry
              leaders and satisfied customers worldwide.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="group text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                  <achievement.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-primary text-sm font-semibold mb-2">
                  {achievement.year}
                </div>
                <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  {achievement.title}
                </h4>
                <p className="text-gray-300 text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
