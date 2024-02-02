import React, { useState, useEffect } from 'react';
import styles from './Projects.module.scss';
import { Link } from 'lucide-react';
import { useSelector } from 'react-redux';
import classnames from 'classnames';

function Projects() {
    const darkMode = useSelector((state) => state.darkMode.darkMode);

    const URL = 'https://api.github.com/users/vaantheman/repos';

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                console.log(data);
            });
    }, []);

    return (
        <div className={classnames(styles.cardContainer, { [styles.dark]: darkMode })}>
            <h1>Projects from GitHub</h1>
            {data.map((data) => {
                return (
                    <div key={data.id} className={styles.card}>
                        <div className={classnames({ [styles.dark]: darkMode })}>
                            <a
                                href={data.clone_url}
                                target="_blank"
                                className={classnames(styles.projectName, {
                                    [styles.dark]: darkMode,
                                })}
                            >
                                {data.name}
                            </a>
                            <Link />
                        </div>
                        <div
                            className={classnames(styles.projectInfo, { [styles.dark]: darkMode })}
                        >
                            <span>Project ID: {data.id}</span>
                            <span>Owner: {data.owner.login}</span>
                            <span>Number of forks: {data.forks}</span>
                            <span>Number of stars: {data.stargazers_count}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Projects;
