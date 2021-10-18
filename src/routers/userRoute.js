const fs = require('fs')
const { join }= require('path')

const filePath= join(__dirname, 'users.json')

const getUsers = ()=> {
    const data = fs.existsSync(filePath)
    ? fs.readFileSync(filePath)
    : []
    try {
        return JSON.parse(data)
    } catch (error) {
        return[]
    }
}
const saveUser = (users) => fs.writeFileSync(filePath, JSON.stringify(users, null,'\t'))

const userRoute = (app) => {
    app.route('/users/:id?')
        .get((req,resp)=>{
            const users = getUsers()
            resp.send({users})
            console.log('Requisição aos usuários foi feita') //backlog
        })
        .post((req,res)=>{
            const users = getUsers()
            users.push(req.body)
            saveUser(users)            
            res.status(201).send('OK') //backlog
            console.log("Um usuário foi criado")
        })
        .put((req,res)=>{
            const users = getUsers()

            saveUser(users.map(user =>{
                if (user.id === req.params.id) {
                    return {
                       ... user,
                        ...req.body,
                    }
                }
                return user
            }))

            res.status(200).send('ok')

            console.log("Usuário atualizaddo") //backlog
        })
        .delete((req,res)=>{
            const users = getUsers()

            saveUser(users.filter(user=> req.params.id))
            res.status(200).send("OK")
            console.log('Usuário deletado') //backlog
        })
}

module.exports = userRoute