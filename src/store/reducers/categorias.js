import { createSlice } from "@reduxjs/toolkit";
import automotivoThumb from 'assets/categorias/thumbnail/automotivo.png';
import eletronicosThumb from 'assets/categorias/thumbnail/eletronicos.png';
import escritorioThumb from 'assets/categorias/thumbnail/escritorio.png';
import jogosThumb from 'assets/categorias/thumbnail/jogos.png'; 
import somThumb from 'assets/categorias/thumbnail/som.png';
import automotivoHeader from 'assets/categorias/header/automotivo.png';
import eletronicosHeader from 'assets/categorias/header/eletronicos.png';
import escritorioHeader from 'assets/categorias/header/escritorio.png';
import jogosHeader from 'assets/categorias/header/escritorio.png';
import somHeader from 'assets/categorias/header/som.png';

const estadoInicial = [{
    nome: 'eletrônicos',
    thumbnail: eletronicosThumb,
    header: eletronicosHeader,
    id:'eletronicos',
    descricao: 'Os melhores e mais atuais dispositivos'
}, 
{
    nome: 'automotivo',
    thumbnail: automotivoThumb,
    header: automotivoHeader,
    id:'automotivos',
    descricao: 'Encontre aqui equipamentos para deixar seu carro com a sua cara.'
},
{
    nome: 'jogos',
    thumbnail: jogosThumb,
    header: jogosHeader,
    id:'jogos',
    descricao: 'Aquira os Consoles e jogos mais atuais de mercado'
},
{
    nome: 'escritorio',
    thumbnail: escritorioThumb,
    header: escritorioHeader,
    id:'escritorio',
    descricao: 'Tudo para o seu escritório ficar incrível!!!'
},
{
    nome: 'som e imagem',
    thumbnail: somThumb,
    header: somHeader,
    id:'som',
    descricao: 'O melhor som de todos os tempos'
}
];

const categoriasSlice = createSlice({
    name: 'categorias',
    initialState: estadoInicial,            //estadoinicial é o array das categorias. 
});

export default categoriasSlice.reducer;   //preciso passar o estado, pois na store eu to pegando categorias
// de uma slice...