/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { motion } from "framer-motion";

import { productsData } from "../src/data";

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home({ products = [] }) {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <div className="container center">
        <div className="title">
          <h1>Select a protein</h1>
        </div>
        <motion.div variants={stagger} className="product-row">
          {products.map((product) => (
            <Link passHref key={product.id} href="/product/[id]" as={`/product/${product.id}`}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} variants={fadeInUp} className="card">
                <span className="category">Protein</span>
                <motion.img
                  initial={{
                    x: 60,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{ delay: 0.2 }}
                  src={product.image}
                  width={250}
                  height={250}
                  alt={product.name}
                />
                <div className="product-info">
                  <h4>{product.name}</h4>
                  <span>{product.price}</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

Home.getInitialProps = async function () {
  return {
    products: productsData,
  };
};
