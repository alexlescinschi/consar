module.exports = {
  layout: "project.njk",
  eleventyComputed: {
    permalink: (data) => data.permalink || `/proiecte/${data.page.fileSlug}/`
  }
};
