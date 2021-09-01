// import Dropzone from "dropzone";
// import "dropzone";
// import { response } from "express";

// var myDropzone = new Dropzone("div#myId", { url: "/file/post"});
function submit() {
    let drop = document.getElementById("MyDrop")
    fetch("localhost:4000/file-upload",{
        method: 'POST'
    })
    .then((response) => {
        return response.json()
    })
}
