

for (let i = 0; i < 20; i++) {
    let firstDiv = document.createElement("h1")
    firstDiv.textContent = "I was created in JavaScript"
    document.body.appendChild(firstDiv)

    // document.body.removeChild(firstDiv)

    let span = document.createElement("span")
    span.textContent = "same here, but I was created by JS and I am a span "
    document.body.insertBefore(span,firstDiv)
}