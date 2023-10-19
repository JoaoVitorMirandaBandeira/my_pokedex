export const translateTypes = (type) => {
    const typeTranslations = {
        normal: "Normal",
        fire: "Fogo",
        water: "Água",
        electric: "Elétrico",
        grass: "Grama",
        ice: "Gelo",
        fighting: "Lutador",
        poison: "Venenoso",
        ground: "Terra",
        flying: "Voador",
        psychic: "Psíquico",
        bug: "Inseto",
        rock: "Pedra",
        ghost: "Fantasma",
        steel: "Aço",
        dark: "Sombrio",
        dragon: "Dragão",
        fairy: "Fada",
    };

    const translatedType = typeTranslations[type] || type;

    return translatedType;
};
