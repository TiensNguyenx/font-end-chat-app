import classNames from "classnames/bind";
import styles from "./Message.module.scss";
const cx = classNames.bind(styles);
function Message({ own }) {
    return (
        <div className={own ? cx('own', 'message') : cx('message')}>
            <div className={cx("messageTop")}>
                <img
                    className={cx("messageImg")}
                    src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                />
                <p className={cx('messageText')}>1hour ago</p>
            </div>
            <div className={cx('messageBottom')}>1hour ago</div>
        </div>
    );

}

export default Message;