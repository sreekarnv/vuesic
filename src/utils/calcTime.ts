export const calcTime = (time: string | number) => {
	let number = parseInt(`${time}`);
	let length = `${number}`.length;

	if (number < 60) {
		return `00:${length === 1 ? `0${number}` : number}`;
	} else if (number < 3600) {
		const mins = `${Math.floor(number / 60)}`;
		const sec = `${number % 60}`;

		return `${mins.length === 1 ? `0${mins}` : mins}:${
			sec.length === 1 ? `0${sec}` : sec
		}`;
	}
};
