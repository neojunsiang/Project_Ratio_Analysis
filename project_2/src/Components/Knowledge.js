import data from "../formulaData"
import KnowledgeData from "./KnowledgeData";

const Knowledge = () => {

    console.log(data);

    const dataInfo = data.map((ele) => {
        return (
            <KnowledgeData
                key={ele.id}
                ratio={ele.ratio}
                description={ele.description}
                formula={ele.formula}
            />
        )
    })

    return (
        <>
            <br />
            <h1 style={{ display: "flex", justifyContent: "center", fontSize: "30px" }}>Knowledge</h1>
            {dataInfo}
        </>
    )
}

export default Knowledge;