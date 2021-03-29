import React from "react";

const KnowledgeData = (props) => {
    return (
        <>
            <div className="knowledgedata" >
                <div id="ratios">
                    <p><b>{props.ratio}</b></p>
                    <p>Definition: {props.description}</p>
                    <p><b>Formula: {props.formula}</b></p>
                    <hr />
                </div>
            </div>
        </>
    )
}

export default KnowledgeData;