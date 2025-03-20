const fs = require("fs");

function compileUxCode(inputFile, outputFile) {
    let uxCode = fs.readFileSync(inputFile, "utf8");

    // Convert Ux-code syntax to HTML
    uxCode = uxCode.replace(/\[doc ux\]/g, "<!DOCTYPE html>");
    uxCode = uxCode.replace(/\[ux-code\]/g, "<html>");
    uxCode = uxCode.replace(/\[ux-code\/\]/g, "</html>");
    uxCode = uxCode.replace(/\[hdx\]/g, "<head>");
    uxCode = uxCode.replace(/\[hdx\/\]/g, "</head>");
    uxCode = uxCode.replace(/\[bdx\]/g, "<body>");
    uxCode = uxCode.replace(/\[bx\/\]/g, "</body>");

    // Save the converted HTML
    fs.writeFileSync(outputFile, uxCode);
    console.log(`Compilation complete: ${outputFile}`);
}

// Run the compiler if executed from the command line
if (process.argv.length >= 3) {
    const inputFile = process.argv[2];
    const outputFile = "output.html";
    compileUxCode(inputFile, outputFile);
}
