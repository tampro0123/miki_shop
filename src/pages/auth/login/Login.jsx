import Image from "~/components/Image";
import styles from "./Login.module.scss";
import classNames from "classnames/bind";
import { Logo } from "../../../components/Icons";
import FormLogin from "~/sections/auth/FormLogin";
import Footer from "~/components/Layout/DefaultLayout/Footer";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("body")}>
                <Image src="login.jpg" className={cx("img-login")} />

                <div className={cx("form")}>
                    <Link to={"/home"} className={cx("header")}>
                        <Logo className={cx("logo")} />

                        <h2 className={cx("brand_name")}>MIKI JEWELRY</h2>
                    </Link>
                    <div className={cx("form_login")}>
                        <h4 className={cx("title")}>Đăng nhập</h4>
                        <FormLogin />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
