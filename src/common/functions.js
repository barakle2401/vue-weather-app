function capitalEveryFirstLetter(str) {

    if (!str) return
    let spart = str.split(" ");
    for (let i = 0; i < spart.length; i++) {
        let j = spart[i].charAt(0).toUpperCase();
        spart[i] = j + spart[i].substr(1);
    }


    return spart.join(" ")
}

export { capitalEveryFirstLetter }