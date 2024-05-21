// Файл controllers/games.js

const sendAllGames = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    // Вернём найденные игры в формате JSON
    res.end(JSON.stringify(req.gamesArray));
    console.log(sendAllGames)
  };
  const sendGameCreated = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.game));
  };
  
  const sendGameById = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.game));

  };
  // Файл controllers/games.js

  const sendGameUpdated = (req, res) => {
    try{
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify({ message: "Игра обновлена" }));}
    catch (error){
      console.log(`--${error}--`);
    }
    
  };
// Файл controllers/games.js

const sendGameDeleted = (req, res) => {
  // Объект игры отправляем в формате JSON 
res.setHeader("Content-Type", "application/json");
// Отправляем на клиент найденный и удалённый элемент из базы данных
res.end(JSON.stringify(req.game));
};
  
  module.exports = {sendAllGames,sendGameCreated,sendGameById, sendGameUpdated,sendGameDeleted};