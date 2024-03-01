export function create({ content, classList, id, action }) {
    const button = document.createElement('button')
    
    if (content) button.textContent = content
    
    if (id) button.setAttribute('id', id)
    
    if (classList) button.classList.add(classList)

    button.setAttribute('data-action', action)

    return button
}