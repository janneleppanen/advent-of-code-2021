const run = () => {
  const day = parseInt(process.argv[2]) || "all";

  if (day === "all") {
    for (let d = 1; d < 26; d++) {
      try {
        import(`./day-${d}`);
      } catch (e) {}
    }
  } else {
    import(`./day-${day}`);
  }
};

run();
