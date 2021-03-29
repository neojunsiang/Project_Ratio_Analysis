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
            <h1>Knowledge</h1>
            <h2 className="knowledge">Formulas</h2>
            {dataInfo}
        </>
    )
}

export default Knowledge;