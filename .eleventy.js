module.exports = function(eleventyConfig) {

    eleventyConfig.addCollection("pages", function(collectionApi) {
        return collectionApi.getFilteredByGlob("pages/*.md");
    });

    eleventyConfig.addCollection("posts", function(collectionApi) {
        return collectionApi.getFilteredByGlob("posts/*.md");
    });

    return {
        dir: {
            output: "public"
        }
    }
};