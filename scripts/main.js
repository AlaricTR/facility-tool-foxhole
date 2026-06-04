const recipes = {
    lance25: [
    {
      output: "Lance-25 “Hasta”",
      tier: 4,
      outputAmount: 1,
      inputs: [
        { material: "steel", amount: 60 },
        { material: "ASM3", amount: 65 },
        { material: "ASM4", amount: 45 },
        { material: "ASM5", amount: 65 }
      ]
    }
  ],

  lance46: [
    {
      output: "Lance-46 “Sarissa”",
      tier: 4,
      outputAmount: 1,
      inputs: [
        { material: "steel", amount: 150 },
        { material: "ASM3", amount: 65 },
        { material: "ASM4", amount: 40 },
        { material: "ASM5", amount: 85 }
      ]
    }
  ],

  floodMk1: [
    {
      output: "Flood Mk. I",
      tier: 4,
      outputAmount: 1,
      inputs: [
        { material: "steel", amount: 50 },
        { material: "ASM3", amount: 30 },
        { material: "ASM4", amount: 60 },
        { material: "ASM5", amount: 35 }
      ]
    }
  ],

  floodJuggernaut: [
    {
      output: "Flood Juggernaut Mk. VII",
      tier: 4,
      outputAmount: 1,
      inputs: [
        { material: "steel", amount: 40 },
        { material: "ASM3", amount: 65 },
        { material: "ASM4", amount: 30 },
        { material: "ASM5", amount: 45 }
      ]
    }
  ],

  floodStain: [
    {
      output: "Flood Mk. IX Stain",
      tier: 4,
      outputAmount: 1,
      inputs: [
        { material: "steel", amount: 150 },
        { material: "ASM3", amount: 65 },
        { material: "ASM4", amount: 40 },
        { material: "ASM5", amount: 85 }
      ]
    }
  ],

  cullenPredator: [
    {
      output: "Cullen Predator Mk. III",
      tier: 4,
      outputAmount: 1,
      inputs: [
        { material: "steel", amount: 275 },
        { material: "ASM3", amount: 105 },
        { material: "ASM4", amount: 95 },
        { material: "ASM5", amount: 105 },
        { material: "rare alloy", amount: 3 }
      ]
    }
  ],

  o75bAres: [
    {
      output: "O-75b “Ares”",
      tier: 4,
      outputAmount: 1,
      inputs: [
        { material: "steel", amount: 275 },
        { material: "ASM3", amount: 105 },
        { material: "ASM4", amount: 95 },
        { material: "ASM5", amount: 105 },
        { material: "rare alloy", amount: 3 }
      ]
    }
  ],
 talos: [
    {
      output: "Talos",
      tier: 4,
      outputAmount: 1,
      inputs: [
        { material: "steel", amount: 3 },
        { material: "ASM1", amount: 10 },
        { material: "ASM3", amount: 15 },
        { material: "ASM4", amount: 15 }
      ]
    }
  ],
  hullSegment: [
    {
      output: "Naval Hull Segment",
      tier: 4,
      outputAmount: 1,
      inputs: [
        { material: "PCM", amount: 60 },
        { material: "ASM1", amount: 2 },
        { material: "ASM2", amount: 2 },
        { material: "ASM4", amount: 10 },
        { material: "rare alloy", amount: 4 },
        { material: "thermal shielding", amount: 4 }
      ]
    }
  ],
  battletank1: [
    {
      output: "Lance-36",
      tier: 4,
      outputAmount: 1,
      inputs: [
        { material: "steel", amount: 50 },
        { material: "ASM3", amount: 35 },
        { material: "ASM4", amount: 60 },
        { material: "ASM5", amount: 35 }
      ]
    }
  ],
  supertank: [
    {
      output: "Ares",
      tier: 4,
      outputAmount: 1,
      inputs: [
        { material: "steel", amount: 275 },
        { material: "ASM3", amount: 105 },
        { material: "ASM4", amount: 95 },
        { material: "ASM5", amount: 105 }
      ]
    }
  ],
  asm4: [ { output: "ASM4", tier: 3, outputAmount: 1, inputs: [ { material: "PCM", amount: 1 }, { material: "heavy oil", amount: 66 } ] } ],
  asm3: [ { output: "ASM3", tier: 2, outputAmount: 1, inputs: [ { material: "CMats", amount: 3 }, { material: "sulfur", amount: 20 } ] } ],
  asm2: [ { output: "ASM2", tier: 1, outputAmount: 1, inputs: [ { material: "salvage", amount: 15 }, { material: "petrol", amount: 50 } ] } ],
  asm1: [ { output: "ASM1", tier: 2, outputAmount: 1, inputs: [ { material: "coke", amount: 15 } ] } ],
  asm5: [ { output: "ASM5", tier: 4, outputAmount: 1, inputs: [ { material: "steel", amount: 3 }, { material: "coke", amount: 245 }, { material: "ASM1", amount: 10 }, { material: "ASM2", amount: 10 } ] } ],
  steel: [ { output: "steel", tier: 3, outputAmount: 1, inputs: [ { material: "PCM", amount: 3 }, { material: "coke", amount: 200 } ] }, { output: "steel", tier: 3, outputAmount: 3, inputs: [ { material: "PCM", amount: 9}, { material: "coke", amount: 375 } ] } ],
  pcm: [
     {
      output: "PCM",
      tier: 2,
      outputAmount: 1,
      inputs:
      [
        { material: "CMats", amount: 15 },
        { material: "metal beam", amount: 1 } ] },
     {
      output: "PCM",
      tier: 2,
      outputAmount: 3,
      inputs: [
        { material: "CMats", amount: 3 },
        { material: "components", amount: 55 },
        { material: "heavy oil", amount: 6 } ] } ],
  thermalshielding: [ { output: "thermal shielding", tier: 2, outputAmount: 1, inputs: [ { material: "CMats", amount: 2 }, { material: "ASM4", amount: 5 } ] } ],
  navalshellplating: [ { output: "Naval Shell Plating", tier: 3, outputAmount: 1, inputs: [ { material: "CMats", amount: 2 }, { material: "thermal shielding", amount: 1 } ] } ],
  navalturbine: [ { output: "Naval Turbine", tier: 4, outputAmount: 1, inputs: [ { material: "ASM5", amount: 20 }, { material: "rare alloy", amount: 20 } ] } ],
  destroyer: [ { output: "Destroyer", tier: 4, outputAmount: 1, inputs: [ { material: "Naval Hull Segment", amount: 12 }, { material: "naval Shell Plating", amount: 12 } ] } ],
  longhook: [ { output: "Loonghook", tier: 4, outputAmount: 1, inputs: [ { material: "Naval Hull Segment", amount: 8 }, { material: "naval Shell Plating", amount: 15 } ] } ],
  bluefin: [ { output: "bluefin", tier: 4, outputAmount: 1, inputs: [ { material: "Naval Hull Segment", amount: 25}, { material: "naval Shell Plating", amount: 25 } ] } ],
  battleship: [ { output: "Titan", tier: 5, outputAmount: 1, inputs: [ { material: "Naval Hull Segment", amount: 20 }, { material: "naval Shell Plating", amount: 20 }, { material: "Naval Turbine", amount: 4 } ] } ],
  rarealloy: [ { output: "rare alloy", tier: 3, outputAmount: 1, inputs: [ { material: "PCM", amount: 5 }, { material: "rare metals", amount: 20 }, { material: "coke", amount: 60 } ] } ],
  salvage: [ { output: "salvage", tier: 0, outputAmount: 1, inputs: [] } ],
  components: [ { output: "components", tier: 0, outputAmount: 1, inputs: [] } ],
  coal: [ { output: "coal", tier: 0, outputAmount: 1, inputs: [] } ],
  sulfur: [ { output: "sulfur", tier: 0, outputAmount: 1, inputs: [] } ],
  raremetal: [ { output: "rare metals", tier: 0, outputAmount: 1, inputs: [] } ],
  CMATS: [ { output: "CMats", tier: 1, outputAmount: 1, inputs: [ { material: "salvage", amount: 10 } ] }, { output: "CMats", tier: 1, outputAmount: 3, inputs: [ { material: "salvage", amount: 25 }, { material: "coke", amount: 15 } ] } ],
  metalbeam: [ { output: "metal beam", tier: 1, outputAmount: 1, inputs: [ { material: "salvage", amount: 25 } ] } ],
  coke: [ { output: "coke", tier: 1, outputAmount: 180, inputs: [ { material: "coal", amount: 200 } ] } ],

  petrol: [ { output: "petrol", tier: 1, outputAmount: 150, inputs: [ { material: "oil", amount: 150} ] }, { output: "petrol", tier: 1, outputAmount: 150, inputs: [ { material: "oil", amount: 120}, { material: "water", amount: 30}  ] }]
};

