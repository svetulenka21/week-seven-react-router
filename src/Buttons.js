function Buttons({resultButtons}) {
    return(
        <div className="cont">
            <button className="change" onClick={() => resultButtons("bead")}>Beads</button>
            <button className="change" onClick={() => resultButtons("charm")}>Charms</button>
            <button className="change" onClick={() => resultButtons("figurine")}>Figurines</button>
            <button className="change" onClick={() => resultButtons("chain")}>Chain Pendant</button>
            <button className="change" onClick={() => resultButtons("bracelet")}>Bracelets</button>
        </div>
    )
}
export default Buttons;