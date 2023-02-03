import React, { Fragment } from 'react';
import Header from '~/components/Layout/Header';
import styles from './About.module.scss';
import Image from '~/components/Image';
import classNames from 'classnames/bind';
import Footer from '~/components/Layout/Footer';
import { ArrowRightIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
const About = () => {
  return (
    <Fragment>
      <Header />
      <div className={cx('wrapper')}>
        <div className={cx('nav')}>
          <a href='/about'>Về chúng tôi</a>
          <ArrowRightIcon className={cx('icon')} />
          <a href='/about' className={cx('style-product')}>
            Thương hiệu và lịch sử
          </a>
        </div>
        <div className={cx('hero')}>
          <div className={cx('hero-container')}>
            <div className={cx('hero-content')}>
              <div className={cx('hero-content-header')}>
                <h2>“Miki Jewelry - Tales of Happiness”</h2>
              </div>
              <div className={cx('hero-content-description')}>
                <p>
                  Lần đầu ra mắt thị trường vào năm 2015, Miki mong muốn mang
                  tới những sản phẩm Nữ trang được đầu tư về thiết kế, minh bạch
                  về thông tin giao dịch hàng hoá và mang đến khách hàng dịch vụ
                  hậu mãi trọn vẹn.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('brand')}>
          <div className={cx('brand-container')}>
            <div className={cx('brand-content')}>
              <h3>Phong cách Hàn Quốc</h3>
              <p>
                Lấy tầm nhìn trở thành “Nhà bán lẻ trang sức dẫn đầu xu hướng",
                trang sức Miki mang phong cách trẻ trung, hiện đại, liên tục cập
                nhật những xu hướng mới từ Hàn Quốc.{' '}
              </p>
            </div>
            <div className={cx('brand-imageWrap')}>
              <Image
                src='product7.jpg'
                className={cx('brand-imageWrap-image')}
              />
            </div>
          </div>
          <div className={cx('brand-container')}>
            <div className={cx('brand-imageWrap')}>
              <Image
                src='product9.jpg'
                className={cx('brand-imageWrap-image')}
              />
            </div>
            <div className={cx('brand-content')}>
              <h3>Những câu chuyện hạnh phúc</h3>
              <p>
                Mang trong mình sứ mệnh sẽ trở thành bạn đồng hành luôn thấu
                hiểu và trân trọng từng khoảnh khắc trong cuộc sống của khách
                hàng, Miki Jewelry là “Tales of Happines” (Câu chuyện của hạnh
                phúc). Hạnh phúc, tình yêu, kỉ niệm,… được hình hóa thành những
                món quà ở lại mãi với thời gian...
              </p>
            </div>
          </div>
          <div className={cx('brand-container')}>
            <div className={cx('brand-content')}>
              <h3>Sản xuất & chế tác</h3>
              <p>
                Sở hữu xưởng sản xuất rộng hơn 3000m2 tại Vĩnh Phúc dây chuyền
                sản xuất hiện đại cùng với kinh nghiệm hơn 15 năm trong ngành
                sản xuất kim hoàn.
              </p>
            </div>
            <div className={cx('brand-imageWrap')}>
              <Image
                src='product10.jpg'
                className={cx('brand-imageWrap-image')}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default About;
