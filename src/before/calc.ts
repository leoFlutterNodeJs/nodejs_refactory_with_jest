// @ts-nocheck
// calculate ride
export function calculateRide(segments) {
	let result = 0;
	for (const segment of segments) {
		if (segment.distance != null && segment.distance != undefined && typeof segment.distance === "number" && segment.distance > 0) {
			if (segment.ds != null && segment.ds != undefined && segment.ds instanceof Date && segment.ds.toString() !== "Invalid Date") {

				// overnight

				if (segment.ds.getHours() >= 22 || segment.ds.getHours() <= 6) {

					// not sunday
					if (segment.ds.getDay() !== 0) {

						result += segment.distance * 3.90;
						// sunday
					} else {
						result += segment.distance * 5;

					}
				} else {
					// sunday
					if (segment.ds.getDay() === 0) {

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
