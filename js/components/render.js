function renderElement(parent, component) {
    if(!parent.children.length || !component) {
        const stringElement = component ? component.outerHTML : component;
        parent.innerHTML = stringElement;
        return;
    }
    if(parent.firstElementChild.outerHTML !== component.outerHTML) {
        //Get elements that their content rely on state
        const actualElements_cont = parent.firstElementChild.querySelectorAll('[data-content]');
        const newElements_cont = component.firstElementChild.querySelectorAll('[data-content]');
        actualElements_cont.forEach((element, index) => {
            if(element.textContent !== newElements_cont[index].textContent) {
                element.textContent = newElements_cont[index].textContent;
            }
        });
        //Get elements that their attributes rely on state
        const actualElements_attr = parent.firstElementChild.querySelectorAll('[data-attr]');
        const newElements_attr = component.firstElementChild.querySelectorAll('[data-attr]');
        actualElements_attr.forEach((element, index) => {
            const oldAttributes = Object.assign({}, element.attributes);
            const newAttributes = Object.assign({}, newElements_attr[index].attributes);
            for(let attribute in oldAttributes) {
                if(oldAttributes[attribute].value !== newAttributes[attribute].value) {
                    element.attributes[attribute].value = newAttributes[attribute].value;
                }
            }
        })
    }
    return parent;
}

export default renderElement;