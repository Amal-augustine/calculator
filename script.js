        const shownumber=(number)=>{
        output.value+=number 

    }
    const removeall=()=>{
        output.value=""
        output.placeholder="0"
    }
    const remove1=()=>{
        output.value=output.value.slice(0,-1)
    }

    const showresult=()=>{
    try{
        output.value=eval(output.value)
    
    }
    catch(err){
        output.placeholder="invalid"
        output.value=""

    }
    }