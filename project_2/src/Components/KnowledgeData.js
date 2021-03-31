import React from "react";

const KnowledgeData = (props) => { // rendering the knowledgedata with certain structure
    return (
        <>
            <dl className="knowledgedata" >
                <dt style={{ marginBottom: "10px" }} id={props.id} ><b>{props.ratio}</b></dt>
                <dd>Definition: {props.description}</dd>
                <dd>Formula: {props.formula}</dd>
                <hr />
            </dl>
        </>
    )
}

export default KnowledgeData;