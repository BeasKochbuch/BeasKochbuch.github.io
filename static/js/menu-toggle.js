document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.toggle-submenu').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();  // verhindert falls Button mal Linkfunktion hat
            const li = button.parentElement;
            li.classList.toggle('open');
        });
    });
});
