// 9.3 CSS Module
import React from 'react';
import styles from './CSSModule.module.css';

const CSSModule = () => {
    return (
        // <div className={styles.wrapper}>
        // multi class
        // <div className={`${styles.wrapper} ${styles.inverted}`}>
        <div className={[styles.wrapper, styles.inverted].join(' ')}>
            Hello, I'm <span className="something">CSS Module!</span>
        </div>
    );
}

export default CSSModule;