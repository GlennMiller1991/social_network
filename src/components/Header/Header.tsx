import React from 'react';
import styles from './Header.module.css';
import {wayType} from "../../App";

type HeaderPropsType = {
    setWay: (value: wayType) => void
}

export const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <div id={styles.header}>
            <div id={styles.textContainer}>
                <h4>Внимание!</h4>
                <p>
                    На данном сайте присутствует ненормативная
                    лексика, которая может оскорбить ваши чувства. Здесь
                    анонимы делятся исключительно своим мнением, совпадения
                    с реальными людьми/компаниями случайны (иногда).
                </p>
                <p>
                    Нажимая на изображение, вы подтверждаете, что вам есть 18
                    лет, и вы принимаете всю ответственность за
                    прочитанное на себя.
                </p>
                <button id={styles.enterBtn}
                        onClick={() => props.setWay(1)}>
                    <img id={styles.imgBtn}
                         src='https://share.cdn.viber.com/pg_download?id=0-04-05-a50d6229fb2be5d62ec2f08878bf7ee2e7ca1cbb7bdf45439bc1499398711fee&filetype=jpg&type=icon'
                         alt='No image'/>
                </button>
            </div>
        </div>
    )
        ;
}
