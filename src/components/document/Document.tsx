import React, { useEffect, useState } from 'react'
import styles from './document.module.scss'

export default function Document() {

  interface File {
    name: string;
    date: string;
    external?: boolean;
  }
  
  // 文件列表数据
  const allFiles: File[] = [
    { name: '未命名文档', date: '今天 15:31' },
    { name: 'Notion 与飞书文档的问方案精析', date: '12月4日 21:20', external: true },
  ];
  const latelyFiles: File[] = [
    { name: '最近访问文档1', date: '2小时前'},
    { name: '最近访问文档2', date: '1天前'},
  ]
  const collectFiles: File[] = [
    { name: '收藏文档1', date: '2021-12-04 21:20'},
    { name: '收藏文档2', date: '2021-12-04 21:20'},
  ]

  const [activeTab, setActiveTab] = useState('')
  const [actFileTab, setActFileTab] = useState('')

  return (
    // <div className={styles['content']}>

    // </div>
    <div className={styles['content']}>
      {/* 顶部 */}
      <div className={styles['top']}>
        {/* 顶部按钮 */}
        <div className={styles['btnGroup']}>
          <button 
            className={`${styles['actionBtn']} ${activeTab === '新建' ? styles['active'] : ''}`}
            onClick={() => setActiveTab('新建')}>
              新建
          </button>
          <button 
            className={`${styles['actionBtn']} ${activeTab === '上传' ? styles['active'] : ''}`}
            onClick={() => setActiveTab('上传')}>
              上传
          </button>
          <button 
            className={`${styles['actionBtn']} ${activeTab === '模板库' ? styles['active'] : ''}`}
            onClick={() => setActiveTab('模板库')}>
              模版库
          </button>
        </div>
      </div>

      {/* 主体内容 */}
      <div className={styles['main-content']}>
        {/* 左侧文件导航 */}
        <div className={styles['left-nav']}>
          <div className={styles['fileNav']}>
            <div 
              className={`${styles['navBtn']} ${actFileTab === '所有文档' ? styles['active'] : ''}`}
              onClick={() => setActFileTab('所有文档')}>
                所有文档
            </div>
            <div 
              className={`${styles['navBtn']} ${actFileTab === '最近访问' ? styles['active'] : ''}`}
              onClick={() => setActFileTab('最近访问')}>
                最近访问
            </div>
            <div 
              className={`${styles['navBtn']} ${actFileTab === '收藏' ? styles['active'] : ''}`}
              onClick={() => setActFileTab('收藏')}>
                收藏
            </div>
          </div>
        </div>
        {/* 右侧文件列表 */}
        {actFileTab === '所有文档' && (
          <div className={styles['right-content']}>
            <h2>所有文档</h2>
            <ul className={styles['fileList']}>
              {allFiles.map((file, index) => (
                <li key={index} className={styles['fileItem']}>
                  <div className={styles['fileInfo']}>
                    <span>{file.name}</span>
                    {file.external && <span className={styles['externalTag']}>外部</span>}
                    <span className={styles['fileDate']}>{file.date}</span>
                    <div className={styles['moreOptions']}>
                      <span className={styles['dot']}>...</span>
                      <div className={styles['options']}>
                        <div className={styles['option']}>重命名</div>
                        <div className={styles['option']}>删除</div>
                        <div className={styles['option']}>收藏</div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        {actFileTab === '最近访问' && (
          <div className={styles['right-content']}>
            <h2>最近访问</h2>
            <ul className={styles['fileList']}>
              {latelyFiles.map((file, index) => (
                <li key={index} className={styles['fileItem']}>
                  <div className={styles['fileInfo']}>
                    <span>{file.name}</span>
                    {file.external && <span className={styles['externalTag']}>外部</span>}
                    <span className={styles['fileDate']}>{file.date}</span>
                    <div className={styles['moreOptions']}>
                      <span className={styles['dot']}>...</span>
                      <div className={styles['options']}>
                        <div className={styles['option']}>重命名</div>
                        <div className={styles['option']}>删除</div>
                        <div className={styles['option']}>收藏</div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        {actFileTab === '收藏' && (
          <div className={styles['right-content']}>
            <h2>收藏</h2>
            <ul className={styles['fileList']}>
              {collectFiles.map((file, index) => (
                <li key={index} className={styles['fileItem']}>
                  <div className={styles['fileInfo']}>
                    <span>{file.name}</span>
                    {file.external && <span className={styles['externalTag']}>外部</span>}
                    <span className={styles['fileDate']}>{file.date}</span>
                    <div className={styles['moreOptions']}>
                      <span className={styles['dot']}>...</span>
                      <div className={styles['options']}>
                        <div className={styles['option']}>重命名</div>
                        <div className={styles['option']}>删除</div>
                        <div className={styles['option']}>取消收藏</div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
