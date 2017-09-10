function initReveal() {

    Reveal.initialize({
        controls: true,
        progress: true,
        history: true,
        center: true,
        dependencies: [
            { src: '../../lib/classList.js' },
            { src: '../../lib/marked.js' },
            { src: '../../lib/markdown.js' },
            { src: '../../lib/notes.js' }
        ]
    });

}

// var file = window.location.hash.substr(1),
//     section = '<section data-markdown="' + file + '" data-separator="^\n---\n$" data-separator-vertical="^\n--\n$" data-separator-notes="^---Texto---">';
// window.location.hash = '';
// $('.slides').append(section);
initReveal();