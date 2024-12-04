import React, { useState } from 'react';
import styles from './login.module.scss';
import { ModalType } from '@/constants/types';
import ResetPasswordModal from '../Resetpsw/Resetpsd';

export default function LoginModal({ handleTypeChange }) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('登录', phoneNumber, password);
    };

    return (
        <div className={styles['modal-content']}>
          <div className={styles['describe']}>密码登录</div>
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
              placeholder='请输入密码' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <span onClick={() => handleTypeChange(ModalType.ResetPwd)}>忘记密码</span>
          </div>
          <div className={styles['btn-group']}>
            <button className={styles['login']} onClick={handleLogin}>登录</button>
          </div>
        </div>
    );
}