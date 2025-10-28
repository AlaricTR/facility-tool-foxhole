
const outputs =  {
    Lance36: 
    [
            {
                recipeNumber : 1,
                output : "lance-36",
                tier : 4, 
                outputAmount : 1,
                inputs : 
                [
                    {material : "steel", amount : 50},
                    {material : "asm5", amount : 35},
                    {material : "asm4", amount : 60},
                    {material : "asm3", amount : 35}
                    
                ]
            },
            {
                recipeNumber : 2,
                output : "lance-36",
                tier : 4, 
                outputAmount : 1,
                inputs : 
                [
                    {material : "steel", amount : 50},
                    {material : "asm5", amount : 35},
                    {material : "asm4", amount : 60},
                    {material : "asm3", amount : 35}
                    
                ]
            }
    ]

         
}
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
