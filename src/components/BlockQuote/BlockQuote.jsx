import React from 'react';
import styles from './BlockQuote.module.css';

const BlockQuote = (props) => {
    return (
        <section className={styles.mainContainer}>
            <blockquote>{props.content}</blockquote>
            <cite>- {props.writer}</cite>
        </section>
    )
}

export default BlockQuote;
