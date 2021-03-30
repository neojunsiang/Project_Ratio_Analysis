import React from "react";

const KnowledgeData = (props) => {
    return (
        <>
            <dl className="knowledgedata">
                <dt style={{ marginBottom: "10px" }}><b>{props.ratio}</b></dt>
                <dd>Definition: {props.description}</dd>
                <dd>Formula: {props.formula}</dd>
                <hr />
            </dl>
        </>
    )
}

export default KnowledgeData;