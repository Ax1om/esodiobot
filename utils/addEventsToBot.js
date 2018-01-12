module.exports = (bot, commands) => {
  commands.forEach(command => {
    command(bot);
  });
};