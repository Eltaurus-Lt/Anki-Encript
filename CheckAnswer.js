async function sha256(text) {
	const encoder = new TextEncoder();
	const data = encoder.encode(text);
	const hashBuffer = await crypto.subtle.digest('SHA-256', data);
	const hashArray = Array.from(new Uint8Array(hashBuffer));
	return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

typeAnsL = document.getElementById("typeans");
typedLs = typeAnsL.querySelectorAll("span:is(.typeGood,.typeBad):not(br ~ span)");
correctLs = typeAnsL.querySelectorAll("span:is(br ~ br ~ span)");

typedAns = [...typedLs].map(L => L.innerText).join('');
correctHash = [...correctLs].map(L => L.innerText).join('');

sha256(typedAns).then((typedHash) => {
	const cardL = document.querySelector(".card");
	if (typedHash === correctHash) {
		cardL.classList.add('correct');
		typeAnsL.innerHTML = `✅`; \\${typedAns}
	} else {
		cardL.classList.add('wrong');
		typeAnsL.innerHTML = `❌`; \\${typedAns}

	}
});