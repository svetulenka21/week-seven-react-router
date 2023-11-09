function ButtonsDiy ({resultButtonsDiy}) {
    return(
        <div className="cont">
            <button className="change" onClick={() => resultButtonsDiy("glue")}>Glue</button>
            <button className="change" onClick={() => resultButtonsDiy("hairpin")}>Hair Clips</button>
            <button className="change" onClick={() => resultButtonsDiy("keychain")}>Keychain</button>
            <button className="change" onClick={() => resultButtonsDiy("wire")}>Wire/Rope</button>
            <button className="change" onClick={() => resultButtonsDiy("figurine")}>Figurines</button>
        </div>
    )
}
export default ButtonsDiy;