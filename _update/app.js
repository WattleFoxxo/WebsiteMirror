const { exec } = require('node:child_process')

exec('./update.sh', (err, output) => {
    if (err) {
        console.error("could not execute command: ", err)
        return
    }
    console.log("Output: \n", output)
})