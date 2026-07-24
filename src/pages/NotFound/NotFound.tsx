import Button from "@/components/UI/Button/Button";
import './NotFound.scss';
import { PATHS } from "@/constants/routes";
import useSEO from "@/hooks/useSEO";

const NotFound = () => {
    useSEO({
        title: 'Página no encontrada',
        description: 'Lo sentimos, la página que buscas no existe en Izzyverse Tech.'
    });

    return (
        <main className="notFoundPage">
            <h1>Página no encontrada</h1>
            <Button><a href={PATHS.HOME}>Ir al Inicio</a></Button>
        </main>
    )
}

export default NotFound;