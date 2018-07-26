const cache = {}

export function publish(topic, data) {
	cache[topic].forEach(fn => {
		fn(data)
	})
}

export function subscribe(topic, fn) {
	cache.hasOwnProperty(topic) ? cache[topic].push(fn) : cache[topic] = [fn]
}