let x=1
document.getElementById("dasht").onclick= ()=>{ 
    const gridContainer=document.getElementById('Container');
    const sidebar=document.getElementById('Sidebar')
    
    if(x===1){
        
        gridContainer.style.gridTemplateColumns = '1fr';
        sidebar.style.display='none'
        x=0
    }
    else{
        gridContainer.style.gridTemplateColumns = '1fr 5fr';
        sidebar.style.display='flex'
        x=1
        
    }
}