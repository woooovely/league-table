const formatColor = (color: string) => {
    return color.trim().toLocaleLowerCase().replace(/\s+/g, '');
}

export default formatColor;