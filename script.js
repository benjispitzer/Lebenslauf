document.addEventListener('DOMContentLoaded', () => {
    
    const sections = document.querySelectorAll('.cv-section');

    sections.forEach(section => {
        const heading = section.querySelector('h2');
        
        if (heading) {
            heading.addEventListener('click', () => {
                

                section.classList.toggle('collapsed');
                
            });
        }
    });

    console.log("%c👋 Hallo Siemens Recruiting-Team!", "color: #00646E; font-size: 16px; font-weight: bold;");
    console.log("Dieser Lebenslauf wurde mit HTML, CSS und Vanilla JS gebaut.");
});
