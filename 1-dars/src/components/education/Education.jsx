import React from 'react'
import '../timeLine/TimeLine.css'
import { Container } from '../../utils/Utils'

const Education = () => {
    const education = [
        {
            company: "Najot Ta'lim",
            position: 'Frontend React JS',
            duration: '04/2023 - 10/2023',
            description: 'I studied Frontend programming at Najot Talim training center for 7 months and during this time I did several projects'
        },
        {
            company: 'Sammi.ac',
            position: 'Frontend',
            duration: '04/2023 - present',
            description: 'I improved my knowledge of frontend programming on the online education platform sammi.ac.'
        },
        {
            company: 'Self & Study',
            position: 'Tailwind CSS and Chakra UI',
            duration: '01/2024 - present',
            description: 'In my spare time, I do programming and learn programming languages ​​and frameworks on my own. One of them is Tailwind CSS and Chakra UIs'
        }
    ];
    return (
        <>
            <Container>
                <div className="timeline__box">
                    {education.map((edu, index) => (
                        <div key={index} className="timeline__content">
                            <div className="timeline__item">
                                <h4 className='timeline__item-title'>{edu.company}</h4>
                                <h3 className='timeline__item-subtitle'>{edu.position}</h3>
                                <p className='timeline__item-year'>{edu.duration}</p>
                                <p className='timeline__item-desc'>{edu.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </>
    )
}

export default Education