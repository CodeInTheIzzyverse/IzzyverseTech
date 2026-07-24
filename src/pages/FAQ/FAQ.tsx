import { useState } from 'react';
import { faqs } from '@/data/faqs';
import './FAQ.scss';
import type Faq from '@/types/Faq';
import useSEO from '@/hooks/useSEO';

const FAQ = () => {
    const [openIdx, setOpenIdx] = useState<number | null>(null);

    useSEO({
        title: 'Preguntas Frecuentes',
        description: 'Resuelve tus dudas sobre nuestros servicios de soporte técnico, precios, tiempos de entrega y garantía.',
        keywords: 'preguntas frecuentes soporte, dudas tecnicas, garantia reparacion, precios soporte tecnico'
    });

    return (
        <main className="faqPage">
            <section className="faqPage__hero">
                <h1>Preguntas <span>Frecuentes</span></h1>
                <p>Todo lo que necesitas saber antes de agendar tu servicio.</p>
            </section>

            <section className="faqPage__list">
                {faqs.map((faq: Faq, idx) => (
                    <div key={idx} className={`faqPage__list-item ${openIdx === idx ? 'open' : ''}`}>
                        <button className='faqPage__list-question' onClick={() => setOpenIdx(openIdx === idx ? null : idx)}>
                            <span>{faq.question}</span>
                            {
                                openIdx === idx
                                    ?
                                    (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path fill="currentColor" d="m7 10l5 5l5-5z" />
                                        </svg>
                                    )
                                    :
                                    (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path fill="currentColor" d="m7 15l5-5l5 5z" />
                                        </svg>
                                    )
                            }
                        </button>
                        <div className='faqPage__list-answer'>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    )
}

export default FAQ;