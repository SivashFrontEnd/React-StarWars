export async function req (url) {
    const rez = await fetch(url);
    return await rez.json();
}

export function showName (data = []) {
   return data.results.map(({name}) => {
       return <div>{name}</div>
    })
}

export function createValidArray(oldArr) {
    if (Array.isArray(oldArr)) return null;

    let [...arr] = oldArr.results;

    arr = arr.map((obj) => {
        const {id, url, image, category} = searchImg(obj.url)
        return {
            title: obj.name || obj.title,
            id, url, image, category
        }
    })
    return arr
}

export function searchImg(url) {
    let id = "";
    const urls = {
        people: "https://starwars-visualguide.com/assets/img/characters/",
        films: "https://starwars-visualguide.com/assets/img/films/",
        planets: "https://starwars-visualguide.com/assets/img/planets/",
        species: "https://starwars-visualguide.com/assets/img/species/",
        starships: "https://starwars-visualguide.com/assets/img/starships/",
        vehicles: "https://starwars-visualguide.com/assets/img/vehicles/"
    }
    if (typeof url === "string") {
        id = url.match(/\d+/).join();
    } else {
        throw new Error("url is not string")
    }
    if (url.includes("people")) {
        return {
            image: urls.people + id + ".jpg",
            id,
            url,
            category : "people"
        }
    } else if (url.includes("films")) {
        return {
            image: urls.films + id + ".jpg",
            id,
            url,
            category: "films"
        }
    } else if (url.includes("planets")) {
        return {
            image: urls.planets + id + ".jpg",
            id,
            url,
            category : "planets"
        }
    } else if (url.includes("species")) {
        return {
            image: urls.species + id + ".jpg",
            id,
            url,
            category : "species"
        }
    } else if (url.includes("starships")) {
        return {
            image: urls.starships + id + ".jpg",
            id,
            url,
            category : "starships"
        }
    } else if (url.includes("vehicles")) {
        return {
            image: urls.vehicles + id + ".jpg",
            id,
            url,
            category : "vehicles"
        }
    }
}
