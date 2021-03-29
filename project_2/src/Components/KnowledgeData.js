import React from "react";

const KnowledgeData = (props) => {
    return (
        <>
            <div className="knowledgedata" >
                <div id="ratios">
                    <h3>{props.ratio}</h3>
                    <p>{props.description}</p>
                </div>
                <div id="ratio_formula" >
                    <h3>{props.formula}</h3>
                </div>
                <hr />
            </div>
        </>
    )
}

export default KnowledgeData;