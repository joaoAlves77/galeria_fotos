import { ModalProps } from "../types/definetions";

export const Modal = ({image, closeModal}: ModalProps) => {
    return (
        <>
            <div onClick={closeModal} className="fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-black/90">
                <img src={`/${image}`} alt="" className="max-w-screen max-h-screen"/>
            </div>
            <div className="fixed top-5 right-5 w-10 h-10 cursor-pointer text-white text-5xl" onClick={closeModal}>
                x
            </div>
        </>
    );
}