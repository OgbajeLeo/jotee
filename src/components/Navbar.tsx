import  { useState } from "react";
import { motion, AnimatePresence,type Variants } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Contact", href: "#contact" },
    { name: "Products", href: "#products" },
    { name: "Wholesale", href: "#wholesale" },
  ];

  // Animation variants
  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const hamburgerVariants: Variants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  };

  const lineVariants:Variants = {
    closed: { rotate: 0, y: 0 },
    open: (index: number) => ({
      rotate: index === 0 ? 45 : index === 1 ? -45 : 0,
      y: index === 0 ? 6 : index === 1 ? -6 : 0,
    }),
  };

  return (
    <>
      <motion.nav
        className="bg-white shadow-lg sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center lg:h-24 h-[70px]">
            {/* Logo */}
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-primary">
                  <span className="text-primary">JOTEE</span>
                  <span className="text-secondary">.</span>
                </h1>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 hover:text-primary px-3 py-2 font-medium transition-colors duration-200 relative group"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {link.name}
                    <motion.div
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Chat Us
              </motion.button>
            </motion.div>

            {/* Mobile menu button */}
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-primary focus:outline-none focus:text-primary p-2"
                whileTap={{ scale: 0.9 }}
              >
                <motion.svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  variants={hamburgerVariants}
                  animate={isMenuOpen ? "open" : "closed"}
                  transition={{ duration: 0.3 }}
                >
                  {[0, 1, 2].map((index) => (
                    <motion.path
                      key={index}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={
                        index === 0
                          ? "M4 6h16"
                          : index === 1
                          ? "M4 12h16"
                          : "M4 18h16"
                      }
                      variants={lineVariants}
                      custom={index}
                      animate={isMenuOpen ? "open" : "closed"}
                      transition={{ duration: 0.3 }}
                      style={{
                        opacity: isMenuOpen && index === 2 ? 0 : 1,
                      }}
                    />
                  ))}
                </motion.svg>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Full Page Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-br from-primary/95 to-primary-dark/95 backdrop-blur-sm z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="flex flex-col items-center justify-center h-full px-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Navigation Links */}
              <div className="text-center space-y-8 mb-12">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="block text-white text-4xl font-bold hover:text-secondary transition-colors duration-300 relative group"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.1,
                      color: "#FDE047",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                    <motion.div
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-secondary"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                className="bg-secondary text-gray-900 px-12 py-4 rounded-full text-xl font-bold hover:bg-secondary-dark transition-colors duration-300 shadow-2xl"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(253, 224, 71, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(false)}
              >
                Chat Us
              </motion.button>

              {/* Close Button */}
              <motion.button
                className="absolute top-8 right-8 text-white text-2xl hover:text-secondary transition-colors duration-300"
                onClick={toggleMenu}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