const liquidTypes = ["diesel", "petrol", "water", "oil", "heavy oil", "enriched oil"];

const canSizes = {
  petrol: 50,
  water: 50,
  "enriched oil": 30,
  "heavy oil": 30
};

let recipeSelections = {};

function normalizeKey(name) {
  if (!name) return null;
  const lower = name.toLowerCase();
  return Object.keys(recipes)
    .find(key => key.toLowerCase() === lower || recipes[key][0].output.toLowerCase() === lower)
  || null;
}

window.onload = () => {
  if (!document.getElementById("variantControls")) {
    const vc = document.createElement("div");
    vc.id = "variantControls";
    vc.style.position = "absolute";
    vc.style.top = "10px";
    vc.style.right = "10px";
    vc.style.display = "flex";
    vc.style.flexDirection = "column";
    vc.style.gap = "8px";
    document.body.appendChild(vc);
  }

  populateMainDropdown();
  initVariantControls();
};

function handleSelection() {
  const selectedKey = document.getElementById("itemSelect").value;
  const quantity = parseFloat(document.getElementById("quantityInput").value) || 1;
  const tier = parseInt(document.getElementById("tierFilter").value);
  const outputEl = document.getElementById("output");

  if (!selectedKey) {
    outputEl.textContent = "";
    return;
  }

  const baseOutput = recipes[selectedKey][0].output;
  const nestedHtml = getRecipeHtml(baseOutput, quantity);

  const totals = {};
  const litersTotals = {};
  accumulateTier(baseOutput, quantity, totals, litersTotals, tier);

  let summaryHtml = `<strong>Totals (tier === ${tier}):</strong><ul>`;

  Object.entries(totals).forEach(([mat, count]) => {
    if (liquidTypes.includes(mat.toLowerCase())) {
      const liters = litersTotals[mat] || 0;
      summaryHtml += `<li>${count} ${mat} (${liters.toFixed(2)} L)</li>`;
    } else {
      summaryHtml += `<li>${count} ${mat}</li>`;
    }
  });

  summaryHtml += `</ul>`;

  outputEl.innerHTML = `
    <strong>Recipe for ${quantity} ${baseOutput}:</strong>
    ${nestedHtml}
    <hr>
    ${summaryHtml}`;
}

