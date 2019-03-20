document.addEventListener('DOMContentLoaded', function() {
    const subtitleHeader = document.querySelectorAll('.subtitle');
    const widthSubtitle = subtitleHeader[0].offsetWidth
    document.getElementById('subtitle-container').style.width = `${widthSubtitle + 10}px`;
    console.log(widthSubtitle);
});