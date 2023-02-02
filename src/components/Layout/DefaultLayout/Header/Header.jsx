import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import {
    Logo,
    SearchIcon,
    ArrowDownIcon,
    BasketIcon,
    UserIcon,
} from "~/components/Icons";
import DropDowns from "~/sections/dropdown/DropDowns";
import { Fragment, useState } from "react";

const cx = classNames.bind(styles);

function Header() {
    const [dropDown, setDropDown] = useState(false);

    const handleClick = () => {
        console.log("1");
        setDropDown(!dropDown);
    };

    return (
        <Fragment>
            <div className={cx("wrapper")}>
                <div className={cx("header-container")}>
                    <div className={cx("menu")}>
                        <Link to={"/home"} className={cx("home")}>
                            Trang chủ
                        </Link>
                        <div className={cx("products")} onClick={handleClick}>
                            Sản phẩm <ArrowDownIcon />{" "}
                        </div>

                        <a href="/" className={cx("about-us")}>
                            Về chúng tôi
                        </a>
                    </div>
                    <Link to={"/home"} className={cx("logo")}>
                        <Logo className={cx("logo-icon")} />
                        <h2 className={cx("logo-name")}>MIKI JEWELRY</h2>
                    </Link>
                    <div className={cx("header-bar")}>
                        <div className={cx("search")}>
                            <input
                                type="text"
                                className={cx("input-search")}
                                placeholder="Tìm kiếm"
                            ></input>
                            <SearchIcon className={cx("search-icon")} />
                        </div>
                        <BasketIcon className={cx("basket-icon")} />
                        <UserIcon className={cx("user-icon")} />
                    </div>
                </div>
            </div>
            {dropDown && <DropDowns />}
        </Fragment>
    );
}

export default Header;
