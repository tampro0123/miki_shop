import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import {
    ArrowRightIcon,
    FacebookBlack,
    Twitter,
    Instagram,
    TikTok,
    Pinterest,
} from "~/components/Icons";

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx("footer")}>
            <div className={cx("wrapper")}>
                <div className={cx("header")}>
                    <div className={cx("promotion")}>
                        <h2 className={cx("register-promotion")}>
                            Đăng ký để nhận khuyến mãi
                        </h2>
                        <div className={cx("input")}>
                            <input
                                type="text"
                                placeholder="Email"
                                className={cx("input-text")}
                            />
                            <ArrowRightIcon
                                className={cx("arrow-right-icon")}
                            />
                        </div>
                    </div>
                    <div className={cx("social")}>
                        <h2 className={cx("social-conect")}>
                            Kết nối với chúng tôi tại
                        </h2>
                        <div className={cx("social-list")}>
                            <FacebookBlack className={cx("icon-social")} />
                            <Twitter className={cx("icon-social")} />
                            <Instagram className={cx("icon-social")} />
                            <TikTok className={cx("icon-social")} />
                            <Pinterest className={cx("icon-social")} />
                        </div>
                    </div>
                </div>
                <div className={cx("footer-contain")}>
                    <div className={cx("info-miki")}>
                        <h2 className={cx("logo-name")}>MIKI JEWELRY</h2>
                        <p>Số GCNĐKDN : 2500130301</p>
                        <p>Cấp lần đầu ngày : 23/1/1999</p>
                        <p>Đăng ký thay đổi lần thứ 16 : Ngày 1/1/2023</p>
                        <p>Cơ quan cấp: Sở kế hoạch và đầu tư TP.Hồ Chí Minh</p>
                        <p>Địa Chỉ: 12 Hai Bà Trưng, Quận 1, TP. Hồ Chí Minh</p>
                    </div>
                    <div className={cx("service")}>
                        <div className={cx("service-list")}>
                            <h3>Về chúng tôi</h3>
                            <a href="/home">Thương hiệu</a>
                            <a href="/home">Lịch sử</a>
                            <a href="/home">Tuyển dụng</a>
                        </div>
                        <div className={cx("service-list")}>
                            <h3>Tài khoản</h3>
                            <a href="/home"> Lịch sử mua hàng</a>
                            <a href="/home">Giỏ hàng</a>
                            <a href="/home">Thông tin</a>
                        </div>
                        <div className={cx("service-list")}>
                            <h3>Dịch vụ khách hàng</h3>
                            <a href="/home">Thanh toán</a>
                            <a href="/home"> Cẩm nang sử dụng</a>
                            <a href="/home"> Câu hỏi thường gặp</a>
                        </div>
                    </div>
                </div>
                <div className={cx("miki-logo")}>MikiShop@2023</div>
            </div>
        </div>
    );
}

export default Footer;
