import { useEffect, useState } from "react";

const useViewportAmount = () => {

    const [amount, setAmount] = useState(0.4);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 768) {
                setAmount(0.1); // en móvil, activar antes la animación
            } else {
                setAmount(0.4); // en desktop, activar con más visibilidad
            }
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return amount;
}

export default useViewportAmount;