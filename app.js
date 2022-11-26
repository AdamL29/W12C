const result = document.getElementById(`postResults`);

function postFunction(){
    axios.request({
        url: `https://jsonplaceholder.typicode.com/posts`,
        method: "POST",
        data: {
            body: document.getElementById(`textBox`).value,
        }
    }).then(postSuccess).catch(postFail);
}

function postFail(error){
    result.innerHTML = `Error Creating Post`;
}

function postSuccess(response){
    let post = response.data;
    result.insertAdjacentHTML(`beforeend`, `<p>Post: ${post.body}</p>`);
}


function patchFunction(){
    axios.request({
        url: `https://jsonplaceholder.typicode.com/posts/1`,
        method: "PATCH",
        params: {
            body: document.getElementById(`textBox`).value
        }
    }).then(patchSuccess).catch(patchFail);
}

function patchFail(error){
    result.innerHTML = `Error Updating Post`;
}

function patchSuccess(response){
    let patch = response.data;
    result.insertAdjacentHTML(`beforeend`, `<p>Patch Successful</p>`);
}



function deleteFunction(){
    axios.request({
        url: `https://jsonplaceholder.typicode.com/posts/1`,
        method: "DELETE",
    }).then(deleteSuccess).catch(deleteFail);
}

function deleteFail(error){
    result.innerHTML = `Error Deleting Post`;
}

function deleteSuccess(response){
    let del = response.data;
    result.innerHTML = "";
}



function getFunction(){
    axios.request({
        url: `https://jsonplaceholder.typicode.com/posts`,
        method: "GET",
    }).then(getSuccess).catch(getFail);
}

function getFail(error){
    result.innerHTML = `Error Getting Post`;
}

function getSuccess(response){
    let post = response.data;
    for (allPosts of post){
        result.insertAdjacentHTML(`beforeend`, `<p>${allPosts.id}. ${allPosts.title}</p>`);
        result.insertAdjacentHTML(`beforeend`, `<p>${allPosts.body}</p>`);
    }
}




function clearFunction(){
    result.innerHTML = "";
}

document.getElementById(`clearPost`).addEventListener(`click`, deleteFunction);
document.getElementById(`submitPost`).addEventListener(`click`, postFunction);
document.getElementById(`updatePost`).addEventListener(`click`, patchFunction);
