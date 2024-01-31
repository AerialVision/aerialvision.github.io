function toggleContainer(index) {
    var container = document.querySelectorAll('.container')[index - 1];
    container.style.display = (container.style.display === 'none' || container.style.display === '') ? 'block' : 'none';
    var toggleBar = document.querySelectorAll('.toggle-bar')[index - 1];
    toggleBar.innerHTML = (toggleBar.innerHTML === '+') ? '-' : '+';
}
