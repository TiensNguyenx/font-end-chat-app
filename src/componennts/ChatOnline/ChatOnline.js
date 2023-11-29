// import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./ChatOnline.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
export default function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
    const [friends, setFriends] = useState([]);
    const [onlineFriends, setOnlineFriends] = useState([]);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    // useEffect(() => {
    //     const getFriends = async () => {
    //         const res = await axios.get("/users/friends/" + currentId);
    //         setFriends(res.data);
    //     };

    //     getFriends();
    // }, [currentId]);

    // useEffect(() => {
    //     setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
    // }, [friends, onlineUsers]);

    // const handleClick = async (user) => {
    //     try {
    //         const res = await axios.get(
    //             `/conversations/find/${currentId}/${user._id}`
    //         );
    //         setCurrentChat(res.data);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    return (
        <div className={cx("chatOnline")}>
            {onlineFriends.map((o) => (
                <div className={cx("chatOnlineFriend")}  >
                    <div className={cx("chatOnlineImgContainer")}>
                        <img
                            className={cx("chatOnlineImg")}
                            src={
                                o?.profilePicture
                                    ? PF + o.profilePicture
                                    : PF + "person/noAvatar.png"
                            }
                            alt=""
                        />
                        <div className={cx('chatOnlineBadge')}></div>
                    </div>
                    <span className={cx('chatOnlineName')} > {o?.username}</span>
                </div >
            ))
            }
        </div >
    );
}