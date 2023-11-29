import styles from './Header.module.scss'
import classNames from 'classnames/bind';
import { PiChatCircleTextBold } from "react-icons/pi";
const cx = classNames.bind(styles)
function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('containner')}>
                <div className={cx('row-left')}>


                    <PiChatCircleTextBold style={{ width: '50px', height: '50px' }} />



                </div>
                <div className={cx('row-right')}>


                    <div className={cx('user')}>
                        <img src="https://connectme-html.themeyn.com/images/avatar/3.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Header;