const targetWords = [
    "framed", "roster", "doctor", "dollar", "dolphin", "domain", "donkey", "lumber", "length", "insert", "hybrid", "lively", "idolize", "hollow", "jester", "lament", "laughed", 
    "itself", "laundry", "infant", "knives","mallet", "joined", "linear", "mascot", "kicked", "lastly", "lately", "litmus", "lovely", 
     "leaves", "legend", "lumber", "karate", "layoff", "luring", "leaked", "libido", "jungle", "liquor", "lucked", 
    "lovely", "linked", "jigsaw", "jester", "leaped", "loiter", "luster"]

const dictionary = ["banana", "coffee", "purple", "pickle", "rocket", "pencil", "police", "orange", "saddle", "singer", "sunset", "syrupy", 
"pepper", "pillow", "sleeve", "summer", "safari", "sweaty", "tulips", "turkey", "turtle", "tissue", "tongue", "travel", "triple", "treaty", 
"vision", "voyage", "waffle", "wallet", "warmth", "warmer", "washer", "weight", "window", "winter", "wizard", "yellow", "yogurt", "zebra", 
"ballet", "beauty", "bottle", "bunker", "button", "butter", "cactus", "camera", "candle", "canvas", "carnal", "carpet", "castle", "catnip", 
"change", "cherry", "chisel", "church", "circle", "citrus", "cookie", "copper", "corral", "cradle", "crater", "crayon", "cruise", "crunch", 
"curfew", "dancer", "danger", "daring", "darted", "deluxe", "dentist", "desert", "detect", "device", "diesel", "dimple", "disarm", "disown", 
"doctor", "dollar", "dolphin", "domain", "donkey", "dragon", "drawer", "dreamy", "drinks", "driver", "drizzle", "drupal", "duster", "eclair",
 "eldest", "eleven", "emblem", "empire", "energy", "enigma", "enrich", "estate", "eternal", "eureka", "evenly", "excite", "exotic", "expert", 
 "export", "facade", "factor", "falcon", "family", "famous", "farmer", "feline", "fender", "fierce", "figure", "filter", "finger", "finish", 
 "firing", "flames", "flavor", "floral", "flower", "fluent", "flying", "foliage", "forest", "formal", "fortune", "framed", "frozen", "fumble", 
 "gadget", "galaxy", "garden", "garlic", "garter", "gather", "gazelle", "gemini", "gender", "genera", "genius", "gentle", "geyser", "ghosts", 
 "giraff", "glance", "glazed", "gloomy", "gloria", "gloves", "gluten", "golden", "gossip", "govern", "grader", "grains", "grammar", "granny", 
 "gravel", "guitar", "gumdrop", "gymnast", "hacker", "hailstorm", "haircut", "halogen", "hamburg", "handbag", "handyman", "happily", "harmony",
  "harvest", "hatchet", "hawkish", "haywire", "heading", "healthy", "hearing", "heavily", "helpful", "heretic", "hexagon", "highest", "hijinks",
   "himself", "history","hockey", "holiday", "hollow", "honest", "honour", "horror", "hostel", "hotdog", "housed", "hunter", "hurdle", "husband", 
   "hybrid", "icebox", "icicle", "iconic", "ideals", "idolize", "ignite", "illegal", "impose", "impute", "incest", "inches", "income", "indigo",
    "infant", "infect", "injury", "injure", "inmate", "insect", "insert", "insist", "insult", "intend", "intest", "intone", "invest", "invite", 
    "invoke", "island", "itself", "jacket", "jagged", "jammed", "jarful", "jargon", "jazzed", "jerked", "jester", "jigsaw", "jingle", "jockey", 
    "joined", "joking", "jolted", "jostle", "jotted", "journal", "journey", "jovial", "juggle", "jumble", "jumped", "junior", "justly", "karate",
     "keeper", "kernel", "keypad", "kicked", "kidney", "killed", "killer", "kinder", "kindle", "kingly", "kitten", "knifed", "knives", "knotty", 
     "koalas", "labelled", "labeled", "laborer", "labour", "ladder", "lagoon", "lambda", "lament", "lampoon", "lapsed", "laptop", "larvae", "lastly", 
     "lately", "latent", "latino", "lauded", "laughed", "laundry", "laurel", "lawful", "lawyer", "layman", "layoff", "leader", "leaded", "leaflet",
     "leaked", "leaned", "leaped", "leaser", "leaves", "lectin", "legend", "lender", "length", "lesser", "letter", "levity", "liable", "libido",
      "library", "licence", "license", "lichen", "lifted", "lighter", "likely", "limber", "limpet", "linear", "linger", "linked", "liquid", "liquor", 
      "listed", "listen", "litmus", "litter", "little", "lively", "livest", "loader", "loaned", "locust", "loiter", "lonely", "looked", "looted", 
      "lovely", "lowfat", "lucked", "lulled", "lumber", "luring", "lustre", "luster", "luxury", "lyrics", "macron", "madman", "madness", "magazine",
       "magenta", "magnify", "mailbox", "maiden", "maintain", "majesty", "majority", "makeup", "malice", "mallet", "manege", "manger", "maniac", 
       "mankind", "manure", "mapped", "marble", "marching", "margarine", "marmite", "marmots", "marquee", "married", "martyr", "mascot", "masquer", 
       "massed", "masses", "mastiff", "mastery", "matched"]


