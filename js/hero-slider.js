fetch("https://camadventurestrapi.onrender.com/api/hero-slides?populate=*")
  .then(res => res.json())
  .then(data => {
    const slides = data.data;
    const carouselInner = document.getElementById("hero-carousel-inner");
    const indicators = document.getElementById("carousel-indicators");

    if (!Array.isArray(slides)) {
      console.error("Unexpected API response:", data);
      return;
    }

    slides
      .sort((a, b) => a.Order - b.Order)
      .forEach((slide, index) => {
        const title = slide.Title || "Untitled";
        const subtitle = slide.Subtitle || "";
        const imageArray = slide.Image;

        // Get the first image URL from the Image array
        const imageUrl = imageArray?.[0]?.url 
          ? `https://camadventurestrapi.onrender.com${imageArray[0].url}` 
          : null;

        if (!imageUrl) {
          console.warn("Slide missing image:", slide);
          return;
        }

        // Create the slide element
        const div = document.createElement("div");
        div.className = `carousel-item ${index === 0 ? "active" : ""}`;
        div.innerHTML = `
          <img src="${imageUrl}" class="d-block w-100" alt="${title}">
          <div class="banner-title position-absolute start-50 translate-middle text-center w-100">
            <h2 data-aos="fade-up" data-aos-delay="200">${title}</h2>
            <img src="image/camAdventures_text.png" class="banner-text-img" data-aos="fade-up" data-aos-delay="400">
            <h4 data-aos="fade-up" data-aos-delay="600">${subtitle}</h4>
          </div>
        `;
        carouselInner.appendChild(div);

        // Add indicator button
        const button = document.createElement("button");
        button.type = "button";
        button.setAttribute("data-bs-target", "#carouselBannerAutoplaying");
        button.setAttribute("data-bs-slide-to", index);
        button.className = index === 0 ? "active" : "";
        button.setAttribute("aria-label", `Slide ${index + 1}`);
        indicators.appendChild(button);
      });
  })
  .catch(err => {
    console.error("Failed to load hero slides:", err);
  });
