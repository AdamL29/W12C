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
    document.getElementById(`postResults`).innerHTML = `Error Creating Post`;
}

function postSuccess(response){
    let post = response.data;
    document.getElementById(`postResults`).insertAdjacentHTML(`beforeend`, `<p>${post.body}</p>`);
    console.log(response);
}


// function patchFunction(){
//     axios.request({
//         url: `https://jsonplaceholder.typicode.com/posts/1`,
//         method: "PATCH",
//         params: {
//             s: document.getElementById(`textBox`).value
//         }
//     }).then(patchSuccess).catch(patchFail);
// }

// function patchFail(error){
//     document.getElementById(`postResults`).innerHTML = `Error Creating Post`;
// }

// function patchSuccess(response){
//     let post = response.data[0];
//     document.getElementById(`postResult`).insertAdjacentHTML(`beforeend`, `<p>Post has been update.</p>`);
//     console.log(response);
// }



// function deleteFunction(){
//     axios.request({
//         url: `https://jsonplaceholder.typicode.com/posts/1`,
//         method: "DELETE",
//     }).then(deleteSuccess).catch(deleteFail);
// }

// function deleteFail(error){
//     document.getElementById(`postResults`).innerHTML = `Error Creating Post`;
// }

// function deleteSuccess(response){
//     let post = response.data[0];
//     document.getElementById(`postResult`).insertAdjacentHTML(`beforeend`, `<p>Your post has been deleted!</p>`);
//     console.log(response);
// }



// function getFunction(){
//     axios.request({
//         url: `https://jsonplaceholder.typicode.com/posts`,
//         method: "GET",
//         params: {
//             s: document.getElementById(`textBox`).value
//         }
//     }).then(getSuccess).catch(getFail);
// }

// function getFail(error){
//     document.getElementById(`postResults`).innerHTML = `Error Creating Post`;
// }

// function getSuccess(response){
//     let post = response.data[0];
//     for (allPosts of post){
//         document.getElementById(`postResult`).insertAdjacentHTML(`beforeend`, `<p>${allPosts}</p>`);
//     }
//     console.log(response);
// }




function clearFunction(){
    document.getElementById(`postResults`).innerHTML = "";
}

document.getElementById(`clearPost`).addEventListener(`click`, clearFunction);
document.getElementById(`submitPost`).addEventListener(`click`, postFunction);
