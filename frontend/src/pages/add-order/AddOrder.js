import { useState } from "react";
function AddOrder() {
    const [holder, setHolder] = useState("");
    const [code, setCode] = useState();
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [width, setWidth] = useState();
    const [depth, setDepth] = useState();
    const [shelf, setShelf] = useState();
    const [bookcase, setBookCase] = useState();
    const [status, setStatus] = useState("");

    //unit of weight
    const [unitWeight, setUnitWeight] = useState("");
    //unit of measure height
    const [unitHeight, setUnitHeight] = useState("");
    //unit of measure width
    const [unitWidth, setUnitWidth] = useState("");
    //unit of measure depth
    const [unitDepth, setUnitDepth] = useState("");

    function isName(name) {
        return isNaN(name) && name !== "";

    }

    function unitMeasurement(unit, value) {
        return unit === "m" ? value * 100 : value;
    }

    function checkCode(number) {

        if (String(number).length !== 0) {
            return number;
        } else {
            return;
        }
    }

    function registerAnOrder() {
        let nameHolder = isName(holder);
        let codOrder = checkCode(code);
        let weightInGram = unitWeight == "kg" ? weight * 1000 : weight;
        let heightInCm = unitMeasurement(unitHeight, height);
        let widthInCm = unitMeasurement(unitWidth, width);
        let depthInCm = unitMeasurement(unitDepth, depth);
        if (nameHolder && codOrder && weightInGram > 0 && heightInCm > 0 && widthInCm > 0 && depthInCm && shelf > 0 && bookcase > 0 && status) {
            const url = 'http://localhost:3001/orders/';
            fetch(url, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    name: holder,
                    cod_order: code,
                    weight: weightInGram,
                    height: heightInCm,
                    width: widthInCm,
                    depth: depthInCm,
                    shelf: shelf,
                    bookcase: bookcase,
                    status: status
                })
            }).then((res) => {
                return res
            })
            setHolder("");
            setWeight("");
            setCode("");
            setHeight("");
            setWidth("");
            setDepth("");
            setShelf("");
            setBookCase("");
            setStatus("");
        } else {
            return
        }
    }

    function keyPress(e) {
        if (e.key === "Enter") {
            registerAnOrder()
        } else {
            return
        }
    }
    return (
        <div>
            <form onSubmit={(e) => { e.preventDefault() }}>
                <div>
                    <label htmlFor="holder">Titular:</label>
                    <input type="text" id="holder" value={holder} onChange={(e) => setHolder(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="code">Código:</label>
                    <input type="number" value={code} id="code" onChange={(e) => setCode(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="weight">Peso:</label>
                    <input type="number" value={weight} id="weight" onChange={(e) => setWeight(e.target.value)} />
                    <select value={unitWeight} onChange={(e) => setUnitWeight(e.target.value)}>
                        <option value="g">G</option>
                        <option value="kg">Kg</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="height">Altura:</label>
                    <input type="number" value={height} id="height" onChange={(e) => setHeight(e.target.value)} />
                    <select value={unitHeight} onChange={(e) => setUnitHeight(e.target.value)}>
                        <option value="cm">Cm</option>
                        <option value="m">m</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="width">Largura:</label>
                    <input type="number" value={width} id="width" onChange={(e) => setWidth(e.target.value)} />
                    <select value={unitWidth} onChange={(e) => setUnitWidth(e.target.value)}>
                        <option value="cm">Cm</option>
                        <option value="m">m</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="depth">Profundidade:</label>
                    <input type="number" value={depth} id="depth" onChange={(e) => setDepth(e.target.value)} />
                    <select value={unitDepth} onChange={(e) => setUnitDepth(e.target.value)}>
                        <option value="cm">Cm</option>
                        <option value="m">m</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="status">Estado:</label>
                    <select value={status} id="status" onChange={(e) => setStatus(e.target.value)}>
                        <option value="WAITING_TO_BE_SENT">Aguardando envio</option>
                        <option value="OUT_FOR_DELIVERY">Saiu para entrega</option>
                        <option value="DELIVERED">Entregue</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="shelf">Prateleira:</label>
                    <input type="number" value={shelf} id="shelf" onChange={(e) => setShelf(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="bookCase">Estante:</label>
                    <input type="number" value={bookcase} id="bookCase" onChange={(e) => setBookCase(e.target.value)} />
                </div>
                <div>
                    <button onClick={registerAnOrder} onKeyPress={keyPress}>Cadastrar</button>
                </div>
            </form>
        </div>
    )
}

export default AddOrder;