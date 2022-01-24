import Link from "next/link";
import Image from "next/image";
import { productsData } from "../src/data";

export default function Home({ products = [] }) {
  return (
    <div>
      <div className="container center">
        <div className="title">
          <h1>Select a protein</h1>
        </div>
        <div className="product-row">
          {products.map((product) => (
            <Link passHref key={product.id} href="/product/[id]" as={`/product/${product.id}`}>
              <div className="card">
                <span className="category">Protein</span>
                <Image src={product.image} width={250} height={250} alt={product.name} />
                <div className="product-info">
                  <h4>{product.name}</h4>
                  <span>{product.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

Home.getInitialProps = async function () {
  return {
    products: productsData,
  };
};
