import styles from "../styles/content3.module.css"


export default function servicos() {
    return (
        <div className={styles.Main}>
            <h2> Alguns de nossos servicos</h2>
            <table>
                <tr>
                    <th> smartphones </th>
                    <th> TVs</th>
                    <th> Notebooks</th>
                </tr>
                <tr>
                    <td>Troca de Tela</td>
                    <td> Troca de leds</td>
                    <td> Limpeza </td>
                </tr>
                <tr>
                    <td>troca de componentes</td>
                    <td> Reparação / Recuperação </td>
                    <td> Manuteção ou reparação do windows </td>
                  
                </tr>
                <tr>
                    <td>Limpeza geral</td>
                    <td> Troca de auto-falantes </td>
                    <td> Manutenção na placa mãe</td>
                </tr>
                <tr>
                    <td>Manutenção em placa</td>
                    <td> Limpeza</td>
                    <td> Troca de monitor</td>
                </tr>


            </table>
        </div>
    )
}