"use client";

import { useState } from "react";
import { PhotoList } from "../data/photo-list";
import { PhotoItem } from "./photo-item";
import { Modal } from "./modal";

export const Images = () => {
    const [showModal, setShowModal] = useState(false);
    const [imageOfModal, setImageOfModal] = useState("");
    
    const openModal = (id: number) => {
        const photo = PhotoList.find(item => item.id === id);
        if(photo) {
            setImageOfModal(photo.url);
            setShowModal(true);
        }
    }
    
    const closeModal = () => {
        setShowModal(false);
    }
    return(
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PhotoList.map(item => (
                <PhotoItem key={item.id} photo={item} onClick={() => openModal(item.id)}/>
            ))}

            {showModal &&
                <Modal image={imageOfModal} closeModal={closeModal}/>
            }
        </section>
    );
}