import React from "react";
import styles from "../styles/Components/CustomButton.module.css";

interface IProps {
    title: string;
    handleClick: any;
}

const CustomButton = ({title, handleClick}: IProps) => {
    return (
        <div className={styles.button__container} onClick={handleClick}>
            <div className={styles.button__text}>{title}</div>
        </div>
    )
}

export default CustomButton;