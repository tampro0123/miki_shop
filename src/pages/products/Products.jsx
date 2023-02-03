import Header from '~/components/Layout/Header';
import styles from './Products.module.scss';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '~/components/Layout/Footer';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUptIcon
} from '~/components/Icons';

const cx = classNames.bind(styles);

const products = [
  {
    name: 'Lira Earrings',
    price: 115000,
    img: 'product1.png'
  },
  {
    name: 'Emme Ring',
    price: 987000,
    img: 'product2.jpg'
  },
  {
    name: 'Ocean Necklace',
    price: 552000,
    img: 'product3.jpg'
  },
  {
    name: 'Era Bracelet',
    price: 123000,
    img: 'product4.jpg'
  },
  {
    name: 'Lira Earrings',
    price: 335000,
    img: 'product7.jpg'
  },
  {
    name: 'Emme Ring',
    price: 233000,
    img: 'product8.jpg'
  },
  {
    name: 'Ocean Necklace',
    price: 135000,
    img: 'product9.jpg'
  },
  {
    name: 'Era Bracelet',
    price: 33500,
    img: 'product3.jpg'
  },
  {
    name: 'Lira Earrings',
    price: 335000,
    img: 'product4.jpg'
  },
  {
    name: 'Emme Ring',
    price: 25000,
    img: 'product7.jpg'
  },
  {
    name: 'Ocean Necklace',
    price: 435020,
    img: 'product2.jpg'
  },
  {
    name: 'Era Bracelet',
    price: 315000,
    img: 'product1.png'
  }
];

const productDefault = products.slice();

function Products() {
  const [isShowDrop, setIsShowDrop] = useState(false);
  const [productSorted, setProductSorted] = useState([]);
  console.log(productSorted);

  const handleSetDropdown = () => {
    setIsShowDrop(!isShowDrop);
  };
  const handleSortDefault = () => {
    setProductSorted(productDefault);
    console.log(productSorted);
    return productSorted;
  };
  const handleSortAToZ = () => {
    setProductSorted(
      products.sort((a, b) => {
        const nameA = a.name.toLowerCase(),
          nameB = b.name.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      })
    );

    return productSorted;
  };
  const handleSortZToA = () => {
    setProductSorted(
      products.sort((a, b) => {
        return b.name.localeCompare(a.name);
      })
    );
    console.log(productSorted);
    return productSorted;
  };
  const handleSortPriceUp = () => {
    setProductSorted(
      products.sort((a, b) => {
        return a.price - b.price;
      })
    );
    return productSorted;
  };
  const handleSortPriceDown = () => {
    setProductSorted(
      products.sort((a, b) => {
        return b.price - a.price;
      })
    );
    return productSorted;
  };
  return (
    <Fragment>
      <Header />
      <div className={cx('wrapper')}>
        <div className={cx('section')}>
          <Image src='section-product.jpg' className={cx('img-section')} />
        </div>
        <div className={cx('contain')}>
          <div className={cx('heading')}>
            <span className={cx('head-text')}>Sản phẩm</span>
          </div>
          <div className={cx('portfolio')}>
            <h2 className={cx('port-text')}>Danh mục sản phẩm</h2>
            <div className={cx('dropdown-sort')} onClick={handleSetDropdown}>
              <h2 className={cx('sort')}>Sắp xếp theo</h2>
              {isShowDrop ? <ArrowUptIcon /> : <ArrowDownIcon />}
              {isShowDrop && (
                <div className={cx('dropdown')}>
                  <div onClick={handleSortDefault}>Mặc định</div>
                  <div onClick={handleSortAToZ}>A-Z</div>
                  <div onClick={handleSortZToA}>Z-A</div>
                  <div onClick={handleSortPriceUp}>Giá tăng dần</div>
                  <div onClick={handleSortPriceDown}>Giá giảm dần</div>
                  <div>Sản phẩm mới</div>
                  <div>Sản phẩm ưu đãi</div>
                </div>
              )}
            </div>
          </div>
          <div className={cx('products')}>
            <div className={cx('product-list')}>
              {(productSorted.length > 0 ? productSorted : products).map(
                (product, index) => {
                  return (
                    <div key={index} className={cx('product')}>
                      <Link to={'/products/id'}>
                        <Image
                          src={product.img}
                          alt={product.name}
                          className={cx('product-img')}
                        />
                      </Link>
                      <h3 className={cx('product-name')}>{product.name}</h3>
                      <p className={cx('product-price')}>{product.price}</p>
                      <button className={cx('btn-add')}>
                        Thêm vào giỏ hàng
                      </button>
                    </div>
                  );
                }
              )}
            </div>
          </div>
          <div className={cx('paging')}>
            <button className={cx('pg-btn', 'active')}>1</button>
            <button className={cx('pg-btn')}>2</button>
            <button className={cx('pg-btn')}>3</button>
            <button className={cx('pg-btn')}>...</button>
            <button className={cx('pg-btn')}>
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Products;
