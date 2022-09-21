
const pokeApi = async (nome) => {
    const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
    const data = await request.json()
    console.log(data)
}
