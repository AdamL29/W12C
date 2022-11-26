function postFunction(){
    axios.request({
        url: `https://jsonplaceholder.typicode.com/posts`,
        params: {
            s: document.getElementById(`text`).value
        }
    }).then(postSuccess).catch(postFail);
}

function postFail(error){
    document.getElementById(`postResults`).innerHTML = `Error Creating Post`;
}

