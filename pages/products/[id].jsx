import React from 'react'
import { useRouter } from 'next/router'
import ProductInfo from '@/components/product/ProductInfo';
import Layout from '@/components/global/Layout';
import DetailTabs from '@/components/product/DetailTabs';

const ProductDetail = () => {
    const router = useRouter();
    const { id } = router.query;

  return (
    <Layout>
        <ProductInfo id={id}/>
        <DetailTabs/>
    </Layout>
  )
}

export default ProductDetail

// export async function getServerSideProps(context) {
//     console.log('context', context)
//     const { id } = context.params;
//     return {props: {id}};
// }