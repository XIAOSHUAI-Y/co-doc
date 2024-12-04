import React, { useState } from 'react';
import styles from './register.module.scss';
import { ModalType } from '@/constants/types';
import LoginModal from '../Login/Login';

export default function RegisterModal({ handleTypeChange }) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [code, setCode] = useState('');
    const [isSendingCode, setIsSendingCode] = useState(false);

    const handleGetCode = () => {
        console.log('获取验证码');
    };

    const handleRegister = () => {
        console.log('注册', phoneNumber, code);
    };

    return (
        <div className={styles['modal-content']}>
            <div className={styles['describe']}>验证码注册</div>
            <div className={styles['input-group']}>
                <input 
                    type='text' 
                    placeholder='请输入手机号' 
                    value={phoneNumber} 
                    onChange={(e) => setPhoneNumber(e.target.value)} 
                />
            </div>
            <div className={styles['input-group']}>
                <input 
                    type='text' 
                    placeholder='请输入验证码' 
                    value={code} 
                    onChange={(e) => setCode(e.target.value)} 
                />
                <span onClick={handleGetCode} disabled={isSendingCode}>
                    {isSendingCode ? '发送中...' : '获取验证码'}
                </span>
            </div>
            <div className={styles['login-register-btn']} onClick={handleRegister}>
                注册
            </div>
            <div className={styles['codeLogin']} onClick={() => handleTypeChange(ModalType.LoginWithPwd)}>
                密码登录
            </div>
        </div>
    );
}
