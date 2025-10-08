function showContent(contentId) {
    const content = document.getElementById(contentId + 'Content');
    const defaultImage = document.getElementById('defaultBlock');
    const buttons = document.querySelectorAll('.Buttons');

    buttons.forEach(button => {
        const h3 = button.querySelector('h3');
        h3.classList.remove('active-h3');
    });

    const activeButton = document.querySelector(`.Buttons[onclick="showContent('${contentId}')"]`);
    const activeH3 = activeButton.querySelector('h3');

    if (!content.classList.contains('hidden')) {
        content.classList.add('hidden');
        defaultImage.style.display = 'block';
        document.body.style.height = 'auto';
        localStorage.removeItem('activeContent');
    } else {
        document.querySelectorAll('.content').forEach(content => {
            content.classList.add('hidden');
        });

        defaultImage.style.display = 'none';
        content.classList.remove('hidden');
        document.body.style.height = `${content.scrollHeight + 200}px`;
        localStorage.setItem('activeContent', contentId);

        activeH3.classList.add('active-h3');
    }
}
