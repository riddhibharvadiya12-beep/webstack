const templates = [
  {
    name: "Website 1",
    desc: "Template",
    img: "assets/web1.png",
    file: "templates/web1.zip",
    preview: "website/web1.html"
  },
  {
    name: "Website 2",
    desc: "Template",
    img: "assets/web2.png",
    file: "templates/web2.zip",
    preview: "website/web2.html"
  },
  {
    name: "Website 3",
    desc: "Template",
    img: "assets/web3.png",
    file: "templates/web3.zip",
    preview: "website/web3.html"
  },
  {
    name: "Website 4",
    desc: "Template",
    img: "assets/web4.png",
    file: "templates/web4.zip",
    preview: "website/web4.html"
  },
  {
    name: "Website 5",
    desc: "Template",
    img: "assets/web5.png",
    file: "templates/web5.zip",
    preview: "website/web5.html"
  },
  {
    name: "Website 6",
    desc: "Template",
    img: "assets/web6.png",
    file: "templates/web6.zip",
    preview: "website/web6.html"
  },
  {
    name: "Website 7",
    desc: "Template",
    img: "assets/web7.png",
    file: "templates/web7.zip",
    preview: "website/web7.html"
  },
  {
    name: "Website 8",
    desc: "Template",
    img: "assets/web8.png",
    file: "templates/web8.zip",
    preview: "website/web8.html"
  },
  {
    name: "Website 9",
    desc: "Template",
    img: "assets/web9.png",
    file: "templates/web9.zip",
    preview: "website/web9.html"
  },
  {
    name: "Website 10",
    desc: "Template",
    img: "assets/web10.png",
    file: "templates/web10.zip",
    preview: "website/web10.html"
  },
  {
    name: "Website 11",
    desc: "Template",
    img: "assets/web11.png",
    file: "templates/web11.zip",
    preview: "website/web11.html"
  },
  {
    name: "Website 12",
    desc: "Template",
    img: "assets/web12.png",
    file: "templates/web12.zip",
    preview: "website/web12.html"
  },
  {
    name: "Website 13",
    desc: "Template",
    img: "assets/web13.png",
    file: "templates/web13.zip",
    preview: "website/web13/web13.html"
  },
  {
    name: "Website 14",
    desc: "Template",
    img: "assets/web14.png",
    file: "templates/web14.zip",
    preview: "website/web14/web14.html"
  },
  {
    name: "Website 15",
    desc: "Template",
    img: "assets/web15.png",
    file: "templates/web15.zip",
    preview: "website/web15.html"
  },
  {
    name: "Website 16",
    desc: "Template",
    img: "assets/web16.png",
    file: "templates/web16.zip",
    preview: "website/web16/web16.html"
  },
  {
    name: "Website 17",
    desc: "Template",
    img: "assets/web17.png",
    file: "templates/web17.zip",
    preview: "website/web17.html"
  },
  {
    name: "Website 18",
    desc: "Template",
    img: "assets/web18.png",
    file: "templates/web18.zip",
    preview: "website/web18.html"
  },
  {
    name: "Website 19",
    desc: "Template",
    img: "assets/web19.png",
    file: "templates/web19.zip",
    preview: "website/web19.html"
  },
  {
    name: "Website 20",
    desc: "Template",
    img: "assets/web20.png",
    file: "templates/web20.zip",
    preview: "website/web20/web20.html"
  },
  {
    name: "Website 21",
    desc: "Template",
    img: "assets/web21.png",
    file: "templates/web21.zip",
    preview: "website/web21/web21.html"
  },
  {
    name: "Website 22",
    desc: "Template",
    img: "assets/web22.png",
    file: "templates/web22.zip",
    preview: "website/web22.html"
  },
  {
    name: "Website 23",
    desc: "Template",
    img: "assets/web23.png",
    file: "templates/web23.zip",
    preview: "website/web23.html"
  },
  {
    name: "Website 24",
    desc: "Template",
    img: "assets/web24.png",
    file: "templates/web24.zip",
    preview: "website/web24/web24.html"
  },
  {
    name: "Website 25",
    desc: "Template",
    img: "assets/web25.png",
    file: "templates/web25.zip",
    preview: "website/web25/web25.html"
  },
  {
    name: "Website 26",
    desc: "Template",
    img: "assets/web26.png",
    file: "templates/web26.zip",
    preview: "website/web26.html"
  },
  {
    name: "Website 27",
    desc: "Template",
    img: "assets/web27.png",
    file: "templates/web27.zip",
    preview: "website/web27/web27.html"
  },
  // 👉 Add up to 50+ templates here
];

const container = document.getElementById("templateList");

templates.forEach(t => {
  container.innerHTML += `
    <div class="card">
      
      <a href="${t.preview}" target="_blank">
        <img src="${t.img}" alt="${t.name}">
      </a>

      <div class="card-content">
        <h3>${t.name}</h3>
        <p>${t.desc}</p>

        <a href="${t.file}" class="download-btn" download>
          Download 
        </a>
      </div>
    </div>
  `;
});

