import React from 'react';
import { client } from '../../lib/client';
import { Market } from '../../components';

const Shop = ({ shopData }) => {
  return (
    <div className="container-fluid">
      <div className="containers">
        <div className="search">
          <h1>Our Products</h1>
          <input type="text" name="" id="find" placeholder="Search Product...." onKeyUp="" />
        </div>

        <div className="products-container">
          {shopData?.map((shop) => <Market key={shop._id} shop={shop} />)}
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "shop"]';
  const shopData = await client.fetch(query);

  return {
    props: { shopData }
  }
}

export default Shop;