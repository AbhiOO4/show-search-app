
const tvShow = document.querySelector("#searchShow")

const btn = document.querySelector("button")

// const showImage = document.querySelector("img")

// const showName = document.querySelector("#showName")

// const showRating = document.querySelector("#showRating")

const showInformation = document.querySelector("#showInformation")

const form = document.querySelector("form")

const showData = async () => {
    try {
        showInformation.innerHTML = ""
        searchTerm = tvShow.value
        const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
        const infos = res.data
        if (infos == ""){
            console.log("noooo")
            let h2 = document.createElement("h2")
            h2.innerText = "No content available"
            showInformation.append(h2)
        }
        else {
            for (let info of infos) {
                console.log(info.show.webChannel)
                let image = document.createElement("img")
                let showName = document.createElement("h3")
                let showRating = document.createElement("p")
                let showDiv = document.createElement("div")
                showDiv.classList.add("col")
                showDiv.classList.add("infoDec")
                image.classList.add("my-3")
                showInformation.append(showDiv)
                // console.log(info.show.image.medium)
                image.src = info.show.image.medium
                showDiv.append(image)
                showName.innerText = info.show.name
                showDiv.append(showName)
                showRating.innerText = `${Math.floor(info.score * 10)}/10`
                showDiv.append(showRating)
            }
        }
    }
    catch(e){
        console.log("error", e)
        // showInformation.innerText = "No result available"
    }
}


form.addEventListener("submit", function(e){
    e.preventDefault()
    showData()
})



