€cmd install ok.js module.exports = {
	config: {
			name: "ok",
			version: "1.0",
			author: "messe OSANGO",
			countDown: 5,
			role: 0,
			shortDescription: "sarcasm",
			longDescription: "sarcasm",
			category: "reply",
	},
onStart: async function(){}, 
onChat: async function({
	event,
	message,
	getLang
}) {
	if (event.body && event.body.toLowerCase() == "ok") return message.reply("●▬▬▬▬๑۩𝙀𝘾𝙍𝙄𝙎 €𝙂𝙊𝙅𝙊 𝑃𝑂𝑈𝑅 𝑅𝐸𝐽𝑂𝐼𝑁𝐷𝑅𝐸 𝑀𝑂𝑁 𝐺𝑅𝑂𝑈𝑃𝐸۩๑▬▬▬▬▬●");
}
};
