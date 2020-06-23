import React from 'react';
import classNames from 'classnames/bind';
import styles from './CSSModule.module.css';

const cx = classNames.bind(styles);

const CSSModule_classnames_ver = () => {
    return (
        <div className={cx('wrapper', 'inverted')}>
            hello, I'm <span className="something">CSS Module!!</span>
        </div>
    );
};

export default CSSModule_classnames_ver;