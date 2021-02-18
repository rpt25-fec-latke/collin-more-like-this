module.exports = (relatedGames, overallReviews, relatedMetaData, price) => {
  // tags and pictures from relatedGames
  // overall from overallReviews
  // title, release from relatedMetaData
  const result = [];
  let current = 0;
  // console.log(relatedGames[current].popular_tags);
  while (current <= 6) {
    const dataObj = {
      tags: relatedGames[current].popular_tags,
      photos: relatedGames[current].video_photo_carousel.slice(0, 4),
      overall: overallReviews[current].reviewStats.overallRatingGroup.ratingGroup,
      overallCount: overallReviews[current].reviewStats.totalReviewCount,
      gameTitle: relatedMetaData[current][4][0],
      releaseDate: relatedMetaData[current][4][5],
    };
    result.push(dataObj);
    current++;
  }
  return result;
};
