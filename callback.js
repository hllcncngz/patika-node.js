const posts = [
    { name: "Post 1", content: "content 1" },
    { name: "Post 2", content: "content 2" },
    { name: "Post 3", content: "content 3" }
]

const newPost = { name: "Post 4", content: "Yazar 4" }

function addPost(receivedPost) {
    return new Promise((resolve, reject) => {
        console.log("Yeni Post Ekleniyor..");
        if (receivedPost) {
            posts.push(newPost)
            console.log("Liste Güncelleniyor");
            resolve(posts.map(post => {
                console.log(post.name, post.content);
            }))
            console.log("Liste Gücellendi");
        }
        else {
            reject("Yeni Post Eklenemedi")
        }
    })
}

function postsList(data) {
    return new Promise((resolve, reject) => {
        console.log("Postlar Listeleniyor...");
        if (data) {
            resolve(posts.map(post => {
                console.log(post.name, post.content);
            }))
            console.log("postlar Listelendi");
        } else {
            reject("Postlar listelenemedi")
        }
    })
}

async function processData() {
    try {
        const data = await postsList(true)
        const receivedPost = await addPost(true)
    }
    catch (error) {
        console.log(error);
    }

}

processData()