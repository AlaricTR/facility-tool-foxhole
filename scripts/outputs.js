const outputs = {
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

        }
    ],
    PCM: 
    [
        {
            recipeNumber : 1,
            output : "PCM",
            tier : 3, 
            outputAmount : 1,
            inputs : 
            [
                {material : "CMAT", amount : 15},
                {material : "METALBEAM", amount : 1},
                
            ]

        },
        {
            recipeNumber : 2,
            output : "PCM",
            tier : 3, 
            outputAmount : 1,
            inputs : 
            [
                {material : "CMAT", amount : 3},
                {material : "component", amount : 20},
                
            ]

        }
    ],
    CMAT: 
    [
        {
            recipeNumber : 1,
            output : "CMAT",
            tier : 1, 
            outputAmount : 1,
            inputs : 
            [
                {material : "salvage", amount : 10}
                
            ]

        },
        {
            recipeNumber : 2,
            output : "CMAT",
            tier : 1, 
            outputAmount : 3,
            inputs : 
            [
                {material : "salvage", amount : 15},
                {material : "COKE", amount : 25},
                
            ]

        }
    ],
    METALBEAM:
    [
        {
            recipeNumber: 1,
            output: "METALBEAM",
            tier: 1,
            outputAmount: 1,
            inputs :
            [
                {material: "salvage", amount: "25"}
            ]
        }
    ],
    COKE:
    [
        {
            recipeNumber: 1,
            output: "COKE",
            tier: 1,
            outputAmount: 180,
            inputs:
            [
                {material: "coal", amount: "200"}
            ]
        }
    ],
    salvage:
    [
        {
            recipeNumber: 1,
            output: "salvage",
            tier: 0,
            outputAmount: 1,
            inputs:
            [
                {material: "salvage", amount: "25"}
            ]
        }
    ],
    component:
    [
        {
            recipeNumber: 1,
            output: "component",
            tier: 0,
            outputAmount: 1,
            inputs:
            [
                {material: "component", amount: "25"}
            ]
        }
    ],
    coal:
    [
        {
            recipeNumber: 1,
            output: "coal",
            tier: 0,
            outputAmount: 1,
            inputs:
            [
                {material: "component", amount: "25"}
            ]
        }
    ]
}