import { useEffect, useRef } from "react";

const NavItem = ({ className, children }) => {
    let posX = 0, posY = 0, startX = 0, startY = 0;
    const dragRef = useRef(null);
    const isDraging = useRef(false);
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
        <div className={className} ref={dragRef}>
            <div>{children}</div>
        </div>
    )
}
export default NavItem;
