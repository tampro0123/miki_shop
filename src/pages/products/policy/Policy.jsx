import classNames from "classnames/bind";
import styles from "./Policy.module.scss";
const cx = classNames.bind(styles);

function Policy(prop) {
    const policys = prop.policys;
    return (
        <div className={cx("wrapper")}>
            <div className={cx("policy")}>
                <div className={cx("head")}>
                    <h2>Chính sách bảo hành : </h2>
                    <p>(Áp dụng cho vàng 18k)</p>
                </div>
                <div className={cx("table-content")}>
                    <div className={cx("content")}>
                        <div className={cx("content-head")}>Nội dung</div>
                        {policys.warranty_contents.map((content, index) => {
                            return <div key={index}>{content}</div>;
                        })}
                    </div>
                    <div className={cx("time")}>
                        <div className={cx("time-head")}>Thời gian</div>
                        {policys.times.map((time, index) => {
                            return <div key={index}>{time}</div>;
                        })}
                    </div>
                </div>
            </div>
            <div className={cx("expense")}>
                <div className={cx("head")}>
                    <h2>Phí bảo hành: </h2>
                </div>
                <div className={cx("table-content")}>
                    <div className={cx("content")}>
                        <div className={cx("content-head")}>
                            Nội dung bảo hành
                        </div>
                        {policys.paid_warrantys.map((content, index) => {
                            return <div key={index}>{content}</div>;
                        })}
                    </div>
                    <div className={cx("time")}>
                        <div className={cx("time-head")}>
                            Chi phí bảo hành (/lần)
                        </div>
                        {policys.expenses.map((expense, index) => {
                            return <div key={index}>{expense}</div>;
                        })}
                    </div>
                </div>
            </div>
            <div className={cx("note")}>
                <div className={cx("note-head")}>Lưu ý:</div>
                <div className={cx("note-text")}>
                    <p>
                        Sản pẩm không còn nguyên vẹn hoặc mất hóa đơn, Miki sẽ
                        thâu mua lại với 80% giá trị sản phẩm.
                    </p>
                    <p>
                        Các sản pẩm trang sức bạc, mạ vàng, vòng đá, dây da các
                        loại, chuỗi ngọc trai: Miki không mua lại
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Policy;
