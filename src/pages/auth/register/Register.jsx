import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import { Logo } from '../../../components/Icons';
import FormRegister from '../../../sections/auth/FormRegister';
import Footer from '~/components/Layout/Footer';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Register() {
  return (
    <>
      <div className={cx('wrapper')}>
        <div className={cx('body')}>
          <Image src='register.jpg' className={cx('img-register')} />

          <div className={cx('form')}>
            <Link to={'/home'} className={cx('header')}>
              <Logo className={cx('logo')} />
              <h2 className={cx('brand_name')}>MIKI JEWELRY</h2>
            </Link>
            <div className={cx('form_register')}>
              <h4 className={cx('title')}>Đăng ký tài khoản</h4>
              <FormRegister />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Register;
