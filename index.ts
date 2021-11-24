const day = parseInt(process.argv[2]) || "all";

if (day === "all") {
  for (let d = 1; d < 26; d++) {
    try {
      require(`./day-${d}`);
    } catch (e) {}
  }
} else {
  try {
    require(`./day-${day}`);
  } catch (e) {
    console.log(`Solution not found for day ${day}`);
  }
}
