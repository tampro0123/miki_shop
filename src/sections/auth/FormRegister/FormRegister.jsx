import { useState } from "react";
import styles from "./FormRegister.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function FormRegister() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        birthDate: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // validate form fields
        if (formData.password !== formData.confirmPassword) {
            alert("Đăng ký thành công");
            return;
        }
        // send a POST request to your server with the form data
        // handle any errors or success messages that are returned
    };

    const handleChange = (e) => {
        console.log({ ...formData });
        return setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleSubmit} className={cx("form")}>
            <div className={cx("user_name")}>
                <label>
                    <input
                        className={cx("input_name")}
                        placeholder="Họ"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <input
                        className={cx("input_name")}
                        placeholder="Tên"
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <input
                        className={cx("input_name")}
                        placeholder="Năm Sinh"
                        type="date"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleChange}
                    />
                </label>
            </div>
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
            <br />
            <label>
                <input
                    className={cx("input_account")}
                    placeholder="Nhập mật khẩu từ 6 đến 8 ký tự"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                <input
                    className={cx("input_account")}
                    placeholder="Xác thực lại mật khẩu"
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label htmlFor="promotion" className={cx("checked_promotion")}>
                <input
                    className={cx("checkbox")}
                    type="checkbox"
                    id="promotion"
                    name="promotion"
                    // value={}
                    onChange={handleChange}
                />
                Nhận thông tin khuyến mãi qua email
            </label>
            <br />
            <label htmlFor="policy" className={cx("checked_policy")}>
                <input
                    className={cx("checkbox")}
                    type="checkbox"
                    id="policy"
                    name="policy"
                    // value={}
                    onChange={handleChange}
                />
                <div>
                    Tôi đã đọc và đồng ý với các{" "}
                    <a href="/" className={cx("primary_text")}>
                        điều khoản chính sách
                    </a>{" "}
                    của Miki Jewelry
                </div>
            </label>
            <button className={cx("btn-submit")} type="submit">
                Đăng Kí
            </button>
            <p className={cx("text_footer")}>
                Bạn đã có tài khoản ?
                <a href="/" className={cx("login_btn")}>
                    ĐĂNG NHẬP
                </a>
            </p>
        </form>
    );
}

export default FormRegister;
