<section id="sf-gallery" class="sf-wrap" aria-label="Filterable Print Resources">
  <!-- Controls -->
  <div class="sf-controls" role="region" aria-label="Gallery controls">
    <div class="sf-search">
      <label for="sf-q" class="sf-label">Search</label>
      <input id="sf-q" class="sf-input" type="search" placeholder="Search resources"/>
    </div>
    <div class="sf-tags" role="group" aria-label="Filter by tags"></div>
    <div class="sf-meta">
      <button class="sf-clear" type="button" aria-label="Clear filters">Clear</button>
      <span class="sf-count" aria-live="polite">0 items</span>
    </div>
  </div>

  <!-- Cards will be injected here -->
  <div class="sf-grid"></div>
</section>

<style>

#sf-gallery.sf-wrap { --gap:16px; --pill:#eef2f7; --brand:#0a61a2; }
#sf-gallery .sf-controls{display:grid;gap:var(--gap);margin-bottom:calc(var(--gap)*1.5)}
#sf-gallery .sf-input{padding:10px;border:1px solid #d9dee6;border-radius:10px;width:100%}
#sf-gallery .sf-tags{display:flex;flex-wrap:wrap;gap:8px}
#sf-gallery .sf-grid{display:grid;gap:var(--gap);grid-template-columns:repeat(12,1fr)}
#sf-gallery .sf-card{grid-column:span 12;background:#fff;border:1px solid #eceff3;border-radius:16px;overflow:hidden;display:flex;flex-direction:column}
#sf-gallery .sf-fig{aspect-ratio:16/9;background:#f6f7f9}
#sf-gallery .sf-fig img{width:100%;height:100%;object-fit:cover}
#sf-gallery .sf-ttl{margin:0;font-size:1.125rem}
#sf-gallery .sf-badges{list-style:none;display:flex;gap:6px;flex-wrap:wrap;padding:0;margin:0}
#sf-gallery .sf-badges li{background:var(--pill);border-radius:999px;padding:4px 8px;font-size:.8rem}
#sf-gallery .sf-btn{margin:14px;text-decoration:none;padding:10px 14px;border-radius:10px;background:var(--brand);color:#fff;align-self:flex-end}
@media(min-width:640px){#sf-gallery .sf-card{grid-column:span 6}}
@media(min-width:1024px){#sf-gallery .sf-card{grid-column:span 4}}
/* Default tag button style */
#sf-gallery .sf-tagbtn {
  border: 1px solid #d9dee6;
  border-radius: 999px;
  padding: 6px 10px;
  background: #fff;
  cursor: pointer;
  transition: all 0.15s ease;
}

/* Hover state */
#sf-gallery .sf-tagbtn:hover {
  background: #f3f7fb;
  border-color: #bcd7ff;
}

/* Selected (pressed) state */
#sf-gallery .sf-tagbtn[aria-pressed="true"] {
  background: var(--brand);
  border-color: var(--brand);
  color: #fff;
  font-weight: 600;
  box-shadow: 0 0 0 3px rgba(10,97,162,0.25);
  transform: scale(1.05);
  position: relative;
}

/* Optional: add a checkmark inside selected tags */
#sf-gallery .sf-tagbtn[aria-pressed="true"]::after {
  content: "✓";
  font-size: 0.8rem;
  margin-left: 6px;
}

</style>

