import React from 'react';
import styles from './Aboutme.module.scss';
import { useSelector } from 'react-redux';
import Skills from './Skills';

function AboutMe() {
    const darkMode = useSelector((state) => state.darkMode.darkMode);

    return (
        <div className={styles.container}>
            <h1>About me</h1>
            <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum et voluptate
                dolorem laboriosam est ad autem doloribus enim blanditiis, dicta, quaerat facilis
                ipsa in delectus excepturi sunt, repellat nesciunt veniam? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Dolorum aliquam quam accusantium consequuntur
                fugiat non? Repellendus recusandae tempore, fugiat veritatis debitis eius adipisci
                nihil harum laborum. Inventore ratione obcaecati aspernatur! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Veritatis incidunt tempore cum neque mollitia
                tenetur iusto iure autem quaerat, magnam unde tempora eaque quae recusandae sapiente
                dolore ratione, voluptatum nam! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Fugiat reprehenderit quidem at dolor iusto voluptatum, magni iste perferendis
                iure laudantium molestias minima amet facilis autem repudiandae cupiditate harum
                mollitia porro!
            </p>
            <Skills />
        </div>
    );
}

export default AboutMe;
