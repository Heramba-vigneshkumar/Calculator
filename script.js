function comein(val){
    document.getElementById('getin').value=document.getElementById('getin').value+val;
    if(val=='c'){
        document.getElementById('getin').value='';
    }
}

function remove () {
    document.getElementById('getin').value=document.getElementById('getin').value.slice(0, -1);
}

function getresult(){
    document.getElementById('getin').value=eval(document.getElementById('getin').value)
}