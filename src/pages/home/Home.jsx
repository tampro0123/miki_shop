import Footer from "~/components/Layout/DefaultLayout/Footer";
import Header from "~/components/Layout/DefaultLayout/Header";
import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import { Fragment } from "react";
import Image from "~/components/Image";

const cx = classNames.bind(styles);

const products = [
    {
        name: "Lira Earrings",
        price: "335000đ",
        img: "product1.png",
    },
    {
        name: "Emme Ring",
        price: "335000đ",
        img: "product2.jpg",
    },
    {
        name: "Ocean Necklace",
        price: "335000đ",
        img: "product3.jpg",
    },
    {
        name: "Era Bracelet",
        price: "335000đ",
        img: "product4.jpg",
    },
];
function Home() {
    return (
        <Fragment>
            <Header />
            <div className={cx("wrapper")}>
                <div className={cx("slogan")}>
                    <Image
                        className={cx("img-slogan")}
                        src="main.jpg"
                        alt="slogan"
                    />

                    <div className={cx("title")}>Thế Giới Nữ Trang</div>
                    <div className={cx("slogan-text")}>
                        <h2>
                            Tôn vinh vẻ đẹp phái nữ - Trao quà tặng - Trao yêu
                            thương
                        </h2>
                    </div>
                    <button className={cx("btn-slogan")}>Tìm hiểu thêm</button>
                </div>
                <div className={cx("aboutus")}>
                    <div className={cx("aboutus-slogan")}>
                        <h2>Về chúng tôi</h2>
                        <p className={cx("slogan-title")}>
                            "Ngày mai phải tốt hơn ngày hôm nay"
                        </p>
                        <p className={cx("content")}>
                            Lần đầu ra mắt thị trường vào năm 2015, Miki mong
                            muốn mang tới những sản phẩm Nữ trang được đầu tư về
                            thiết kế, minh bạch về thông tin giao dịch hàng hoá
                            và mang đến khách hàng dịch vụ hậu mãi trọn vẹn.
                        </p>
                        <button className={cx("aboutus-btn")}>
                            Tìm hiểu thêm
                        </button>
                    </div>
                    <div className={cx("aboutus-img")}>
                        <Image
                            src="aboutus.jpg"
                            className={cx("img")}
                            alt="aboutus"
                        />
                    </div>
                </div>
                <div className={cx("hot-product")}>
                    <div className={cx("header-product")}>
                        <h2>Sản phẩm nổi bật</h2>
                        <button className={cx("btn-view")}>Xem tất cả</button>
                    </div>
                    <div className={cx("product-list")}>
                        {products.map((product, index) => {
                            return (
                                <div key={index} className={cx("product")}>
                                    <Image
                                        src={product.img}
                                        alt={product.name}
                                        className={cx("product-img")}
                                    />
                                    <h3 className={cx("product-name")}>
                                        {product.name}
                                    </h3>
                                    <p className={cx("product-price")}>
                                        {product.price}
                                    </p>
                                    <button className={cx("btn-add")}>
                                        Thêm vào giỏ hàng
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className={cx("collection")}>
                    <Image
                        className={cx("img-collection")}
                        src="Frame 18.jpg"
                    />
                    <button className={cx("collection-btn")}>
                        Tìm hiểu thêm
                    </button>
                </div>
                <div className={cx("synthetic-product")}>
                    <div className={cx("synthetic-contain")}>
                        <div className={cx("contain-left")}>
                            <div className={cx("contain-top")}>
                                <div className={cx("ring")}>
                                    <Image
                                        className={cx("img-30")}
                                        src="footer3.jpg"
                                    />
                                    <h3 className={cx("ring-h3")}>Nhẫn</h3>
                                </div>
                                <div className={cx("clock")}>
                                    <Image
                                        className={cx("img-30")}
                                        src="footer5.png"
                                    />
                                    <h3 className={cx("clock-h3")}>Đồng hồ</h3>
                                </div>
                                <div className={cx("contain-logo")}>
                                    <h2>MIKI JEWELRY</h2>
                                </div>
                            </div>
                            <div className={cx("contain-bottom")}>
                                <div className={cx("bangles")}>
                                    <Image
                                        src="footer4.jpg"
                                        className={cx("img-60")}
                                    />
                                    <h3 className={cx("bangles-h3")}>
                                        Lắc tay
                                    </h3>
                                </div>
                                <div className={cx("necklace")}>
                                    <Image
                                        src="footer1.jpg"
                                        className={cx("img-40")}
                                    />
                                    <h3 className={cx("necklace-h3")}>
                                        Dây chuyền
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className={cx("contain-right")}>
                            <Image
                                src="footer2.jpg"
                                className={cx("img-100")}
                            />
                            <h3 className={cx("earring-h3")}>Bông tai</h3>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </Fragment>
    );
}

export default Home;
