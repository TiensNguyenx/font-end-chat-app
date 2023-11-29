import styles from './Login.module.scss'
import classNames from 'classnames/bind';
import { MdEmail } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible, AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaGoogle, FaFacebook } from "react-icons/fa";


const cx = classNames.bind(styles)


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loadingApi, setLoadingApi] = useState(false);
    const navigate = useNavigate();



    const handleChange = event => {
        function isValidEmail(email) {
            return /\S+@\S+\.\S+/.test(email);
        }
        if (!isValidEmail(event.target.value)) {
            setError('Email is invalid');
        } else {
            setError('');
        }

        setEmail(event.target.value);
    };
    function handleLogin(event) {

    }

    return (
        <div className={cx('container')}>

            <div className={cx('wrapper')}>
                <div className={cx('form')}>
                    <form action='' className={cx('form-item')}>
                        <h1 style={{ textAlign: 'center' }}>Đăng Nhập</h1>
                        <div className={cx('input-box')} style={{ marginTop: '10px' }}>
                            <input id='email' type='email' placeholder='Email' required value={email} onChange={handleChange} />
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                            <MdEmail className={cx('icon')} />
                        </div>
                        <div className={cx('input-box')} style={{ marginTop: '8px' }}>
                            <input type={isShowPassword === true ? 'text' : 'password'} placeholder='Mật khẩu' required value={password} onChange={(e) => setPassword(e.target.value)} />
                            <FaLock className={cx('icon')} />
                            <div className={cx('icon-eye')} onClick={() => setIsShowPassword(!isShowPassword)}>{isShowPassword ? <AiFillEye /> : <AiFillEyeInvisible />}</div>

                        </div>
                        <div className={cx('remember-forgot')}>
                            <label><input type='checkbox' />Lưu mật khẩu</label>
                            <div>     <a href='/'> Quên mật khẩu</a></div>
                        </div>
                        <button style={{ marginTop: '20px' }} type='submit' className={cx('btn', email && password && !error ? 'active' : '')} disabled={email && password && !error ? false : true} onClick={handleLogin}>   {loadingApi && <AiOutlineLoading3Quarters icon="spinner" className={cx('spinner')} />} &nbsp; Đăng Nhập</button>
                        <div className={cx('register-link')}>
                            <p style={{ marginRight: '5px', cursor: 'pointer' }}>Chưa có tài khoản?
                            </p>
                            <Link to='/register'>   <div><div style={{ color: 'red', fontWeight: '600' }} >Đăng ký</div></div></Link>
                        </div>
                    </form>
                    <div className={cx('social-media')}>
                        <div className={cx('social-header')}>
                            <p>Hoặc đăng nhập bằng</p>
                        </div>
                        <div className={cx('social-button')}>
                            <button>
                                <FaGoogle style={{ marginRight: '5px' }} /> <p>Google</p>
                            </button>
                            <button>
                                <FaFacebook style={{ marginRight: '5px' }} /> <p>Facebook</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div >

        </div >
    )
}

export default Login;