<script>
(() => {
  // ======= DATA: [title, image, download, tags[]] =======
  const resources = [
    [
      "5 Ways to Ensure You Have an Effective MTSS System",
      "https://images.squarespace-cdn.com/content/v1/6890c5c76857fe20a5bed7a4/2b479d68-b92f-416b-8e7a-6d2c2e9cce68/Screenshot+2025-09-02+141036.png?format=750w",
      "/s/Five-Ways-to-Ensure-You-have-an-Effective-MTSS-System.pdf",
      ["School Performance & MTSS Coaching"]
    ],
    [
      "5 Things to Know about Strategic Planning",
      "https://images.squarespace-cdn.com/content/v1/6890c5c76857fe20a5bed7a4/53cdd1d2-8635-4934-a404-91a00297a64d/Screenshot+2025-09-02+142416.png?format=750w",
      "/s/5-Things-to-Know-about-Strategic-Planning.pdf",
      ["Strategic Planning & Impact Evaluation"]
    ],
    [
      "Appropriate State Certification Requirements for ESSA Funded Employees",
      "https://images.squarespace-cdn.com/content/v1/6890c5c76857fe20a5bed7a4/dca31759-5642-40f2-a900-a3bdd9aca774/Screenshot+2025-09-02+142643.png?format=750w",
      "/s/ASC-Guide-for-ESSA.pdf",
      ["Federal Programs & State Reporting"]
    ],
    [
      "Federal Programs Calendars",
      "https://images.squarespace-cdn.com/content/v1/6890c5c76857fe20a5bed7a4/a64d3e66-db7b-4bbb-9c64-b42e2c6b0aa1/Screenshot+2025-09-02+142808.png?format=750w",
      "/s/Federal-Programs-Calendars.pdf",
      ["Federal Programs & State Reporting"]
    ],
    [
      "Make a Strategic Plan Result in Action",
      "https://images.squarespace-cdn.com/content/v1/6890c5c76857fe20a5bed7a4/6212f60a-f6b1-4203-af1e-2f2f3e70598e/Screenshot+2025-09-02+142835.png?format=750w",
      "/s/Make-a-Strategic-Plan-Result-in-Action.pdf",
      ["Strategic Planning & Impact Evaluation"]
    ],
    [
      "PFE ESSA Requirements Checklist",
      "https://images.squarespace-cdn.com/content/v1/6890c5c76857fe20a5bed7a4/a45d2756-a786-49d9-8eff-ba05ee7e3585/Screenshot+2025-09-02+142857.png?format=750w",
      "/s/PFE-ESSA-Requirements-Checklist.pdf",
      ["Federal Programs & State Reporting"]
    ],
    [
      "Sample Federal Programs Coordinator Board Report",
      "https://images.squarespace-cdn.com/content/v1/6890c5c76857fe20a5bed7a4/a6325456-d9de-45a3-acf6-a7b27de86e2f/Screenshot+2025-09-02+142918.png?format=750w",
      "/s/Sample-Federal-Programs-Coordinator-Board-Report-ylel.pdf",
      ["Federal Programs & State Reporting"]
    ],
    [
      "School Performance & MTSS Coaching Overview",
      "https://images.squarespace-cdn.com/content/v1/6890c5c76857fe20a5bed7a4/15e2ddc8-cd86-4ded-bbe0-bc8c7539ce40/Screenshot+2025-09-02+142939.png?format=750w",
      "/s/School-Performance-MTSS-Coaching-jfft.pdf",
      ["School Performance & MTSS Coaching"]
    ],
    [
      "School Accelerator Case Study",
      "https://images.squarespace-cdn.com/content/v1/6890c5c76857fe20a5bed7a4/fe7b5a95-eb6f-4df5-b864-61385eb0a137/Screenshot+2025-09-02+142949.png?format=750w",
      "/s/School-Accelerator-white-paper-School-Frontiers-2025.pdf",
      ["School Performance & MTSS Coaching", "Case Study"]
    ],
    [
      "AEA Presentation",
      " https://images.squarespace-cdn.com/content/v1/6890c5c76857fe20a5bed7a4/1a8246e8-02f4-49fe-89d4-365e1205fa2d/Screenshot+2025-09-15+at+12.08.59%E2%80%AFPM.png",
      "/s/AEA-Presentation-v2a2.pdf",
      ["Strategic Planning & Impact Evaluation","Presentations"]
    ],
    [
      "NM Charter Presentation Dec 2024",
      "https://images.squarespace-cdn.com/content/v1/6890c5c76857fe20a5bed7a4/42d8239e-9664-4ef0-8bbc-a56182626108/Screenshot+2025-09-16+153416.png",
      "/s/School-Frontiers-NM-CS-Conference-Presentation-December-2024-ys5g.pdf",
      ["School Performance & MTSS Coaching","Presentations"]
    ],
    [
      "PCPCS CEO Summit May 2025",
      "https://images.squarespace-cdn.com/content/v1/6890c5c76857fe20a5bed7a4/4782bfe1-752e-4f45-99bb-722c6d6c2c63/Screenshot+2025-09-16+153346.png",
      "/s/PCPCS-CEO-Summit-May-2025-1.pdf",
      ["Presentations"]
    ],
	[
      "Using Data For Lasting Change",
      "https://images.squarespace-cdn.com/content/v1/6890c5c76857fe20a5bed7a4/d5f82f92-0a04-4fb3-9f2f-e142b7daea74/Screenshot+2025-10-23+140406.png",
      "/s/Data-Driven-Strategic-Planning-for-Schools-FINAL-2.pdf",
      ["Presentations", "Strategic Planning & Impact Evaluation"]
    ],
  ];

  const root = document.getElementById("sf-gallery");
  const grid = root.querySelector(".sf-grid");
  const input = root.querySelector("#sf-q");
  const tagWrap = root.querySelector(".sf-tags");
  const clearBtn = root.querySelector(".sf-clear");
  const countEl = root.querySelector(".sf-count");

  

  // Build cards
  const cards = resources.map(([title,img,dl,tags])=>{
    const el=document.createElement("article");
    el.className="sf-card";
    el.setAttribute("data-title",title.toLowerCase());
    el.setAttribute("data-tags",tags.join(","));
    el.innerHTML=`
      <figure class="sf-fig"><img src="${img}" alt="${title} preview"></figure>
      <header class="sf-hd">
        <h3 class="sf-ttl">${title}</h3>
        <ul class="sf-badges">${tags.map(t=>`<li>${t}</li>`).join("")}</ul>
      </header>
      <a class="sf-btn" href="${dl}" target="_blank">Download</a>
    `;
    grid.appendChild(el);
    return {el,title:title.toLowerCase(),tags};
  });

  // Collect tags
  const allTags = [...new Set(cards.flatMap(c=>c.tags))].sort((a,b)=>a.localeCompare(b));
  const selected=new Set();
  allTags.forEach(tag=>{
    const btn=document.createElement("button");
    btn.type="button"; btn.className="sf-tagbtn"; btn.textContent=tag;
    btn.setAttribute("aria-pressed","false");
    btn.addEventListener("click",()=>{
      const on=btn.getAttribute("aria-pressed")==="true";
      btn.setAttribute("aria-pressed",String(!on));
      if(on) selected.delete(tag); else selected.add(tag);
      filter();
    });
    tagWrap.appendChild(btn);
  });

  let t; 
  const debouncedFilter = () => { clearTimeout(t); t = setTimeout(filter, 80); };
  input.addEventListener("input", debouncedFilter);


  input.addEventListener("keydown",(e)=>{
    if(e.key === "Enter"){ e.preventDefault(); }
  });

  function filter(){
    const q=(input.value||"").trim().toLowerCase();
    const want=selected.size?selected:null;
    let shown=0;
    cards.forEach(c=>{
      const matchText=!q||c.title.includes(q); // search only title
      const matchTags=!want||c.tags.some(t=>want.has(t));
      const keep=matchText&&matchTags;
      c.el.style.display=keep?"":"none";
      if(keep) shown++;
    });
    countEl.textContent=`${shown} item${shown===1?"":"s"}`;
  }

  clearBtn.addEventListener("click",()=>{
  input.value=""; 
  selected.clear();
  tagWrap.querySelectorAll('[aria-pressed="true"]').forEach(b=>b.setAttribute("aria-pressed","false"));
  filter();
});


  filter();
})();
</script>
