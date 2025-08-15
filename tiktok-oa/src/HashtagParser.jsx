import React from "react";
/**
 * Task:
 * Write a function extractHashtags(text) that takes a string
 * and returns an array of unique hashtags (words starting with #).
 * Hashtags are case-insensitive and returned in lowercase.
 */

const HashtagParser = (str) => {
	let tokens = str.split(" ");
	let tags = [];
	tokens.map((t) => {
		if (t[0] === "#" && !tags.includes(t)) {
			tags.push(t.toLowerCase());
		}
		return null;
	});
	return tags;
};

export default HashtagParser;
