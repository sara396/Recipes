const recipeValidate={
    levelValidate:(val)=>{
        const Levels=["Easy","Medium","Hard"]
        if(!Levels.includes(val)){
            throw new Error("the level must be Easy/Medium/Hard !!! ")
        }
    },
     typeValidate:(val)=>{
        const Levels=["Fur" ,"Meat", "Dairy"]
        if(!Levels.includes(val)){
            throw new Error("the type must be Fur / Meat / Dairy !!! ")
        }
    }
}

export default recipeValidate