import styles from "./DropDowns.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function DropDowns() {
    const products = [
        {
            name: "Nhẫn",
            types: ["Nhẫn cỡ lớn", "Nhẫn ngón út", "Nhẫn xoay", "Nhẫn cưới"],
        },
        {
            name: "Dây chuyền",
            types: ["Dây chuyền trơn", "Dây chuyền có mặt", "Mặt dây chuyền"],
        },
        {
            name: "Bông Tai",
            types: ["Bông tai xỏ lỗ", "Bông tai treo", "Khuyên vành tai"],
        },
        { name: "Lắc", types: ["Lắc tay", "Lắc chân", "Charm"] },
    ];
    return (
        <div className={cx("drop-down")}>
            {products.map((product, index) => {
                return (
                    <div key={index} className={cx("wrapper")}>
                        <span className={cx("product-name")}>
                            {product.name}
                        </span>
                        <div className={cx("product-list")}>
                            {product.types.map((item, index) => {
                                return (
                                    <span
                                        key={index}
                                        className={cx("product-item")}
                                    >
                                        {item}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default DropDowns;
