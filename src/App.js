import React from "react";
import {SkillProvider, SkillTreeGroup, SkillTree} from "beautiful-skill-tree";
import {frontEnd, backEnd, database} from "./data/data";
import theme from "./data/theme";

// require all .jpg files in the bg folder
const imgContext = require.context("./bg", false, /\.jpg$/);
const imgFiles = imgContext.keys().map(imgContext);

function SkillTreeAbstract(props) {
    return <div>
        <h2 style={{
            marginBottom: "-2.5em",
            textAlign: "center",
            color: "orange",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
        }}>{props.title}</h2>

        <SkillTree title="" treeId={props.treeId} data={props.data}/>
    </div>;
}

function App() {
    // set a random background image from imgFiles array
    const randomBg = imgFiles[Math.floor(Math.random() * imgFiles.length)];
    const appStyles = {
        minHeight: "100vh",
        backgroundImage: `url(${randomBg})`,
        backgroundSize: "cover"
        /* add any additional styles you want */
    };
    const textColor = {
        color: "orange",
    };

    return (
        <div className="App" style={appStyles}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                }}
            >
                <div style={{width: "500px", height: "150px"}}>
                    <h1
                        style={{
                            fontSize: "2.5rem",
                            fontWeight: "bold",
                            textAlign: "center",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundImage: `linear-gradient(to right, #FF8C00, #FFA500, #FFD700)`,
                            textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                        }}
                    >
                        Full Stack Developer Skills Tree
                    </h1>
                </div>
            </div>
            <SkillProvider>
                <SkillTreeGroup theme={theme}>
                    {() => {
                        return (
                            <React.Fragment>
                                <SkillTreeAbstract title="FrontEnd" treeId="frontend" data={frontEnd} />
                                <SkillTreeAbstract title="BackEnd" treeId="backend" data={backEnd} />
                                <SkillTreeAbstract title="Database" treeId="database" data={database} />
                            </React.Fragment>
                        );
                    }}
                </SkillTreeGroup>
            </SkillProvider>
        </div>
    );
}

export default App;
