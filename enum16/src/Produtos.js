export default function Produtos(props) {
    let produto = props.produto;
    return (
        <div>
            <h1>Produto: {produto}</h1>
            <p>A nossa carta de {produto}</p>
        </div>
    )
}   