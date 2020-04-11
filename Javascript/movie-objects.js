var movieDB = [
  {
    title: "Bahubali",
    rating: 9,
    hasWatched: true
  },
  {
    title: "Fast and Furious",
    rating: 8,
    hasWatched: true
  },
  {
    title: "Avangers",
    rating: 9,
    hasWatched: false
  },
  {
    title: "Sherlock Holmes",
    rating: 8,
    hasWatched: false
  }
]

movieDB.forEach(function(obj){
  if(obj.hasWatched){
    console.log("You have watched \"" + obj.title + "\" - " + obj.rating + " rating")
  }
  else {
    console.log("You have not seen \"" + obj.title + "\" - " + obj.rating + " rating")
  }
})
