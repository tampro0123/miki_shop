import React, { Fragment } from 'react';
import Header from '~/components/Layout/DefaultLayout/Header';
import styles from './About.module.scss';
import classNames from 'classnames/bind';
import Footer from '~/components/Layout/DefaultLayout/Footer';
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
      </div>
      <Footer />
    </Fragment>
  );
};

export default About;
