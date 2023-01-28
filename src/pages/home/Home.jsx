import Footer from "~/components/Layout/DefaultLayout/Footer";
import Header from "~/components/Layout/DefaultLayout/Header";
import styles from "./Home.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function Home() {
    return (
        <>
            <div className={cx("wrapper")}>
                <Header />
                <Footer />
            </div>
        </>
    );
}

export default Home;
