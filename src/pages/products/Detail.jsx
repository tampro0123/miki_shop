import Footer from "~/components/Layout/DefaultLayout/Footer";
import Header from "~/components/Layout/DefaultLayout/Header";
import Image from "~/components/Image";
import ProductInfo from "./productInfo/ProductInfo";
import Policy from "./policy/Policy";
import Delivery from "./delivery/Delivery";
import Comment from "./comment/Comment";
import {
    ArrowRightIcon,
    StarGreyIcon,
    StarYellowIcon,
    SubtractIcon,
    AddIcon,
} from "~/components/Icons";
import styles from "./Detail.module.scss";
import { Fragment, useEffect, useState } from "react";
import classNames from "classnames/bind";
const product = {
    name: "Bông tai Elean",
    commentsNumber: 2,

    images: [
        "http://localhost:3001/product2.jpg",
        "http://localhost:3001/product4.jpg",
        "http://localhost:3001/product3.jpg",
        "http://localhost:3001/product7.jpg",
    ],
    rating: 5,
    quantity_sold: 10,
    status: 10,
    price: 200000,
    sale: 50,
    sizes: [16, 17, 18],
    colors: ["red", "yellow"],
    descriptions: [
        "Bông tai Elean chuôi bạc 925 hình vuông sang chảnh.",
        "Màu sắc: Trắng, Vàng đồng (Quý khách vui lòng xem trên hình ảnh sản phẩm)",
        "Kích thước: Có 3 kích thước 16, 17, 18.",
        "Loại sản phẩm: Bông tai bạc 925",
    ],
    salient_features: [
        "Nút cài sau chắc chắn, chống rơi",
        "Kĩ thuật mạ đều màu, khó phai",
        "Không bị đen hay gỉ sét",
        "Phù hợp mọi loại da",
    ],
    policys: {
        warranty_contents: ["Làm sạch sản phẩm", "Đánh bóng và xi mới"],
        times: ["Trọn đời", "05 lần"],
        paid_warrantys: [
            "Sửa độ rung với sản phẩm Ladanse",
            "Làm mới sản phẩm",
        ],
        expenses: ["200000đ", "50000đ"],
    },
    comment: "Sản phẩm hot",
};
const productDetails = [
    "Mô tả",
    "Bảo hành và hoàn trả",
    "Vận chuyển",
    "Đánh giá",
];
const priceSale = product.price * (product.sale / 100);
const cx = classNames.bind(styles);
function DetailProduct() {
    const [countOption, setCountOption] = useState(1);
    const [mainImg, setMainImg] = useState(product.images[0]);
    const [activeSize, setActiveSize] = useState(0);
    const [activeColor, setActiveColor] = useState(0);
    const [activeNav, setActiveNav] = useState(0);
    const handleSelected = (i) => {
        setActiveSize(i);
    };
    const handleColor = (i) => {
        setActiveColor(i);
    };
    const chooseMainImg = (index) => {
        setMainImg(product.images[index]);
    };
    const starList = (rate) => {
        const handleStar = (index) => {
            if (rate >= index) {
                return <StarYellowIcon key={index} />;
            } else {
                return <StarGreyIcon key={index} />;
            }
        };
        return [...Array(5)].map((item, index) => handleStar(index + 1));
    };
    useEffect(() => {
        return undefined;
    }, []);
    return (
        <Fragment>
            <Header />
            <div className={cx("wrapper")}>
                <div className={cx("nav")}>
                    <a href="/">Trang chủ</a>
                    <ArrowRightIcon className={cx("icon")} />
                    <a href="/">Tất cả sản phẩm</a>
                    <ArrowRightIcon className={cx("icon")} />
                    <a href="/">Bông tai</a>
                    <ArrowRightIcon className={cx("icon")} />
                    <a href="/" className={cx("style-product")}>
                        Bông tai Elean
                    </a>
                </div>
                <div className={cx("product")}>
                    <div className={cx("product-img")}>
                        <div className={cx("sup")}>
                            {product.images.map((img, index) => {
                                return (
                                    <div
                                        key={index}
                                        onClick={() => chooseMainImg(index)}
                                        className={cx("sup-item")}
                                    >
                                        <Image
                                            src={img}
                                            className={cx("sup-img")}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                        <div className={cx("main")}>
                            <Image src={mainImg} className={cx("image-main")} />
                        </div>
                    </div>
                    <div className={cx("option-product")}>
                        <h2 className={cx("heading")}>{product.name}</h2>

                        <div className={cx("rating")}>
                            <div className={cx("rating-box")}>
                                <div className={cx("rating-medium")}>
                                    {product.rating}
                                </div>

                                <div className={cx("rating-star")}>
                                    {starList(product.rating)}
                                </div>
                            </div>
                            <div className={cx("quantity-sold")}>
                                {product.quantity_sold}
                                <p className={cx("sold-text")}>Đã bán</p>
                            </div>

                            <div className={cx("product-status")}>
                                {product.status > 0 ? (
                                    <p className={cx("stocking")}>Còn hàng</p>
                                ) : (
                                    <p className={cx("solded")}>Đã bán hết</p>
                                )}
                            </div>
                        </div>

                        <div className={cx("price")}>
                            <div className={cx("price-actual")}>
                                {product.price} đ
                            </div>
                            <span className={cx("percent-sale")}>
                                {product.sale}%
                            </span>
                        </div>
                        <div className={cx("price-sale")}>{priceSale} đ</div>
                        <div className={cx("size")}>
                            <h3 className={cx("size-text")}>Kích thước :</h3>
                            <div className={cx("sizes-list")}>
                                {product.sizes.map((size, index) => {
                                    return (
                                        <span
                                            key={index}
                                            name={size}
                                            className={cx("size-option", {
                                                active: activeSize === index,
                                            })}
                                            onClick={() =>
                                                handleSelected(index)
                                            }
                                        >
                                            {size}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                        <div className={cx("color")}>
                            <h3 className={cx("color-text")}>Màu sắc :</h3>
                            <div className={cx("colors-list")}>
                                {product.colors.map((color, index) => {
                                    return (
                                        <span
                                            key={index}
                                            className={cx(`${color}`, {
                                                active: activeColor === index,
                                            })}
                                            onClick={() => handleColor(index)}
                                        ></span>
                                    );
                                })}
                            </div>
                        </div>
                        <div className={cx("select-option")}>
                            <h2 className={cx("option-text")}>Số lượng</h2>
                            <button
                                className={cx("option-btn")}
                                onClick={(prev) => {
                                    if (countOption > 0) {
                                        return setCountOption(countOption - 1);
                                    }
                                }}
                            >
                                <SubtractIcon />
                            </button>
                            <h2 className={cx("count")}>{countOption}</h2>
                            <button
                                className={cx("option-btn")}
                                onClick={(prev) => {
                                    if (countOption < product.status) {
                                        return setCountOption(countOption + 1);
                                    }
                                }}
                            >
                                <AddIcon />
                            </button>
                        </div>
                        <div className={cx("action")}>
                            <button className={cx("add-cart")}>
                                Thêm vào giỏ hàng
                            </button>
                            <button className={cx("buy-now")}>Mua ngay</button>
                        </div>
                    </div>
                </div>
                <div className={cx("product-info")}>
                    <div className={cx("tab-detail")}>
                        {productDetails.map((productDetail, index) => {
                            return (
                                <div
                                    key={index}
                                    className={cx("detail-nav", {
                                        active: activeNav === index,
                                    })}
                                    onClick={() => {
                                        console.log(activeNav);

                                        return setActiveNav(index);
                                    }}
                                >
                                    {index === 3
                                        ? productDetail +
                                          `(${product.commentsNumber})`
                                        : productDetail}
                                </div>
                            );
                        })}
                    </div>
                    <div className={cx("nav-product-info")}>
                        {activeNav === 0 ? <ProductInfo {...product} /> : null}
                        {activeNav === 1 ? <Policy {...product} /> : null}
                        {activeNav === 2 ? <Delivery /> : null}
                        {activeNav === 3 ? <Comment {...product} /> : null}
                    </div>
                </div>
                <div className={cx("product-saw ")}></div>
                <div className={cx("product-hot")}></div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default DetailProduct;
