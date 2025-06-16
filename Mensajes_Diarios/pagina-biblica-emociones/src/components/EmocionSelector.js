import React from 'react';

const emociones = [
    { id: 1, nombre: 'Feliz' },
    { id: 2, nombre: 'Triste' },
    { id: 3, nombre: 'Enojado' },
    { id: 4, nombre: 'Ansioso' },
    { id: 5, nombre: 'Esperanzado' },
];

const EmocionSelector = ({ onSelect }) => {
    const handleSelect = (event) => {
        const selectedEmotion = event.target.value;
        onSelect(selectedEmotion);
    };

    return (
        <div>
            <h2>Selecciona tu emoción</h2>
            <select onChange={handleSelect}>
                <option value="">--Elige una emoción--</option>
                {emociones.map((emocion) => (
                    <option key={emocion.id} value={emocion.nombre}>
                        {emocion.nombre}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default EmocionSelector;