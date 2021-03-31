import data from "../formulaData"
import KnowledgeData from "./KnowledgeData";

const Knowledge = () => {

    return (
        <>
            <br />
            <h1 style={{ display: "flex", justifyContent: "center", fontSize: "30px", fontFamily: "recursive" }}>Knowledge</h1>
            {data.map((ele) => { // to map in all the ratio definitions on the knowledge page
                return (
                    <KnowledgeData
                        key={ele.id}
                        id={ele.id}
                        ratio={ele.ratio}
                        description={ele.description}
                        formula={ele.formula}
                    />
                )
            })}
        </>
    )
}

export default Knowledge;