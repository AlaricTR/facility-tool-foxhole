window.onload = () => {
    
    
    populateOutputSelect(outputs);
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

function populateVariantDropdown(outputs)
{
    const variantSelect = document.getElementByClass("variants");
    Object.keys(outputs)
        .filter(key => outputs[key].length>1)
        .forEach(key =>
        {
            const variantSelectDropdown = document.createElement("select");
            variantSelectDropdown.name = outputs[key][0].output;
            for (let i = 0;i<outputs[key].length;i++)
            {
                const opt = document.createElement("option");
                opt.value = i;
                opt.textContent = outputs[key][i].recipeNumber;
                variantSelectDropdown.appendChild(opt);
            }
            variantSelect.appendChild(variantSelectDropdown);
        }
        );
    
}
