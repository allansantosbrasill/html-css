document.addEventListener('DOMContentLoaded', () => {
    const richestPeople = [
        {
            name: "Bernard Arnault & família",
            netWorth: "$233 bilhões",
            source: "LVMH",
            image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSbT74qFBv-GmM6sg2r5VxE8k6QmeQAHB7IWplpRKPfdzaed6J4bEYDucsgoLyMmQITaopETtxOhjIU6Nc",
            about: "Bernard Arnault é o presidente e CEO da LVMH Moët Hennessy – Louis Vuitton, a maior empresa de bens de luxo do mundo. Ele construiu um império de mais de 70 marcas, incluindo Louis Vuitton, Christian Dior, Sephora e Tiffany & Co."
        },
        {
            name: "Elon Musk",
            netWorth: "$195 bilhões",
            source: "Tesla, SpaceX",
            image: "https://cdn.prod.website-files.com/62e89931273b5c21be76c486/6384cf9495e14633f52ff1ee_637e4633f3ef8340cfcefba9_633c3fa160f1d7381545a0e2_Elon_Musk_Royal_Society_(crop2).jpg.webp",
            about: "Elon Musk é o fundador, CEO e engenheiro-chefe da SpaceX; CEO e arquiteto de produtos da Tesla, Inc.; fundador da The Boring Company; co-fundador da Neuralink e OpenAI. Ele visa revolucionar o transporte tanto na Terra, através da Tesla, quanto no espaço, com a SpaceX."
        },
        {
            name: "Jeff Bezos",
            netWorth: "$194 bilhões",
            source: "Amazon",
            image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT3Di7FiMG7cw9wztr9WqTp1-13t8OF2d2UCiq2RPawrJAIu45iyc9GituxVCbhOEJa0jFSEIDDktoWslx3MgVhwg",
            about: "Jeff Bezos fundou a Amazon em 1994 e a transformou na maior varejista online do mundo. Embora tenha deixado o cargo de CEO em 2021, ele permanece como presidente executivo. Ele também é dono da The Washington Post e da empresa de exploração espacial Blue Origin."
        },
        {
            name: "Mark Zuckerberg",
            netWorth: "$177 bilhões",
            source: "Meta Platforms",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/220px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
            about: "Mark Zuckerberg é o co-fundador, presidente e CEO da Meta Platforms (anteriormente Facebook). Ele fundou o Facebook em seu dormitório de Harvard em 2004. A Meta também possui Instagram e WhatsApp, entre outros produtos e serviços."
        },
        {
            name: "Larry Ellison",
            netWorth: "$141 bilhões",
            source: "Oracle",
            image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTP3g4IfhBLYhaa5TkwOAheqasjzmLS8J8UPbiY5Z7ScBEeGr-8U6i_udhjISrHh7y0f6PhCyDqoNZUlkY",
            about: "Larry Ellison é o co-fundador, presidente e diretor de tecnologia da Oracle Corporation, uma das maiores empresas de tecnologia do mundo. Ele é conhecido por sua visão e liderança no setor de software empresarial."
        }
    ];

    const richestPeopleList = document.getElementById('richest-people-list');

    richestPeople.forEach(person => {
        const personCard = document.createElement('div');
        personCard.classList.add('person-card');

        personCard.innerHTML = `
            <div class="image-container">
                <img src="${person.image}" alt="${person.name}" data-about="${person.about}">
            </div>
            <div class="person-info">
                <h2>${person.name}</h2>
                <p>Patrimônio: ${person.netWorth}</p>
                <p>Fonte: ${person.source}</p>
                <div class="about-text" style="display: none; margin-top: 10px; font-size: 0.9em;"></div>
            </div>
        `;
        richestPeopleList.appendChild(personCard);
    });

    const images = document.querySelectorAll('.person-card .image-container img');

    images.forEach(img => {
        img.addEventListener('click', (event) => {
            const clickedImage = event.target;
            const aboutText = clickedImage.getAttribute('data-about');
            const aboutDiv = clickedImage.closest('.person-card').querySelector('.about-text');

            if (aboutDiv.style.display === 'none' || aboutDiv.textContent !== aboutText) {
                aboutDiv.textContent = aboutText;
                aboutDiv.style.display = 'block';
            } else {
                aboutDiv.style.display = 'none';
            }
        });
    });
});