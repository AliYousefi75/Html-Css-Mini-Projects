window.addEventListener('hashchange',(e)=>{
    router();
})


function router(){
    switch(location.hash){
        case "":
            render({title:'HOME',color:'red',href:'#home'})
            break;
        case "#home":
            render({title:'HOME',color:'red',href:'#home'})
            break;
        case "#search":
            render({title:'SEARCH',color:'red',href:'#search'})
            break;
        case "#likes":
            render({title:'LIKES',color:'red',href:'#likes'})
            break;
        case "#profile":
            render({title:'PROFILE',color:'red',href:'#profile'})
            break;
        
    }
}