myTask = () => {
    let details = {
        name: "Emediong Ini",
        hng_id: "HNG-01606",
        preferredLanguage: "Javascript",
        email: "emediongini@gmail.com",
    }
    let myOutput = `Hello World, this is ${details.name} with HNGi7 ID ${details.hng_id} and email ${details.email} using ${details.preferredLanguage} for stage 2 task.`
    console.log(myOutput)
}
myTask()