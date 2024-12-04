import React, { useState } from 'react';
import styles from './Layout.module.scss';
import Modal from '../Modal/Modal';
import { ModalType } from '@/constants/types';
import LoginModal from '../Login/Login';
import RegisterModal from '../Register/Register';
import ResetPasswordModal from '../Resetpsw/Resetpsd';

function CurrentModal({ type, handleTypeChange }) {
  switch (type) {
    case ModalType.LoginWithCaptcha:
      return <RegisterModal handleTypeChange={handleTypeChange} />;
    case ModalType.LoginWithPwd:
      return <LoginModal handleTypeChange={handleTypeChange} />;
    case ModalType.ResetPwd:
      return <ResetPasswordModal handleTypeChange={handleTypeChange} />;
    default:
      return null;
  }
}

export function Layout() {
  const [activeTab, setActiveTab] = useState('text');
  const [currentModal, setCurrentModal] = useState(ModalType.LoginWithCaptcha);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const handleModalOpen = (modalType) => {
    setCurrentModal(modalType);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setCurrentModal(ModalType.LoginWithCaptcha);
  };

  return (
    <>
      <div className={styles['layout']}>
        <div className={styles['left-nav']}>
          <div className={styles['auth-btn']}>
            <button className={styles['login-btn']} onClick={() => handleModalOpen(ModalType.LoginWithPwd)}>
              登录
            </button>
            <button className={styles['register-btn']} onClick={() => handleModalOpen(ModalType.LoginWithCaptcha)}>
              注册
            </button>
          </div>
          <nav className={styles['menu']}>
            <div className={styles['menu-item']} onClick={() => handleTabChange('text')}>
              <span>📝</span>文档
            </div>
            <div className={styles['menu-item']} onClick={() => handleTabChange('talk')}>
              <span>💬</span> 聊天
            </div>
          </nav>
          </div>
            <div className={styles['main-content']}>
              <header className={styles['header']}>
                <div className={`${styles['tab']} ${activeTab === 'text' ? styles['active'] : ''}`} onClick={() => handleTabChange('text')}>
                  文档
                </div>
                <div className={`${styles['tab']} ${activeTab === 'talk' ? styles['active'] : ''}`} onClick={() => handleTabChange('talk')}>
                  聊天
                </div>
              </header>
              {activeTab === 'text' && <div className={styles['doc-content']}><h2>文档内容展示区</h2></div>}
              {activeTab === 'talk' && <div className={styles['chat-content']}><h2>聊天界面展示区</h2></div>}
            </div>
          </div>
        <Modal isOpen={isModalOpen} isShowTooltip={false} onClose={handleModalClose}>
          <CurrentModal type={currentModal} handleTypeChange={setCurrentModal} />
        </Modal>
    </>
  );
}