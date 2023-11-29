import classNames from "classnames/bind";
import styles from "./Chat.module.scss";
import Header from "~/componennts/Header";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdVideocam } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
const cx = classNames.bind(styles);
function Chat() {
    return (
        <div>
            <Header />
            <div className={cx('wrapper')}>
                <div className={cx('containener')}>
                    <div className={cx('sidebar')}>
                        <div className={cx('sidebar-header')}>
                            Chats
                        </div>
                        <div className={cx('sidebar-search')}>
                            <input type="text" placeholder="Search contact / chat" />
                        </div>
                        <div className={cx('user-wrapper')}>
                            <div className={cx('user-containner')}>
                                <img className={cx('user-img')} src="https://connectme-html.themeyn.com/images/avatar/1.jpg" alt=""></img>
                                <div className={cx('user-info')}>
                                    <div className={cx('user-name')}>Huynh Tien</div>
                                    <div className={cx('user-mess')}>Hello</div>
                                </div>
                            </div>
                            <div className={cx('user-containner')}>
                                <img className={cx('user-img')} src="https://connectme-html.themeyn.com/images/avatar/1.jpg" alt=""></img>
                                <div className={cx('user-info')}>
                                    <div className={cx('user-name')}>Huynh Tien</div>
                                    <div className={cx('user-mess')}>Hello</div>
                                </div>
                            </div>
                            <div className={cx('user-containner')}>
                                <img className={cx('user-img')} src="https://connectme-html.themeyn.com/images/avatar/1.jpg" alt=""></img>
                                <div className={cx('user-info')}>
                                    <div className={cx('user-name')}>Huynh Tien</div>
                                    <div className={cx('user-mess')}>Hello</div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className={cx('chat-space')}>
                        <div className={cx('option')}>
                            <div className={cx('user-containner')}>
                                <img className={cx('user-img')} src="https://connectme-html.themeyn.com/images/avatar/1.jpg" alt=""></img>
                                <div className={cx('user-info')}>
                                    <div className={cx('user-name')}>Huynh Tien</div>
                                    <div className={cx('user-status')}>Active</div>
                                </div>
                            </div>
                            <div className={cx('user-option')}>
                                <button><FaPhoneAlt style={{ width: '20px', height: '20px' }} /></button>
                                <button><IoMdVideocam style={{ width: '20px', height: '20px' }} /></button>
                                <button><FaSearch style={{ width: '20px', height: '20px' }} /></button>
                            </div>
                        </div>
                        <div className={('chat')}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;