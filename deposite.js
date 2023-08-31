document.getElementById('btn-deposite').addEventListener('click',function(){

    const depositeInput = document.getElementById('deposite-input')
    const depositeInputString = depositeInput.value 
    const newDeposite = parseFloat(depositeInputString)
    
    depositeInput.value = '';