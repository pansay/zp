function initReveal() {

    Reveal.initialize({
        controls: true,
        progress: true,
        history: true,
        center: true,
        dependencies: [
            { src: 'lib/classList.js', condition: function() { return !document.body.classList; } },
            { src: 'lib/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
            { src: 'lib/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        ]
    });

}

var file = window.location.hash.substr(1),
    section = '<section data-markdown="' + file + '" data-separator="^\n---\n$" data-separator-vertical="^\n--\n$">';
console.log(file);
$('.slides').append(section);
//$('.slides').append('<section data-markdown data-separator="^\n---\n$" data-separator-vertical="^\n--\n$"><script type="text/template">toto</script></section>');
initReveal();
