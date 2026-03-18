const menuFlow = [
      {
        category: "Antipasti Centrali",
        icon: "cloche",
        items: [
          {
            name: "Fritti baresi",
            details: [
              { name: "popizze" },
              { name: "sgaliozze", allergeni: ["Sesamo", "Lupini"] },
              { name: "frittelline con salsa thai" }
            ]
          },
          "Insalata di polpo agli agrumi",
          "Involtini fumè",
          "Patate cheddar e bacon",
          "Antipasto all'italiana"
        ],
        allergeni: [
          "Sgaliozze: Sesamo, Lupini",
          "Pesce, Sedano",
          "Lattosio",
          "Lupini",
          "Lattosio"
        ]
      },
      {
        category: "Primo",
        icon: "pasta",
        items: ["Mezze maniche con pesto di pistacchio e crema di bufala"],
        allergeni: ["Frutta a guscio"]
      },
      {
        category: "Secondo",
        icon: "steak",
        items: ["Tagliata rucola, grana e pomodorini"],
        allergeni: ["Nichel, Lupini"]
      },
      {
        category: "Frutta",
        icon: "apple",
        items: ["Macedonia di stagione con sorbetto"],
        allergeni: ""
      },
      {
        category: "Dolce",
        icon: "cake",
        items: ["Autoesplicativa l'immagine, no?"]
      },
      {
        category: "Amari",
        icon: "glass",
        items: ["A sciacquare"]
      },
      {
        category: "Bevande",
        icon: "bottle",
        items: [
          "Acqua, Birra e Vino unlimited. Bevete irresponsabilmente."],
        allergeni: ["Alcol", "Glutine", "Solfiti"]
      }
    ];

    const iconByType = {
      cloche: `
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <path class="icon-stroke" style="--draw-delay:260ms;stroke-width:2.1" d="M24 56l42-28" />
          <path class="icon-stroke" style="--draw-delay:430ms;stroke-width:2.1" d="M30 68l42-28" />

          <circle class="icon-stroke" style="--draw-delay:700ms" cx="32.4" cy="50.4" r="4.2" />
          <circle class="icon-fill" style="--fill-delay:980ms" cx="32.4" cy="50.4" r="1.2" />
          <rect class="icon-stroke" style="--draw-delay:860ms" x="38.4" y="40.4" width="9.4" height="6.2" rx="2" transform="rotate(-34 43.1 43.5)" />
          <circle class="icon-stroke" style="--draw-delay:1020ms" cx="53.4" cy="36.4" r="4.2" />
          <circle class="icon-fill" style="--fill-delay:1260ms" cx="53.4" cy="36.4" r="1.2" />
          <rect class="icon-stroke" style="--draw-delay:1180ms" x="57.4" y="27.7" width="9.4" height="6.2" rx="2" transform="rotate(-34 62.1 30.8)" />

          <circle class="icon-stroke" style="--draw-delay:860ms" cx="38.4" cy="62.4" r="4.2" />
          <circle class="icon-fill" style="--fill-delay:1140ms" cx="38.4" cy="62.4" r="1.2" />
          <rect class="icon-stroke" style="--draw-delay:1020ms" x="44.4" y="52.5" width="9.4" height="6.2" rx="2" transform="rotate(-34 49.1 55.6)" />
          <circle class="icon-stroke" style="--draw-delay:1180ms" cx="59.4" cy="48.4" r="4.2" />
          <circle class="icon-fill" style="--fill-delay:1380ms" cx="59.4" cy="48.4" r="1.2" />
          <rect class="icon-stroke" style="--draw-delay:1320ms" x="63.4" y="39.7" width="9.4" height="6.2" rx="2" transform="rotate(-34 68.1 42.8)" />

          <path class="icon-accent" d="M40.6 43.6h3.3" />
          <path class="icon-accent" d="M59.5 30.8h3.3" />
          <path class="icon-accent" d="M46.6 55.6h3.3" />
          <path class="icon-accent" d="M65.4 42.8h3.3" />
        </svg>
      `,
      pasta: `
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <defs>
            <mask id="pasta-front-cut" maskUnits="userSpaceOnUse">
              <rect x="0" y="0" width="100" height="100" fill="white" />
              <path d="M10 52H27c7 0 11 6 14 10 3-4 7-10 14-10h17c3 3 3 7-1 10 4 3 4 7 0 10 4 3 4 7 0 10 4 3 4 6 0 10H55c-7 0-11-6-14-10-3 4-7 10-14 10H10c-3-4-3-7 1-10-4-3-4-7 0-10-4-3-4-7 0-10-4-3-4-7-1-10z" fill="black" stroke="black" stroke-width="4" stroke-linejoin="round" />
            </mask>
          </defs>

          <g mask="url(#pasta-front-cut)">
            <path class="icon-stroke" style="stroke-width:2.25;--draw-delay:120ms" d="M35 24H52c7 0 11 6 14 10 3-4 7-10 14-10h17c3 3 3 7-1 10 4 3 4 7 0 10 4 3 4 7 0 10 4 3 4 6 0 10H80c-7 0-11-6-14-10-3 4-7 10-14 10H35c-3-4-3-7 1-10-4-3-4-7 0-10-4-3-4-7 0-10-4-3-4-7-1-10z" />
            <path class="icon-stroke" style="stroke-width:2.25;--draw-delay:300ms" d="M58 36c3 4 11 4 14 0" />
            <path class="icon-stroke" style="stroke-width:2.25;--draw-delay:420ms" d="M58 48c3-4 11-4 14 0" />
          </g>

          <path class="icon-stroke" style="stroke-width:2.25;--draw-delay:560ms" d="M10 52H27c7 0 11 6 14 10 3-4 7-10 14-10h17c3 3 3 7-1 10 4 3 4 7 0 10 4 3 4 7 0 10 4 3 4 6 0 10H55c-7 0-11-6-14-10-3 4-7 10-14 10H10c-3-4-3-7 1-10-4-3-4-7 0-10-4-3-4-7 0-10-4-3-4-7-1-10z" />
          <path class="icon-stroke" style="stroke-width:2.25;--draw-delay:740ms" d="M33 64c3 4 11 4 14 0" />
          <path class="icon-stroke" style="stroke-width:2.25;--draw-delay:860ms" d="M33 76c3-4 11-4 14 0" />
        </svg>
      `,
      steak: `
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <path class="icon-stroke" style="--draw-duration:2200ms;--draw-delay:0ms" d="M15 66c-2-16 2-34 14-48C41 5 62 5 77 16c11 8 17 22 15 37" />
          <path class="icon-stroke" style="--draw-duration:2200ms;--draw-delay:240ms" d="M16 70c0 11 4 19 11 23 8 4 14 1 19-8 6-12 14-17 28-19 9-1 14-5 18-11" />

          <path class="icon-stroke" style="--draw-duration:2000ms;--draw-delay:520ms" d="M34 27h38" />
          <path class="icon-stroke" style="--draw-duration:2000ms;--draw-delay:660ms" d="M29 34h18" />
          <path class="icon-stroke" style="--draw-duration:2000ms;--draw-delay:780ms" d="M53 34h20" />
          <path class="icon-stroke" style="--draw-duration:2000ms;--draw-delay:900ms" d="M25 41h22" />
          <path class="icon-stroke" style="--draw-duration:2000ms;--draw-delay:1020ms" d="M73 41h8" />
          <path class="icon-stroke" style="--draw-duration:2000ms;--draw-delay:1140ms" d="M23 48h26" />
          <path class="icon-stroke" style="--draw-duration:2000ms;--draw-delay:1260ms" d="M67 48h16" />
          <path class="icon-stroke" style="--draw-duration:2000ms;--draw-delay:1380ms" d="M22 55h52" />
          <path class="icon-stroke" style="--draw-duration:2000ms;--draw-delay:1500ms" d="M19 62h54" />
          <path class="icon-stroke" style="--draw-duration:2000ms;--draw-delay:1620ms" d="M19 69h30" />
          <path class="icon-stroke" style="--draw-duration:2000ms;--draw-delay:1740ms" d="M23 76h16" />

          <circle class="icon-stroke" style="--draw-duration:1800ms;--draw-delay:1940ms" cx="59" cy="42" r="6.6" />
          <circle class="icon-fill" style="--fill-duration:700ms;--fill-delay:2500ms" cx="59" cy="42" r="1.3" />
        </svg>
      `,
      apple: `
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <path class="icon-stroke" style="--draw-duration:1800ms;--draw-delay:120ms" d="M50 78c-4 2-8 2-12 1-9-2-16-11-19-24-2-9-1-18 4-25 5-7 13-10 21-8 3 1 5 2 6 3 1-1 3-2 6-3 8-2 16 1 21 8 5 7 6 16 4 25-3 13-10 22-19 24-4 1-8 1-12-1z" />
          <path class="icon-stroke" style="--draw-duration:1400ms;--draw-delay:280ms" d="M50 25c0-8 0-13-4-16-3-2-6-2-8 0" />
          <path class="icon-stroke" style="--draw-duration:1400ms;--draw-delay:460ms" d="M51 17c6-6 13-7 19-4 2 5 0 11-5 15-5 3-10 3-14 0z" />
        </svg>
      `,
      cake: `
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <path class="icon-stroke" style="stroke-width:2.15;--draw-delay:120ms" d="M16 31c0-6 15-11 34-11s34 5 34 11-15 11-34 11-34-5-34-11z" />
          <path class="icon-stroke" style="stroke-width:2.15;--draw-delay:260ms" d="M16 31v41" />
          <path class="icon-stroke" style="stroke-width:2.15;--draw-delay:320ms" d="M84 31v41" />
          <path class="icon-stroke" style="stroke-width:2.15;--draw-delay:460ms" d="M16 45C18 51 22 51 24 45C26 39 30 39 32 45C34 51 38 51 40 45C42 39 46 39 48 45C50 51 54 51 56 45C58 39 62 39 64 45C66 51 70 51 72 45C74 39 78 39 80 45C81 48 83 48 84 45" />
          <path class="icon-stroke" style="stroke-width:2.15;--draw-delay:620ms" d="M16 58h68" />
          <path class="icon-stroke" style="stroke-width:2.15;--draw-delay:760ms" d="M16 72c0 6 15 11 34 11s34-5 34-11" />

          <path class="icon-stroke" style="stroke-width:2.15;--draw-delay:900ms" d="M50 15v13" />
          <path class="icon-stroke" style="stroke-width:2.15;--draw-delay:980ms" d="M40 27v4" />
          <path class="icon-stroke" style="stroke-width:2.15;--draw-delay:1060ms" d="M60 27v4" />
          <circle class="icon-stroke" style="stroke-width:2.15;--draw-delay:1140ms" cx="50" cy="14" r="1.6" />
        </svg>
      `,
      glass: `
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <path class="icon-stroke" style="stroke-width:2.35;--draw-delay:120ms" d="M24 20h52l-4 66H28z" />
          <path class="icon-stroke" style="stroke-width:2.35;--draw-delay:320ms" d="M28 69h44" />

          <path class="icon-stroke" style="stroke-width:2.35;--draw-delay:520ms" d="M46 33c4 5 4 11-2 15-5 4-11 4-15 0z" />
          <path class="icon-stroke" style="stroke-width:2.35;--draw-delay:640ms" d="M36 44c5 1 8-1 10-5" />

          <path class="icon-stroke" style="stroke-width:2.35;--draw-delay:780ms" d="M61 50c4 5 4 11-2 15-5 4-11 4-15 0z" />
          <path class="icon-stroke" style="stroke-width:2.35;--draw-delay:900ms" d="M51 61c5 1 8-1 10-5" />
        </svg>
      `,
      bottle: `
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <path class="icon-stroke" style="stroke-width:2.25;--draw-delay:120ms" d="M12 20h34l2 17c1 13-9 24-20 24S7 50 8 37z" />
          <path class="icon-stroke" style="stroke-width:2.25;--draw-delay:280ms" d="M14 27h30" />
          <path class="icon-stroke" style="stroke-width:2.25;--draw-delay:420ms" d="M28 61v21" />
          <path class="icon-stroke" style="stroke-width:2.25;--draw-delay:540ms" d="M20 92l8-12 8 12z" />

          <path class="icon-stroke" style="stroke-width:2.25;--draw-delay:640ms" d="M80 56v-8l5-5" />
          <circle class="icon-stroke" style="stroke-width:2.25;--draw-delay:720ms" cx="70" cy="66" r="7.3" />
          <circle class="icon-stroke" style="stroke-width:2.25;--draw-delay:780ms" cx="80" cy="66" r="7.3" />
          <circle class="icon-stroke" style="stroke-width:2.25;--draw-delay:840ms" cx="90" cy="66" r="7.3" />
          <circle class="icon-stroke" style="stroke-width:2.25;--draw-delay:900ms" cx="75" cy="76.5" r="7.3" />
          <circle class="icon-stroke" style="stroke-width:2.25;--draw-delay:960ms" cx="85" cy="76.5" r="7.3" />
          <circle class="icon-stroke" style="stroke-width:2.25;--draw-delay:1020ms" cx="80" cy="87" r="7.3" />
        </svg>
      `
    };

    const revealCard = document.getElementById("revealCard");
    const cardStage = document.getElementById("cardStage");
    const frontIcon = document.getElementById("frontIcon");
    const frontCategory = document.getElementById("frontCategory");
    const backCategory = document.getElementById("backCategory");
    const backItems = document.getElementById("backItems");
    const actionHint = document.getElementById("actionHint");
    const stepProgress = document.getElementById("stepProgress");
    const revealedMenu = document.getElementById("revealedMenu") || document.querySelector(".revealed-menu");

    let activeIndex = 0;
    let canFlip = false;
    let hideTimeout = null;

    function escapeHtml(value) {
      return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
    }

    const allergenBadges = {
      glutine: { label: "Glutine" },
      sedano: { label: "Sedano" },
      "frutta-a-guscio": { label: "Frutta a guscio" },
      pesce: { label: "Pesce" },
      soia: { label: "Soia" },
      "semi-di-sesamo": { label: "Semi di sesamo" },
      arachidi: { label: "Arachidi" },
      crostacei: { label: "Crostacei" },
      uova: { label: "Uova" },
      molluschi: { label: "Molluschi" },
      latte: { label: "Latte" },
      senape: { label: "Senape" },
      "anidride-solforosa-e-solfiti": { label: "Anidride solforosa e solfiti" },
      lupini: { label: "Lupini" },
      nichel: { label: "Nichel" },
      alcol: { label: "Alcol" }
    };

    function normalizeAllergenName(value) {
      const source = String(value || "").trim().toLowerCase();

      if (!source) {
        return "";
      }

      if (source === "lattosio") {
        return "latte";
      }

      if (source === "sesamo") {
        return "semi-di-sesamo";
      }

      if (source === "solfiti") {
        return "anidride-solforosa-e-solfiti";
      }

      return source
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
    }

    function extractAllergens(allergeni) {
      if (!allergeni) {
        return [];
      }

      if (Array.isArray(allergeni)) {
        return allergeni.flatMap((entry) => extractAllergens(entry));
      }

      const text = String(allergeni).includes(":")
        ? String(allergeni).split(":").slice(1).join(":")
        : String(allergeni);

      return text
        .split(",")
        .map((entry) => entry.trim())
        .filter(Boolean);
    }

    function formatAllergenSymbol(allergeni) {
      const allergenList = extractAllergens(allergeni);
      if (!allergenList.length) {
        return "";
      }

      const rendered = allergenList.map((name) => {
        const key = normalizeAllergenName(name);
        const badge = allergenBadges[key] || {
          label: name
        };
        const safeLabel = escapeHtml(badge.label);
        return `<span class="allergen-badge allergen-${key}" title="${safeLabel}" aria-label="${safeLabel}">${safeLabel}</span>`;
      }).join("");

      return `<span class="allergen-badges" aria-label="Allergeni">${rendered}</span>`;
    }

    function formatMenuItem(item, allergeni) {
      if (item && typeof item === "object" && Array.isArray(item.details)) {
        const details = item.details.map((detail) => {
          const detailName = escapeHtml(detail.name);
          return `${detailName}${formatAllergenSymbol(detail.allergeni)}`;
        }).join(", ");

        return `${escapeHtml(item.name)} (${details})`;
      }

      return `${escapeHtml(item)}${formatAllergenSymbol(allergeni)}`;
    }

    function renderStep(index) {
      const step = menuFlow[index];
      if (!step) {
        completeFlow();
        return;
      }

      if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
      }
      revealCard.classList.remove("flipped", "exiting");

      frontIcon.innerHTML = iconByType[step.icon] || iconByType.cloche;
      frontCategory.textContent = step.category;
      backCategory.textContent = step.category;
      backItems.innerHTML = step.items.map((item, itemIndex) => `<li>${formatMenuItem(item, step.allergeni?.[itemIndex])}</li>`).join("");

      actionHint.textContent = "Toccami, car*";
      stepProgress.textContent = `Categoria ${index + 1} di ${menuFlow.length}`;
      canFlip = true;
    }

    function commitCurrentStep() {
      const step = menuFlow[activeIndex];
      const section = document.createElement("section");
      const list = step.items.map((item, itemIndex) => `<li>${formatMenuItem(item, step.allergeni?.[itemIndex])}</li>`).join("");
      const categoryIcon = iconByType[step.icon] || iconByType.cloche;
      const menuTarget = document.getElementById("revealedMenu") || revealedMenu;

      if (!menuTarget) {
        console.warn("Container #revealedMenu non trovato.");
        return;
      }

      section.className = "menu-section";
      section.innerHTML = `
        <h3 class="menu-section-title"><span class="section-icon" aria-hidden="true">${categoryIcon}</span><span>${step.category}</span></h3>
        <ul>${list}</ul>
      `;

      menuTarget.appendChild(section);
    }

    function flipCard() {
      if (!canFlip || revealCard.classList.contains("flipped")) {
        return;
      }

      canFlip = false;
      revealCard.classList.add("flipped");
      actionHint.textContent = "Portate visibili.";

      hideTimeout = setTimeout(() => {
        commitCurrentStep();
        revealCard.classList.add("exiting");
        stepProgress.textContent = `Categoria ${activeIndex + 1} completata`;

        setTimeout(() => {
          activeIndex += 1;
          renderStep(activeIndex);
        }, 700);
      }, 2000);
    }

    function onCardKeydown(event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        flipCard();
      }
    }

    function completeFlow() {
      cardStage.classList.add("done");
      stepProgress.textContent = "Buona cena ed enjoy it!";
      stepProgress.classList.add("final-toast");
      const shellRoot = document.querySelector(".shell");
      if (shellRoot && stepProgress.parentElement !== shellRoot) {
        shellRoot.appendChild(stepProgress);
      }
    }

    revealCard.addEventListener("click", flipCard);
    revealCard.addEventListener("keydown", onCardKeydown);

    renderStep(activeIndex);
