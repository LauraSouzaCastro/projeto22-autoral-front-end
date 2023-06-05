'use client';

import { Form, InputColor } from "./styles";

export default ({ type, clickTransaction }) => {
    return (
        <Form click={clickTransaction}>
            <input required type="number" min="0.01" step="0.01" placeholder="Valor" />
            <input required type="text" placeholder="Nome da categoria" list="categorias" />
            <datalist id="categorias">
                <option value="Entradas">Entradas</option>
                <option value="Casa">Casa</option>
                <option value="Comida">Comida</option>
            </datalist>
            <label>
                <span>Cor da categoria: </span>
                <InputColor required type="color" />
            </label>
            <label>
                <span>Data da transação: </span>
                <input required type="date" />
            </label>
            <label>
                <span>Transação feita: </span>
                <input type="checkbox" />
            </label>

            <button type="submit">Registrar</button>
        </Form>
    );
}