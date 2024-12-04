import React, { useState } from 'react';
import styles from './resetpsd.module.scss';
import { ModalType } from '@/constants/types';

export default function ResetPasswordModal({ handleTypeChange }) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [code, setCode] = useState('');
    const [isSendingCode, setIsSendingCode] = useState(false);

    const handleGetCode = () => {
        console.log('获取验证码');
    };

    const handleResetPassword = () => {
        console.log('重置密码', phoneNumber, newPassword, code);
    };

    return (
        <div className={styles['modal-content']}>
            <div className={styles['describe']}>手机重置密码</div>
            <div className={styles['input-group']}>
                <input 
                    type="text" 
                    placeholder='请输入手机号' 
                    value={phoneNumber} 
                    onChange={(e) => setPhoneNumber(e.target.value)} 
                />
            </div>
            <div className={styles['input-group']}>
                <input 
                    type="password" 
                    placeholder='请输入新密码' 
                    value={newPassword} 
                    onChange={(e) => setNewPassword(e.target.value)} 
                />
            </div>
            <div className={styles['input-group']}>
                <input 
                    type="text" 
                    placeholder='请输入验证码' 
                    value={code} 
                    onChange={(e) => setCode(e.target.value)} 
                />
                <span onClick={handleGetCode} disabled={isSendingCode}>
                    {isSendingCode ? '发送中...' : '获取验证码'}
                </span>
            </div>
            <div className={styles['login-register-btn']} onClick={handleResetPassword}>
                修改
            </div>
            <div className={styles['returnLogin']} onClick={() => handleTypeChange(ModalType.LoginWithPwd)}>
                返回登录
            </div>
        </div>
    );
}