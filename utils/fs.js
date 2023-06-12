import fs from "fs";

export function readFile(filePath) {
    if (fs.existsSync(process.cwd() + "/database/" + filePath + ".json"))
        return fs.readFileSync(
            process.cwd() + "/database/" + filePath + ".json",
            "utf-8"
        );
}

export function writeFile(filePath, data) {
    fs.writeFileSync(
        process.cwd() + "/database/" + filePath,
        JSON.stringify(data, null, 4)
    );
}