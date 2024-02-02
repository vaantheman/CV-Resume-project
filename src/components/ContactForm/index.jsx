import React from 'react';
import { useFormik } from 'formik';
import styles from './ContactForm.module.scss';
import { useSelector } from 'react-redux';
import classnames from 'classnames';

function ContactForm() {
    const darkMode = useSelector((state) => state.darkMode.darkMode);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            topic: '',
            message: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <div className={styles.contactFormContainer}>
            <h1>Contact me</h1>
            <form onSubmit={formik.onSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="topic">Topic</label>
                    <input
                        type="text"
                        id="topic"
                        name="topic"
                        placeholder="Topic"
                        onChange={formik.handleChange}
                        value={formik.values.topic}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message">Message</label>
                    <input
                        type="textarea"
                        id="message"
                        name="message"
                        placeholder="Message"
                        onChange={formik.handleChange}
                        value={formik.values.message}
                    />
                </div>
                <button
                    className={classnames(styles.button, {
                        [styles.dark]: darkMode,
                    })}
                    type="submit"
                >
                    Submit
                </button>
            </form>

            <h3 style={{ marginTop: '10px' }}>This is what a POST request would look like</h3>
            {JSON.stringify(formik.values, null, 2)}
        </div>
    );
}

export default ContactForm;
