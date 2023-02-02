import { useState } from "react";
import styles from "./FormLogin.module.scss";
import classNames from "classnames/bind";
import { Facebook, Google } from "~/components/Icons";

const cx = classNames.bind(styles);

function FormLogin() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        console.log({ ...formData });
        return setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleSubmit} className={cx("form")}>
            <label>
                <input
                    className={cx("input_account")}
                    placeholder="Nhập email hoặc số điện thoại"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </label>
            <label>
                <input
                    className={cx("input_account")}
                    placeholder="Nhập mật khẩu"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </label>
            <a href="/" className={cx("forgot_password")}>
                Quên mật khẩu ?
            </a>

            <button className={cx("btn-submit")} type="submit">
                Đăng nhập
            </button>
            <p className={cx("text_footer")}>Hoặc đăng nhập bằng</p>
            <div className={cx("login-btn")}>
                <button className={cx("facebook-btn")}>
                    <Facebook /> Facebook
                </button>
                <button className={cx("google-btn")}>
                    <Google />
                    Google
                </button>
            </div>
            <p className={cx("yet-account")}>
                Bạn chưa có tài khoản ?{" "}
                <a href="/register" className={cx("register")}>
                    {" "}
                    Đăng ký
                </a>
            </p>
        </form>
    );
}

export default FormLogin;
