
const tvShow = document.querySelector("#searchShow")

const btn = document.querySelector("button")

// const showImage = document.querySelector("img")

const showName = document.querySelector("#showName")

const showRating = document.querySelector("#showRating")

const showInformation = document.querySelector("#showInformation")

const image = document.createElement("img")


const showData = async () => {
    try {
        searchTerm = tvShow.value
        const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
        image.src = res.data[0].show.image.medium
        showInformation.append(image)
        showName.innerText = res.data[0].show.name
        showRating.innerText = `${Math.floor(res.data[0].score * 10)}/10`
    }
    catch(e){
        console.log("error", e)
        showName.innerText = "No result available"
        showRating.innerText = ""
        showInformation.removeChild(image)
    }
    tvShow.value = ""
}


btn.addEventListener("click", showData)


