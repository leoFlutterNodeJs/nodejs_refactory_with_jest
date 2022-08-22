// @ts-nocheck
// calculate ride
export function calculateRide(segments) {
	let result = 0;
	for (const segment of segments) {
		if (segment.distance != null && segment.distance != undefined && typeof segment.distance === "number" && segment.distance > 0) {
			if (segment.date != null && segment.date != undefined && segment.date instanceof Date && segment.date.toString() !== "Invalid Date") {

				// overnight

				if (segment.date.getHours() >= 22 || segment.date.getHours() <= 6) {

					// not sunday
					if (segment.date.getDay() !== 0) {

						result += segment.distance * 3.90;
						// sunday
					} else {
						result += segment.distance * 5;

					}
				} else {
					// sunday
					if (segment.date.getDay() === 0) {

						result += segment.distance * 2.9;

					} else {
						result += segment.distance * 2.10;

					}
				}
			} else {
				// console.log(d);
				return -2;
			}
		} else {
			// console.log(distance);

			return -1;
		}

	}
	if (result < 10) {
		return 10;
	} else {
		return result;
	}
}