const WORD_LENGTH = 6
const FLIP_ANIMATION_DURATION = 500;
const DANCE_ANIMATION_DURATION = 500;
const keyboard = document.querySelector("[data-keyboard]")
const alertContainer = document.querySelector("[data-alert-container]")
const guessGrid = document.querySelector("[data-guess-grid]")
const limit = 40;
const randomNumber = Math.floor(Math.random() * (limit + 1));
const targetWord = targetWords[randomNumber]




startInteraction()

function startInteraction() {
    document.addEventListener("click", handleMouseClick)
    document.addEventListener("keydown", handleKeyPress)
}

function stopInteraction() {
    document.removeEventListener("click", handleMouseClick)
    document.removeEventListener("keydown", handleKeyPress)
}

function handleMouseClick(e) {
    if(e.target.matches("[data-key]")) {
        pressKey(e.target.dataset.key)
        return
    }
    if(e.target.matches("[data-enter]")) {
        submitGuess()
        return
    }
    if(e.target.matches("[data-delete")) {
        deleteKey()
        return
    }
}

function handleKeyPress(e) {
    if(e.key === "Enter") {
        submitGuess()
        return
    }
    if(e.key === "Backspace" || e.key === "Delete") {
        deleteKey()
        return
    }
    if(e.key!="Enter" && e.key != "Backspace" || e.key != "Delete" ){
        pressKey(e.key)
        return
    }
}

function pressKey(key) {
    const activeTiles = getActiveTiles()
    if (activeTiles.length >= WORD_LENGTH) return
    const nextTile = guessGrid.querySelector(":not([data-letter])")
    nextTile.dataset.letter = key.toLowerCase()
    nextTile.textContent = key
    nextTile.dataset.state = "active"
}

function deleteKey() {
    const activeTiles = getActiveTiles()
    const lastTile = activeTiles[activeTiles.length - 1]
    if (lastTile == null) return
    lastTile.textContent = ""
    delete lastTile.dataset.state
    delete lastTile.dataset.letter
}

function submitGuess() {
    const activeTiles = [...getActiveTiles()]
    if (activeTiles.length !== WORD_LENGTH) {
        showAlert("Not enough letters")
        shakeTiles(activeTiles)
        return
    }
    const guess = activeTiles.reduce((word, tile) => {
        return word + tile.dataset.letter
    }, "")

    if (!dictionary.includes(guess)) {
        showAlert("Not in word list")
        shakeTiles(activeTiles)
        return
    }

    stopInteraction()
    activeTiles.forEach((...params) => flipTile(...params, guess))
}

function flipTile(tile, index, array, guess) {
    const letter = tile.dataset.letter
    const key = keyboard.querySelector(`[data-key="${letter}"i]`)
    setTimeout(() => {
        tile.classList.add("flip")
    }, (index * FLIP_ANIMATION_DURATION) / 2);

    tile.addEventListener("transitionend", () => {
        tile.classList.remove("flip")
        console.log(targetWord[index])
        if (targetWord[index] === letter) {
            tile.dataset.state = "correct"
            key.classList.add("correct")
        } else if (targetWord.includes(letter)) {
            tile.dataset.state = "wrong-location"
            key.classList.add("wrong-location")
        } else {
            tile.dataset.state = "wrong"
            key.classList.add("wrong")
        }

        if(index === array.length - 1) {
            tile.addEventListener("transitionend", () => {
                startInteraction()
                checkWinLose(guess, array)
            }, { once: true })
        }
    }, { once: true })
}

function getActiveTiles() {
    return guessGrid.querySelectorAll('[data-state="active"]')
}

function showAlert(message, duration = 1000) {
    const alert = document.createElement("div")
    alert.textContent = message
    alert.classList.add("alert")
    alertContainer.prepend(alert)
    if (duration == null) return

    setTimeout(() => {
        alert.classList.add("hide")
        alert.addEventListener("transitionend", ()=> {
            alert.remove()
        })
    }, duration);
}

function shakeTiles(tiles) {
    tiles.forEach(tile => {
        tile.classList.add("shake")
        tile.addEventListener("animationend", () => {
            tile.classList.remove("shake")
        }, { once: true })
    });
}

function checkWinLose(guess, tiles) {
    if (guess === targetWord) {
        showAlert("You Win", 500)
        danceTiles(tiles)
        stopInteraction()
        return
    }

    const remainingTiles = guessGrid.querySelectorAll(":not([data-letter])")
    if (remainingTiles.length === 0) {
        showAlert(targetWord.toUpperCase(), null)
        stopInteraction()
    }
}

function danceTiles(tiles) {
    tiles.forEach((tile, index) => {
        setTimeout(() => {
            tile.classList.add("dance")
            tile.addEventListener("animationend", () => {
                tile.classList.remove("dance")
        }, { once: true })
        }, (index * DANCE_ANIMATION_DURATION) / 6);
    })
}