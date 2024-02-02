import React from 'react';
import styles from './Skills.module.scss';
import { useSelector } from 'react-redux';

function Skills() {
    const darkMode = useSelector((state) => state.darkMode.darkMode);

    return (
        <div className={styles.container}>
            <h2>Skills & Competencies</h2>
            <ul className={styles.list}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Agile methodology</li>
                <li>Cross-browser compatibility</li>
                <li>UX/UI Design </li>
                <li>Responsive web design</li>
                <li>Mobile-friendly development</li>
                <li>Web Application Development</li>
                <li>Search Engine Optimization (SEO)</li>
                <li>Version control system</li>
                <li>Web standards & guidelines</li>
                <li>lorem...</li>
                <li>lorem...</li>
                <li>lorem...</li>
            </ul>
        </div>
    );
}

export default Skills;
