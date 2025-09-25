import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../contexts/CartContext";

const CartButton: React.FC = () => {
  const { state, openCart } = useCart();

  return (
    <motion.button
      onClick={openCart}
      className="relative p-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors duration-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <ShoppingCart className="w-6 h-6" />

      {/* Cart Badge */}
      {state.totalItems > 0 && (
        <motion.div
          className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 15 }}
        >
          {state.totalItems > 99 ? "99+" : state.totalItems}
        </motion.div>
      )}
    </motion.button>
  );
};

export default CartButton;
