module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "images": "images" });
  eleventyConfig.addPassthroughCopy({ "admin": "admin" });

  eleventyConfig.addCollection("projects", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/projects/*.md");
  });

  eleventyConfig.addCollection("projects_ro", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/projects/*.ro.md");
  });

  eleventyConfig.addCollection("projects_en", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/projects/*.en.md");
  });

  eleventyConfig.addCollection("blog_ro", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/blog/*.ro.md");
  });

  eleventyConfig.addCollection("blog_en", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/blog/*.en.md");
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
