import { parseCardData } from "./parser";
import { mapCardData } from "./mapper";
import { writeFiles } from "./writer";

const file = `${__dirname}/card.tsv`;
const outputDirectory = "data";

const parsedCards = parseCardData(file);
const cards = mapCardData(parsedCards);

writeFiles(cards, outputDirectory);