function populateMainDropdown() {
  const dropdown = document.getElementById("itemSelect");
  dropdown.innerHTML = '<option value="">--Select--</option>';

  Object.keys(recipes)
    .filter(key => recipes[key][0].tier > 0)
    .sort((a, b) => recipes[a][0].output.localeCompare(recipes[b][0].output))
    .forEach(key => {
      const opt = document.createElement("option");
      opt.value = key;
      opt.textContent = recipes[key][0].output;
      dropdown.appendChild(opt);
    });
}

function initVariantControls() {
  const container = document.getElementById("variantControls");
  container.innerHTML = "";

  Object.keys(recipes).forEach(key => {
    const variants = recipes[key];

    if (variants.length > 1) {
      const div = document.createElement("div");

      const label = document.createElement("span");
      label.textContent = `${variants[0].output}: `;

      const select = document.createElement("select");
      select.value = recipeSelections[key] ?? 0;

      select.onchange = () => {
        recipeSelections[key] = parseInt(select.value);
        handleSelection();
      };

      variants.forEach((recipe, i) => {
        const option = document.createElement("option");
        option.value = i;
        option.text = `Recipe ${i + 1}`;
        select.add(option);
      });

      div.appendChild(label);
      div.appendChild(select);
      container.appendChild(div);
    }
  });
}

