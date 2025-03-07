// Next.js will process this at build time
// This creates a list of all files in the names directory
const namesContext = require.context('./names', false, /\.txt$/);

// Extract the filenames without extensions
const names: string[] = namesContext.keys().map(key => {
  // Remove the './' prefix and '.txt' suffix
  return key.slice(2, -4);
});

export default names;