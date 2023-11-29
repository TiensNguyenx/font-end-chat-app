import styles from './Register.module.scss'
import classNames from 'classnames/bind';
import { FaUserAlt } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { useState } from 'react';

import { MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";



const cx = classNames.bind(styles)



function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [errorPhone, setErrorPhone] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowConfirmPassWord, setIsShowConfirmPassword] = useState(false);
    const [errorEmail, setErrorEmail] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');




    function handleRegister(event) {



    }

    function handleOnChangeConfirmPassword(event) {
        setConfirmPassword(event.target.value);
        if (event.target.value !== password) {
            setErrorConfirmPassword('Password is not match');
        } else {
            setErrorConfirmPassword('');
        }
    }
    function handleOnChangePhone(event) {
        function isValidPhone(phone) {
            return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(phone);
        }
        if (!isValidPhone(event.target.value)) {
            setErrorPhone('Phone is invalid');
        } else {
            setErrorPhone('');
        }

        setPhone(event.target.value);
    }
    function handleOnChangeEmail(event) {
        function isValidEmail(email) {
            return /\S+@\S+\.\S+/.test(email);
        }
        if (!isValidEmail(event.target.value)) {
            setErrorEmail('Email is invalid');
        } else {
            setErrorEmail('');
        }

        setEmail(event.target.value);
    }
    return (
        <div className={cx('container')}>

            <div className={cx('wrapper')}>
                <div className={cx('form')}>
                    <form action=''>
                        <h1 style={{ textAlign: 'center' }}>Đăng ký</h1>
                        <div className={cx('input-box')} style={{ marginTop: '10px' }}>
                            <input type='text' placeholder='Họ tên' required onChange={(e) => setName(e.target.value)} />
                            <FaUserAlt className={cx('icon')} />
                        </div>
                        <div className={cx('input-box')} style={{ marginTop: '10px' }}>
                            <input type='text' placeholder='Email' required onChange={handleOnChangeEmail} />
                            {errorEmail && <p style={{ color: 'red' }}>{errorEmail}</p>}
                            <MdEmail className={cx('icon')} />
                        </div>

                        <div className={cx('input-box', 'password')} style={{ marginTop: '8px' }}>
                            <input type={isShowPassword === true ? 'text' : 'password'} placeholder='Mật khẩu' required onChange={(e) => setPassword(e.target.value)} />
                            <FaLock className={cx('icon')} />
                            <div className={cx('icon-eye')} onClick={() => setIsShowPassword(!isShowPassword)}>{isShowPassword ? <AiFillEye /> : <AiFillEyeInvisible />}</div>
                        </div>
                        <div className={cx('input-box', 'confirm-password')} style={{ marginTop: '8px' }}>
                            <input type={isShowConfirmPassWord === true ? 'text' : 'password'} placeholder='Nhập lại mật khẩu' required onChange={handleOnChangeConfirmPassword} />
                            <FaLock className={cx('icon')} />
                            {errorConfirmPassword && <p style={{ color: 'red' }}>{errorConfirmPassword}</p>}
                            <div className={cx('icon-eye')} onClick={() => setIsShowConfirmPassword(!isShowConfirmPassWord)}>{isShowConfirmPassWord ? <AiFillEye /> : <AiFillEyeInvisible />}</div>
                        </div>
                        <div className={cx('message')} style={{
                            color: 'red',
                            fontSize: '1.6rem',
                            fontWeight: '600',
                            marginTop: '10px',
                            cursor: 'pointer'
                        }}>

                        </div>

                        <button type='submit' className={cx('btn', email && password ? 'active' : '')} disabled={email && name && phone && password && confirmPassword && !errorEmail && !errorPhone && !errorConfirmPassword ? false : true} onClick={handleRegister}>Đăng ký</button>
                        <div className={cx('register-link')}>
                            <p style={{ marginRight: '5px', cursor: 'pointer' }}>Đã có tài khoản?
                            </p>
                            <Link to='/'>   <div><div href='/' style={{ color: 'red', fontWeight: '600' }} >Đăng nhập</div></div></Link>
                        </div>
                    </form>
                </div>
            </div >

        </div >
    )
}

export default Register;