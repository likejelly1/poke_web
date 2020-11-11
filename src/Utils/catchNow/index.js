
const catchNow = () => {
    let probabilities = Math.random() <= 0.5
    if (probabilities) {
        alert("pokemon catched")  
    } else {
        alert("pokemon failed to catch, try again!")
    }
}

export default catchNow
