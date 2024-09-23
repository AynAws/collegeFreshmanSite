// chat GPT
const links = [
    { name: "Letters, Arts and Sciences", url: "https://dornsife.usc.edu/" },
    { name: "Accounting", url: "https://www.marshall.usc.edu/departments/leventhal-school-accounting" },
    { name: "Advanced Computing", url: "https://sac.usc.edu/" },
    { name: "Architecture", url: "https://arch.usc.edu/" },
    { name: "Art and Design", url: "https://roski.usc.edu/" },
    { name: "Arts, Technology, Business of Innovation", url: "https://iovine-young.usc.edu/" },
    { name: "Business", url: "https://www.marshall.usc.edu/" },
    { name: "Cinematic Arts", url: "https://cinema.usc.edu/" },
    { name: "Communication and Journalism", url: "https://annenberg.usc.edu/" },
    { name: "Dance", url: "https://kaufman.usc.edu/" },
    { name: "Dentistry", url: "https://dentistry.usc.edu/" },
    { name: "Dramatic Arts", url: "https://dramaticarts.usc.edu/" },
    { name: "Education", url: "https://rossier.usc.edu/" },
    { name: "Engineering", url: "https://viterbischool.usc.edu/" },
    { name: "Gerontology", url: "https://gero.usc.edu/" },
    { name: "Law", url: "https://gould.usc.edu/" },
    { name: "Medicine", url: "https://keck.usc.edu/" },
    { name: "Music", url: "https://music.usc.edu/" },
    { name: "Occupational Therapy", url: "https://chan.usc.edu/" },
    { name: "Pharmacy", url: "https://mann.usc.edu/" },
    { name: "Physical Therapy", url: "https://pt.usc.edu/" },
    { name: "Professional Studies", url: "http://bovardcollege.usc.edu/" },
    { name: "Public Policy", url: "https://priceschool.usc.edu/" },
    { name: "Social Work", url: "https://dworakpeck.usc.edu/" }
];

const searchInput = document.getElementById('searchInput');
const resultsList = document.getElementById('resultsList');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    resultsList.innerHTML = ''; // Clear previous results

    const filteredLinks = links.filter(link => 
        link.name.toLowerCase().includes(query)
    );

    filteredLinks.forEach(link => {
        const listItem = document.createElement('li');
        listItem.setAttribute('class', 'search-link');
        listItem.innerHTML = `<a href="${link.url}" class="search-link" target="_blank">${link.name}</a>`;
        listItem.style.display = 'block'; // Show matching results
        resultsList.appendChild(listItem);
    });
});
