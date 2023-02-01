import styles from "./ProductInfo.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function ProductInfo(prop) {
    return (
        <div className={cx("wrapper")}>
            {prop.descriptions.map((description, index) => {
                return (
                    <div key={index}>
                        <div className={cx("detail-product")}>
                            {index === 0 ? (
                                <div className={cx("product-name")}>
                                    <h3>Sản phẩm :</h3>
                                    <p>{description}</p>
                                </div>
                            ) : (
                                <div className={cx("detail")}>
                                    {description}
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
            <div className={cx("salient-features")}>
                <h2>Các đặc điểm nổi bật :</h2>
                {prop.salient_features.map((info, index) => {
                    return (
                        <ul key={index}>
                            <li>{info}</li>
                        </ul>
                    );
                })}
            </div>
        </div>
    );
}

export default ProductInfo;
