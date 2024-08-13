const fs = require('fs');

const extractSummary = (jsonFilePath) => {
  const data = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));
  
  // Extract test summary; modify this according to your JSON structure
  let summary = "# Test Summary\n";
  data.tests.forEach(test => {
    summary += `- **${test.name}**: ${test.status} (${test.duration}ms)\n`;
  });

  return summary;
};

const writeSummaryToFile = (summary, outputFilePath) => {
  fs.writeFileSync(outputFilePath, summary, 'utf-8');
};

const main = () => {
  const summary = extractSummary('test-results.json');  // Path to your JSON file
  writeSummaryToFile(summary, 'SUMMARY.md');
};

main();