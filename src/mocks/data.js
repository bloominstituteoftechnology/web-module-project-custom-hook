const { nanoid } = require("nanoid")
const moment = require("moment")

let articles;

const resetArticles = () => {
  articles = [
    {
      id: nanoid(5),
      headline: "Less than half of Seattle homes have air conditioning. After a deadly heat wave, ‘everybody’ wants it.",
      createdOn: moment().subtract(Math.random()*10, "days").format(),
      author:"",
      image: 134,
      summary: "Triple-digit temperatures led to a spike in demand across the region.",
      body: "Inside the attic of a one-story gray house in a Seattle suburb last week, Jeff Bryson gingerly strapped copper piping across the rafters while wearing a white face mask and a headlamp. The temperature was about 110 degrees in the tight space, which was covered in insulation dust. His work was meant to cool the rest of the home."   
  },
  {
      id: nanoid(5),
      headline: "Community College of Philadelphia to require vaccines, the first public college in the region to do so.",
      createdOn: moment().subtract(Math.random()*10, "days").format(),
      author: "Susan Snyder",
      image: 175,
      summary: "The requirement, which will allow exemptions for medical and religious reasons, won’t be in place for the start of the semester.",
      body: "The Pennsylvania State System of Higher Education has said its 14 public universities, including West Chester and Cheyney, don’t have the authority to require a vaccine and would need legislation. Neither Pennsylvania State University nor Temple University, which are state-related, have required the vaccines either."
  },
  {
      headline: "A tropical depression could form in the next few days, forecasters say",
      id: nanoid(5),
      createdOn: moment().subtract(Math.random()*10, "days").format(),
      author: "Alex Harris",
      image: 171,
      summary: "Forecasters said the system will likely turn into a tropical depression late this weekend or early next week as it moves west-northwest.",
      body: "Forecasters continue to monitor a disturbance in the far eastern Atlantic that has a high chance of turning into a tropical depression in the next few days. They’re also watching another system that’s quickly moving across the Atlantic, though its formation chances remain fairly low."
  },
  {
      id: nanoid(5),
      createdOn: moment().subtract(Math.random()*10, "days").format(),
      author: "Jordan Mcpherson",
      image: 338,
      headline: "How Hialeah’s Ariel Torres won a bronze metal",
      summary: "South Florida found its way to the podium in karate’s first-ever showing in the Olympics.",
      body: "Torres, who entered the Olympics ranked No. 6 in the world and as the top male Team USA Olympian in kata, reached his bronze medal bout by finishing second in his pool in each of the first three rounds behind eventual silver medalist Damian Quintero of Spain. Torres outscored Venezuela’s Antonio Jose Diaz Fernandez 26.72-26.34 for the bronze. Japan’s Ryo Kiyuna won gold, while Turkey’s Ali Sofuoglu beat South Korea’s Heejun Park for the second bronze of the event."
  }]
}

resetArticles()

const getAll = () => {
  return articles
}

const getById = id => {
  return articles.find(article => article.id === id)
}

const create = item => {
  articles.push({ id: nanoid(5), createdAt:moment().format(), ...item })
  return articles
}

const edit = (id, item) => {
  articles = articles.map(article => {
    return (article.id === id) ? {...article, ...item} : article
  });

  return articles
}

const remove = id => {
  articles = articles.filter(article => {
    return article.id !== id
  })
  return articles
}

module.exports = {
  getAll,
  getById,
  create,
  edit,
  remove,
  resetArticles // only tests use this
}
