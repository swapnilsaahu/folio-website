import { useEffect, useRef } from "react";

const NavItem = ({ className, children }) => {
    let posX = 0, posY = 0, startX = 0, startY = 0;
    const dragRef = useRef(null);
    const isDraging = useRef(false);

    const audioRef = useRef(null);

    const handlClick = () => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.currentTime = 0;
        audio.volume = 0.3;
        audio.play();
    }
    useEffect(() => {
        const div = dragRef.current;
        if (!div) return;

        const mouseDown = (e) => {
            isDraging.current = true;
            startX = e.clientX
            startY = e.clientY

            window.addEventListener('mousemove', mouseMove);
            window.addEventListener('mouseup', mouseUp);
        }

        const mouseMove = (e) => {
            if (!isDraging.current) return;

            const dx = startX - e.clientX
            const dy = startY - e.clientY

            posX -= dx;
            posY -= dy;

            div.style.transform = `translate(${posX}px,${posY}px)`;

            startX = e.clientX
            startY = e.clientY

        }

        const mouseUp = () => {
            isDraging.current = false;
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseup", mouseUp);
        }
        if (div) {
            div.addEventListener('mousedown', mouseDown);
        }

        return () => {
            div.removeEventListener("mousedown", mouseDown);
        }
    }, [])
    return (
        <div className={className} ref={dragRef} onClick={handlClick}>
            <audio ref={audioRef} preload="auto">
                <source src="/sound/click.m4a" type="audio/mp4" />
            </audio>
            <div>{children}</div>
        </div>
    )
}
export default NavItem;
