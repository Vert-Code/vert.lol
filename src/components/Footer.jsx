import React from "react";

function Footer() {
	return (
		<>
		<footer class="mx-auto mt-20 max-w-3xl border-t-2 border-gray-900/10 p-4 py-10 text-white opacity-50 dark:border-white/10">
        <h1 class="text-3xl font-bold text-white">Vert</h1>
        <p>All Rights Reserved  • {new Date().getFullYear()}</p>
        </footer>
	</>
	);
}

export default Footer;