export type List = {
    id: number;
    url: string;
}

export type Props = {
    photo: List;
    onClick: () => void;
}

export type ModalProps = {
    image: string;
    closeModal: () => void;
}