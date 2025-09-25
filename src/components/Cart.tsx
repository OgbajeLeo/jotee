import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  X,
  Plus,
  Minus,
  Trash2,
  MessageCircle,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useCart } from "../contexts/CartContext";

const Cart: React.FC = () => {
  const { state, removeFromCart, updateQuantity, closeCart, clearCart } =
    useCart();

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const generateWhatsAppMessage = (): string => {
    if (state.items.length === 0) return "";

    const itemsText = state.items
      .map((item) => {
        const price = parseInt(item.product.price.replace(/,/g, ""));
        const totalPrice = price * item.quantity;
        return `• ${item.product.name} (${item.quantity}x) - ${formatPrice(
          totalPrice
        )}`;
      })
      .join("\n");

    const totalPrice = formatPrice(state.totalPrice);
    const totalItems = state.totalItems;

    return `🛒 *Order from Jotee Store*

*Items:*
${itemsText}

*Total: ${totalItems} items - ${totalPrice}*

Please confirm this order and provide your delivery details. Thank you!`;
  };

  const handleWhatsAppCheckout = () => {
    const message = generateWhatsAppMessage();
    const phoneNumber = "+2349036787860";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <AnimatePresence>
      {state.isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />

          {/* Cart Sidebar */}
          <motion.div
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <ShoppingCart className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-bold text-gray-900">
                  Shopping Cart ({state.totalItems})
                </h2>
              </div>
              <button
                onClick={closeCart}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {state.items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <ShoppingCart className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Add some products to get started
                  </p>
                  <button
                    onClick={closeCart}
                    className="px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors duration-200"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {state.items.map((item) => (
                    <motion.div
                      key={item.product.id}
                      className="bg-gray-50 rounded-xl p-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex gap-4">
                        {/* Product Image */}
                        <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-2xl">
                          {item.product.image}
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 truncate">
                            {item.product.name}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            {item.product.brand}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-primary">
                              {formatPrice(
                                parseInt(item.product.price.replace(/,/g, ""))
                              )}
                            </span>
                            <button
                              onClick={() => removeFromCart(item.product.id)}
                              className="text-red-500 hover:text-red-700 transition-colors duration-200"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1)
                            }
                            className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                            className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-600">Total</div>
                          <div className="font-bold text-primary">
                            {formatPrice(
                              parseInt(item.product.price.replace(/,/g, "")) *
                                item.quantity
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {state.items.length > 0 && (
              <div className="border-t border-gray-200 p-6 space-y-4">
                {/* Total */}
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total ({state.totalItems} items)</span>
                  <span className="text-primary">
                    {formatPrice(state.totalPrice)}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <motion.button
                    onClick={handleWhatsAppCheckout}
                    className="w-full bg-green-500 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-green-600 transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Checkout via WhatsApp
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>

                  <div className="flex gap-3">
                    <button
                      onClick={clearCart}
                      className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-200"
                    >
                      Clear Cart
                    </button>
                    <button
                      onClick={closeCart}
                      className="flex-1 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors duration-200"
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>

                {/* WhatsApp Info */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-semibold text-green-800 mb-1">
                        WhatsApp Checkout
                      </p>
                      <p className="text-green-700">
                        Your order will be sent to our WhatsApp for confirmation
                        and payment processing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;
