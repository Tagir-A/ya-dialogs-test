const { Alice, Reply } = require('yandex-dialogs-sdk');
const alice = new Alice();

alice.command('say my name', ctx => {
  return Reply.text('mr white'); // you're goddamn right
});

alice.any(ctx => Reply.text('Я вас не поняла'));

// Запуск асинхронного сервиса.
module.exports = async (req, res) => {
  // Обработчики пойдут наверх искать подходящую команду
  // И составлять ответ на её основе.
  console.log('body', req.body)
  try {
  const aliceReply = await alice.handleRequest(req.body);
  console.log('reply')
  res.send(aliceReply) 

  } catch (e) {
    console.log('error')
    res.send(e)
  }
};