export function create({iconName}) {
    const icon = document.createElement("i")
    icon.classList.add('ph')
    icon.classList.add(`ph-${iconName}`)

    return icon
}