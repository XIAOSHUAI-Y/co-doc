import React, { useState } from 'react'
import styles from './document-item.module.scss'

export default function DocItem({
  className,
  file,
  index,
  handleNameChange,
  handleDelete,
  handelStar
}) {
  const [isInEdit, setIsInEdit] = useState(false)
  function innerhandleNameChange(e) {
    setIsInEdit(false)
    handleNameChange(e.target.value, index)
  }
  return (
     <li key={index+file.name} className={className}>
        <div className={styles['fileInfo']}>
          {isInEdit ? 
            (
              <input defaultValue={file.name} onBlur={innerhandleNameChange} />
            ): (
              <span>{file.name}</span>
            )
          }
          {file.external && <span className={styles['externalTag']}>外部</span>}
          <span className={styles['fileDate']}>{file.date}</span>
          <div className={styles['moreOptions']}>
            <span className={styles['dot']}>...</span>
            <div className={styles['options']}>
              <div className={styles['option']} onClick={() => setIsInEdit(true)}>重命名</div>
              <div className={styles['option']}>删除</div>
              <div className={styles['option']}>收藏</div>
            </div>
          </div>
        </div>
      </li>
  )
}
