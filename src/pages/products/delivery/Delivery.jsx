import classNames from "classnames/bind";

import styles from "./Delivery.module.scss";

const cx = classNames.bind(styles);

function Delivery() {
    return (
        <div className={cx("wraper")}>
            <div className={cx("head")}>
                <h1>Chính sách vận chuyển</h1>
                <p>
                    Với đối tác giao hàng uy tín, có mua bảo hiểm hàng hóa, thời
                    gian giao hàng nhanh và đúng hẹn:
                </p>
            </div>
            <div className={cx("table")}>
                <div>
                    <div className={cx("table-head")}>
                        <div className={cx("first-col")}>Khu vực</div>
                        <div>Nội thành Hà Nội/Hồ Chí Minh</div>
                        <div>Các tỉnh khác</div>
                    </div>
                    <div className={cx("table-contain")}>
                        <div className={cx("first-col")}>
                            Thời gian giao hàng
                        </div>
                        <div> 2 ngày</div>
                        <div>3-5 ngày</div>
                    </div>
                </div>
            </div>
            <div className={cx("footer")}>
                <h2 className={cx("warning")}>***Chú ý:</h2>
                <p>
                    Với sản phẩm giảm giá khuyến mãi từ 20% trở lên khách hàng
                    sẽ chịu hoàn toàn phí giao hàng.
                </p>
            </div>
        </div>
    );
}

export default Delivery;
