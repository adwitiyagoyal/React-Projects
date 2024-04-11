function customRender(reactElement, container){
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);
    // container.appendChild(domElement);

    //BETTER CODE THAN ABOVE
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for(const prop in reactElement.props){
        if(prop === 'children') continue; // when some time by mistake we write children in props
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}  
  
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}

const mainContainer = document.querySelector('#root');

//(kya inject kre, kaha pe inject kre )
customRender(reactElement, mainContainer);