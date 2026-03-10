export function createUser(userData){
     if (userData.nome === "") {
        return "O nome do usuário é obrigatório."
    } else if (userData.idade < 18) {
        throw new Error("O usuário deve ser maior de idade.")
    }
}

const newUser = {
    id:Math.floor(Math.random()),
    nome: "Rodrigo",
    idade: 20,
    isActive: true,
    roles: ['user']
}