import React from 'react';
import styles from './CSSModule.module.css';

const CSSModule = () => {
    return (
        // <div className={styles.wrapper}>
        //     hello, I'm <span className="something">CSS Module!</span>
        // </div>

        <div>
            {/* use ES6 grammar Template Literal */}
            <div className={`${styles.wrapper} ${styles.inverted}`}>
                hello, I'm <span className="something">CSS Module!</span>
            </div>
            {/* can't use ES6 grammar Template Literal */}
            <div className={[styles.wrapper, styles.inverted].join(' ')}>
                hello, I'm <span className="something">CSS Module2!</span>
            </div>
        </div>
        

        
        
    );
};

export default CSSModule;