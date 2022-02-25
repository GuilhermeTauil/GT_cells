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
                    <th>Home-teaters</th>
                </tr>
                <tr>
                    <td>Troca de Tela</td>
                    <td> Troca de leds</td>
                    <td> Limpeza </td>
                    <td> Troca de auto-falantes</td>
                </tr>
                <tr>
                    <td>troca de componentes</td>
                    <td> Reparação / Recuperação </td>
                    <td> Manuteção ou reparação do windows </td>
                    <td> Reparação de fonte ou troca </td>
                </tr>
                <tr>
                    <td>Limpeza geral</td>
                    <td> Troca de auto-falantes </td>
                    <td> Manutenção na placa mãe</td>
                    <td> Limpeza</td>
                </tr>
                <tr>
                    <td>Manutenção em placa</td>
                    <td> Limpeza</td>
                    <td> Troca de monitor</td>
                    <td> Reparação de placa com defeito</td>
                </tr>


            </table>
        </div>
    )
}