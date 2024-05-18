// 'use client';
import s from './ButtonScrollUp.module.css';

function ButtonScrollUp() {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return <button onClick={scrollToTop} className={s.pageUp} />;
}

export default ButtonScrollUp;
