import { useState } from "react";
const Clock = () => {
	let time = new Date().toLocaleTimeString();
	const [currentTime, setCurrentTime] = useState(time);
	const updatetime = () => {
		let time = new Date().toLocaleTimeString();
		setCurrentTime(time);
	}
	setInterval(updatetime, 1000);
    return(
        <div>
            <h1>{currentTime}</h1>
        </div>
    )
}

export default Clock;