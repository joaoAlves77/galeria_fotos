import { Props } from "../types/definetions"

export const PhotoItem = ({photo, onClick}: Props) => {
    return (
        <div onClick={onClick} className="cursos-pointer hover:opacity-80">
            <img src={`/${photo.url}`} alt="" className="w-full"/>
        </div>
    );
}