function getRecipeHtml(material, qty) {
  const key = normalizeKey(material);

  if (key && recipes[key][0].tier === 0) {
    const canSize = canSizes[material.toLowerCase()];

    if (canSize) {
      const cans = Math.ceil(qty / canSize);
      return `<ul><li>${qty.toFixed(2)} L ${material} (${cans} cans)</li></ul>`;
    }

    return `<ul><li>${qty} ${material}</li></ul>`;
  }

  if (!key) {
    const canSize = canSizes[material.toLowerCase()];

    if (canSize) {
      const cans = Math.ceil(qty / canSize);
      return `<ul><li>${qty.toFixed(2)} L ${material} (${cans} cans)</li></ul>`;
    }

    return `<ul><li>${qty} ${material}</li></ul>`;
  }

  const variants = recipes[key];
  const idx = recipeSelections[key] ?? 0;
  const recipe = variants[idx];
  const batches = qty / (recipe.outputAmount || 1);

  const recipeDesc = recipe.inputs.map(input => `${input.amount} ${input.material}`).join(" + ");
  const recipeSummary = `(${recipeDesc} => ${recipe.outputAmount} ${recipe.output})`;

  let html = `<ul><li>${qty} ${recipe.output} ${recipeSummary}`;

  if (recipe.inputs.length) {
    html += "<ul>";

    recipe.inputs.forEach(input => {
      const needed = input.amount * batches;
      const inputKey = normalizeKey(input.material);
      const isTier0 = inputKey && recipes[inputKey][0].tier === 0;
      const canSize = canSizes[input.material.toLowerCase()];

      if (canSize) {
        const cans = Math.ceil(needed / canSize);
        html += `<li>${needed.toFixed(2)} L ${input.material} (${cans} cans)</li>`;
      } else if (isTier0) {
        html += `<li>${needed} ${input.material}</li>`;
      } else {
        html += getRecipeHtml(input.material, needed);
      }
    });

    html += "</ul>";
  }

  html += "</li></ul>";
  return html;
}

function accumulateTier(material, qty, totals, litersTotals, targetTier) {
  const key = normalizeKey(material);

  if (!key) return;

  const variants = recipes[key];
  const idx = recipeSelections[key] ?? 0;
  const recipe = variants[idx];

  if (recipe.tier === targetTier) {
    if (liquidTypes.includes(recipe.output.toLowerCase())) {
      const liters = qty;
      const canSize = canSizes[recipe.output.toLowerCase()];
      const cans = canSize ? Math.ceil(liters / canSize) : liters;

      totals[recipe.output] = (totals[recipe.output] || 0) + cans;
      litersTotals[recipe.output] = (litersTotals[recipe.output] || 0) + liters;
    } else {
      totals[recipe.output] = (totals[recipe.output] || 0) + qty;
    }

    return;
  }

  const batches = qty / (recipe.outputAmount || 1);

  recipe.inputs.forEach(input => {
    accumulateTier(
      input.material,
      input.amount * batches,
      totals,
      litersTotals,
      targetTier
    );
  });
}

function onVariantChange(key, idx) {
  const normalizedKey = normalizeKey(key);

  if (!normalizedKey) return;

  recipeSelections[normalizedKey] = parseInt(idx);
  handleSelection();
}