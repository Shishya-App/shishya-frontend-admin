import React from "react";
import styles from "../styles/Components/create-form-status.module.css";

const CreateFormStatus = () => {
    return  (
        <div className={styles.create__form__status__wrapper}>
            <div className={styles.part__1}>
                <div className={styles.status__wrapper}>
                    <div className={styles.status__circle} />
                </div>
                <div className={styles.status__line}/>
                <div className={styles.status__wrapper}>
                    <div className={styles.status__circle__not}/>
                </div>
            </div>
            <div className={styles.part__2}>
                <div className={styles.title__wrapper}>
                    <p className={styles.status__title}>Form Details</p>
                </div>
                <div className={styles.title__wrapper}>
                    <p className={styles.status__title__notdone}>Document Required</p>
                </div>
            </div>
        </div>
    )
}

export default CreateFormStatus;