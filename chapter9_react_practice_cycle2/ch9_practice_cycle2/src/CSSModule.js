// 9.3 CSS Module
import React from 'react';
// import styles from './CSSModule.module.css';

// 9.3.1 classnames
import classNames from 'classnames/bind';

// 9.3.2 use Sass together
import styles from './CSSModule.module.scss';

const cx = classNames.bind(styles);

const CSSModule = () => {
    return (
        // <div className={styles.wrapper}>
        // multi class use backtick 
        // <div className={`${styles.wrapper} ${styles.inverted}`}>
        // <div className={[styles.wrapper, styles.inverted].join(' ')}>
        <div className={cx('wrapper', 'inverted')}>
            Hello, I'm <span className="something">CSS Module!</span>
        </div>
    );
}

export default CSSModule;