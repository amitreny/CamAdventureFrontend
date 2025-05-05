fetch(
  "https://camadventurestrapi.onrender.com/api/tour-sections?populate[TourItem][populate]=image"
)
  .then((res) => res.json())
  .then((data) => {
    if (!data || !Array.isArray(data.data)) {
      console.error("Invalid or missing TourSection data:", data);
      return;
    }

    const container = document.getElementById("tour-sections-container");

    data.data.forEach((section) => {
      const title = section.title || "Untitled Section";
      const subtitle = section.subtitle || "";
      const items = section.TourItem || [];

      const sectionElement = document.createElement("section");
      sectionElement.className = "sub-sections";

      const sectionHeader = `
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="sub-head-sec">
                <h3>${title}</h3>
              </div>
              <div class="sub-head-sec col-11 col-md-9 col-lg-7">
                <p>${subtitle}</p>
              </div>
            </div>
          </div>
          <div class="row" id="section-${title
            .replace(/\s+/g, "-")
            .toLowerCase()}-cards">
          </div>
        </div>
      `;

      sectionElement.innerHTML = sectionHeader;
      const cardRow = sectionElement.querySelector("div.row:last-child");

      items.forEach((item) => {
        const imgUrl =
          item.image?.data?.attributes?.url ||
          item.image?.attributes?.url ||
          item.image?.[0]?.url ||
          item.image?.url ||
          "";

        const tourCard = document.createElement("div");
        tourCard.className = "col-12 col-sm-6 col-lg-4 mt-3 mb-3";
        tourCard.innerHTML = `
          <a href="${item.link}">
            <div class="tours-sec-main position-relative">
              <img src="https://camadventurestrapi.onrender.com${imgUrl}" class="img-fluid w-100" alt="${item.title}">
              <div class="tours-sec">
                <h3>${item.title}</h3>
                <div class="tours-sec-text"></div> <!-- Will hold rich text HTML -->
                <a href="${item.link}" class="read-more">Read more</a>
              </div>
            </div>
          </a>
        `;

        const descContainer = tourCard.querySelector(".tours-sec-text");
        let descHTML = "No description available";

        if (Array.isArray(item.description)) {
          descHTML = item.description
            .map((paragraph) => {
              const text =
                paragraph.children?.map((child) => child.text || "").join("") ||
                "";
              return `<p>${text}</p>`;
            })
            .join("");
        }

        descContainer.innerHTML = descHTML;

        cardRow.appendChild(tourCard);
      });

      container.appendChild(sectionElement);
    });
  })
  .catch((err) => {
    console.error("Error loading tour sections:", err);
  });
