import Image from "~/components/Image";
import styles from "./Login.module.scss";
import classNames from "classnames/bind";
import { Logo } from "../../../components/Icons";
import FormLogin from "~/sections/auth/FormLogin";

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("body")}>
                <Image src="login.jpg" className={cx("img-login")} />

                <div className={cx("form")}>
                    <div className={cx("header")}>
                        <Logo className={cx("logo")} />

                        <h2 className={cx("brand_name")}>MIKI JEWELRY</h2>
                    </div>
                    <div className={cx("form_login")}>
                        <h4 className={cx("title")}>Đăng nhập</h4>
                        <FormLogin />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
