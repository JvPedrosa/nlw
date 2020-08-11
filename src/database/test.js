const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async(db) => {
    // Inserir dados
    proffyValue = {
        name: "João Victor Pedrosa",
        avatar: "https://avatars0.githubusercontent.com/u/60883241?s=460&u=8e164ae4dcb9bd36d76c948601174ebb0a4f90a9&v=4",
        whatsapp: "83991339399",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    }

    classValue = {
        subject: "Química",
        cost: "20"
        // o proffy id virá pelo banco de dados 
    }
    
    classScheduleValues = [
        //class_id virpa pelo banco de dados, após cadastrarmos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        },
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consultar os dados inseridos

    // todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    console.log(selectedProffys)
})