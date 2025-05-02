import React from 'react';

import styles from "./index.module.css";

export default function Messages() { 
    return (
        <div className={styles.Messages}>
            <div className={styles.Messages__item}>
                <div className={styles.Messages__item__avatar}></div>
                <div className={styles.Messages__item__content}>
                    <div className={styles.Messages__item__content__text}>Hello, how can I help you?</div>
                    <div className={styles.Messages__item__content__time}>10:00 AM</div>
                </div>
            </div>
            <div className={styles.Messages__item}>
                <div className={styles.Messages__item__avatar}></div>
                <div className={styles.Messages__item__content}>
                    <div className={styles.Messages__item__content__text}>I have a question about your product.</div>
                    <div className={styles.Messages__item__content__time}>10:01 AM</div>
                </div>
            </div>
        </div>
    );

}
