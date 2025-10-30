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
    variantSelectDropdown.name = outputs[item][0].output;
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
    recursiveRecipeBreakdown(event.target.value);
}

function recursiveRecipeBreakdown(item)
{
    if (outputs[item].length>1)
    {
        populateVariantDropdown(item);
    }
    else
    {
        return;
    }
}
function clearVariantDropdown()
{
    const variantSelect = document.getElementById("variants");
    while (variantSelect.firstChild)
    {
        variantSelect.removeChild(variantSelect.firstChild);
    }
}
