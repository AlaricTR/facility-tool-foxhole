window.onload = () => {
    
    
    populateOutputSelect(outputs);
    
    const itemSelect = document.getElementById("item-select");
    itemSelect.addEventListener("input", handleSelection, false);
}

function populateOutputSelect(outputs) 
{
    const itemSelect = document.getElementById("item-select");
    itemSelect.innerHTML = '<option value="">--Select--</option>';
    Object.keys(outputs)
        .filter(key => outputs[key][0].tier > 0)
        .forEach(key =>
        {
            const opt = document.createElement("option");
            opt.value = key;
            opt.textContent = outputs[key][0].output;
            itemSelect.appendChild(opt);
        }
        );
        
        
}

function populateVariantDropdown(item)
{
    const variantSelect = document.getElementById("variants");
        
    const variantSelectDropdown = document.createElement("select");
    variantSelectDropdown.name = item;
    variantSelectDropdown.id = item;
    for (let i = 0;i<outputs[item].length;i++)
    {
        const opt = document.createElement("option");
        opt.value = i;
        opt.textContent = item + " " + outputs[item][i].recipeNumber;
        variantSelectDropdown.appendChild(opt);
    }
    variantSelect.appendChild(variantSelectDropdown);
        

    
}

function handleSelection()
{
    console.log(event.target.value);
    clearVariantDropdown();
    clearBreakdown();
    const parent = document.getElementById("breakdown-container");
    recursiveRecipeBreakdown(event.target.value, parent);
}

function recursiveRecipeBreakdown(item, parent)
{
    if (outputs[item].length>1)
    {
        populateVariantDropdown(item);
    }
    const itemChild = document.createElement("ul");
    itemChild.textContent = item;
    console.log(itemChild.textContent);
    parent.appendChild(itemChild);
    if (outputs[item][0].tier>0) //if the current item's tier is above 0, recurse through its children, first detecting which recipe user has selected.
    {
        const selectedVariant = document.getElementById(item);
        let recipe = 0;
        if (!selectedVariant) 
            { 
                recipe = 0;
                console.log(recipe);

            } else 
            {
                recipe = selectedVariant.value;
            }
        
        
        for (let i = 0;i<outputs[item][recipe].inputs.length;i++)
        {
            recursiveRecipeBreakdown(outputs[item][recipe].inputs[i].material, itemChild);
        }
    }
    return;
}
function clearVariantDropdown()
{
    const variantSelect = document.getElementById("variants");
    while (variantSelect.firstChild)
    {
        variantSelect.removeChild(variantSelect.firstChild);
    }
}

function clearBreakdown()
{
    const breakdownContainer = document.getElementById("breakdown-container");
    while (breakdownContainer.firstChild)
    {
        breakdownContainer.removeChild(breakdownContainer.firstChild);
    }
}
