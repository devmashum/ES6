function greeting(greetingHanler, name) {
    greetingHandler(name);
}

function greetingHandler(name) {
    console.log('good morning', name)
}

greeting(greetingHandler, 'Faisal')