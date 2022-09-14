function getNow() {
    return Date.now() / 1000
}

async function z() {
    new Promise((resolve, reject) => {
        let lastdid = getNow()
        while (true) {
            if (getNow() - lastdid > 2) {
                console.log("hello")
                lastdid = getNow()
            }
        }
        resolve(true)
    })
}

z();

console.log('xexx')