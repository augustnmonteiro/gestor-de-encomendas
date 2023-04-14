import React, {useState} from "react"
function Form() {
    const [status] = useState("2");
    return (
        <div>
            <h1>Página de cadastro</h1>
            <form>
                <div>
                    Titular:
                    <input type="text"/>
                </div>
                <section>
                    <div>
                        Code:
                        <input type="number"/>
                    </div>
                    <div>
                        Peso:
                        <input type="number"/>
                    </div>
                    <div>
                        Altura:
                        <input type="number"/>
                    </div>
                    <div>
                        Profundidade:
                        <input type="number"/>
                    </div>
                    <div>
                        Estante:
                        <input type="number"/>
                    </div>
                    <div>
                        Prateleira:
                        <input type="number"/>
                    </div>
                    <div>
                        <label>Status:</label>
                        <select name="status" value={status}>
                            <option value="">Selecione o status</option>
                            <option value="1">Aguardando</option>
                            <option value="2">Saiu do armazém</option>
                            <option value="3">A caminho</option>
                        </select><br/>
                        <button type="submit">Adcionar encomenda</button>
                    </div>
                </section>
            </form>
        </div>
    )
}

export default Form;